const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//middleware function 
app.use((req, res, next) => {
    console.log('Middleware function executed .....');
    next();
});
app.use(bodyParser.json());
const users = require('./user/userRoutes');
app.use(users);


// const getProducts = require('./products/productsRoute');
// app.use(getproducts);



app.listen(80);