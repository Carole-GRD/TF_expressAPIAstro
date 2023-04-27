const userRouter = require('./user.router');



const router = require('express').Router();

router.use('/user', userRouter);



module.exports = router;