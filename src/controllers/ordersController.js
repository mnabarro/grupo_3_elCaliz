// ************ Require's ************
const db = require ('../database/models')

const ordersController = {

    checkout: (req, res) => {res.send( 'Finalice tu compra');},
    orders: (req, res) => {res.send( 'Historial de pedidos');},

    cart: (req, res) => {
        res.render('products/productCart', {cssa: 'products-cart.css', title:"El Cáliz - Carrito"});
    }
};

module.exports = ordersController;