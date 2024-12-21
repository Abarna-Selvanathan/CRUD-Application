const User = require('../Models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.SECRET_KEY;





const getUsers = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user || !(await user.isValidPassword(password))) {
        return res.status(401).json({ message: 'Invalid password' });
      }
      req.session.user = { id: user._id, userName: user.userName, email: user.email };
      res.status(200).json({ message: 'Login successful', userName: user.userName,email: user.email });
      console.log(user)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const register = async (req, res) => {
    try {
        console.log(req.body);
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const update = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ error: 'User not found' });
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteUser =  async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ error: 'User not found' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getUsers,
    getUser,
    login,
    register,
    update,
    deleteUser
};