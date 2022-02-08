//Otra forma de hacer un modelo segun Playground, ver si correc correctamente

const Genero = sequelize.define('Generos',{
    id: Sequelize.TINYINT, primaryKey: true, autoIncrement: true,
    nombre: Sequelize.STRING,
    password: Sequelize.STRING,
},
    {tablename: "genres",timestamps: false}

);

module.exports = Genero;