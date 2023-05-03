

class StoreDTO {
    constructor( {
        id,
        name,
        address_street,
        address_number,
        address_city,
        address_postalCode,
        address_country,
        phone,
        MM_Article_Store
    }) {
        this.id = id;
        this.name = name;
        this.address_street = address_street;
        this.address_number = address_number;
        this.address_city = address_city;
        this.address_postalCode = address_postalCode;
        this.address_country = address_country;
        this.phone = phone;

        this.price = MM_Article_Store.price;
        this.discount = MM_Article_Store.discount;
        this.stock = MM_Article_Store.stock;
    }
}

module.exports = StoreDTO;