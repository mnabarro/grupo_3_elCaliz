module.exports = (sequelize, dataTypes) => {
    let alias = 'Order_has_order_status';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        order_id: {
            type: dataTypes.INTEGER
        },
        order_status_id: {
            type: dataTypes.INTEGER
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
    }; 
    let config = {
        tablename: "orders_has_orders_status",
    };
    const Order_has_order_status = sequelize.define(alias, cols, config)

    return Order_has_order_status;
}