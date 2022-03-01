module.exports = (sequelize, dataTypes) => {
    let alias = 'Product_has_order';
    let cols = {
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
    };
    let config = {
        tablename: "products_has_orders",
        timestamps: false
    };
    const Product_has_order = sequelize.define(alias, cols, config)
    return Product_has_order;
}