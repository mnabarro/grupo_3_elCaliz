const ordersController = {

    checkout: (req, res) => {res.send( 'Finalice su compra');},
    history: (req, res) => {res.send( 'Histórico de pedidos');},

    cart: (req, res) => {
        res.render('products/productCart', {path: '/orders/cart'});
    }
};

module.exports = ordersController;