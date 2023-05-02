const categoryRouter = require('./category.router');
const markRouter = require('./mark.router');
const orderRouter = require('./order.router');
const photoRouter = require('./photo.router');
const storeRouter = require('./store.router');
const userRouter = require('./user.router');



const router = require('express').Router();

router.use('/category', categoryRouter);
router.use('/mark', markRouter);
router.use('/order', orderRouter);
router.use('/photo', photoRouter);
router.use('/store', storeRouter);
router.use('/user', userRouter);


module.exports = router;