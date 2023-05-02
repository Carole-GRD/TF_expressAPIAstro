const MarkDTO = require('../dto/mark.dto');
const db = require("../models");


const markService = {
    
    getAll : async () => {
        const { rows, count } = await db.Mark.findAndCountAll();
        return {
            marks : rows.map(mark => new MarkDTO(mark)),
            count
        }
    },

    getById : async (id) => {
        const mark = await db.Mark.findByPk(id);
        return mark ? new MarkDTO(mark) : null;
    },

    create : async (markToAdd) => {
        const mark = await db.Mark.create(markToAdd);
        return mark ? new MarkDTO(mark) : null;
    },

    update : async (id, markToUpdate) => {
        const updatedRow = await db.Mark.update(markToUpdate, {
            where : { id }
        });
        return updatedRow[0] === 1;
    },

    delete : async (id) => {
        const nbDeleteRow = await db.Mark.destroy({
            where : { id }
        });
        return nbDeleteRow === 1;
    }

}

module.exports = markService;