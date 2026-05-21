const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({
    name: String,
    price: Number,
    qty: Number,
    mode: String,
});

module.exports = { OrdersSchema };