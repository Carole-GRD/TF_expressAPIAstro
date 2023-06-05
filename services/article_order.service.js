const db = require("../models");

const article_orderService = {
    getByArticleAndByStoreAndByOrder : async (id, storeId, orderId) => {
        const article_order = await db.Article_Order.findOne({
            where : { 
                ArticleId : id,
                store : storeId,
                OrderId : orderId
            }
        });

        return article_order ? article_order : null;
    },
}


module.exports = article_orderService;