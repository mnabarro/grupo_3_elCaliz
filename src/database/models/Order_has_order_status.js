module.exports = (sequelize, DataTypes) => {
    let alias = "OrdersStatus"; 
    let cols = {
        id: {
            type: DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true
        },
        fecha_estado: {
            type: DataTypes.DATE
        },
        order_id: {
            type: DataTypes.INTEGER
        },
        order_status_id: {
            type: DataTypes.INTEGER
        },
    };
    let config = {
        tablename: "orders_has_orders_status",
        timestamps: false
    }
    const OrderStatus = sequelize.define(alias, cols, config); //(alias, columas de db, config)
    return OrderStatus;
}