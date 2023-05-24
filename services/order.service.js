const OrderDTO = require("../dto/order.dto");
const { User, Article, Store } = require("../models");
const db = require("../models");
const { Op } = require("sequelize");


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
                //include : [ Store ]
            }],
            distinct : true
            
        })

        console.log(rows)

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

            // console.log('order.service - createArticle (orderId) : ', orderId);
            // console.log('order.service - createArticle (articleData) : ', articleData);

            // Récupération de la commande
            const order = await db.Order.findByPk(orderId);
            if (!order) {
                throw new Error('Order not found');
            }
            // console.log('order.service - createArticle (order.id) : ', order.id);


            // TODO: vérifier si la personne qui veut faire les modifications 
            //      -> est l'utilisateur qui veut passer la commande (pour ajouter, supprimer des articles)


            // Récupération de l'article
            articleData.OrderId = orderId;
            const article = await db.Article.findByPk(articleData.ArticleId);
            if (!article) {
                throw new Error('Article not found');
            }
            // console.log('order.service - createArticle (article.id) : ', article.id);
            console.log('order.service - createArticle (article) : ', article);



            // ////////////////////////////////////////////////////////////////////////////////////////////////
            // Vérifier qu'il n'existe pas déjà un lien entre cette commande et l'article de ce magasin
            // ////////////////////////////////////////////////////////////////////////////////////////////////

            // Récupération de tous les liens
            // ------------------------------
            const allLinks = await db.MM_Article_Order.findAll({
                attributes: ['OrderId', 'ArticleId', "store"]
            });
            // console.log('order.service - createArticle (allLinks) : ', allLinks);


           

            // Création d'un objet avec le lien à comparer
            // -------------------------------------------
            const articleDataObjet = {
                OrderId: orderId,
                ArticleId: articleData.ArticleId,
                store: articleData.store
            }
            // console.log('order.service - createArticle (articleDataObjet) : ', articleDataObjet);


            // Boucle sur le tableau pour créer un nouveau lien si cet article (provenant d'un autre magasin) est déjà sur la commande
            // ------------------------------------------------------------------------------------------------------------------------
            let isUpdated = [ 0 ];
            for (let linkObjet of allLinks) {
                if (linkObjet.OrderId === articleDataObjet.OrderId && linkObjet.ArticleId === articleDataObjet.ArticleId && linkObjet.store === articleDataObjet.store) {
                    // console.log('linkObjet : ', linkObjet);
                    // console.log('articleDataObjet : ', articleDataObjet);
                    console.log('UPDATE LINK');
                    isUpdated = await db.MM_Article_Order.update({ quantity : articleData.quantity }, { 
                        where : {
                            [Op.and]: [
                                { OrderId: orderId }, 
                                { ArticleId: articleData.ArticleId },
                                { store: articleData.store }
                            ]
                        }
                    });
                }
            }
            console.log('isUpdated[0] : ', isUpdated[0]);
            // on a vérifier la correspondance et si match -> update qty



    
            // Créer le lien s'il n'a pas encore été créé
            // ------------------------------------------
            if (isUpdated[0] === 0) {
                console.log('CREATE LINK');
                // Mise à jour des attributs de la relation Many-to-Many
                await db.MM_Article_Order.create(articleData);
            }
            
            // ////////////////////////////////////////////////////////////////////////////////////////////////



            // Validation de la transaction
            await transaction.commit();

            // Retourne l'article mis à jour
            const updatedOrder = await db.Order.findByPk(orderId, {
                include : [ User, {
                    model : Article,
                    through : { attributes : [ 'quantity', 'store' ] },
                    include : [ Store ]
                }]
            });
            // console.log('order.service - createArticle (addedOrder) : ', addedOrder);

            // console.log('order.service - createArticle (addedOrder.dataValues.Articles) : ', addedOrder.dataValues.Articles);
            // addedOrder.dataValues.Articles.forEach(article => {
            //     console.log('order.service - createArticle (article) : ', article);
            // });

            return updatedOrder;

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