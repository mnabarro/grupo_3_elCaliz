// ************ Require's ************
const { ResultWithContext } = require('express-validator/src/chain');
const { redirect } = require('express/lib/response');
const fs = require('fs');
const path = require('path');
const { runInNewContext } = require('vm');
const db = require ('../database/models')

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const categoriesFilePath = path.join(__dirname, '../data/categories.json');
let categories = JSON.parse(fs.readFileSync(categoriesFilePath, 'utf-8'));

// ************ ADD . TU NUMBER LIKE 1.000 ************
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); 

const adminController = {
    index: (req, res) => {res.render('adminMain', {cssa: "admin-main.css",  title :'Panel de administración'});},
    
    // Root - Show all products
    products: (req, res) => {
        db.Product.findAll()
            .then(function (products) {
                res.render('products/productsAdmin', {products,
                cssa : 'products-admin.css', 
                title :'Administración de productos'
                })
            })
            .catch(err => {
                return res.send(err)
             })
    },
    /*'products/productsAdmin', {products:products, cssa : 'products-admin.css', title :'Administración de productos'});*/
    
    // Create - Form to create product
    add: (req, res) => {
        res.render('products/createProduct', {cssa: 'products-add.css', category, title:"Crear un nuevo producto"});
    },

    // Create -  Method to store new product
    create: (req, res) => {
        db.Product.create({
            id: product.length + 1,
            sku: req.body.sku,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            discount: req.body.discount,
            estado: req.body.estado
        })
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
        .then(function(product){
            res.redirect('/admin/products');
        })
        .catch(err => {
            return res.send(err)
         })
      
    },
    
    // Update - Form to edit product
    editProductForm: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(function(product){
                res.render('products/editProduct', {product:product, cssa: 'products-edit.css', title:"Editar producto"});
        })
        .catch(err => {
            return res.send(err)
         })
        
        /*let id = req.params.id;
		let product = products.find(product => product.id == id);
        res.render('products/editProduct', {product, cssa: 'products-edit.css',categories , title:"Editar producto"});*/
    },

    // Update - Method to edit product
    editProduct: (req, res) => {
        db.Product.update({
                sku: req.body.sku,
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                discount: req.body.discount,
                estado: req.body.estado
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(product){
            res.redirect('/products/edit' + req.params.id);
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