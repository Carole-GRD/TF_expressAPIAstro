const article_orderService = require("../services/article_order.service");
const { SuccessResponse } = require("../utils/success.response");

const article_orderController = {
    getByArticleAndByStoreAndByOrder : async (req, res) => {
        const { articleId, storeId, orderId } = req.params;
        const article_order = await article_orderService.getByArticleAndByStoreAndByOrder(articleId, storeId, orderId);
        if (!article_order) {
            res.sendStatus(404);
            return;
        }
        res.status(200).json(new SuccessResponse(article_order));
    },

}

module.exports = article_orderController;