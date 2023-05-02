
const OrderUserDTO = require("./order.user.dto");
const OrderArticleDTO = require("./order.article.dto");

class OrderDTO {
    constructor( 
        {   
            id, 
            status, 
            delivery_street,
            delivery_number,
            delivery_city,
            delivery_postalCode,
            delivery_country,
            payment_method,
            payment_status,
            User,
            Articles
        } ) {
                this.id = id;
                this.status = status;
                this.delivery_street = delivery_street;
                this.delivery_number = delivery_number;
                this.delivery_city = delivery_city;
                this.delivery_postalCode = delivery_postalCode;
                this.delivery_country = delivery_country;
                this.payment_method = payment_method;
                this.payment_status = payment_status;
                
                this.User = User ? new OrderUserDTO(User) : null;
 
                this.Articles = Articles ? Articles.map(article => new OrderArticleDTO(article)) : [];      
                
            }
        }
module.exports = OrderDTO;