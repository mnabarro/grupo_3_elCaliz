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
        db.Category.findOne({where: {name: req.params.id}
        })
        .then ((categoria) =>{
            console.log(categoria.id);
            db.Product.findAll({where: {category_id: categoria.id}})

        })
        .then((products) => {
            console.log(products);
            res.render('products/listAll', 
                {
                    products,
                    toThousand, 
                    cssa: 'products-list.css', 
                    title :'Todos los productos'})
            })
            .catch(err => {
                return res.send(err)
            })
    },

    /*
    category: (req, res) => {
        let categoryName = req.params.name;
        let category = category.find(category => category.name == categoryName)
        res.render('products/category', {category, cssa: 'categories.css', title:"Categoría"});
    },   */
    search: (req, res) => {
        db.Product.findAll({
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
    allProductsList: (req, res) => {
        if (!req.params.category) {
            db.Product.findAll()
            .then(products => {
                res.render('products/listAll', 
                {
                    products,
                    toThousand, 
                    cssa: 'products-list.css', 
                    title :'Todos los productos'})
        }).catch(err => {
            return res.send(err)
         })
        }
    },
    /*{res.send(`Productos que coinciden con el criterio :${req.params.criterio}`);},*/
    
    productDetail: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(response=>{
                
                res.render('products/productDetail', {productDetail:response, toThousand, cssa: 'product-detail.css', title:"Detalle del producto"});
            })
            .catch(err => {
                return res.send(err)
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