const express = require ('express');
const router = express.Router();

const adminController = require('../controllers/adminController.js');

//ADMIN
router.get('/products', adminController.index); //Lista todos los productos

/*** CREATE ONE PRODUCT ***/ 
router.get('/products/create',adminController.createProduct); //Muestra el formulario de creación de producto
router.post('/products', adminController.newProduct); //Envía los datos para la creación de un nuevo producto

/*** EDIT ONE PRODUCT ***/ 
router.get('/products/edit/:id', adminController.editProductForm); //Muestra el formulario para edición del producto
router.put('/products', adminController.editProduct); //Envía los datos para almacenar los cambios de la edición

/*** DELETE ONE PRODUCT ***/ 
router.delete('/products/:id', adminController.deleteProduct);



/*const express = require ('express');
const router = express.Router();
const adminController = require('../controllers/adminController.js');

router.get('/dashboard', adminController.dashboard);
router.get('/crudUsers', adminController.crudUsers);*/

module.exports = router;