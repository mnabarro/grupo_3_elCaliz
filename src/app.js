// ************ Require's ************
const path = require ('path');
const express = require('express');
const methodOverride = require('method-override');
const mainRouter = require('./routes/mainRouter');
const usersRouter = require('./routes/usersRouter');
const ordersRouter = require('./routes/ordersRouter');
const productsRouter = require('./routes/productsRouter');
const adminRouter = require('./routes/adminRouter');
const session = require('express-session');
const cookies = require('cookie-parser');

// ************ Require's Middlewares ************
const userLoggedMiddleware = require ('./middlewares/userLoggedMiddleware');
const cookieAuthMiddleware = require('./middlewares/cookieAuthMiddleware')

// ************ Express() ************
const app = express();

app.use( session({
    secret : "rfjqekldñjd",
    resave : false,
    saveUninitialized : false
}));

app.use(cookies());

app.use(userLoggedMiddleware);

// ************ Middlewares ************
app.use(express.static('../public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(cookieAuthMiddleware);

app.use('/', mainRouter); //FRONT
app.use('/users', usersRouter); //FRONT
app.use('/orders', ordersRouter); //FRONT
app.use('/products', productsRouter); //FRONT
app.use('/admin', adminRouter); //BACK

// ************ Template Engine ************
app.set('view engine', 'ejs');


// ************ Port ************
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});


/*
rutas
{mainRouter = OK}
/
/arrpentimiento
/faq
/mapa-sitio
/suscribe
/tyc
{usersRouter = OK}
/users/login
/users/register
/users/forgotPassword
/users/profile/:userId
{ordersRouter OK}
/orders/cart
/orders/checkout
/orders/history
{productsRouter OK}
/products/
/products/cat/:category
/products/search/:criterio
/products/add
/products/detail/:id
/products/edit/:id
/products/delete/:id
{adminRouter OK}
/admin/dashboard
/admin/crudUsers
*/