const categoryController = require('../controllers/category.controller');

const categoryRouter = require('express').Router();


categoryRouter.route('/')
    .get(categoryController.getAll)
    .post(categoryController.create)


categoryRouter.route('/:id')
    .get(categoryController.getById)
    .put(categoryController.update)
    .delete(categoryController.delete)


module.exports = categoryRouter;