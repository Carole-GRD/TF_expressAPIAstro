

const { Sequelize, ModelStatic, DataTypes } = require('sequelize');

/**
 * Constructeur du Model Order
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    const Order = sequelize.define('Order', { 
        status : {
            type: DataTypes.ENUM('En attente', 'Terminée'),
            allowNull: false,
            validate: {
                isIn: {
                    args: [['En attente', 'Terminée']],
                    msg: "Le statut de la commande doit être 'En attente' ou 'Terminée'"
                },
                customValidator(value) {
                    if (this.payment_status === 'Payé' && this.sending_status === 'expédiée') {
                        return value = 'Terminée'
                    }
                }
            }
        },
        delivery_street : {
            type: DataTypes.STRING,
            allowNull: false
        },
        delivery_number : {
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
        delivery_city : {
            type: DataTypes.STRING,
            allowNull: false
        },
        delivery_postalCode : {
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
        delivery_country : {
            type: DataTypes.STRING,
            allowNull: false
        },
        payment_method : {
            type : DataTypes.ENUM,
            values : ['Visa', 'Maestro', 'Payconiq', 'PayPal'],
            allowNull : true,    
            validate : {
                isIn : [['Visa', 'Maestro', 'Payconiq', 'PayPal']] 
            }
        },
        payment_status : {
            type : DataTypes.ENUM,
            values : ['Payé', 'En attente', 'Refusé', 'Annulé'],
            allowNull: true,
            validate: {
                isIn: {
                    args: [['Payé', 'En attente', 'Refusé', 'Annulé']],
                    msg: "Le statut de paiement doit être 'Payé', 'En attente', 'Refusé' ou 'Annulé'"
                }
            }
        }
    }, {
        tableName : 'Order'
    });

    return Order;
}