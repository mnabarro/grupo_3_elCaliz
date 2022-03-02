module.exports = (sequelize, dataTypes) => {
    let alias = 'Image';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        url: {
            type: dataTypes.STRING
        },
        product_id: {
            type: dataTypes.INTEGER(10)
        },
    };
    let config = {
        tablename: "Imagenes",
        timestamps: false
    };
    const Image = sequelize.define(alias, cols, config)
    
    Image.associate = function(models){
        Image.belongsTo(models.Products, {
            as: "products",
            foreignKey: "product_id"
        })
    }

    return Image;
}