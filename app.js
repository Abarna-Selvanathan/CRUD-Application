const express = require('express');
const UserRoutes = require('./Routes/userRoute');
const OrderRoutes = require('./Routes/orderRoute');
const ProductRoutes = require('./Routes/productRoute')
const app = express();

app.use(express.json());



app.use('/api/users', UserRoutes);
app.use('/api/orders', OrderRoutes);
app.use('/api/products', ProductRoutes)

module.exports = app;




