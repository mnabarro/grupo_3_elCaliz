module.exports = (sequelize, dataTypes) => {
    let alias = 'Order_status';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: dataTypes.STRING
        },
    };
    let config = {
        tablename: "orders_status",
        timestamps: false
    };
    const Order_status = sequelize.define(alias, cols, config)
    Order_status.associate = (models) => {
        Order_status.belongsToMany(models.Order, {
            as: "order",
            through: "order_has_orders_status", //a traves de que tabla intermedia
            foreignKey: "order_status_id",
            otherKey: "order_id",
            timestamps: false,
        })

    }
    return Order_status;
}