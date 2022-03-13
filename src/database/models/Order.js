/*const { SHOWTABLES } = require("sequelize/types/query-types");*/

module.exports = (sequelize, dataTypes) => {
    let alias = 'Order';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        referencia: {
            type: dataTypes.STRING
        },
        total: {
            type: dataTypes.INTEGER(11)
        },
        metodo_de_pago: {
            type: dataTypes.STRING
        },
        user_id: {
            type: dataTypes.INTEGER(10)
        },
    };
    let config = {
        tablename: "Orders",
        timestamps: false
    };
    const Order = sequelize.define(alias, cols, config)
    Order.associate = (models) => {
        Order.belongsTo(models.User, {
            as: "User",
            foreignKey: "user_id"
        }),
        Order.belongsToMany(models.Product, {
            as: "product",
            through: "products_has_orders", //a traves de que tabla intermedia se conectan
            foreignKey: "id_pedido",
            otherKey: "product_id",
            timestamps: false,
        }),
        Order.belongsToMany(models.Order_status, {
            as: "order_status",
            through: "order_has_orders_status", //a traves de que tabla intermedia
            foreignKey: "order_id",
            otherKey: "order_status_id",
            timestamps: false,
        })

    }
    return Order;
}