const usersController = {

    login: (req, res) => {
        res.render('users/login', {path: '/users/login'});
    },

    register: (req, res) => {
        res.render('users/register',{path: '/users/register'});
    },

    forgotPassword: (req, res) => {
        res.send('Forgot Password!'); 
    },

    profile: (req, res) => {
        res.send(`Perfil del usuario ${req.params.userId}`); 
    }
};

module.exports = usersController;