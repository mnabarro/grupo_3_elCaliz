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
    index: (req, res) => {res.send( 'Lista todos los productos?');},
    category: (req, res) => {res.render('products/category', {cssa : 'category.css', title :'Categorías'});},
    search: (req, res) => {res.send(`Productos que coinciden con el criterio :${req.params.criterio}`);},
  
    addProductForm: (req, res) => {
        res.render('products/addProduct', {cssa: 'products-add.css', "categories":categories, title:"Agregar producto"});
    },

    addProduct: (req, res) => {
        res.send(req.body);
    },
    
    productDetail: (req, res) => {
                res.render('products/productDetail', {cssa: 'product-detail.css', title:"Detalle del producto"});
    },

    editProduct: (req, res) => {
        res.render('products/editProduct', {cssa: 'products-edit.css', "categories":categories, title:"Editar producto"});
    },
    deleteProduct: (req, res) => {res.send(`Eliminar producto :${req.params.id}`);},

};

module.exports = productsController;