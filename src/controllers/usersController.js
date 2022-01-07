const { validationResult } = require('express-validator');

const usersController = {

    login: (req, res) => {
        res.render('users/login', {cssa: 'login.css',title:"El Cáliz - Ingresar"});
    },

    register: (req, res) => {
        res.render('users/register',{cssa: 'register.css', title:"El Cáliz - Registrarse"});
    },

    processRegister:(req, res)=>{
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
			return res.render('users/register', {
				errors: resultValidation.mapped(),
                oldData: req.body,
                cssa: 'register.css', title:"El Cáliz - Registrarse"
			});
        }

        return res.render('index', {cssa: 'index.css', title:"El Cáliz - Home"});
    },

    forgotPassword: (req, res) => {
        res.send('Forgot Password!'); 
    },

    profile: (req, res) => {
        res.send(`Perfil del usuario ${req.params.userId}`); 
    }
};

module.exports = usersController;