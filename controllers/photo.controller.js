const { Request, Response } = require('express');
const photoService = require('../services/photo.service');

const { SuccessArrayResponse, SuccessResponse } = require('../utils/success.response');
const ErrorResponse = require('../utils/error.response');


const photoController = {
    /** 
     * Get ALL
     * @param { Request } req
     * @param { Response } res
     */
     getAll : async (req, res) => {
        const articleId = req.params.id;
        const { photos, count } = await photoService.getAll(articleId);
        res.status(200).json(new SuccessArrayResponse(photos, count));
    },

    /** 
     * Get By Id
     * @param { Request } req
     * @param { Response } res
     */
    getById : async (req, res) => {
        const { id } = req.params;
        const photo = await photoService.getById(id);
        if (!photo) {
            res.sendStatus(404);
            return;
        }
        res.status(200).json(new SuccessResponse(photo));
    },

    /** 
     * Create
     * @param { Request } req
     * @param { Response } res
     */
    create : async (req, res) => {
        const data = {};
        data.ArticleId = req.params.id;

        console.log(req.file);
        // -----------------------------------------
        if (req.file) {
            const filename = req.file.filename;
            data.path = `/images/photos/${filename}`;
        }
        // -----------------------------------------
        const photo = await photoService.create(data);
        res.location('/photo/' + photo.id);
        res.status(201).json(new SuccessResponse(photo, 201));
    },

    /** 
     * Update
     * @param { Request } req
     * @param { Response } res
     */
    update : async (req, res) => {
        const { id } = req.params;
        const data = req.body;
        // -----------------------------------------
        if (req.file) {
            const filename = req.file.filename;
            data.path = `/images/photos/${filename}`;
        }
        // -----------------------------------------
        const isUpdated = await photoService.update(id, data);
        if (!isUpdated) {
            res.sendStatus(404);
            return;
        }  
        res.sendStatus(204);
    },

    updatePhoto : async (req, res) => {

        const id = req.params.id;

        // const connectedUserRole = req.user.role;
        // const connectedUserId = req.user.id;

        // if (connectedUserRole !== 'Admin' && connectedUserId !== parseInt(id)) {
        //     res.status(403).json(new ErrorResponse('Accès interdit, vous n\'êtes ni Admin',403));
        //     return;
        // }
        
        const filename = req.file.filename;

        const isUpdated = await photoService.updatePhoto(id, filename);

        if (!isUpdated) {
            res.status(404).json(new ErrorResponse('User not found', 404));
            return;
        }

        res.location = '/photo/' + id;
        res.status(204).json(new SuccessResponse({ msg : 'Avatar update success'}, 204));
    },

    /** 
     * Delete
     * @param { Request } req
     * @param { Response } res
     */
    delete : async (req, res) => {
        const { id } = req.params;
        const isDeleted = await photoService.delete(id);
        if (!isDeleted) {
            res.sendStatus(404);
            return;
        }
        res.sendStatus(204);
    }
}

module.exports = photoController;