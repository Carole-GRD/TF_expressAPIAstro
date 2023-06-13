const argon2 = require("argon2");
const UserDTO = require("../dto/user.dto");
const db = require("../models");
const { Op } = require("sequelize");
const jwt = require('../utils/jwt.utils');

const authService = {

    register : async (userToAdd) => {

        // console.log('auth.service.js -> register : ', userToAdd);

        const hashPwd = await argon2.hash(userToAdd.password);

        userToAdd.password = hashPwd;

        const user = await db.User.create(userToAdd);

        return user ? new UserDTO(user) : null;
    },

    
    login : async (credential, password) => {

        if (!credential || !password) {
            throw new Error('Email et/ou mot de passe invalide');
        }

        const userToConnect = await db.User.findOne({
            where : {
                [Op.or]: [
                    { email: credential },
                    { pseudo: credential }
                ]
            }
        })

        if (!userToConnect) {
            return null;
        }

        const isValid = await argon2.verify(userToConnect.password, password);

        if (!isValid) {
            return null;
        }

        return new UserDTO(userToConnect);

    },


    validateToken : async (token) => {

        try {
            // Votre logique de validation du token et d'obtention des informations de l'utilisateur à partir de votre modèle Sequelize
            const payload = await jwt.decode(token);
            // console.log('auth.service.js - validateToken (payload) : ', payload);
            // console.log('auth.service.js - validateToken (payload.id) : ', payload.id);

            // Utiliser la méthode findByPk() pour trouver l'utilisateur correspondant à l'identifiant
            const userToConnect = await db.User.findByPk(payload.id);
            // console.log('auth.service.js - validateToken (userToConnect) : ', userToConnect);
        
            if (userToConnect) {
              // Retournez les informations de l'utilisateur si le token est valide
              return new UserDTO(userToConnect);
            } else {
              // Lancez une exception si le token est invalide ou l'utilisateur n'est pas trouvé
              throw new Error('Invalid token');
            }
          } catch (error) {
            throw error;
          }
    }

}

module.exports = authService;