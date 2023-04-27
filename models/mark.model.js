
const { Sequelize, ModelStatic, DataTypes } = require('sequelize');

/**
 * Constructeur du Model Mark
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    const Mark = sequelize.define('Mark', {
        name : {
            type : DataTypes.STRING(50),
            allowNull : false,
            unique : 'UK_Mark_Name'
        }
    }, {
        tableName : 'Mark'
    });

    return Mark;
}