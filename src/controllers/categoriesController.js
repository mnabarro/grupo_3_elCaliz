// ************ Require's ************
const { redirect } = require('express/lib/response');
const fs = require('fs');
const path = require('path');
const db = require('../database/models')

const categoriesFilePath = path.join(__dirname, '../data/categories.json');
let categories = JSON.parse(fs.readFileSync(categoriesFilePath, 'utf-8'));

const categoriesController = {
    index: (req, res) => {
        let categoryName = req.params.name;
        let category = categories.find(category => category.name == categoryName)
        res.render('products/category', {category, cssa: 'categories.css', title:"Categoría"});
    }
}
/* PROBANDO CONEXION CON BASE DE DATOS
const categoriesController = {
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
module.exports = categoriesController;