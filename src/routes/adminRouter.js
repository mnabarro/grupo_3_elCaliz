const express = require ('express');
const router = express.Router();
const adminController = require('../controllers/adminController.js');

router.get('/dashboard', adminController.dashboard);
router.get('/crudUsers', adminController.crudUsers);

module.exports = router;