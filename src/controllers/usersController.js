const {
    validationResult
} = require('express-validator');
const fs = require('fs');
const User = require('../Database/User-M');
const bcryptjs = require('bcryptjs');
const db = require('../database/models')

const usersController = {

    list: (req, res) => {

        db.users.findAll()
            .then(function (users) {
                res.render('users/list', {
                    cssa: 'users-admin.css',
                    title: 'Administración de usuarios',
                    users: users
                });

            });
    },

    editForm: (req, res) => {
        let id = req.params.id;

        let user = db.users.findByPk(req.params.id)
            .then(function (user) {
                res.render('users/edit', {
                    cssa: 'users-edit.css',
                    title: 'Administración de usuarios',
                    user: user
                });
            });

    },

    login: (req, res) => {
        res.render('users/login', {
            cssa: 'login.css',
            title: "El Cáliz - Ingresar"
        });
    },
    processLogin: (req, res) => {
        db.users.findOne({
            where: {
                mail: req.body.email
            }
        })
            .then((usr) => {
                if (usr) {
                    let passwordOK = bcryptjs.compareSync(req.body.password, usr.password);

                    if (passwordOK) {
                        req.session.userLogged = usr;
                        console.log(usr);
                        delete usr.password;
                        return res.redirect('/users/profile');
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

                } else {
                    return res.render('users/login', {
                        cssa: 'login.css',
                        title: "El Cáliz - Ingresar",
                        errors: {
                            email: {
                                msg: 'Usuario no registrado.'
                            }
                        }
                    });
                }
            });
    },

    register: (req, res) => {
        res.cookie('testing', 'hola!', {
            maxAge: 1000 * 30
        })
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

        db.users.findOne({
            where: {
                mail: req.body.email
            }
        })
            .then((usr) => {
                if (usr) {
                    console.log('EL MAIL YA ESTA REGISTRADO');
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
                } else {

                    db.users.create({
                        nombre: req.body.name,
                        apellido: req.body.lastname,
                        mail: req.body.email,
                        dni: req.body.dni,
                        password: bcryptjs.hashSync(req.body.password, 10),
                        image: req.file.filename
                    });

                    
                    return res.redirect('/users/login');
                }
            });
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

    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    }
};

module.exports = usersController;