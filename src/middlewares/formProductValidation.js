const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('sku').notEmpty().withMessage('El campo no puede estar vacío'),
    body('name').notEmpty().withMessage('El campo no puede estar vacío').bail()
	.isLength({min:5}).withMessage('El nombre es demsiado corto'),
    body('description').notEmpty().withMessage('El campo no puede estar vacío').bail()
	.isLength({min:20}).withMessage('Debe tener al menos 20 caracteres'),
    body('price').notEmpty().withMessage('El campo no puede estar vacío'),
    // body('discount').notEmpty().withMessage('El campo no puede estar vacío'),
    body('category').notEmpty().withMessage('El campo no puede estar vacío'),
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