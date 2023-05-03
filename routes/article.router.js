const articleController = require('../controllers/article.controller');


const articleRouter = require('express').Router();


articleRouter.route('/')
    .get(articleController.getAll)
    .post(articleController.create)
    
articleRouter.route('/:id')
    .get(articleController.getById)
    .put( (req, res) => { res.sendStatus(501) } )
    .delete( (req, res) => { res.sendStatus(501) } )


module.exports = articleRouter;