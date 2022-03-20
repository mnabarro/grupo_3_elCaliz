const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('email').notEmpty().withMessage('Ecribí tu Email').bail().isEmail().withMessage('Tiene que ser un formato de email válido'),
    body('password').notEmpty().withMessage('Ecribe tu contraseña'),
];