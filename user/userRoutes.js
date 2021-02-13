//
const router = require('express').Router();
const userController = require('./controller/userController');
const obj = new userController();


//uri-1
//router.get('/users/', obj.list);
//uri-2
router.get('/users/:id', obj.list);


module.exports = router;