const { OrdersModel } = require("../models/OrdersModel");
const { calculateRisk } = require("../utils/riskEngine");

const getRiskScore = async (req, res) => {
    try {
        const orders = await OrdersModel.find({
            user: req.user._id
        }).sort({ _id: 1 });

        const riskResult = calculateRisk(orders);

        console.log(riskResult);

        return res.status(200).json({
            success: true,
            ...riskResult
        });

    } catch (error) {
        console.error("Risk Controller Error:", error);
        return res.status(500).json({
            success: false,
            message: "Unable to calculate portfolio risk."
        });
    }
};

module.exports = { getRiskScore };