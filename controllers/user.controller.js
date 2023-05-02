const { Request, Response } = require('express');
const userService = require('../services/user.service');
const { SuccessArrayResponse, SuccessResponse } = require('../utils/success.response');


const userController = {
    /** 
     * Get ALL
     * @param { Request } req
     * @param { Response } res
     */
     getAll : async (req, res) => {
        const { users, count } = await userService.getAll();
        res.status(200).json(new SuccessArrayResponse(users, count));
    },

    /** 
     * Get By Id
     * @param { Request } req
     * @param { Response } res
     */
    getById : async (req, res) => {
        const { id } = req.params;
        const user = await userService.getById(id);
        if (!user) {
            res.sendStatus(404);
            return;
        }
        res.status(200).json(new SuccessResponse(user));
    },

    /** 
     * Create
     * @param { Request } req
     * @param { Response } res
     */
    create : async (req, res) => {
        const data = req.body;
        // console.log(req.body);
        // -----------------------------------------
        if (req.file) {
            const filename = req.file.filename;
            data.avatar = `/images/avatars/${filename}`;
        }
        // -----------------------------------------
        console.log(data);
        const user = await userService.create(data);
        res.location('/user/' + user.id);
        res.status(201).json(new SuccessResponse(user, 201));
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
            data.avatar = `/images/avatars/${filename}`;
        }
        // -----------------------------------------
        const isUpdated = await userService.update(id, data);
        if (!isUpdated) {
            res.sendStatus(404);
            return;
        }  
        res.sendStatus(204);
    },

    updateAvatar : async (req, res) => {

        const id = req.params.id;

        // const connectedUserRole = req.user.role;
        // const connectedUserId = req.user.id;

        // if (connectedUserRole !== 'Admin' && connectedUserId !== parseInt(id)) {
        //     res.status(403).json(new ErrorResponse('Accès interdit, vous n\'êtes ni Admin, ni l\'utilisateur lié au profil',403));
        //     return;
        // }
        
        const filename = req.file.filename;

        const isUpdated = await userService.updateAvatar(id, filename);

        if (!isUpdated) {
            res.status(404).json(new ErrorResponse('User not found', 404));
            return;
        }

        res.location = '/user/' + id;
        res.status(204).json(new SuccessResponse({ msg : 'Avatar update success'}, 204));
    },

    /** 
     * Delete
     * @param { Request } req
     * @param { Response } res
     */
    delete : async (req, res) => {
        const { id } = req.params;
        const isDeleted = await userService.delete(id);
        if (!isDeleted) {
            res.sendStatus(404);
            return;
        }
        res.sendStatus(204);
    }
}

module.exports = userController;