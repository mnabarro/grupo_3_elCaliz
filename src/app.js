const path = require ('path');
const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.use(express.static('../public'));

const mainRouter = require('./routes/mainRouter');
app.use('/', mainRouter);

const usersRouter = require('./routes/usersRouter');
app.use('/users', usersRouter);

const ordersRouter = require('./routes/ordersRouter');
app.use('/orders', ordersRouter);

const productsRouter = require('./routes/productsRouter');
app.use('/products', productsRouter);

const adminRouter = require('./routes/adminRouter');
app.use('/admin', adminRouter);


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