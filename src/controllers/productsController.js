const productsController = {

    index: (req, res) => {res.send( 'Lista todos los productos?');},
    category: (req, res) => {res.send( `Productos de la categoría :${req.params.category}`);},
    search: (req, res) => {res.send(`Productos que coinciden con el criterio :${req.params.criterio}`);},
  
    addProduct: (req, res) => {res.send(`Agregar producto`);},
    
    productDetail: (req, res) => {
                res.render('products/productDetail', {path : '/products/detail'});
    },

    editProduct: (req, res) => {res.send(`Editar producto :${req.params.id}`);},
    deleteProduct: (req, res) => {res.send(`Eliminar producto :${req.params.id}`);},

};

module.exports = productsController;