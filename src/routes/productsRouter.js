const express = require ('express');
const router = express.Router();

const productsController = require('../controllers/productsController.js');

router.get('/', productsController.index);
router.get('/category/:category', productsController.category);
router.get('/search/:criterio', productsController.search);
router.get('/detail/:id', productsController.productDetail);
router.get('/edit/:id', productsController.editProduct);
router.get('/delete/:id', productsController.deleteProduct);
router.get('/create', productsController.createProduct);
router.post('/', productsController.newProduct);




module.exports = router;