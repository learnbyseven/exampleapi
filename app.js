const express = require('express');
const app = express();
//middleware function 
app.use((req, res, next) => {
    console.log('Middleware function executed .....');
    next();
});
const user = require('./user/userRoutes');
app.use(user);

app.listen(80);