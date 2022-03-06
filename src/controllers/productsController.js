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
    category: (req, res) => {
        let categoryName = req.params.name;
        let category = categories.find(category => category.name == categoryName)
        res.render('products/category', {category, cssa: 'categories.css', title:"Categoría"});
    },   
    search: (req, res) => {
        db.Products.findAll({
            where: {
                nombre: req.params.criterio
            },
            order: [
                ['id','ASC'] 
            ]
        })

        .then (result => {
            res.send(`Resultado de busqueda :${req.params.criterio}`)
        })
        .catch(err => {
            return res.send(err)
        })
    },
    /*{res.send(`Productos que coinciden con el criterio :${req.params.criterio}`);},*/
    
    productDetail: (req, res) => {
        db.Products.findByPk(req.params.id)
            .then((product) =>{
                res.render('products/productDetail', {product:product, result, cssa: 'product-detail.css', title:"Detalle del producto"});
            })
        /*let id = req.params.id
		let product = products.find(product => product.id == id)
        //const result = products.filter(product => product.id <= 4);
        let result = [products[0], products[6], products[12], products[13]];
        res.render('products/productDetail', {product, result, cssa: 'product-detail.css', title:"Detalle del producto"});*/
    },
}
module.exports = productsController;

/* PROBANDO CONEXION CON BASE DE DATOS PARA CATEGORIAS
const productsController = {
    index: (req, res) => {
        db.Category.findOne({
            where: {
                nombre: req.params.name
            }
        })
            .then((result) => {
                db.product_has_category.findAll({
                    where: {
                        category_id: result
                    }
                })
            })
            .then((result) => {
                db.Products.findAll({
                    where: {
                        id: result.product_id
                    },
                    order: [
                        ['id', 'ASC']
                    ],
                    limit: 10
                })
            })
            .then((result) => {
                res.render('products/category', {products, cssa: 'categories.css', title: "Categoría" });
            })
            .catch(err => {
                return res.send(err)
            })
    }
}*/