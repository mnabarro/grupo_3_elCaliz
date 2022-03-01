'use strict';

module.exports = (sequelize, dataTypes) => {
    const Order = sequelize.define('Orders', {
        id: {
            type: dataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        referencia: {
            type: dataTypes.VARCHAR(100)
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        total: {
            type: dataTypes.INTEGER(11)
        },
        metodo_de_pago: {
            type: dataTypes.STRING
        },
        user_id: {
            type: dataTypes.TINYINT(10)
        },
    },{
        tablename: "Pedidos",
    });
    return Order;
}