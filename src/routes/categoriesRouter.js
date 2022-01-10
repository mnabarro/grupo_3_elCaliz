// ************ Require's ************
const express = require ('express');
const router = express.Router();

// ************ Controller Require ************
const categoriesController = require('../controllers/categoriesController.js');

/*** SHOw ALL PRODUCTS PER CATEGORY ***/ 
router.get('/:category', categoriesController.index);

module.exports = router;