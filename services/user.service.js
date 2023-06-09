const UserDTO = require('../dto/user.dto');
// const { Book } = require("../models");
const db = require("../models");

const argon2 = require('argon2');

const userService = {
    
    getAll : async () => {
        const { rows, count } = await db.User.findAndCountAll({
            order: [['lastname', 'ASC']], // trier par ordre alphabétique sur la colonne "lastname"
            distinct :true,
        });
        return {
            users : rows.map(user => new UserDTO(user)),
            count
        }
    },

    getById : async (id) => {
        const user = await db.User.findByPk(id);
        return user ? new UserDTO(user) : null;
    },

    create : async (userToAdd) => {
        const user = await db.User.create(userToAdd);
        return user ? new UserDTO(user) : null;
    },

    update : async (id, userToUpdate) => {
        const updatedRow = await db.User.update(userToUpdate, {
            where : { id }
        });
        return updatedRow[0] === 1;
    },

    updateAvatar : async (id, filename) => {
        const data = {
            avatar : `/images/avatars/${filename}`
        }
        
        const updatedRow = await db.User.update(data, {
            where : { id }
        });

        return updatedRow[0] === 1;  
    },

    updatePassword : async (id, passwordData) => {

        const user = await db.User.findByPk(id);
        if (!user) {
            return null;
        }
    
        const isValidPassword = await argon2.verify(user.password, passwordData.currentPassword);
        if (!isValidPassword) {
            return null;
        }

        if (passwordData.newPassword !== passwordData.confirmPassword) {
            throw new Error('Le nouveau mot de passe et la confirmation du mot de passe sont différents !');
        }

        const hashPwd = await argon2.hash(passwordData.newPassword);

        const updatedRow = await db.User.update({ password: hashPwd }, { 
            where: { id } 
        });
        console.log('updatedRow : ', updatedRow);
        
        return updatedRow[0] === 1;
    },

    delete : async (id) => {
        const nbDeleteRow = await db.User.destroy({
            where : { id }
        });
        return nbDeleteRow === 1;
    }

}

module.exports = userService;