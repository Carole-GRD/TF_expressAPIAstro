

const { Sequelize, ModelStatic, DataTypes } = require('sequelize');

/**
 * Constructeur du Modele Article
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    const Article = sequelize.define('Article', {
        
        name : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull : true,
                notEmpty : true 
            },
        },
        description : {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true, 
            },
        },
        reference : {
            type: DataTypes.STRING,
            allowNull: true,
            unique : 'UK_Article_Reference'
        }
    }, {
        tableName : 'Article'
    });

    return Article;
}