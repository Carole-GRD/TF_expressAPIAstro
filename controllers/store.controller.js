
const storeService = require('../services/store.service');
const { SuccessArrayResponse, SuccessResponse } = require('../utils/success.response');


const storeController = {

     getAll : async (req, res) => {
        const { stores, count } = await storeService.getAll();
        res.status(200).json(new SuccessArrayResponse(stores, count));
    },

    getById : async (req, res) => {
        const { id } = req.params;
        const store = await storeService.getById(id);
        if (!store) {
            res.sendStatus(404);
            return;
        }
        res.status(200).json(new SuccessResponse(store));
    },
    
    create : async (req, res) => {
        const data = req.body;
        const store = await storeService.create(data);
        res.location('/store/' + store.id);
        res.status(201).json(new SuccessResponse(store, 201));
    },

    update : async (req, res) => {
        const { id } = req.params;
        const data = req.body;
        const isUpdated = await storeService.update(id, data);
        if (!isUpdated) {
            res.sendStatus(404);
            return;
        }  
        res.sendStatus(204);
    },

    delete : async (req, res) => {
        const { id } = req.params;
        const isDeleted = await storeService.delete(id);
        if (!isDeleted) {
            res.sendStatus(404);
            return;
        }
        res.sendStatus(204);
    }
}

module.exports = storeController;