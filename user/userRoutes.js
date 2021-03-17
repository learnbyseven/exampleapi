const router = require('express').Router();
const userController = require('./userController');
const user = new userController();
//List Users 
router.get('/users', async (req, res) => {
    let result = await user.get();
    res.send(result);
});
// Crteate Users 
router.post('/users', user.create);
// Delete User
router.delete('/users/:name', user.delete);

module.exports = router