// ************ Controller Require ************
const express = require ('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController.js');

router.get('/', mainController.index);
router.get('/cart', mainController.cart);
router.get('/regret', mainController.regret);
router.get('/faq', mainController.faq);
router.get('/sitemap', mainController.siteMap);
router.get('/suscribe', mainController.suscribe);
router.get('/terms', mainController.terms);


module.exports = router;