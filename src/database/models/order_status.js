'use strict';

module.exports = (sequelize, dataTypes) => {
    const Order_status = sequelize.define('OrderStatus', {
        id: {
            type: dataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: dataTypes.STRING
        },
    }, {
        tablename: "order_status",
        timestamps: false
    });
    return Order_status;
}