
const { Sequelize, ModelStatic, DataTypes } = require('sequelize');

/**
 * Constructeur du Model Category
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    const Category = sequelize.define('Category', {
        name : {
            type : DataTypes.STRING(50),
            allowNull : false,
            unique : 'UK_Category_Name'
        }
    }, {
        tableName : 'Category'
    });

    return Category;
}