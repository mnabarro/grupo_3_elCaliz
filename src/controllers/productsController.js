const { redirect } = require('express/lib/response');
const fs = require('fs');
const path = require('path');
const { runInNewContext } = require('vm');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); 

const categories = [
    {
    label: 'Blancos',
    name: 'cat-blancos'
    },  
    {
    label: 'Tintos',
    name: 'cat-tintos'
    }, 
    {
    label: 'Espumantes',
    name: 'cat-espumantes'
    }, 
    {
    label: 'C. Tardía',
    name: 'cat-tardia'
    }, 
    {
    label: 'Especiales',
    name: 'cat-especiales'
    }, 
    {
    label: 'Accesorios',
    name: 'cat-accesorios'
    }, 
    {
    label: 'Ofertas',
    name: 'cat-ofertas'
    }, 
];

const productsController = {
    index: (req, res) => {res.render('products/category', {products:products, cssa : 'category.css', title :'Categorías'});},
    
    category: (req, res) => {res.render('products/category', {products:products, cssa : 'category.css', title :'Categorías'});},
    
    search: (req, res) => {res.send(`Productos que coinciden con el criterio :${req.params.criterio}`);},
    
    productDetail: (req, res) => {
        let id = req.params.id
		let product = products.find(product => product.id == id)
                res.render('products/productDetail', {product, cssa: 'product-detail.css', title:"Detalle del producto"});
    },

    editProductForm: (req, res) => {
        let id = req.params.id;
		let product = products.find(product => product.id == id);
        res.render('products/editProduct', {product, cssa: 'products-edit.css',categories , title:"Editar producto"});
    },

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

    createProduct: (req, res) => {
        res.render('products/createProduct', {cssa: 'products-add.css', "categories":categories, title:"Crear un nuevo producto"});
    },

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
            //images: req.body.images,
        }
        /*let productJson = JSON.stringify(newProduct);
        fs.appendFileSync(productsFilePath, productJson);
        res.redirect('/products'); Esta opcion no funciona porque lo agrega literalmente al final despues de la ], no entiendo entonces en que caso se usa ¿?*/
        products.push(newProduct);

        let productsJson = JSON.stringify(products);
        fs.writeFileSync(productsFilePath, productsJson);
        res.redirect('/products');
    },
    
};

module.exports = productsController;
