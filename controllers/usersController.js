const usersController = {

    login: (req, res) => {
        res.render('login', {path: '/users/login'});
    },

    register: (req, res) => {
        res.render('register',{path: '/users/register'});
    },

    forgotPassword: (req, res) => {
        res.send('Forgot Password!'); 
    },

    profile: (req, res) => {
        res.send(`Perfil del usuario ${req.params.userId}`); 
    }
};

module.exports = usersController;