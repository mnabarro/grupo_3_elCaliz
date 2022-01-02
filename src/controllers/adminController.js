// ************ Require's ************
const { redirect } = require('express/lib/response');
const fs = require('fs');
const path = require('path');
const { runInNewContext } = require('vm');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const categoriesFilePath = path.join(__dirname, '../data/categories.json');
let categories = JSON.parse(fs.readFileSync(categoriesFilePath, 'utf-8'));

// ************ ADD . TU NUMBER LIKE 1.000 ************
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); 

// const categories = [
//     {
//     label: 'Blancos',
//     name: 'cat-blancos'
//     },  
//     {
//     label: 'Tintos',
//     name: 'cat-tintos'
//     }, 
//     {
//     label: 'Espumantes',
//     name: 'cat-espumantes'
//     }, 
//     {
//     label: 'Rosados',
//     name: 'cat-rosados'
//     }, 
//     {
//     label: 'Accesorios',
//     name: 'cat-accesorios'
//     }, 
//     {
//     label: 'Ofertas',
//     name: 'cat-ofertas'
//     }, 
// ];

const adminController = {
    // Root - Show all products
    index: (req, res) => {res.render('products/category', {products:products, cssa : 'category.css', title :'Categorías'});},
    
    // Create - Form to create product
    createProduct: (req, res) => {
    
        res.render('products/createProduct', {cssa: 'products-add.css', "categories":categories, title:"Crear un nuevo producto"});
    },

    // Create -  Method to store new product
    newProduct: (req, res) => {

        let newProduct = {
            id: products.length + 1,
            sku: req.body.sku,
            name: req.body.name,
            description: req.body.description,
            color: req.body.color,
            price: req.body.price,
            discount: req.body.discount, 
            category: req.body.category,
            subCategory: req.body.subcategory,
            images: req.body.images,
        }
        products.push(newProduct);
        let productsJson = JSON.stringify(products);
        fs.writeFileSync(productsFilePath, productsJson);
        res.send("El producto se ha creado correctamente");
        res.redirect('/products');
    },
    
    // Update - Form to edit product
    editProductForm: (req, res) => {
        let id = req.params.id;
		let product = products.find(product => product.id == id);
        res.render('products/editProduct', {product, cssa: 'products-edit.css',categories , title:"Editar producto"});
    },

    // Update - Method to edit product
    editProduct: (req, res) => {
        let id = req.body.id;
        let product = products.find(product => product.id == id);

        product.sku = req.body.sku;
        product.name = req.body.name;
        product.description = req.body.description;
        product.color = req.body.color;
        product.price = req.body.price;
        product.discount = req.body.discount;
        //product.images = req.body["image-cover"];

        fs.writeFileSync(productsFilePath, JSON.stringify(products,null,2));

        res.redirect('/products');
    },
    
    // Delete - Delete one product from DB
    deleteProduct: (req, res) => {
        let id = req.params.id;
        let idxToDelete = products.findIndex(product => product.id == id);
        
        //Si existe un producto con el id recibido como parámetro, lo borro
        if(idxToDelete > 0) {
            let productoBorrado = products.splice(idxToDelete, 1);
            fs.writeFileSync(productsFilePath, JSON.stringify(products,null,2));            
            
            res.redirect('/products');
        }


    },
  
};

/*const adminController = {

    dashboard: (req, res) => {res.send( 'Vista Dashboard de administrador');},
    crudUsers: (req, res) => {res.send( 'CRUD de usuarios');},
};*/

module.exports = adminController;