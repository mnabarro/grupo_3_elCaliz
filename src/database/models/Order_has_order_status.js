'use strict';

module.exports = (sequelize, DataTypes) => {
    const orders_has_orders_status = sequelize.define('OrdersStatus', {
        id: {
            type: DataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        order_id: {
            type: DataTypes.INTEGER
        },
        order_status_id: {
            type: DataTypes.INTEGER
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
    }, {
        tablename: "orders_has_orders_status",
    })

    return OrderStatus;
}