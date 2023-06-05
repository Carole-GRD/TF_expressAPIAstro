const db = require("../models");
const articleService = require("../services/article.service");
const ErrorResponse = require("../utils/error.response");
const { SuccessArrayResponse, SuccessResponse } = require("../utils/success.response");


const articleController = {
    getAll : async (req, res) => {
        const { articles, count } = await articleService.getAll();
        res.status(200).json(new SuccessArrayResponse(articles, count))
    },

    getById : async (req, res) => {
        const { id } = req.params;
        const article = await articleService.getById(id);
        if (!article) {
            res.sendStatus(404);
            return;
        }
        res.status(200).json(new SuccessResponse(article));
    },

    getByIdAndByStore : async (req, res) => {
        const { id, storeId } = req.params;
        const article = await articleService.getByIdAndByStore(id, storeId);
        if (!article) {
            res.sendStatus(404);
            return;
        }
        res.status(200).json(new SuccessResponse(article));
    },

    create : async (req, res) => {
        const data = req.body;
        const article = await articleService.create(data);
        res.location('/article/' + article.id);
        res.status(201).json(new SuccessResponse(article, 201));
    },

    update : async (req, res) => {
        const { id } = req.params;
        const data = req.body;
        const isUpdated = await articleService.update(id, data);
        if (!isUpdated) {
            res.sendStatus(404);
            return;
        }
        res.sendStatus(204);
    },

    delete : async (req, res) => {
        const { id } = req.params;
        const isDeleted = await articleService.delete(id);
        if (!isDeleted) {
            res.sendStatus(404);
            return;
        }
        res.sendStatus(204);
    },


    like : async (req, res ) => {

        const articleId = req.params.id;
        const userId = req.user.id;

        const like = await articleService.like(articleId, userId);

        if (!like) {
            res.status(404).json(new ErrorResponse('TrackId or UserId not found', 404));
            return;
        }

        res.location('/article/' + articleId);  

        res.status(201).json(new SuccessResponse({ msg : 'Like success' }, 201));
   
    },

    disLike : async (req, res) => {

        const articleId = req.params.id;
        const userId = req.user.id;

        const disLike = await articleService.disLike(articleId, userId);

        if (!disLike) {
            res.status(404).json(new ErrorResponse('TrackId or UserId not found or link is not present', 404));
            return;
        }

        res.status(204).json(new SuccessResponse({ msg : 'Dislike success' }, 204));        
    }, 

    getByLike : async (req, res) => {

        const likedArticles = await articleService.getByLike();
        // console.log('article.controller - getByLike (likedArticles) : ', likedArticles);
        // res.status(200).json(likedArticles);
        res.status(200).json(new SuccessArrayResponse(likedArticles));
    },


    updateStore : async (req, res) => {
        const articleId = req.params.id;
        const storeData = req.body;

        const storeUpdated = await articleService.updateStore(articleId, storeData);
        console.log('article.controller - updateStore (storeUpdated) : ', storeUpdated);

        if (!storeUpdated) {
            res.status(404).json(new ErrorResponse('articleId or storeId not found', 404));
            return;
        }

        res.location('/article/' + articleId); 
        
        res.status(201).json(new SuccessResponse({ msg : 'Store updated with success' }, 201));
    },

    createStore : async (req, res) => {
        const articleId = req.params.id;
        const storeData = req.body;

        const storeCreate = await articleService.createStore(articleId, storeData);

        if (!storeCreate) {
            res.status(404).json(new ErrorResponse('articleId or storeId not found', 404));
            return;
        }

        res.location('/article/' + articleId); 
        
        res.status(201).json(new SuccessResponse({ msg : 'Link successfully added' }, 201));
        
    },

    deleteteStore : async (req, res) => {
        const articleId = req.params.id;
        const listStoreId = req.body.stores;

        const storeDelete = await articleService.deleteteStore(articleId, listStoreId);

        if (!storeDelete) {
            res.status(404).json(new ErrorResponse('articleId or storeId not find - or link not present', 404));
            return;
        }

        res.status(204).json(new SuccessResponse({ msg : 'Link successfully removed !'}, 204));
    }
}

module.exports = articleController;