const categoryRouter = require('./category.router');
const markRouter = require('./mark.router');
const photoRouter = require('./photo.router');
const userRouter = require('./user.router');



const router = require('express').Router();

router.use('/category', categoryRouter);
router.use('/mark', markRouter);
router.use('/photo', photoRouter);
router.use('/user', userRouter);


module.exports = router;