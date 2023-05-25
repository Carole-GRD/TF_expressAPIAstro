

const { Sequelize, ModelStatic, DataTypes } = require('sequelize');

/**
 * Constructeur du Model Order
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    const Order = sequelize.define('Order', { 
        order_status : {
            type: DataTypes.ENUM('En attente', 'Terminée'),
            allowNull: false,
            defaultValue : 'En attente',
            validate: {
                isIn: {
                    args: [['En attente', 'Terminée']],
                    msg: "Le statut de la commande doit être 'En attente' ou 'Terminée'"
                },
                customValidator(value) {
                    if (this.payment_status === 'Payé' && this.sending_status === 'expédiée') {
                        // return value = 'Terminée'
                        this.setDataValue('order_status', 'Terminée');
                    }
                }
            }
        },
        sending_status : {
            type : DataTypes.ENUM,
            values : ['en attente', 'en cours de préparation', 'prêt pour expédition', 'expédiée'],
            allowNull : false,
            defaultValue : 'en attente',
            validate : {
                isIn: {
                    args: [['en attente', 'en cours de préparation', 'prêt pour expédition', 'expédiée']],
                    msg: "Le statut de paiement doit être 'en attente', 'en cours de préparation', 'prêt pour expédition' ou 'expédiée'"
                }
            }
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