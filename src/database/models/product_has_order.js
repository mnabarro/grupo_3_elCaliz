module.exports = (sequelize, dataTypes) => {
    let alias = "ProductosPedidos"; 
    let cols = {
        productos_has_pedidos_id: {
            type: dataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true
        },
        id_pedido: {
            type: dataTypes.INTEGER
        },
        precio: {
            type: dataTypes.DECIMAL
        },
        cantidad: {
            type: dataTypes.INTEGER
        },
        product_id: {
            type: dataTypes.INTEGER
        },
    };
    let config = {
        tablename: "products_has_orders",
        timestamps: false
    }
    const ProductoPedido = sequelize.define(alias, cols, config); //(alias, columas de db, config)
    return ProductoPedido;
}