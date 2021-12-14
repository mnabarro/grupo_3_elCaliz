const express = require ('express');
const router = express.Router();

const productsController = require('../controllers/productsController.js');

router.get('/', productsController.index); //Listar todos los productos
router.get('/category/:category', productsController.category);

router.get('/search/:criterio', productsController.search); //Ruta aun no solicitada, pensada para la caja de búsqueda.

router.get('/edit/:id', productsController.editProductForm); //Muestro el formulario para edición, con los datos del producto cargados
router.put('/', productsController.editProduct); //Envío los datos para almacenar los cambios de la edición

router.delete('/:id', productsController.deleteProduct);

router.get('/create',productsController.createProduct); //Muestro el formulario de creación de producto

router.get('/:id', productsController.productDetail); //Detalles de un producto

router.post('/', productsController.newProduct); //Enviamos los datos para la creación de un nuevo item




module.exports = router;