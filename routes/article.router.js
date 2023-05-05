const articleController = require('../controllers/article.controller');


const articleRouter = require('express').Router();


articleRouter.route('/')
    .get(articleController.getAll)
    .post(articleController.create)
    
articleRouter.route('/:id')
    .get(articleController.getById)
    .put(articleController.update)
    .delete(articleController.delete)


module.exports = articleRouter;