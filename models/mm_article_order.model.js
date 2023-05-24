const { Sequelize, ModelStatic, DataTypes } = require('sequelize');


/**
 * Constructeur du Model MM_Article_Order
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    const MM_Article_Order = sequelize.define('MM_Article_Order', {
        id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
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
        store : {
            type : DataTypes.INTEGER,
            allowNull: false,
            validate : {
                isInt : {
                    msg : 'L\'id du "store" doit être un nombre entier'
                },
                min : {
                    args : [0],
                    msg : 'L\'id du "store" doit être positif'
                }
            }
        },
        OrderId : {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique : false
        },
        ArticleId : {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique : false
        }
        
    },{
        tableName : 'MM_Article_Order'
    });

    return MM_Article_Order;
}

