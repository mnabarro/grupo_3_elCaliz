const express = require ('express');
const router = express.Router();
const usersController = require('../controllers/usersController.js');

//Middlewares
const uploadImage = require('../middlewares/multerUserMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');

/*----REGISTER----*/
router.get('/register', usersController.register);
router.post('/register', uploadImage.single('imageCover'), validations, usersController.processRegister);

router.get('/login', usersController.login);
router.get('/forgot-password', usersController.forgotPassword);
router.get('/profile/:userId', usersController.profile);


module.exports = router;