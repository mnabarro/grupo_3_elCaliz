const ordersController = {

    checkout: (req, res) => {res.send( 'Finalice su compra');},
    orders: (req, res) => {res.send( 'Historial de pedidos');},

    cart: (req, res) => {
        res.render('products/productCart', {path: '/orders/cart'});
    }
};

module.exports = ordersController;