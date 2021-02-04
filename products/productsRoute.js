const router = require('express').Router();
const productController = require('./productsController');
const obj = new productController();
router.get('/products', obj.list)
module.exports = router