const express = require ('express');
const router = express.Router();
const usersController = require('../controllers/usersController.js');

router.get('/register', usersController.register);
router.get('/login', usersController.login);
router.get('/forgot-password', usersController.forgotPassword);
router.get('/profile/:userId', usersController.profile);


module.exports = router;