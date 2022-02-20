module.exports = (sequelize, DataTypes) => {
    let alias = "OrderStatus"; 
    let cols = {
        id: {
            type: DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        },
    };
    let config = {
        tablename: "order_status",
        timestamps: false
    }
    const OrderStatus = sequelize.define(alias, cols, config); //(alias, columas de db, config)
    return OrderStatus;
}