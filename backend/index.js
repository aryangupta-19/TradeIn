require("dotenv").config();

const express = require("express");
const app = express(); 
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true
}));

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const {HoldingsModel} = require("./models/HoldingsModel.js");
const {PositionsModel} = require("./models/PositionsModel.js");
const {OrdersModel} = require("./models/OrdersModel.js");
const {WalletModel} = require("./models/WalletModel.js");

const User = require("./models/UsersModel");
const { createSecretToken } = require("./utils/SecretToken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const isProd = process.env.NODE_ENV === "production";

mongoose.connect(url)
.then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
        console.log("Server started on port:", PORT);
    });
})
.catch((err) => {
    console.log("DB connection error:");
});

app.use(cookieParser());
app.use(express.json());

const userVerification = (req, res) => {
    const token = req.cookies.token
    if (!token) {
      return res.json({ status: false })
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
       return res.json({ status: false })
      } else {
        const user = await User.findById(data.id)
        if (user) return res.json({ status: true, user: user.username })
        else return res.json({ status: false })
      }
    });
};

const requireAuth = async (req, res, next) => {
    try {
      const token = req.cookies?.token;
  
      if (!token) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized: token missing",
        });
      }
  
      const decoded = jwt.verify(token, process.env.TOKEN_KEY);
      const user = await User.findById(decoded.id).select("_id email username");
  
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized: user not found",
        });
      }
  
      req.user = user; 
      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: invalid or expired token",
      });
    }
  };
  

const cookieOptions = {
    withCredentials: true,
    httpOnly: isProd,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    maxAge: 3 * 24 * 60 * 60 * 1000,
};

app.post("/verify", userVerification);

app.post('/', (req, res) => {
    const token = req.cookies.token
    if (!token) {
      return res.json({ status: false })
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
       return res.json({ status: false })
      } else {
        const user = await User.findById(data.id)
        if (user) return res.json({ status: true, user: user.username })
        else return res.json({ status: false })
      }
    })
});

app.get("/allHoldings", requireAuth, async(req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allOrders", requireAuth, async (req, res) => {
  const allOrders = await OrdersModel.find({user: req.user._id});
  res.status(200).json(allOrders);
});

app.get("/allPositions", requireAuth, async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.get("/funds", requireAuth, async (req, res) => {
  const wallet = await WalletModel.findOne({ userId: req.user._id });
  if (!wallet) {
    return res.status(404).json({
      success: false,
      message: "Wallet not found",
    });
  }
  res.json({
    success: true,
    balance: wallet.balance,
  });
});

app.post("/funds/deposit", requireAuth, async (req, res) => {
  try {
    const amount = Number(req.body.amount);

    if (!Number.isFinite(amount) || amount <= 0) {
      return res.status(400).json({ success: false, message: "Invalid Amount" });
    }

    const wallet = await WalletModel.findOne({userId: req.user._id});

    if (!wallet) {
      return res.status(404).json({success: false, message: "Wallet not found"});
    }

    wallet.balance = Number(wallet.balance || 0) + amount;
    await wallet.save();
    return res.json({success: true, balance: wallet.balance});

  } catch (error) {
    console.error(error);
    return res.status(500).json({success: false, message: "Server error"});
  }
});

app.post("/funds/withdraw", requireAuth, async(req, res) =>{
  try{
    const amount = Number(req.body.amount);
    if(!Number.isFinite(amount) || amount <= 0){
      res.status(400).json({success : false, message : "Invalid Amount"});
    }

    const wallet = await WalletModel.findOne({ userId: req.user._id });

    if (!wallet) {
      return res.status(404).json({ success: false, message: "Wallet not found" });
    }

    if (wallet.balance < amount) {
      return res.status(400).json({ success: false, message: "Insufficient funds" });
    }

    wallet.balance = Number(wallet.balance || 0) - amount;
    await wallet.save();

    res.json({ success: true, balance: wallet.balance });
  }catch(error){
    console.log(error);
    return res.status(500).json({success: false, message: "Server error"});
  }
});

app.post("/newOrder", requireAuth, async(req, res) => {
  try{
      // console.log(newOrder);
      const price = Number(req.body.price);
      const qty = Number(req.body.qty);
      const totalCost = price * qty;
      if (!Number.isFinite(price) || price <= 0 || !Number.isFinite(qty) || qty <= 0) {
        return res.status(400).json({
          success: false,
          message: "Invalid price or quantity",
        });
      }

      const wallet = await WalletModel.findOne({userId: req.user._id});
      if(!wallet){
        console.log("Wallet not esxits");
        return res.status(404).json({success: false, message: "Wallet not found"});
      }

      if (wallet.balance < totalCost) {
        console.log("Low balance");
        return res.status(400).json({ success: false, message: "Insufficient wallet balance"});
      }

      let newOrder = new OrdersModel({
        name: req.body.name,
        price: price,
        qty: qty,
        mode: req.body.mode,
        user: req.user._id, 
      });

      wallet.balance = wallet.balance - totalCost;
      await wallet.save();
      await newOrder.save();

      res.status(200).json({success: true, message: "Order purchased successfully", order: newOrder, balance: wallet.balance,
      });
    }catch (error) {
      console.log(error);
      res.status(500).json({success: false, message: "Something went wrong",});
    }
});

app.post("/sellOrder", requireAuth, async(req, res) =>{
  try{  
    const name = req.body.name;
    const price = Number(req.body.price);
    const qty = Number(req.body.qty);
    const totalCredit = price * qty;

    if (!name || !Number.isFinite(price) || price <= 0 || !Number.isFinite(qty) || qty <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid price or quantity",
      });
    }

    const wallet = await WalletModel.findOne({ userId: req.user._id });
    if (!wallet) {
      return res.status(404).json({ success: false, message: "Wallet not found" });
    }

    const existingOrder = await OrdersModel.findOne({
      name: name,
      user: req.user._id,
      mode: "BUY",       
    });

    if(!existingOrder){
      return res.status(400).json({success: false, message: "You don't own this stock",});
    }

    if(existingOrder.qty < qty){
      return res.status(400).json({success: false, message: "Not enough quantity to sell"});
    }

    const sellOrder = new OrdersModel({
      name: name,
      qty: qty,
      price: price,
      mode: "SELL",      
      user: req.user._id,
    });
    await sellOrder.save();

    existingOrder.qty -= qty;

    if (existingOrder.qty === 0) {
      await OrdersModel.findByIdAndDelete(existingOrder._id);
    } else {
      await existingOrder.save();
    }

    wallet.balance = Number(wallet.balance || 0) + totalCredit;
    await wallet.save();

    res.status(200).json({
      success: true,
      message: "Stock sold successfully",
      order: sellOrder,
      balance: wallet.balance,
    });
  }catch(error){
    console.log(error);
    res.status(500).json({success: false, message: "Something went wrong"});
  }
});

app.post("/signup", async(req, res, next) => {
    try{
        const { email, password, username, createdAt } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.json({ message: "User already exists" });
        }


        const user = await User.create({ email, password, username, createdAt });
        const token = createSecretToken(user._id);
        
        await WalletModel.create({
          userId: user._id,
          balance: 0,
        });

        res.cookie("token", token, cookieOptions);
        res.status(201).json({ message: "User signed in successfully", success: true, user, walletBalance: 0 });
        // next();
    }catch (error) {
        console.error(error);
    }
});


app.post("/login", async(req, res, next) =>{
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.json({message: 'All fields are Required!'});
        }
        const user = await User.findOne({email});
        if(!user){
            return res.json({message:'Incorrect password or email' });
        }
        const auth = await bcrypt.compare(password, user.password);
        if(!auth){
            return res.json({message:'Incorrect password or email' }); 
        }
        const token = createSecretToken(user._id);

        res.cookie("token", token, cookieOptions);

        res.status(201).json({ message: "User logged in successfully", success: true });
        // next();
    }catch (error){
        console.log(error);
    }
});

app.post("/logout", (req, res) => {
    res.clearCookie("token", cookieOptions);
    return res.status(200).json({ message: "User logged out successfully", success: true });
});
