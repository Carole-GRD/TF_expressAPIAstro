

const storeRouter = require('express').Router();


storeRouter.route('/')
    .get((req, res) => { res.sendStatus(501)})
    .post((req, res) => { res.sendStatus(501)})

storeRouter.route('/:id')
    .get((req, res) => { res.sendStatus(501)})
    .put((req, res) => { res.sendStatus(501)})
    .delete((req, res) => { res.sendStatus(501)})

module.exports = storeRouter;