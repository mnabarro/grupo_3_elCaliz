const { validationResult } = require('express-validator');
const fs = require('fs');
const User = require('../models/User');
const bcryptjs = require('bcryptjs');

const usersController = {

    login: (req, res) => {
         res.render('users/login', {
            cssa: 'login.css',
            title: "El Cáliz - Ingresar"
        });
    },
    processLogin: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);

        if ( userToLogin ) {

            let passwordOK = bcryptjs.compareSync(req.body.password, userToLogin.password);

            if  (passwordOK ) {
                delete userToLogin.password;

                req.session.userLogged = userToLogin;

                if (userToLogin.isAdmin) {

                    delete userToLogin.isActive;
                    delete userToLogin.isAdmin;
                    
                    return res.redirect('/admin');
                
                } else {
                    
                    delete userToLogin.isActive;
                    delete userToLogin.isAdmin;
                    
                    return res.redirect('/users/profile');
                }

            } else {

                return res.render('users/login', {
                    cssa: 'login.css',
                    title: "El Cáliz - Ingresar",
                    errors: {
                        email: {
                            msg: 'Las credenciales son inválidas.'
                        }
                    }
                });
            }

        }

        return res.render('users/login', {
            cssa: 'login.css',
            title: "El Cáliz - Ingresar",
            errors: {
                email: {
                    msg: 'Usuario no registrado.'
                }
            }
        });

    },

    register: (req, res) => {
        res.cookie('testing', 'hola!', {maxAge : 1000 * 30 })
        res.render('users/register', {
            cssa: 'register.css',
            title: "El Cáliz - Registrarse"
        });
    },

    processRegister: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body,
                cssa: 'register.css',
                title: "El Cáliz - Registrarse"
            });
        }

        let userInDB = User.findByField('email', req.body.email);

        if (userInDB) {
            return res.render('users/register', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body,
                cssa: 'register.css',
                title: "El Cáliz - Registrarse"
            });
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            imageCover: req.file.filename,
            isActive: true,
            isAdmin: false
        }

        User.create(userToCreate);

        return res.redirect('/users/login');
    },

    forgotPassword: (req, res) => {
        res.send('Forgot Password!');
    },

    profile: (req, res) => {
        return res.render('users/profile', {
            cssa: 'profile.css',
            title: "El Cáliz - Perfil de usuario",
        });

    },

    logout : (req, res ) => {
        req.session.destroy();
        return res.redirect('/');
    }
};

module.exports = usersController;