module.exports = (sequelize, DataTypes) => {
    let alias = "Orders"; 
    let cols = {
        id: {
            type: DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true
        },
        referencia: {
            type: DataTypes.STRING
        },
        total: {
            type: DataTypes.INTEGER
        },
        metodo_de_pago: {
            type: DataTypes.STRING
        },
        fecha: {
            type: DataTypes.DATE
        },
        usder_id: {
            type: DataTypes.INTEGER
        },
    };
    let config = {
        tablename: "orders",
        timestamps: false
    }
    const Order = sequelize.define(alias, cols, config); //(alias, columas de db, config)
    return Order;
}