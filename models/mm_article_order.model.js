const { Sequelize, ModelStatic, DataTypes } = require('sequelize');


/**
 * Constructeur du Model MM_Article_Order
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    const MM_Article_Order = sequelize.define('MM_Article_Order', {
        quantity : {
            type : DataTypes.INTEGER,
            allowNull : false,
            validate : {
                isInt : {
                    msg : 'Le nombre d\'articles achetés doit être un nombre entier'
                },
                min : {
                    args : [0],
                    msg : 'Le nombre d\'articles achetés doit être positif'
                }
            }
        },
        sending_status : {
            type : DataTypes.ENUM,
            values : ['en attente', 'en cours de traitement', 'en cours de préparation', 'prêt pour expédition', 'expédiée'],
            allowNull : false,
            defaultValue : 'en attente',
            validate : {
                isIn: {
                    args: [['en attente', 'en cours de traitement', 'en cours de préparation', 'prêt pour expédition', 'expédiée']],
                    msg: "Le statut de paiement doit être 'en attente', 'en cours de traitement', 'en cours de préparation', 'prêt pour expédition' ou 'expédiée'"
                }
            }
        }
        
    },{
        tableName : 'MM_Article_Order'
    });

    return MM_Article_Order;
}

