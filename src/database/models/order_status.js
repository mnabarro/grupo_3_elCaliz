'use strict';

module.exports = (sequelize, DataTypes) => {
    const Order_status = sequelize.define('OrderStatus', {
        id: {
            type: DataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING
        },
    }, {
        tablename: "order_status",
        timestamps: false
    });
    return OrderStatus;
}