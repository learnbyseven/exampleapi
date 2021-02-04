const express = require('express');
const app = express();
//middleware function 
app.use((req, res, next) => {
    console.log('Middleware function executed .....');
    next();
});
const users = require('./user/userRoutes');
app.use(users);

const products = require('./products/productsRoute');
app.use(products);


app.listen(80);