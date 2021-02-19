const router = require('express').Router();
const userController = require('./userController');
const user = new userController();
//List Users 
router.get('/users', user.get);
// Crteate Users 
router.post('/users', user.create);
// Delete User
router.delete('/users/:name', user.delete);

module.exports = router