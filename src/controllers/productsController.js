// ************ Require's ************
const { redirect } = require('express/lib/response');
const fs = require('fs');
const path = require('path');
const { runInNewContext } = require('vm');
const db = require ('../database/models')

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

/*const categoriesFilePath = path.join(__dirname, '../data/categories.json');
let categories = JSON.parse(fs.readFileSync(categoriesFilePath, 'utf-8'));*/

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); 


const productsController = {
    category: (req, res) => {res.render('products/category', {products:products, cssa : 'category.css', title :'Categorías'});},
    
    search: (req, res) => 
        db.Products.findAll({
            where: {
                nombre: req.params.criterio
            }
        })
        .then (function(product) {
            res.send(`Resultado de busqueda :${req.params.criterio}`)
        }),
    
    
    /*{res.send(`Productos que coinciden con el criterio :${req.params.criterio}`);},*/
    
    productDetail: (req, res) => {
        db.Products.findByPk(req.params.id)
            .then(function(product){
                res.render('products/productDetail', {product:product, result, cssa: 'product-detail.css', title:"Detalle del producto"});
            })
        /*let id = req.params.id
		let product = products.find(product => product.id == id)
        //const result = products.filter(product => product.id <= 4);
        let result = [products[0], products[6], products[12], products[13]];
        res.render('products/productDetail', {product, result, cssa: 'product-detail.css', title:"Detalle del producto"});*/
    },
};

module.exports = productsController;
