
const StoreDTO = require("../dto/store.dto");
const db = require("../models");


const storeService = {
    
    getAll : async () => {
        const { rows, count } = await db.Store.findAndCountAll({
            order : [['name', 'ASC']],  // trier par ordre alphabétique sur la colonne "name"
        });

        return {
            stores : rows.map(store => new StoreDTO(store)),
            count
        }
    },

    getById : async (id) => {
        const store = await db.Store.findByPk(id);
        return store ? new StoreDTO(store) : null;
    },

    create : async (storeToAdd) => {
        const store = await db.Store.create(storeToAdd);
        return store ? new StoreDTO(store) : null;   
    },

    update : async(id, storeToUpdate) => {
        const updatedRow = await db.Store.update(storeToUpdate, {
            where : { id }
        });
        return updatedRow[0] === 1;
    },

    delete : async (id) => {
        const nbDeleteRow = await db.Store.destroy({
            where : { id }
        });
        return nbDeleteRow === 1;
    }

}

module.exports = storeService;