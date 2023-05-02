const OrderDTO = require("../dto/order.dto");
const { User, Article, Category } = require("../models");
const db = require("../models");


const orderService = {
    getAll : async () => {
        const { rows, count } = await db.Order.findAndCountAll({
            distinct : true,
            include : [ User, {
                model : Article,
                through : { attributes : [ 'quantity', 'sending_status' ] },
                include : [ Category ]
            }]
        })

        return {
            orders : rows.map(order => new OrderDTO(order)),
            count
        }
    },

    getById : async (id) => {
        const order = await db.Order.findByPk(id, {
            include : [ User, {
                model : Article,
                through : { attributes : [ 'quantity', 'sending_status' ] },
                include : [ Category ]
            }]
        });
        
        return order ? new OrderDTO(order) : null;
    },

    create : async (orderToAdd) => {

        const transaction = await db.sequelize.transaction();

        try {
            const order = await db.Order.create(orderToAdd);
    
            for (const article of orderToAdd.articles) {
                await order.addArticles(article.id, {
                    through : { 
                        quantity: article.quantity,
                        sending_status : article.sending_status
                    }
                }, transaction)    
            }

            await transaction.commit();

            const addedOrder = await db.Order.findByPk(order.id, {
                // include : [ User ]
                include : [ User, Article ]
            })

            return addedOrder ? new OrderDTO(addedOrder) : null;

 
        }
        catch(err) {
            console.log(err);
            await transaction.rollback();
            return null;
        }
    },

    update : async (id, orderToUpdate) => {
        const updatedRow = await db.Order.update(orderToUpdate, {
            where : { id }
        });
        return updatedRow[0] === 1;
    },

    delete : async (id) => {
        const nbDeleteRow = await db.Order.destroy({
            where : { id }
        });
        return nbDeleteRow === 1;
    },
}

module.exports = orderService;