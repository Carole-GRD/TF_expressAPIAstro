
class ArticleOrderDTO {
    constructor(
        {
            id,
            status,
            // MM_Article_Order
            
        }
    ) {
        this.order_id = id;
        this.order_status = status;

        // this.order_quantity = MM_Article_Order.quantity ?? null;
        // this.order_sending_status = MM_Article_Order.sending_status ?? null;

    }
}

module.exports = ArticleOrderDTO;