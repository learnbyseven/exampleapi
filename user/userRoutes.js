//
const router = require('express').Router();
const userController = require('./controller/userController');
const obj = new userController();
router.get('/users', obj.list)



module.exports = router;
