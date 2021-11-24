const express = require ('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController.js');

router.use(express.static('public'));

router.get('/cart', ordersController.cart);
router.get('/checkout', ordersController.checkout);
router.get('/history', ordersController.history);

module.exports = router;