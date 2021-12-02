const express = require ('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController.js');

router.get('/cart', ordersController.cart);
router.get('/checkout', ordersController.checkout);
router.get('/orders', ordersController.orders);

module.exports = router;