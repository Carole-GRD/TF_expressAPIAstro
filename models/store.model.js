
const { Sequelize, ModelStatic, DataTypes } = require('sequelize');

/**
 * Constructeur du Model Store
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    const Store = sequelize.define('Store', { 
        name : {
            type : DataTypes.STRING(50),
            allowNull : false,
        },
        address_street : {
            type: DataTypes.STRING,
            allowNull: true
        },
        address_number : {
            type: DataTypes.INTEGER,
            allowNull: true,
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
            allowNull: true
        },
        address_postalCode : {
            type: DataTypes.INTEGER,
            allowNull: true,
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
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING(25),
            allowNull: true,
            // TODO : corriger la validation !
            // validate: {
            //   is: {
            //     args: [/^\+?[0-9]{7,14}$/],
            //     msg: 'Le numéro de téléphone doit être au format international et doit contenir entre 7 et 14 chiffres'
            //   }
            // }
          }
    }, {
        tableName : 'Store'
    });

    return Store;
}