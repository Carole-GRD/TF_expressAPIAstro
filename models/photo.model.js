
const { Sequelize, ModelStatic, DataTypes } = require('sequelize');

/**
 * Constructeur du Model Photo
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    const Photo = sequelize.define('Photo', {
        path : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : 'UK_Photo_Path'
        }
    }, {
        tableName : 'Photo'
    });

    return Photo;
}