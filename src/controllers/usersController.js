const {
    validationResult
} = require('express-validator');
const fs = require('fs');
const User = require('../Database/User-M');
const bcryptjs = require('bcryptjs');
const db = require('../database/models');
const { ResultWithContext } = require('express-validator/src/chain');

const usersController = {
    list: (req, res) => {
        db.User.findAll()
            .then(users => {
                res.render('users/listUser.ejs', 
                    { users , 
                      cssa: 'users-admin.css',
                      title: 'Administración de usuarios' });
            }).catch((error) => {
                if (error) throw error;
            })
    },

    editForm: (req, res) => {
        let id = req.params.id;
        let user = db.User.findByPk(req.params.id)
            .then(function (user) {
                res.render('users/editUser.ejs', 
                {user, 
                 cssa: 'users-edit.css',
                 title: 'Administración de usuarios'});
            }).catch((error) => {
                if (error) throw error;
            })
    },

    login: (req, res) => {
        res.render('users/loginUser.ejs', {
            cssa: 'login.css',
            title: "El Cáliz - Ingresar"
        });
    },
    processLogin: (req, res) => {
        db.User.findOne({
            where: {
                mail: req.body.email
            }
        }).then(usr => {
                if (usr) {
                    let passwordOK = bcryptjs.compareSync(req.body.password, usr.password);

                    if (passwordOK) {
                        req.session.userLogged = usr;

                        if (req.body.recordar != undefined){
                            res.cookie('recordar', usr.email, {maxAge: 1000*30})
                        }
                        console.log(usr);
                        delete usr.password;
                        return res.redirect('/users/profile');
                    } else {
                        return res.render('users/loginUser.ejs', {
                            cssa: 'login.css',
                            title: "Ingresar",
                            errors: {
                                email: {
                                    msg: 'Las credenciales son inválidas.'
                                }
                            }
                        });
                    }
                } else {
                    return res.render('users/loginUser.ejs', {
                        cssa: 'login.css',
                        title: "El Cáliz - Ingresar",
                        errors: {
                            email: {
                                msg: 'Usuario no registrado.'
                            }
                        }
                    });
                }
            }).catch((error) => {
                if (error) throw error;
            })
    },

    register: (req, res) => {
        res.cookie('testing', 'hola!', {
            maxAge: 1000 * 30
        })
        res.render('users/registerUser.ejs', {
            cssa: 'register.css',
            title: "El Cáliz - Registrarse"
        });
    },

    processRegister: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('users/registerUser.ejs', {
                errors: resultValidation.mapped(),
                oldData: req.body,
                cssa: 'register.css',
                title: "El Cáliz - Registrarse"
            });
        }

        db.User.findOne({
            where: {
                mail: req.body.email
            }
        }).then(usr => {
                if (usr) {
                    console.log('EL MAIL YA ESTA REGISTRADO');
                    return res.render('users/registerUser.ejs', {
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

                    db.User.create({
                        nombre: req.body.name,
                        apellido: req.body.lastname,
                        mail: req.body.email,
                        dni: req.body.dni,
                        password: bcryptjs.hashSync(req.body.password, 10),
                        image: req.file.filename
                    });


                    return res.redirect('users/login');
                }
            }).catch((error) => {
                if (error) throw error;
            })
    },

    forgotPassword: (req, res) => {
        res.send('Forgot Password!');
    },

    profile: (req, res) => {
        return res.render('users/profileUser.ejs', {
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