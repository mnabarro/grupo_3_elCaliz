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
        tablename: "Images",
        timestamps: false
    };
    const Image = sequelize.define(alias, cols, config)
    
    Image.associate = (models) => {
        Image.belongsTo(models.Product, {
            as: "products",
            foreignKey: "product_id"
        })
    }

    return Image;
}