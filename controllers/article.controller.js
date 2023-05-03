const articleService = require("../services/article.service");
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

    create : async (req, res) => {
        const data = req.body;
        const article = await articleService.create(data);
        res.location('/article/' + article.id);
        res.status(201).json(new SuccessResponse(article, 201));
    },

    update : async (req, res) => {

    },

    delete : async (req, res) => {

    }
}

module.exports = articleController;