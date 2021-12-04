const usersController = {

    login: (req, res) => {
        res.render('users/login', {cssa: 'login.css',title:"El Cáliz - Ingresar"});
    },

    register: (req, res) => {
        res.render('users/register',{cssa: 'register.css', title:"El Cáliz - Registrarse"});
    },

    forgotPassword: (req, res) => {
        res.send('Forgot Password!'); 
    },

    profile: (req, res) => {
        res.send(`Perfil del usuario ${req.params.userId}`); 
    }
};

module.exports = usersController;