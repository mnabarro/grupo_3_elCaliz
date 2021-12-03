const productsController = {

    index: (req, res) => {res.send( 'Lista todos los productos?');},
    category: (req, res) => {res.render('products/category', {path : '/products/category'});},
    search: (req, res) => {res.send(`Productos que coinciden con el criterio :${req.params.criterio}`);},
  
    addProductForm: (req, res) => {
        res.render('products/addProduct', {path : "/products/add"});
    },
    
    productDetail: (req, res) => {
                res.render('products/productDetail', {path : '/products/detail'});
    },

    editProduct: (req, res) => {res.send(`Editar producto :${req.params.id}`);},
    deleteProduct: (req, res) => {res.send(`Eliminar producto :${req.params.id}`);},

};

module.exports = productsController;