const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('name').notEmpty().withMessage('Ecribe un Nombre'),
    body('lastname').notEmpty().withMessage('Ecribe tu Apellido'),
    body('email').notEmpty().withMessage('Ecribe tu Email').bail().isEmail().withMessage('Tiene que ser un formato de email válido'),
    body('password').notEmpty().withMessage('Ecribe una contraseña'),
    body('imageCover').custom((value, {req})=>{
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