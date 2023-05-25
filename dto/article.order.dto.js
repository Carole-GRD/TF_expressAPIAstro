
class ArticleOrderDTO {
    constructor(
        {
            id,
            status,
            // Article_Order
            
        }
    ) {
        this.order_id = id;
        this.order_status = status;

        // this.order_quantity = Article_Order.quantity ?? null;
        // this.order_sending_status = Article_Order.sending_status ?? null;

    }
}

module.exports = ArticleOrderDTO;