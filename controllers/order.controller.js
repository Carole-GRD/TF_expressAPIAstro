
const { Request, Response } = require('express');
const orderService = require('../services/order.service');


const { SuccessArrayResponse, SuccessResponse} = require('../utils/success.response');


const orderController = {
    /**
     * Get ALL
     * @param { Request } req
     * @param { Response } res
     */
    getAll : async (req, res) => {
        const { orders, count } = await orderService.getAll();
        res.status(200).json(new SuccessArrayResponse(orders, count))
    },

    getById : async (req, res) => {
        const { id } = req.params;
        const order = await orderService.getById(id);
        if (!order) {
            res.sendStatus(404);
            return;
        }
        res.status(200).json(new SuccessResponse(order));
    },

    create : async (req, res) => {
        const data = req.body;
        const order = await orderService.create(data);
        res.location('/order/' + order.id);
        res.status(201).json(new SuccessResponse(order, 201));
    },

    update : async (req, res) => {
        const { id } = req.params;
        const data = req.body;
        const isUpdated = await orderService.update(id, data);
        if (!isUpdated) {
            res.sendStatus(404);
            return;
        }  
        res.sendStatus(204);
    },

    delete : async (req, res) => {
        const { id } = req.params;
        await orderService.delete(id);
        res.sendStatus(204);
    }
}


module.exports = orderController;