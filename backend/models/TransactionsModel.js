const mongoose = require("mongoose");

const { TransactionsSchema } = require("../schema/TransactionsSchema");

const TransactionsModel = mongoose.model("transaction", TransactionsSchema);

module.exports = { TransactionsModel };
