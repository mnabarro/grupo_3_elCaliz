const { validationResult } = require('express-validator');
const fs = require('fs');
const User = require('../models/User');
const bcryptjs = require('bcryptjs');

const usersController = {

    login: (req, res) => {
        res.render('users/login', {cssa: 'login.css',title:"El Cáliz - Ingresar"});
    },
    processLogin: (req,res) => {
        const errors = validationResult(req);
        if(errors.isEmpty()) {
            let usersJson = fs.readFileSync('users.json', 'utf-8');
            let users;
            if (usersJson == '') {
                users = [];
            } else {
                users =JSON.parse(usersJson);
            }
            for (let i=0; i < users.length; i++) {
                if (users[i] == req.body.email) {
                    if (bcryptjs.hashSync(req.body.password, users[i].password)) {
                        let userLogin = users[i];
                        break;
                    }
                }
            }
            if (userLogin == undefined) {
                return res.render('/users/login', {errors:[
                    {msg: 'Ingreso invalido, usuario o contraseña erroneos'}
                ]});
            }
            req.session.userLogin = userLogin;

        } else {
            return res.render('login', {errors:errors.errors});
        }
        return res.redirect('/');
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
            imageCover: req.file.filename,
            isActive: true,
            isAdmin: false
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