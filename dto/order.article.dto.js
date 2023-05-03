

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

            }
}

module.exports = OrderArticleDTO;