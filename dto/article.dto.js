
const ArticleOrderDTO = require("./article.order.dto");
const ArticleStoreDTO = require("./article.store.dto");


class ArticleDTO {
    constructor(
        {
            id,
            name,
            description,
            reference,
            author,
            MarkId,
            Orders,
            Stores
        }
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.reference = reference;
         
        this.author = author ?? null;

        this.MarkId = MarkId ?? null;

        this.Orders = Orders ? Orders.map(order => new ArticleOrderDTO(order)) : [];
        this.Stores = Stores ? Stores.map(store => new ArticleStoreDTO(store)) : [];
    }
}

module.exports = ArticleDTO;