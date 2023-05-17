const OrderDTO = require("../dto/order.dto");
const { User, Article, Store } = require("../models");
const db = require("../models");


// TODO : confirmer la commande + paiement + email de confirmation

const orderService = {
    getAll : async () => {
        const { rows, count } = await db.Order.findAndCountAll({
            distinct : true,
            include : [ User, {
                model : Article,
                through : { attributes : [ 'quantity', 'store' ] },
                include : [ Store ]
            }]
        })

        return {
            orders : rows.map(order => new OrderDTO(order)),
            count
        }
    },

    getById : async (id) => {
        const order = await db.Order.findByPk(id, { 
            include : [ User, {
                model : Article,
                through : { attributes : [ 'quantity', 'store' ] },
                include : [ Store ]
            }]
        });
        console.log(order);
        
        return order ? new OrderDTO(order) : null;
    },

    getByUser : async (userId) => {
        const { rows, count } = await db.Order.findAndCountAll({
            where : {
                UserId: userId
            },
            include : [{
                model : Article,
                through : { attributes : [ 'quantity', 'store' ] },
                include : [ Store ]
            }]
        })

        return {
            orders : rows.map(order => order),
            count
        }
    },

    create : async (orderToAdd) => {

        const transaction = await db.sequelize.transaction();

        try {
            const order = await db.Order.create(orderToAdd);
    
            for (const article of orderToAdd.articles) {
                await order.addArticles(article.id, {
                    through : { 
                        quantity: article.quantity,
                        sending_status : article.sending_status,
                        store: article.store
                    }
                }, transaction)    
            }

            await transaction.commit();

            const addedOrder = await db.Order.findByPk(order.id, {
                include : [ User, Article ]
            })

            return addedOrder ? new OrderDTO(addedOrder) : null;

 
        }
        catch(err) {
            console.log(err);
            await transaction.rollback();
            return null;
        }
    },

    update : async (id, orderToUpdate) => {
        const updatedRow = await db.Order.update(orderToUpdate, {
            where : { id }
        });
        return updatedRow[0] === 1;
    },

    delete : async (id) => {
        const nbDeleteRow = await db.Order.destroy({
            where : { id }
        });
        return nbDeleteRow === 1;
    },

    createArticle : async (orderId, articleData) => {
        const transaction = await db.sequelize.transaction();

        try {

            // Récupération de la commande
            const order = await db.Order.findByPk(orderId);
            if (!order) {
                throw new Error('Order not found');
            }

            // TODO: vérifier si la personne qui veut faire les modifications 
            //      -> est l'utilisateur qui veut passer la commande (pour ajouter, supprimer des articles)

            // Récupération de l'article
            const article = await db.Article.findByPk(articleData.id);
            if (!article) {
                throw new Error('Store not found');
            }

            // Mise à jour des attributs de la relation Many-to-Many
            await order.addArticle(article, {
                through: {
                    quantity: articleData.quantity,
                    store: articleData.store
                },
                transaction: transaction
            });

            // Validation de la transaction
            await transaction.commit();

            // Retourne l'article mis à jour
            const addedOrder = await db.Order.findByPk(orderId, {
                include : [ User, {
                    model : Article,
                    through : { attributes : [ 'quantity', 'store' ] },
                    include : [ Store ]
                }]
            });

            return addedOrder;

        } catch (error) {
            console.log(error);
            // Annulation de la transaction en cas d'erreur
            await transaction.rollback();
            throw error;
        }
    },

    deleteArticle : async (orderId, articleId) => {
        const transaction = await db.sequelize.transaction();

        try {
            const order = await db.Order.findByPk(orderId);
            if (!order) {
                throw new Error('Order not found');
            }

            // TODO: vérifier si la personne qui veut faire les modifications 
            //      -> est l'utilisateur qui veut passer la commande (pour ajouter, supprimer des articles)

            const article = await db.Article.findByPk(articleId);
            if (!article) {
                throw new Error('Store not found');
            }

            const link = await order.hasArticles(article);
            if (link) {
                await order.removeArticles(article, {transaction});
            }

            await transaction.commit();

            return true;

        }
        catch (err) {
            console.log(err);
            await transaction.rollback();
            return null;
        }
    }

}

module.exports = orderService;