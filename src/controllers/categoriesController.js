// ************ Require's ************
const { redirect } = require('express/lib/response');
const fs = require('fs');
const path = require('path');

const categoriesFilePath = path.join(__dirname, '../data/categories.json');
let categories = JSON.parse(fs.readFileSync(categoriesFilePath, 'utf-8'));

const categoriesController = {
    index: (req, res) => {res.render('products/category', {categories:categories, cssa : 'category.css', title :'Categorías'});},
    
    category: (req, res) => {
        let id = req.params.id
		let category = categories.find(category => category.id == id)
                res.render('products/category', {category, cssa: 'categories.css', title:"Categoría"});
    },
};

module.exports = categoriesController;