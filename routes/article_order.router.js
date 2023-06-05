const article_orderController = require('../controllers/article_order.controller');



const article_orderRouter = require('express').Router();

article_orderRouter.route('/article/:articleId/store/:storeId/order/:orderId')
    .get(article_orderController.getByArticleAndByStoreAndByOrder);


module.exports = article_orderRouter;