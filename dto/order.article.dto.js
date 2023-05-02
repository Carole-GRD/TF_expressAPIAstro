

class OrderArticleDTO {
    constructor( 
        { 
            id, 
            name,
            reference,
            MM_Article_Order
        } ) {
                this.id = id;
                this.name = name;
                this.reference = reference;

                this.quantity =  MM_Article_Order.quantity;
                this.sending_status =  MM_Article_Order.sending_status;

            }
}

module.exports = OrderArticleDTO;