
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
        },
        address_street : {
            type: DataTypes.STRING,
            allowNull: false
        },
        address_number : {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt : {
                    msg : 'Le numéro de la rue doit être un nombre entier'
                },
                min: {
                    args: [1],
                    msg: 'Le numéro de la rue doit être supérieur ou égal à 1'
                }
            }
        },
        address_city : {
            type: DataTypes.STRING,
            allowNull: false
        },
        address_postalCode : {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                cp_BE(value) {
                    if (( this.delivery_country === 'Belgium' || this.delivery_country === 'Belgique' ) && !/^\d{4}$/.test(value)) {            
                        throw new Error('Le code postal doit contenir 4 chiffres');
                    }
                },
                cp_FR(value) {
                    if ( this.delivery_country === 'France' && !/^\d{5}$/.test(value)) {   
                        throw new Error('Le code postal doit contenir 5 chiffres');
                    }
                }
            }
        },
        address_country : {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName : 'User'
    });

    return User;
};