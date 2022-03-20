const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('name').notEmpty().withMessage('Ecribe tu Nombre').bail()
	.isLength({min:3}).withMessage('El nombre es demsiado corto'),
    body('lastname').notEmpty().withMessage('Ecribe tu Apellido'),
    body('dni').notEmpty().withMessage('Ecribe tu dni'),
    body('email').notEmpty().withMessage('Ecribe tu Email').bail().isEmail().withMessage('Tiene que ser un formato de email válido'),
    body('password').notEmpty().withMessage('Ecribe una contraseña').bail()
	.isLength({min:8}).withMessage('El campo de contraseña debe tener al menos 8 caracteres'),
    body('image').custom((value, {req})=>{
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if(!file){
            throw new Error('Tienes que subir una imagen')
        } else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
        }
        return true;
    })
];