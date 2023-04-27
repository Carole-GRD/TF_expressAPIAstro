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

    delete : async (id) => {
        const nbDeleteRow = await db.User.destroy({
            where : { id }
        });
        return nbDeleteRow === 1;
    }

}

module.exports = userService;