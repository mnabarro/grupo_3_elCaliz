const express = require ('express');
const router = express.Router();

const productsController = require('../controllers/productsController.js');

router.get('/', productsController.index);
router.get('/category/:category', productsController.category);
router.get('/search/:criterio', productsController.search);
router.get('/Detail/:id', productsController.productDetail);
router.get('/add', productsController.addProductForm);
router.post('/', productsController.addProduct);
router.get('/edit/:id', productsController.editProduct);
router.get('/delete/:id', productsController.deleteProduct);


module.exports = router;