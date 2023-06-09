
const userController = require('../controllers/user.controller');

const userRouter = require('express').Router();


// -----------   CONFIG MULTER  --------------
const multer = require('multer');
const storage = require('../utils/config.multer')('avatars')
const upload = multer({ storage });
// ---------   FIN CONFIG MULTER  ------------


userRouter.route('/')
    .get(userController.getAll)
    // .post(userController.create)
    .post(upload.single('avatar'), userController.create)
    
    
userRouter.route('/:id')
    .get(userController.getById)
    // .put(userController.update)
    .put(upload.single('avatar'), userController.update)
    .delete(userController.delete)


userRouter.route('/:id/avatar')
    .patch(upload.single('avatar'), userController.updateAvatar)

userRouter.route('/:id/password')
    .patch(userController.updatePassword)

module.exports = userRouter;