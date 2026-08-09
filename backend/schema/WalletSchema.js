const { Schema, Types } = require("mongoose");

const WalletSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    balance: {
        type: Number,
        default: 0,
    },
});

module.exports = {WalletSchema};