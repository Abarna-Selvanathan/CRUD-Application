const Product = require('../Models/product');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.SECRET_KEY;



const getProducts = async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


const createProduct = async (req, res) => {
    try {
        console.log(req.body);
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const update = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ error: 'Product not found' });
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteProduct =  async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ error: 'Product not found' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const product = {getProducts, getProduct, createProduct, update ,deleteProduct}
module.exports = product