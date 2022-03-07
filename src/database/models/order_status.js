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
    return Order_status;
}