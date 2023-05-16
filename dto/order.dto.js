
const OrderUserDTO = require("./order.user.dto");
const OrderArticleDTO = require("./order.article.dto");

class OrderDTO {
    constructor( 
        {   
            id, 
            order_status, 
            sending_status, 
            payment_method,
            payment_status,
            User,
            Articles
        } ) {
                this.id = id;
                this.order_status = order_status;
                this.sending_status = sending_status;
                this.payment_method = payment_method;
                this.payment_status = payment_status;
                
                this.User = User ? new OrderUserDTO(User) : null;
 
                this.Articles = Articles ? Articles.map(article => {
                    
                console.log("Articoles", article);
                    return new OrderArticleDTO(article) // → Bug is here (●'◡'●)
                }) : [];      
                
            }
        }
module.exports = OrderDTO;