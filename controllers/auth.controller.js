const { Request, Response } = require('express');
const authService = require('../services/auth.service');
const ErrorResponse = require('../utils/error.response');

const jwt = require('../utils/jwt.utils');
const { SuccessResponse } = require('../utils/success.response');

const authController = {
    /**
     * Register
     * @param { Request } req
     * @param { Response } res
     */
    register : async (req, res) => {

        const data = req.body;

        if (req.file) {
            const filename = req.file.filename;
            data.avatar = `/images/avatars/${filename}`;
        } 

        const user = await authService.register(data);

        // console.log('auth-controller.js - register : ', user);

        if (!user) {
            res.sendStatus(400);
            return;
        }

        const token = await jwt.encode(user);

        res.status(201).json(new SuccessResponse({token, user}, 201));

    },

    /**
     * Login
     * @param { Request } req
     * @param { Response } res
     */
     login : async (req, res) => {
        
        const { credential, password } = req.body;

        const userToConnect = await authService.login(credential, password);
        
        if (!userToConnect) {
            res.status(400).json(new ErrorResponse('Bad credentials'));    
            return;
        }

        const token = await jwt.encode(userToConnect);
        res.status(200).json(new SuccessResponse({token, userToConnect}));
    },

    validateToken : async (req, res) => {
        const { token } = req.body;

        try {
            // Appelez le service d'authentification pour valider le token et obtenir les informations de l'utilisateur
            const userToConnect = await authService.validateToken(token);

            // Si la validation du token réussit, renvoyez les informations de l'utilisateur en tant que réponse
            res.json({ success: true, userToConnect });
        } catch (error) {
            // Si la validation du token échoue, renvoyez une réponse d'erreur appropriée
            res.status(400).json({ success: false, message: 'Invalid token' });
        }
    }
}

module.exports = authController;