const { Request, Response } = require('express');
const markService = require('../services/mark.service');
const { SuccessArrayResponse, SuccessResponse } = require('../utils/success.response');


const markController = {
    /** 
     * Get ALL
     * @param { Request } req
     * @param { Response } res
     */
     getAll : async (req, res) => {
        const { marks, count } = await markService.getAll();
        res.status(200).json(new SuccessArrayResponse(marks, count));
    },

    /** 
     * Get By Id
     * @param { Request } req
     * @param { Response } res
     */
    getById : async (req, res) => {
        const { id } = req.params;
        const mark = await markService.getById(id);
        if (!mark) {
            res.sendStatus(404);
            return;
        }
        res.status(200).json(new SuccessResponse(mark));
    },

    /** 
     * Create
     * @param { Request } req
     * @param { Response } res
     */
    create : async (req, res) => {
        const data = req.body;
        const mark = await markService.create(data);
        res.location('/mark/' + mark.id);
        res.status(201).json(new SuccessResponse(mark, 201));
    },

    /** 
     * Update
     * @param { Request } req
     * @param { Response } res
     */
    update : async (req, res) => {
        const { id } = req.params;
        const data = req.body;
        const isUpdated = await markService.update(id, data);
        if (!isUpdated) {
            res.sendStatus(404);
            return;
        }  
        res.sendStatus(204);
    },

    /** 
     * Delete
     * @param { Request } req
     * @param { Response } res
     */
    delete : async (req, res) => {
        const { id } = req.params;
        const isDeleted = await markService.delete(id);
        if (!isDeleted) {
            res.sendStatus(404);
            return;
        }
        res.sendStatus(204);
    }
}

module.exports = markController;