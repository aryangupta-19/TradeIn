const {model} = require('mongoose');
const {WalletSchema} = require("../schema/WalletSchema");

const WalletModel = model("wallet", WalletSchema);
module.exports = { WalletModel };