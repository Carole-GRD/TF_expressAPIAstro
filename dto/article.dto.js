const { ref } = require("yup");
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
            Orders,
            Stores
        }
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.reference = reference;
        
        this.author = author ?? null;

        this.Orders = Orders ? new ArticleOrderDTO(Orders) : [];
        this.Stores = Stores ? new ArticleStoreDTO(Stores) : [];
    }
}

module.exports = ArticleDTO;