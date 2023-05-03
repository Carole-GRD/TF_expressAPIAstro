const storeController = require('../controllers/store.controller');


const storeRouter = require('express').Router();


storeRouter.route('/')
    .get(storeController.getAll)
    .post(storeController.create)

storeRouter.route('/:id')
    .get(storeController.getById)
    .put(storeController.update)
    .delete(storeController.delete)

module.exports = storeRouter;