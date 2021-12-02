const express = require ('express');
const router = express.Router();

const productsController = require('../controllers/productsController.js');

router.get('/', productsController.index);
router.get('/category/:category', productsController.category);
router.get('/search/:criterio', productsController.search);
router.get('/productDetail/:id', productsController.productDetail);
router.get('/addProduct', productsController.addProduct);
router.get('/editProduct/:id', productsController.editProduct);
router.get('/deleteProduct/:id', productsController.deleteProduct);


module.exports = router;