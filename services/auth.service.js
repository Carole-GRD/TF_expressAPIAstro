const argon2 = require("argon2");
const UserDTO = require("../dto/user.dto");
const db = require("../models");
const { Op } = require("sequelize");


const authService = {

    register : async (userToAdd) => {

        console.log('auth.service.js -> register : ', userToAdd);

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

    }

}

module.exports = authService;