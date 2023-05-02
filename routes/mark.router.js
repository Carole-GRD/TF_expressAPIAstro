const markController = require('../controllers/mark.controller');


const markRouter = require('express').Router();


markRouter.route('/')
    .get(markController.getAll)
    .post(markController.create)


markRouter.route('/:id')
    .get(markController.getById)
    .put(markController.update)
    .delete(markController.delete)


module.exports = markRouter;