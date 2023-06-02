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

articleRouter.route('/:id/store/:storeId')
    .get(articleController.getByIdAndByStore)

// ============================================================ 
articleRouter.route('/:id/store/:storeId/order/:orderId')
.get(articleController.getByIdAndByStoreAndByOrder)
// ============================================================ 

articleRouter.route('/:id/like')
    .post(authJwt(), articleController.like)

articleRouter.route('/:id/disLike')
    .delete(authJwt(), articleController.disLike)

articleRouter.route('/:id/updateStore')
    .put(articleController.updateStore)

articleRouter.route('/:id/createStore')
    .post(articleController.createStore)

articleRouter.route('/:id/deleteStore')
    .delete(articleController.deleteteStore)


module.exports = articleRouter;