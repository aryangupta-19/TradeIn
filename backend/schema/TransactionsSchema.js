const mongoose = require("mongoose");

const TransactionsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: ["DEPOSIT", "WITHDRAW", "BUY", "SELL"],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    stockName: String,
    qty: Number,
    price: Number,
    balanceAfter: {
      type: Number,
      required: true,
    },
    description: String,
  },
  { timestamps: true }
);

module.exports = { TransactionsSchema };
