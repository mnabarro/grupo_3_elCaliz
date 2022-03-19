// ************ Require's ************
const express = require ('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController.js');

/*** FRONT! ***/ 
/*** GET ONE PRODUCT ***/ 
router.get('/:id', productsController.productDetail); 

/*** SHOw ALL PRODUCTS PER CATEGORY ***/ 
router.get('/category/:category', productsController.category);

router.get('/search/:criterio', productsController.search); //Ruta aun no solicitada, pensada para la caja de búsqueda

module.exports = router;