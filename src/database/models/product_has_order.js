module.exports = (sequelize, DataTypes) => {
    let alias = "ProductsOrders"; 
    let cols = {
        productos_has_pedidos_id: {
            type: DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true
        },
        id_pedido: {
            type: DataTypes.INTEGER
        },
        precio: {
            type: DataTypes.DECIMAL
        },
        cantidad: {
            type: DataTypes.INTEGER
        },
        product_id: {
            type: DataTypes.INTEGER
        },
    };
    let config = {
        tablename: "products_has_orders",
        timestamps: false
    }
    const ProductOrder = sequelize.define(alias, cols, config); //(alias, columas de db, config)
    return ProductOrder;
}