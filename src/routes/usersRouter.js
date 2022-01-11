const express = require ('express');
const router = express.Router();
const usersController = require('../controllers/usersController.js');

//Middlewares
const uploadImage = require('../middlewares/multerUserMiddleware');
const validationsRegister = require('../middlewares/validateRegisterMiddleware');
const validationsLogin = require('../middlewares/validateLoginMiddleware');

/*----REGISTER----*/
router.get('/register', usersController.register);
router.post('/register', uploadImage.single('imageCover'), validationsRegister, usersController.processRegister);

router.get('/login', usersController.login);
router.post('/login',validationsLogin, usersController.processLogin);
router.get('/forgot-password', usersController.forgotPassword);
router.get('/profile/:userId', usersController.profile);


module.exports = router;