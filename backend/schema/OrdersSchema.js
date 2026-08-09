const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({
    name: String,
    price: Number,
    qty: Number,
    mode: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
});

module.exports = { OrdersSchema };