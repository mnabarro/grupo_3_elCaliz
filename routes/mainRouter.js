const express = require ('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js');

router.use(express.static('public'));

router.get('/', mainController.index);
router.get('/regret', mainController.regret);
router.get('/faq', mainController.faq);
router.get('/sitemap', mainController.siteMap);
router.get('/suscribe', mainController.suscribe);
router.get('/tyc', mainController.tyc);

module.exports = router;