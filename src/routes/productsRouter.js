const express = require ('express');
const router = express.Router();

const productsController = require('../controllers/productsController.js');

//ADMIN
router.get('/', productsController.index); //Lista todos los productos
router.get('/create',productsController.createProduct); //Muestra el formulario de creación de producto
router.post('/', productsController.newProduct); //Envía los datos para la creación de un nuevo producto
router.get('/edit/:id', productsController.editProductForm); //Muestra el formulario para edición del producto
router.put('/', productsController.editProduct); //Envía los datos para almacenar los cambios de la edición
router.delete('/:id', productsController.deleteProduct);

//FRONT
router.get('/category/:category', productsController.category);
router.get('/search/:criterio', productsController.search); //Ruta aun no solicitada, pensada para la caja de búsqueda
router.get('/:id', productsController.productDetail); //Muestra el detalle de un producto

module.exports = router;