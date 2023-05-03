class OrderArticleStoreDTO {
    constructor( { id, name} ) {
        this.id = id;
        this.name = name;
    }
}

class OrderArticleDTO {
    constructor( 
        { 
            id, 
            name,
            reference,
            MM_Article_Order
        } ) {
                this.article_id = id;
                this.article_name = name;
                this.article_reference = reference;

                this.article_quantity =  MM_Article_Order.quantity;
                this.article_sending_status =  MM_Article_Order.sending_status;
                
                this.article_store =  MM_Article_Order.store;
                
            }
}

module.exports = OrderArticleDTO;