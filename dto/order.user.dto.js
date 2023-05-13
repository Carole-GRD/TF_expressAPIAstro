

class OrderUserDTO {
    constructor( 
        { 
            id, 
            firstname,
            lastname,
            email,
            address_street,
            address_number,
            address_city,
            address_postalCode,
            address_country
        } ) {
                this.id = id;
                this.firstname = firstname;
                this.lastname = lastname;
                this.email = email;
                this.address_street = address_street;
                this.address_number = address_number;
                this.address_city = address_city;
                this.address_postalCode = address_postalCode;
                this.address_country = address_country;
            }
}

module.exports = OrderUserDTO;