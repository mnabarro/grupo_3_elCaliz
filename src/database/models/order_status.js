module.exports = (sequelize, dataTypes) => {
    let alias = "OrderStatus"; 
    let cols = {
        id: {
            type: dataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
    };
    let config = {
        tablename: "order_status",
        timestamps: false
    }
    const OrderStatus = sequelize.define(alias, cols, config); //(alias, columas de db, config)
    return OrderStatus;
}