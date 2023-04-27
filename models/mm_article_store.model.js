
const { Sequelize, ModelStatic, DataTypes } = require('sequelize');


/**
 * Constructeur du Modele MM_Article_Store
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    const MM_Article_Store = sequelize.define('MM_Article_Store', {
        price : {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                isFloat: true, 
                min: {
                    args: [0], 
                    msg: "Le prix ne peut pas être négatif",
                },
            },
        },
        discount : {
            type: DataTypes.FLOAT,
            allowNull: true,
            validate: {
                isFloat: true,
                min: {
                    args: [0],
                    msg: "La réduction ne peut pas être inférieure à 0",
                },
                max: {
                    args: [1],
                    msg: "La réduction ne peut pas être supérieure à 1",
                },
            },
        },
        stock : {
            type : DataTypes.INTEGER,
            allowNull : false,
            validate : {
                isInt : {
                    msg : 'Le nombre d\'articles disponibles doit être un nombre entier'
                },
                min : {
                    args : [0],
                    msg : 'Le nombre d\'articles disponibles doit être positif'
                }
            }
        }
    },{
        tableName : 'MM_Article_Store'
    });

    return MM_Article_Store;
}