const { Sequelize, ModelStatic, DataTypes } = require('sequelize');


/**
 * Constructeur du Model Article_Order
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    const Article_Order = sequelize.define('Article_Order', {
        // id : {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true
        // },
        quantity : {
            type : DataTypes.INTEGER,
            allowNull : false,
            validate : {
                isInt : {
                    msg : 'Le nombre d\'articles achetés doit être un nombre entier'
                },
                min : {
                    args : [0],      //  /!\ à corriger !   => "args : [1]"    => le minimum autorisé, c'est 1 et pas 0 
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
        // OrderId : {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        // ArticleId : {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // }
        
    },{
        tableName : 'Article_Order'
    });

    return Article_Order;
}

