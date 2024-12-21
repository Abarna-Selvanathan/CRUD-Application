const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    userID: {type: String, required: true},
    productName: {type: String, required: true},
    quantity:{type: Number, required: true},
    location: {type: String, required: true},
    deliveryDate: {type: String, required: true}

});
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
