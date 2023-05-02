const photoController = require('../controllers/photo.controller');

const photoRouter = require('express').Router();


// -----------   CONFIG MULTER  --------------
const multer = require('multer');
const storage = require('../utils/config.multer')('photos')
const upload = multer({ storage });
// ---------   FIN CONFIG MULTER  ------------


photoRouter.route('/article/:id')
    .get(photoController.getAll)
    // .post(photoController.create)
    .post(upload.single('path'), photoController.create)

    

photoRouter.route('/:id')
    .get(photoController.getById)
    .patch(upload.single('path'), photoController.updatePhoto)
    .delete(photoController.delete)






module.exports = photoRouter;