const express = require ('express');
const router = express.Router();

const productsController = require('../controllers/productsController.js');

router.get('/', productsController.index);
router.get('/cat/:category', productsController.cat);
router.get('/search/:criterio', productsController.search);
router.get('/detail/:id', productsController.detail);
router.get('/add', productsController.add);
router.get('/edit/:id', productsController.edit);
router.get('/delete/:id', productsController.delete);

module.exports = router;