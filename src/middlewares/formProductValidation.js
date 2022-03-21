const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('sku').notEmpty().withMessage('El campo no puede estar vacío'),
    body('name').notEmpty().withMessage('El campo no puede estar vacío'),
    body('description').notEmpty().withMessage('El campo no puede estar vacío'),
    body('price').notEmpty().withMessage('El campo no puede estar vacío'),
    body('discount').notEmpty().withMessage('El campo no puede estar vacío'),
    body('category').notEmpty().withMessage('El campo no puede estar vacío')
];