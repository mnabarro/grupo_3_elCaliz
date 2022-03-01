'use strict';

module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Orders', {
        id: {
            type: DataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        referencia: {
            type: DataTypes.VARCHAR(100)
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
        total: {
            type: DataTypes.INTEGER(11)
        },
        metodo_de_pago: {
            type: DataTypes.STRING
        },
        user_id: {
            type: DataTypes.TINYINT(10)
        },
    },{
        tablename: "Pedidos",
    });
    return Order;
}