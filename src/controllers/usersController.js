const { validationResult } = require('express-validator');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const db = require('../database/models');
const { ResultWithContext } = require('express-validator/src/chain');
const { Op } = require("sequelize");
const sequelize = db.sequelize;

const usersController = {
    login: (req, res) => {
        res.render('users/loginUser.ejs', {
            cssa: 'login.css',
            title: "El Cáliz - Ingresar"
        });
    },
    processLogin: (req, res) => {
        db.User.findOne({
            where: {
                email: { [Op.like]: req.body.email }
            }
        }).then(usr => {
                if (usr) {
                    let passwordOK = bcryptjs.compareSync(req.body.password, usr.password);

                    if (passwordOK) {
                        req.session.userLogged = usr;

                        if (req.body.recordar != undefined){
                            res.cookie('recordar', req.body.email, {maxAge: 1000*30})
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
                        title: "Ingresar",
                        errors: {
                            email: {
                                msg: 'Usuario no registrado.'
                            }
                        }
                    });
                }
            }).catch(err => {
                return res.send(err)
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
                email: { [Op.like]: req.body.email }
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
                        title: "Registrarse"
                    });
                } else {
                    
                    db.User.create({
                        name: req.body.name,
                        lastname: req.body.lastname,
                        dni: req.body.dni,
                        address: req.body.address,
                        phone: req.body.phone,
                        email: req.body.email,
                        password: bcryptjs.hashSync(req.body.password, 10),
                        image: req.file.filename,
                        group_id: req.body.group_id
                    });


                    return res.redirect('/users/login');
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
            title: "Perfil de usuario",
        });

    },

    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    }
};

module.exports = usersController;