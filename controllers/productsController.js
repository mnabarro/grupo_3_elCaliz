const productsController = {

    index: (req, res) => {res.send( 'Lista todos los productos?');},
    cat: (req, res) => {res.send( `Productos de la categoría :${req.params.category}`);},
    search: (req, res) => {res.send(`Productos que coinciden con el criterio :${req.params.criterio}`);},
  
    add: (req, res) => {res.send(`Agregar producto`);},
    
    detail: (req, res) => {res.render('productDetail', {path : '/products/detail'});},

    edit: (req, res) => {res.send(`Editar producto :${req.params.id}`);},
    delete: (req, res) => {res.send(`Eliminar producto :${req.params.id}`);},

};

module.exports = productsController;