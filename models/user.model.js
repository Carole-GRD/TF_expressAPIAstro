
const { Sequelize, ModelStatic, DataTypes } = require('sequelize');

/**
 * Constructeur du Model User
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    // sequelize.define(modelName, attributes, options)
    const User = sequelize.define('User', {
        firstname : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                notNull : true,
                notEmpty : true
            }
        },
        lastname : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                notNull : true,
                notEmpty : true
            }
        },
        pseudo : {
            type : DataTypes.STRING,
            allowNull : true,
            validate : {
                notEmpty : true,
            }
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : 'UK_User_Email',
            validate : {
                isEmail : true,
                notNull : true,
                notEmpty : true
            }
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                is : /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                notNull : true,
                notEmpty : true
            }
        },
        role : {
            type : DataTypes.ENUM,
            values : ['Utilisateur', 'Sous-Admin', 'Admin'],
            allowNull : false,
            defaultValue : 'Utilisateur',
            validate : {
                notNull : true,
                notEmpty : true,
                isIn : [['Utilisateur', 'Sous-Admin', 'Admin']] 
            }
        },
        avatar : {
            type : DataTypes.STRING,
            allowNull : true,
            validate : {
                notEmpty : true,
            }
        }
    }, {
        tableName : 'User'
    });

    return User;
};