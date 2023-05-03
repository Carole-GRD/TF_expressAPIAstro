

class ArticleStoreDTO {
    constructor( {
        id,
        name,
        address_city,
        address_country,
        phone,
        MM_Article_Store
    }) {
        this.store_id = id;
        this.store_name = name;
        this.store_address_city = address_city;
        this.store_address_country = address_country;
        this.store_phone = phone;

        this.price = MM_Article_Store.price;
        this.discount = MM_Article_Store.discount;
        this.stock = MM_Article_Store.stock;
    }
}

module.exports = ArticleStoreDTO;