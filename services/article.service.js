
const ArticleDTO = require("../dto/article.dto");
const { Store, Mark, Article_Order } = require("../models");
const db = require("../models");
const Sequelize = require('sequelize');



const articleService = {
    getAll : async () => {
        const { rows, count } = await db.Article.findAndCountAll({
            distinct : true,
            include : [ Store, Mark, Article_Order ],
            // ↓ on ne récupère que les articles qui sont liés à un magasin 
            where : Sequelize.literal(
                    /* Injection d'une partie de la requête "à la main" pour obtenir uniquement les articles qui existent dans la Many-To-Many (MM_Article_Store) */
                    `EXISTS (SELECT * FROM [dbo].[MM_Article_Store] WHERE ArticleId = [Article].[id])`
                )
        });
        // console.log('rows[0] : ', rows[0]);
        return {
            articles : rows.map(article => new ArticleDTO(article)),
            count
        }
    },
    
    getById : async (id) => {
        const article = await db.Article.findByPk(id, {
            // include : [ Store, Order, Mark ],
            include : [ Store, Mark, Article_Order ],
        });

        return article ? new ArticleDTO(article) : null;
    },

    getByIdAndByStore : async (id, storeId) => {
        const article = await db.MM_Article_Store.findOne({
            where : { 
                ArticleId : id,
                StoreId : storeId 
            }
        });

        return article ? article : null;
    },

    
    create : async (articleToAdd) => {
        
        // const transaction = await db.sequelize.transaction();

        // try {

            const article = await db.Article.create(articleToAdd);

            // for (const store of articleToAdd.stores) {
            //     await article.addStores(store.id, {
            //         through : 
            //                 { 
            //                     price : store.price,
            //                     discount : store.discount,
            //                     stock : store.stock
            //                 }
            //     }, transaction)
            // }

            // await transaction.commit();

            const addedArticle = await db.Article.findByPk(article.id);

            return addedArticle ? new ArticleDTO(addedArticle) : null;

        // }
        // catch (err) {
        //     console.log('article.service - create (err) : ', err);
        //     await transaction.rollback();
        //     return null;
        // }
    },
    
    update : async (id, articleToUpdate) => {
        const updatedRow = await db.Article.update(articleToUpdate, {
            where : { id }
        });
        return updatedRow[0] === 1; 
    },
    
    delete : async (id) => {
        const nbDeleteRow = await db.Article.destroy({
            where : { id }
        });
        return nbDeleteRow === 1;
    },


    like : async (articleId, userId) => {
        const transaction = await db.sequelize.transaction();

        try {
            const article = await db.Article.findByPk(articleId);
            const user = await db.User.findByPk(userId);

            const like = await article.addUser(user, {transaction});

            await transaction.commit();

            return like;
        }
        catch (err) {
            await transaction.rollback();
            return null;
        }
    },

    disLike : async (articleId, userId) => {
        
        const transaction = await db.sequelize.transaction();

        try {
            const article = await db.Article.findByPk(articleId);
            const user = await db.User.findByPk(userId);

            const link = await user.hasArticle(article);
            
            if (!link) {
                await transaction.commit();
                return null;
            }

            const nbRows = await user.removeArticle(article,  { transaction });
            

            await transaction.commit();

            return nbRows === 1;
        }
        catch (err) {
            await transaction.rollback();
            return null; 
        }
    },


    getByLike: async () => {

            const likedArticles = await db.Article.findAll({
                attributes: [
                    'id',
                    'name',
                    'reference',
                    'author',
                    [
                        Sequelize.literal('(SELECT COUNT(*) FROM MM_Article_User WHERE MM_Article_User.ArticleId = Article.id)'),
                        'likeCount',
                    ],
                ],
                where: Sequelize.literal('(SELECT COUNT(*) FROM MM_Article_User WHERE MM_Article_User.ArticleId = Article.id) > 0'),
                order: [[Sequelize.literal('likeCount'), 'DESC']],
            });
            
            return likedArticles;

    },



    updateStore : async (articleId, storeData) => {
        const transaction = await db.sequelize.transaction();

        try {

            // Récupération de l'article
            const article = await db.Article.findByPk(articleId);
            if (!article) {
            throw new Error('Article not found');
            }

            // Récupération du store
            const store = await Store.findByPk(storeData.StoreId);
            if (!store) {
            throw new Error('Store not found');
            }

            // Mise à jour des attributs de la relation Many-to-Many
            await article.addStore(store, {
                through: {
                price: storeData.price,
                discount: storeData.discount,
                stock: storeData.stock
                },
                transaction: transaction
            });

            // Validation de la transaction
            await transaction.commit();

            // Retourne l'article mis à jour
            const updatedArticle = await db.Article.findByPk(articleId, {
                include: [Store]
            });
            return updatedArticle;
        } catch (error) {
            // Annulation de la transaction en cas d'erreur
            await transaction.rollback();
            throw error;
        }
    },

    // A PRIORI CETTE METHODE NE FONCTIONNE PAS !
    // Il faut utiliser la méthode "updateStore"
    // createStore : async (articleId, storeData) => {
    //     console.log('storeData : ', storeData);
    //     const transaction = await db.sequelize.transaction();

    //     try {

    //         // Récupération de l'article
    //         const article = await db.Article.findByPk(articleId);
    //         if (!article) {
    //             throw new Error('Article not found');
    //         }

    //         // Récupération du store
    //         const store = await db.Store.findByPk(storeData.StoreId);
    //         if (!store) {
    //             throw new Error('Store not found');
    //         }

    //         // Mise à jour des attributs de la relation Many-to-Many
    //         await article.addStore(store, {
    //             through: {
    //             price: storeData.price,
    //             discount: storeData.discount,
    //             stock: storeData.stock
    //             },
    //             transaction: transaction
    //         });

    //         // Validation de la transaction
    //         await transaction.commit();

    //         // Retourne l'article mis à jour
    //         const addedArticle = await db.Article.findByPk(articleId, {
    //             include: [Store]
    //         });
    //         return addedArticle;
    //     } catch (error) {
    //         // Annulation de la transaction en cas d'erreur
    //         await transaction.rollback();
    //         throw error;
    //     }
    // },

    deleteteStore : async (articleId, listStoreId) => {
        const transaction = await db.sequelize.transaction();

        try {
            const article = await db.Article.findByPk(articleId);

            for (let storeId of listStoreId) {

                let store = await db.Store.findByPk(storeId);

                const link = await article.hasStores(store);
                if (link) {
                    await article.removeStores(store, {transaction});
                }
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

module.exports = articleService;