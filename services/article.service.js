
const ArticleDTO = require("../dto/article.dto");
const { Store, Order } = require("../models");
const db = require("../models");


const articleService = {
    getAll : async () => {
        const { rows, count } = await db.Article.findAndCountAll({
            distinct : true,
            include : [ Store, Order ]
        });

        return {
            articles : rows.map(article => new ArticleDTO(article)),
            count
        }
    },
    
    getById : async (id) => {
        const article = await db.Article.findByPk(id, {
            include : [ Store, Order ]
        });

        return article ? new ArticleDTO(article) : null;
    },
    
    create : async (articleToAdd) => {
        
        const transaction = await db.sequelize.transaction();

        try {

            const article = await db.Article.create(articleToAdd);

            for (const store of articleToAdd.stores) {
                await article.addStores(store.id, {
                    through : 
                            { 
                                price : store.price,
                                discount : store.discount,
                                stock : store.stock
                            }
                }, transaction)
            }

            await transaction.commit();

            const addedArticle = await db.Article.findByPk(article.id);

            return addedArticle ? new ArticleDTO(addedArticle) : null;

        }
        catch (err) {
            console.log('article.service - create (err) : ', err);
            await transaction.rollback();
            return null;
        }
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


    getByLike : async () => {
        
        const articles = await db.sequelize.query("SELECT ArticleId FROM dbo.[MM_Article_User]")
        // console.log('article.service - getByLike (articles) : ', articles);
        // ↑ retourne un tableau avec :
        // en premier élément un tableau comprenant tous les articles likés
        // en second élément le nombre total de likes 
        // (si un même article est liké plusieurs fois, on compte tous ses "likes")  
        //      [     
        //          [
        //              { ArticleId: 2 },
        //              { ArticleId: 9 },
        //              { ArticleId: 17 },
        //              { ArticleId: 17 },
        //              { ArticleId: 21 },
        //              { ArticleId: 21 },
        //              { ArticleId: 21 }
        //          ],
        //          7
        //      ]


        const articlesId = articles[0].map(article => article.ArticleId);
        // console.log('article.service - getByLike (articlesId) : ', articlesId);
        // ↑ on crée un tableau avec tous les identifiants de tous les articles likés 
        // (si un même article est liké plusieurs fois, on ajoute à chaque fois son identifiant)
        //       [2,  9, 17, 17, 21, 21, 21]

        let articlesDifferents = articlesId.reduce((acc, element) => {
            if (acc[element] === undefined) {
              acc[element] = 1;
            } else {
              acc[element]++;
            }
            return acc;
        }, {});
        // console.log('article.service - getByLike (articlesDifferents) : ', articlesDifferents);
        // ↑ on crée un objet qui reprend des paires clés-valeurs 
        //   les clés correpondent aux identiants des articles likés
        //   les valeurs correspondent au nombre de fois que chaque article est liké 
        //      { '2': 1, '9': 1, '17': 2, '21': 3 }
          

        
        // let maxArticle = null;
        // let maxCount = 0;
        // for (let like in articlesDifferents) {
        //     if (articlesDifferents[like] > maxCount) {
        //         maxArticle = like;
        //         maxCount = articlesDifferents[like];
        //     }
        // }
        // console.log("L'article le plus répété est l'article " + maxArticle + ", avec " + maxCount + " répétitions.");
        
        

        let sortedArticles = Object.entries(articlesDifferents).sort((a, b) => b[1] - a[1]);
        // console.log('article.service - getByLike (sortedArticles) : ', sortedArticles);
        // ↑ on trie les articles dans l'ordre décroissant du nombre de likes
        // on obtient un tableau de tableaux trié de manière décroissante en fonction du nombre de répétitions
        //      [ [ '21', 3 ], [ '17', 2 ], [ '2', 1 ], [ '9', 1 ] ]



        const articlesTab = [];
        for (const articleId of sortedArticles) {
            const articleIdLiked = parseInt(articleId[0]);

            const searchArticleLiked = await db.Article.findByPk(articleIdLiked);
            const articleLiked = new ArticleDTO(searchArticleLiked).name;

            const nbLikes = articleId[1];

            articlesTab.push({ name: articleLiked, nbLikes: nbLikes });

        }
        // console.log('article.service - getByLike (articlesTab) : ', articlesTab);


    
        return {
            likedArticles : articlesTab,
            nbArticles: articlesTab.length
        }
    },



    updateStore : async (articleId, data) => {
        const transaction = await db.sequelize.transaction();

        try {

            // Récupération de l'article
            const article = await db.Article.findByPk(articleId);
            if (!article) {
            throw new Error('Article not found');
            }

            // Récupération du store
            const store = await Store.findByPk(data.id);
            if (!store) {
            throw new Error('Store not found');
            }

            // Mise à jour des attributs de la relation Many-to-Many
            await article.addStore(store, {
                through: {
                price: data.price,
                discount: data.discount,
                stock: data.stock
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
    }
}

module.exports = articleService;