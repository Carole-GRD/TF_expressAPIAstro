

class Store {
    constructor( {
        id,
        name,
        address_street,
        address_number,
        address_city,
        address_postalCode,
        address_country,
        phone
    }) {
        this.id = id;
        this.name = name;
        this.address_street = address_street;
        this.address_number = address_number;
        this.address_city = address_city;
        this.address_postalCode = address_postalCode;
        this.address_country = address_country;
        this.phone = phone;
    }
}

module.exports = Store;