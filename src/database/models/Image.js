module.exports = (sequelize, dataTypes) => {
    let alias = "Images"; 
    let cols = {
        id: {
            type: dataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true
        },
        url: {
            type: dataTypes.STRING
        },
        product_id: {
            type: dataTypes.INTEGER
        },
    };
    let config = {
        tablename: "images",
        timestamps: false
    }
    const Image = sequelize.define(alias, cols, config); //(alias, columas de db, config)

    Image.associate = function(models){
        Image.belongsTo(models.Products, {
            as: "products",
            foreignKey: "product_id"
        })
    }

    return Image;
}