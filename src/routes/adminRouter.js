const express = require ('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');

const validations = require('../middlewares/formProductValidation');

const adminController = require('../controllers/adminController.js');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../public/img/products');
    },
    filename: function(req, file, cb) {
        cb(null,`${Date.now()}_img_${path.extname(file.originalname)}`)
    }
});

const uploadFile = multer({ storage });
//ADMIN
router.get('/', adminController.index);
router.get('/products/list', adminController.listProducts); //Lista todos los productos
router.get('/login', adminController.login);

/*** LIST ALL USERS ***/ 
router.delete('/users/:id', adminController.deleteUser);
router.get('/users/list', adminController.listUser);
/*** EDIT ALL USERS ***/ 
router.get('/users/edit/:id', adminController.editUser);
router.post('/users/edit/:id', adminController.updateUser);
/*** DELETE ALL USERS ***/ 



/*** CREATE ONE PRODUCT ***/ 
router.get('/products/add',adminController.add); //Muestra el formulario de creación de producto
router.post('/products/add', uploadFile.single('image'), validations, adminController.create); //Envía los datos para la creación de un nuevo producto

/*** EDIT ONE PRODUCT ***/ 
router.get('/products/edit/:id', adminController.editProductForm); //Muestra el formulario para edición del producto
router.post('/products/edit/:id',uploadFile.single('image'), adminController.editProduct); //Envía los datos para almacenar los cambios de la edición

/*** DELETE ONE PRODUCT ***/ 
router.delete('/products/:id', adminController.deleteProduct);



/*const express = require ('express');
const router = express.Router();
const adminController = require('../controllers/adminController.js');

router.get('/dashboard', adminController.dashboard);
router.get('/crudUsers', adminController.crudUsers);*/

module.exports = router;