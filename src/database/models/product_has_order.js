'use strict';

module.exports = (sequelize, DataTypes) => {
    const Product_has_order = sequelize.define('ProductsOrders', {
        productos_has_pedidos_id: {
            type: DataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        id_pedido: {
            type: DataTypes.TINYINT(10)
        },
        precio: {
            type: DataTypes.DECIMAL(10,2).UNSIGNED
        },
        cantidad: {
            type: DataTypes.INTEGER(11)
        },
        product_id: {
            type: DataTypes.TINYINT(10)
        },
    }, {
        tablename: "products_has_orders",
        timestamps: false
    })
    return ProductOrder;
}