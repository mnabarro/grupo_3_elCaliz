'use strict';

module.exports = (sequelize, dataTypes) => {
    const orders_has_orders_status = sequelize.define('OrdersStatus', {
        id: {
            type: dataTypes.TINYINT(10).UNSIGNED,
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
    }, {
        tablename: "orders_has_orders_status",
    })

    return orders_has_orders_status;
}