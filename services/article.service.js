
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
            // articles : rows.map(article => article),
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
    }
}

module.exports = articleService;