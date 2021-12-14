const express = require ('express');
const router = express.Router();

const productsController = require('../controllers/productsController.js');

//FRONT
router.get('/:id', productsController.productDetail); //Muestra el detalle de un producto
router.get('/category/:category', productsController.category);
router.get('/search/:criterio', productsController.search); //Ruta aun no solicitada, pensada para la caja de búsqueda

module.exports = router;