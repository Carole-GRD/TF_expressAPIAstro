const categoryRouter = require('./category.router');
const userRouter = require('./user.router');



const router = require('express').Router();

router.use('/category', categoryRouter)
router.use('/user', userRouter);



module.exports = router;