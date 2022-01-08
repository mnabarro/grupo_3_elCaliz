const { validationResult } = require('express-validator');
const User = require('../models/User');
const bcryptjs = require('bcryptjs');

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

        let userInDB = User.findByField('email', req.body.email);

        if(userInDB){
            return res.render('users/register', {
                errors: {
                    email:{
                        msg:'Este email ya esta registrado'
                    }
                }, oldData: req.body, cssa: 'register.css', title:"El Cáliz - Registrarse"
            });
        }

        let userToCreate ={
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            imageCover: req.file.filename
        }

        User.create(userToCreate);

        return res.redirect('/');
    },

    forgotPassword: (req, res) => {
        res.send('Forgot Password!'); 
    },

    profile: (req, res) => {
        res.send(`Perfil del usuario ${req.params.userId}`); 
    }
};

module.exports = usersController;