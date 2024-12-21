const Order = require('../Models/order');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.SECRET_KEY;



const getOrders = async (req, res) => {
    try {
        const order = await Order.find();
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ error: 'Order not found' });
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


const createOrder = async (req, res) => {
    try {
        console.log(req.body);
        const order = new Order(req.body);
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const update = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) return res.status(404).json({ error: 'Order not found' });
        res.json(updatedOrder);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteOrder =  async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        if (!deletedOrder) return res.status(404).json({ error: 'Order not found' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const Order = {getOrders, getOrder, createOrder, update , deleteOrder}
module.exports = Order