
const PhotoDTO = require("../dto/photo.dto");
const db = require("../models");


const photoService = {
    
    getAll : async (articleId) => {
        const { rows, count } = await db.Photo.findAndCountAll({
            where : { ArticleId: articleId}
        });
        return {
            photos : rows.map(photo => new PhotoDTO(photo)),
            count
        }
    },

    getById : async (id) => {
        const photo = await db.Photo.findByPk(id);
        return photo ? new PhotoDTO(photo) : null;
    },

    create : async (photoToAdd) => {
        const photo = await db.Photo.create(photoToAdd);
        return photo ? new PhotoDTO(photo) : null;
    },

    update : async (id, photoToUpdate) => {
        const updatedRow = await db.Photo.update(photoToUpdate, {
            where : { id }
        });
        return updatedRow[0] === 1;
    },

    updatePhoto : async (id, filename) => {
        const data = {
            path : `/images/photos/${filename}`
        }
        
        const updatedRow = await db.Photo.update(data, {
            where : { id }
        });

        return updatedRow[0] === 1;  
    },

    delete : async (id) => {
        const nbDeleteRow = await db.Photo.destroy({
            where : { id }
        });
        return nbDeleteRow === 1;
    }

}

module.exports = photoService;