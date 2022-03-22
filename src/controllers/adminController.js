// ************ Require's ************
const { ResultWithContext } = require('express-validator/src/chain');
const { redirect } = require('express/lib/response');
const fs = require('fs');
const path = require('path');
const { runInNewContext } = require('vm');
const db = require ('../database/models')
const { validationResult } = require('express-validator');


/*const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const categoriesFilePath = path.join(__dirname, '../data/categories.json');
let categories = JSON.parse(fs.readFileSync(categoriesFilePath, 'utf-8'));*/

// ************ ADD . TU NUMBER LIKE 1.000 ************
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); 

const adminController = {
    index: (req, res) => {res.render('adminMain', {cssa: "admin-main.css",  title :'Panel de administración'});},
    
    listUser: (req, res) => {
        db.User.findAll()
            .then(users => {
                res.render('users/listUser.ejs', 
                    { users , 
                      cssa: 'users-admin.css',
                      title: 'Listado de usuarios' });
            }).catch((error) => {
                if (error) throw error;
            })
    },

    editUser: (req, res) => {
        let user = db.User.findByPk(req.params.id)
            .then(function (user) {
                res.render('users/editUser.ejs', 
                {user, 
                 cssa: 'users-edit.css',
                 title: 'Editar usuarios'});
            })
            // .then(function(){
            //     res.redirect('/users/listUser');
            // })
            .catch((error) => {
                if (error) throw error;
            })
    },
    updateUser: function (req, res) {
        db.User.update({
            name: req.body.name,
            lastName: req.body.lastname,
            dni: req.body.dni,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email,
        },{
            where: {id: req.params.id}
        })
        .then( function() {
            res.redirect('/admin/users/list');

        });
    },

    deleteUser: (req,res) => {
        db.User.destroy ({
            where: {
                id: req.params.id
            }
        })
        .then(function(product){
            res.redirect('/admin/users/list')
        })

    },

    // Root - Show all products
    listProducts: (req, res) => {
        db.Product.findAll()
            .then(products => {
                res.render('products/productsAdmin', 
                {
                    products,
                    toThousand, 
                    cssa: 'products-admin.css', 
                    title :'Administración de productos'})
        }).catch(err => {
            return res.send(err)
         })
    },

    /*'products/productsAdmin', {products:products, cssa : 'products-admin.css', title :'Administración de productos'});*/
    
    // Create - Form to create product
    add: async (req, res) => {

        db.Category.findAll()
        .then(category => {
            res.render('products/createProduct', 
            {category, 
            cssa: 'products-add.css', 
            title:"Crear un nuevo producto"});

    }).catch(err => {
        return res.send(err)
     });
        
       
    },

    // Create -  Method to store new product
    create: async (req, res) => {
        const resultProductsValidation = validationResult(req);

        if (resultProductsValidation.errors.length > 0) {
            return res.render('products/createProduct', {
                errors: resultProductsValidation.mapped()
            })
        }

        // if(!resultProductsValidation.errors.length){
        db.Product.create({
            sku: req.body.sku,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
        }).then(function (product) {
            res.redirect('/admin/products/list');
        }).catch(err => {
            return res.send(err)
        })
    },
        // if(!resultProductsValidation.errors.length){
        // db.Product.create({
        //     id: products.length + 1,
        //     sku: req.body.sku,
        //     name: req.body.name,
        //     description: req.body.description,
        //     price: req.body.price,
        //     discount: req.body.discount,
        // }).then(function(product){
        //         res.redirect('/admin/products');
        //     })
        //     .catch(err => {
        //         return res.send(err)
        //      })
        //     } else {
        //         let category = await db.Category.findAll();
             
        //         return res.render('products/createProduct', {
        //             errors: resultProductsValidation.mapped(),
        //             oldData: req.body,
        //             category:category,
        //         });
        //     }
        //},
        /*CONEXION CON EL JSON
        let newProduct = {
            id: products.length + 1,
            sku: req.body.sku,
            name: req.body.name,
            description: req.body.description,
            color: req.body.color,
            price: req.body.price,
            discount: req.body.discount, 
            categories: req.body.categories,
            image: req.file.filename,
        }

        products.push(newProduct);
        let productsJson = JSON.stringify(products);
        fs.writeFileSync(productsFilePath, productsJson);*/
    
    // Update - Form to edit product
    editProductForm: (req, res) => {
        db.Product.findAll({
            include: 'category',
            where: {id:req.params.id}
        })
            .then(function(product){
                console.log(product.category);
                res.render('products/editProduct', {product:product, cssa: 'products-edit.css', title:"Editar producto"});
        })
        .catch(err => {
            return res.send(err)
         })
        
        /*let id = req.params.id;
		let product = products.find(product => product.id == id);
        res.render('products/editProduct', {product, cssa: 'products-edit.css',categories , title:"Editar producto"});*/
    },    // Update - Method to edit product
    editProduct: (req, res) => {
        db.Product.update({
                sku: req.body.sku,
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                discount: req.body.discount,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(){
            res.redirect('/products/editProduct' + req.params.id);
        })
        .catch(err => {
            return res.send(err)
         })
    },
    
    // Delete - Delete one product from DB
    deleteProduct: (req, res) => {
        db.Product.destroy ({
            where: {
                id: req.params.id
            }
        })
        .then(function(product){
            res.redirect('/admin/products' + req.params.id);
        })
        /*let id = req.params.id;
        let idxToDelete = products.findIndex(product => product.id == id);
        console.log(`ID = ${idxToDelete}`);*/
        //Si existe un producto con el id recibido como parámetro, lo borro
        /*if(idxToDelete >= 0) {
            let productoBorrado = products.splice(idxToDelete, 1);

            let imagePath = path.join(__dirname, '../../public/img/products/' + productoBorrado[0].image);
            console.log(imagePath);
            
            fs.writeFileSync(productsFilePath, JSON.stringify(products,null,2));            
            
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath)
            }
    
        }*/
    },
    login: (req, res) => {
        res.render('users/login', {cssa: 'login.css',title:"Admin - Ingresar"});
    },
  
};

/*const adminController = {

    dashboard: (req, res) => {res.send( 'Vista Dashboard de administrador');},
    crudUsers: (req, res) => {res.send( 'CRUD de usuarios');},
};*/

module.exports = adminController;