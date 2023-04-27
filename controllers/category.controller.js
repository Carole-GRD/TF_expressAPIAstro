const { Request, Response } = require('express');
const categoryService = require('../services/category.service');
const { SuccessArrayResponse, SuccessResponse } = require('../utils/success.response');


const categoryController = {
    /** 
     * Get ALL
     * @param { Request } req
     * @param { Response } res
     */
     getAll : async (req, res) => {
        const { categories, count } = await categoryService.getAll();
        res.status(200).json(new SuccessArrayResponse(categories, count));
    },

    /** 
     * Get By Id
     * @param { Request } req
     * @param { Response } res
     */
    getById : async (req, res) => {
        const { id } = req.params;
        const category = await categoryService.getById(id);
        if (!category) {
            res.sendStatus(404);
            return;
        }
        res.status(200).json(new SuccessResponse(category));
    },

    /** 
     * Create
     * @param { Request } req
     * @param { Response } res
     */
    create : async (req, res) => {
        const data = req.body;
        const category = await categoryService.create(data);
        res.location('/category/' + category.id);
        res.status(201).json(new SuccessResponse(category, 201));
    },

    /** 
     * Update
     * @param { Request } req
     * @param { Response } res
     */
    update : async (req, res) => {
        const { id } = req.params;
        const data = req.body;
        const isUpdated = await categoryService.update(id, data);
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
        const isDeleted = await categoryService.delete(id);
        if (!isDeleted) {
            res.sendStatus(404);
            return;
        }
        res.sendStatus(204);
    }
}

module.exports = categoryController;