const orderController = require('../controllers/order.controller');


const orderRouter = require('express').Router();


orderRouter.route('/')
    .get(orderController.getAll)
    .post(orderController.create)

orderRouter.route('/:id')
    .get(orderController.getById)
    .put(orderController.update)
    .delete(orderController.delete)

orderRouter.route('/:id/createArticle')
    .post(orderController.createArticle)

orderRouter.route('/:id/deleteArticle')
    .delete(orderController.deleteArticle)

orderRouter.route('/user/:userId')
    .get(orderController.getByUser)

module.exports = orderRouter;