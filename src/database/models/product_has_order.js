'use strict';

module.exports = (sequelize, dataTypes) => {
    const Product_has_order = sequelize.define('ProductsOrders', {
        productos_has_pedidos_id: {
            type: dataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        id_pedido: {
            type: dataTypes.TINYINT(10)
        },
        precio: {
            type: dataTypes.DECIMAL(10,2).UNSIGNED
        },
        cantidad: {
            type: dataTypes.INTEGER(11)
        },
        product_id: {
            type: dataTypes.TINYINT(10)
        },
    }, {
        tablename: "products_has_orders",
        timestamps: false
    })
    return Product_has_order;
}