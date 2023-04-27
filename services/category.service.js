const CategoryDTO = require('../dto/category.dto');
const { Book } = require("../models");
const db = require("../models");


const categoryService = {
    
    getAll : async () => {
        const { rows, count } = await db.Category.findAndCountAll();
        return {
            categories : rows.map(category => new CategoryDTO(category)),
            count
        }
    },

    getById : async (id) => {
        const category = await db.Category.findByPk(id);
        return category ? new CategoryDTO(category) : null;
    },

    create : async (categoryToAdd) => {
        const category = await db.Category.create(categoryToAdd);
        return category ? new CategoryDTO(category) : null;
    },

    update : async (id, categoryToUpdate) => {
        const updatedRow = await db.Category.update(categoryToUpdate, {
            where : { id }
        });
        return updatedRow[0] === 1;
    },

    delete : async (id) => {
        const nbDeleteRow = await db.Category.destroy({
            where : { id }
        });
        return nbDeleteRow === 1;
    }

}

module.exports = categoryService;