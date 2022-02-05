const fs = require('fs');

const User = {
    fileName: './data/users.json',

    getData:function(){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

// Se genera este metodo para poder tener el id, luego se puede aplicar en otros metodos
    generateId:function(){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.id + 1;
        }
        return 1; 
    },

// Devuelve todos los usuarios
    findAll:function(){
        return this.getData();
    },

// Buscar a un usuario por su ID
    findByPK:function(id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

// Buscar al usuario que se quiere loguear por su email
    findByField:function(field, text){
    let allUsers = this.findAll();
    let userFound = allUsers.find(oneUser => oneUser[field] === text);
    return userFound;
},

//Guardar el usuario en la DB
    create: function(userData){
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },

//Eliminar a un usuario de la DB
    delete:function(id){
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
    }
};

module.exports = User;