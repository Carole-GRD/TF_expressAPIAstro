

const articleRouter = require('express').Router();


articleRouter.route('/')
    .get( (req, res) => { res.sendStatus(501) } )
    .post( (req, res) => { res.sendStatus(501) } )
    
articleRouter.route('/:id')
    .get( (req, res) => { res.sendStatus(501) } )
    .put( (req, res) => { res.sendStatus(501) } )
    .delete( (req, res) => { res.sendStatus(501) } )


module.exports = articleRouter;