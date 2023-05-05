const { MM_Article_Store } = require("../models");

class OrderArticleStoreDTO {
    constructor( { id, name, MM_Article_Store } ) {
        this.id = id;
        this.name = name;
        this.price = MM_Article_Store ? MM_Article_Store.price : null;
        this.discount = MM_Article_Store ? MM_Article_Store.discount : null;
        this.stock = MM_Article_Store ? MM_Article_Store.stock : null;
    }
}

class OrderArticleDTO {
    constructor( 
        { 
            id, 
            name,
            reference,
            MM_Article_Order,
            Stores
        } ) {
                this.article_id = id;
                this.article_name = name;
                this.article_reference = reference;

                this.article_quantity =  MM_Article_Order.quantity;
                this.article_sending_status =  MM_Article_Order.sending_status;

        
                this.article_store =  Stores ? new OrderArticleStoreDTO(Stores.find(store => store.id === MM_Article_Order.store)) : [];  
                
            }
}

module.exports = OrderArticleDTO;