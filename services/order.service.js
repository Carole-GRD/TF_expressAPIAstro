const OrderDTO = require("../dto/order.dto");
const { User, Article, Store, Article_Order, MM_Article_Store } = require("../models");
const db = require("../models");
const { Op } = require("sequelize");


// TODO : confirmer la commande + paiement + email de confirmation

const orderService = {
    getAll : async () => {
        const { rows, count } = await db.Order.findAndCountAll({
            distinct : true,
            include : [Article_Order],
        })

        return {
            orders : rows.map(order => new OrderDTO(order)),
            count
        }
    },

    getById : async (id) => {
        const order = await db.Order.findByPk(id, { 
            include : [Article_Order],
        });
        // console.log('ORDER : ', order);
        
        return order ? new OrderDTO(order) : null;
    },

    getByUser : async (userId) => {
        const { rows, count } = await db.Order.findAndCountAll({
            where : {
                UserId: userId
            },
            // include : [Article_Order],
            include : [ {
                model : Article_Order,
                include : [ {
                    model : Article,
                    include : [ Store ]
                } ]
            }],
            distinct : true
            
        })

        // console.log(rows)

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
            // ----------------------------
            const order = await db.Order.findByPk(orderId);
            if (!order) {
                throw new Error('Order not found');
            }
            // console.log('order.service - createArticle (order.id) : ', order.id);



            // TODO: vérifier si la personne qui veut faire les modifications 
            //      -> est l'utilisateur qui veut passer la commande (pour ajouter, supprimer des articles)



            // Vérifier si le lien existe déjà
            // -------------------------------
            const existingLink = await db.Article_Order.findOne({
                where: {
                  OrderId: orderId,
                  ArticleId: articleData.ArticleId,
                  store: articleData.store,
                },
              });
          


            // Si le lien existe déjà, mettre à jour la quantité
            // sinon, créer un nouveau lien
            // --------------------------------------------------
            if (existingLink) {  
                await existingLink.update({ quantity: articleData.quantity });
            } 
            else {
                await db.Article_Order.create({
                  OrderId: orderId,
                  ArticleId: articleData.ArticleId,
                  quantity: articleData.quantity,
                  store: articleData.store,
                });
              }
          


            // Validation de la transaction
            // ----------------------------
            await transaction.commit();



            // Retourner l'article mis à jour
            // ------------------------------
              const updatedOrder = await db.Order.findByPk(orderId, {
                include: [
                  User,
                  {
                    model: Article_Order,
                    include: [
                      {
                        model: Article,
                        include: [Store],
                      },
                    ],
                  },
                ],
              });
          
              return updatedOrder;

        } catch (error) {
            console.log(error);
            // Annulation de la transaction en cas d'erreur
            await transaction.rollback();
            throw error;
        }
    },

    deleteArticle : async (orderId, link) => {
        // console.log('orderId : ', orderId);
        console.log('service - link !!!!!!!!!!!!!!!!!!!!!!!!!!!! : ', link);

        const transaction = await db.sequelize.transaction();

        try {
            // Récupération de la commande
            const order = await db.Order.findByPk(orderId);
            if (!order) {
                throw new Error('Order not found');
            }

            // TODO: vérifier si la personne qui veut faire les modifications 
            //      -> est l'utilisateur qui veut passer la commande (pour ajouter, supprimer des articles)


             // Suppression du lien de l'article
            const result = await db.Article_Order.destroy({
                where: { id: link }
            });
  
            // Vérification de la suppression
            if (result !== 1) {
                throw new Error('Link "Article_Order" not found');
            }


            await transaction.commit();

            return true;

        }
        catch (err) {
            console.log('ERREUR : ', err);
            await transaction.rollback();
            return null;
        }
    }

}

module.exports = orderService;