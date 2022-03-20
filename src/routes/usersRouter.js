const express = require ('express');
const router = express.Router();
const usersController = require('../controllers/usersController.js');
//Middlewares
const uploadImage = require('../middlewares/multerUserMiddleware');
const validationsRegister = require('../middlewares/validateRegisterMiddleware');
const validationsLogin = require('../middlewares/validateLoginMiddleware');
const req = require('express/lib/request');
const guestMiddleware = require ('../middlewares/guestMiddleware');
const authMiddleware = require ('../middlewares/authMiddleware');

/*----REGISTER----*/
router.get('/register', guestMiddleware, usersController.register);
router.post('/register', uploadImage.single('image'), validationsRegister, usersController.processRegister);

/*----LOGIN----*/
router.get('/login', guestMiddleware, usersController.login);
router.post('/login',validationsLogin, usersController.processLogin);

router.get('/forgot-password', usersController.forgotPassword);
router.get('/profile', authMiddleware, usersController.profile);

router.get('/logout', usersController.logout);

module.exports = router;