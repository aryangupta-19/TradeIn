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

app.get("/allPositions", requireAuth, async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post("/newOrder", requireAuth, async(req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        price: req.body.price,
        qty: req.body.qty,
        mode: req.body.mode,
    });
    console.log(newOrder);
    
    // HoldingsModel -> insert current order in our holdings 
    // let holding = await HoldingsModel.insertOne(newOrder);
    // console.log(holding);
    newOrder.save();
    res.send("order saved");
})

app.post("/signup", async(req, res, next) => {
    try{
        const { email, password, username, createdAt } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.json({ message: "User already exists" });
        }


        const user = await User.create({ email, password, username, createdAt });
        const token = createSecretToken(user._id);

        res.cookie("token", token, cookieOptions);
        res.status(201).json({ message: "User signed in successfully", success: true, user });
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
