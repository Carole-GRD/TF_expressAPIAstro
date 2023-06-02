
const orderService = require('../services/order.service');
const ErrorResponse = require('../utils/error.response');


const { SuccessArrayResponse, SuccessResponse} = require('../utils/success.response');


const orderController = {

    getAll : async (req, res) => {
        const { orders, count } = await orderService.getAll();
        res.status(200).json(new SuccessArrayResponse(orders, count));
    },

    getById : async (req, res) => {
        // console.log(req.params);
        const { id } = req.params;
        const order = await orderService.getById(id);
        // console.log('order controller - getById -> order : ', order);
        if (!order) {
            res.sendStatus(404);
            return;
        }
        res.status(200).json(new SuccessResponse(order));
    },

    getByUser : async (req, res) => {
        // ↓ Attention : pour récupérer l'id du "User", il faut nommer l'id comme dans la route
        // orderRouter.route('/user/:userId').get(orderController.getByUser)
        const { userId } = req.params;
        // console.log('order controller - getByUser -> userId : ', userId);
        const { orders, count } = await orderService.getByUser(userId);
        // console.log('order controller - getByUser -> orders : ', orders);
        // console.log('order controller - getByUser -> count : ', count);
        res.status(200).json(new SuccessArrayResponse(orders, count));
    },

    
    // =======================================================================================
    // getByIdAndByArticleAndByStore : async (req, res) => {
    //     const { id, articleId, storeId } = req.params;
    //     const article = await articleService.getByIdAndByStore(id, storeId, orderId);
    //     if (!article) {
    //         res.sendStatus(404);
    //         return;
    //     }
    //     res.status(200).json(new SuccessResponse(article));
    // },
    // =======================================================================================

    create : async (req, res) => {
        const data = req.body;
        const order = await orderService.create(data);
        res.location('/order/' + order.id);
        res.status(201).json(new SuccessResponse(order, 201));
    },

    update : async (req, res) => {
        const { id } = req.params;
        const data = req.body;
        const isUpdated = await orderService.update(id, data);
        if (!isUpdated) {
            res.sendStatus(404);
            return;
        }  
        res.sendStatus(204);
    },

    delete : async (req, res) => {
        const { id } = req.params;
        const isDeleted = await orderService.delete(id);
        if (!isDeleted) {
            res.sendStatus(404);
            return;
        }
        res.sendStatus(204);
    },


    createArticle : async (req, res) => {
        const orderId = req.params.id;
        const articleData = req.body;
        
        const articleCreate = await orderService.createArticle(orderId, articleData);

        if (!articleCreate) {
            res.status(404).json(new ErrorResponse('articleId or orderId not found', 404));
            return;
        }

        res.location('/order/' + orderId); 
        
        res.status(201).json(new SuccessResponse({ msg : 'Link successfully added' }, 201));
    },

    deleteArticle : async (req, res) => {
        const orderId = req.params.id;
        // console.log('order.controller - req.body !!!!!!!!!!!!!!!!!!!!!!!!!!!! : ', req.body);
        const link = req.body.link;
        // console.log('order.controller - link !!!!!!!!!!!!!!!!!!!!!!!!!!!! : ', link);
        
        const articleDelete = await orderService.deleteArticle(orderId, link);

        if (!articleDelete) {
            res.status(404).json(new ErrorResponse('orderId or articleId not find - or link not present', 404));
            return;
        }

        res.status(204).json(new SuccessResponse({ msg : 'Link successfully removed !'}, 204));
        
    }
    
}


module.exports = orderController;