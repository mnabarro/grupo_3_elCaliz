const { redirect } = require('express/lib/response');
const fs = require('fs');
const path = require('path');
const { runInNewContext } = require('vm');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const categoriesFilePath = path.join(__dirname, '../data/categories.json');
let categories = JSON.parse(fs.readFileSync(categoriesFilePath, 'utf-8'));

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
//     label: 'C. Tardía',
//     name: 'cat-tardia'
//     }, 
//     {
//     label: 'Especiales',
//     name: 'cat-especiales'
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

const productsController = {
    category: (req, res) => {res.render('products/category', {products:products, cssa : 'category.css', title :'Categorías'});},
    
    search: (req, res) => {res.send(`Productos que coinciden con el criterio :${req.params.criterio}`);},
    
    productDetail: (req, res) => {
        let id = req.params.id
		let product = products.find(product => product.id == id)
                res.render('products/productDetail', {product, cssa: 'product-detail.css', title:"Detalle del producto"});
    },
};

module.exports = productsController;
