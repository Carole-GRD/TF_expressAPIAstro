const articleController = require('../controllers/article.controller');


const authJwt = require('../middlewares/auth.middleware');


const articleRouter = require('express').Router();

articleRouter.route('/')
    .get(articleController.getAll)
    .post(articleController.create)

articleRouter.route('/getByLike')
    .get(articleController.getByLike)

articleRouter.route('/:id')
    .get(articleController.getById)
    .put(articleController.update)
    .delete(articleController.delete)

articleRouter.route('/:id/like')
    .post(authJwt(), articleController.like)

articleRouter.route('/:id/disLike')
    .delete(authJwt(), articleController.disLike)

    
module.exports = articleRouter;