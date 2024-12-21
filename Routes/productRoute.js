const express = require('express');
const router = express.Router();
const {getProducts, getProduct, createProduct, update, deleteProduct} = require('../Controllers/productController')
router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/createProduct', createProduct)
router.put('/:id', update)
router.delete('/:id', deleteProduct)

module.exports = router;

