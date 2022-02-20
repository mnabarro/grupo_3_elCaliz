module.exports = (sequelize, DataTypes) => {
    let alias = "Images"; 
    let cols = {
        id: {
            type: DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true
        },
        url: {
            type: DataTypes.STRING
        },
        product_id: {
            type: DataTypes.INTEGER
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