const express = require ('express');
const router = express.Router();

const productsController = require('../controllers/productsController.js');

router.use(express.static('public'));

router.get('/', productsController.index);
router.get('/cat/:category', productsController.cat);
router.get('/search/:criterio', productsController.search);
router.get('/add', productsController.add);
/* Si agrego el parámetro, se rompe el acceso a "puiblic"  y no aplica ni estilos ni imágenes*/
router.get('/detail', productsController.detail);
router.get('/edit/:id', productsController.edit);
router.get('/delete/:id', productsController.delete);

module.exports = router;