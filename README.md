# TradeIn

I built TradeIn as a full-stack trading platform project to practice how a real product is structured end to end, not just how individual pages or APIs work.

The main goal of this project was to connect everything properly:

- authentication and authorization
- backend APIs and database models
- frontend auth state
- dashboard data flow and actions

I started this as a learning-focused project for placements, and I am still actively improving it by cleaning architecture and adding new features.

## Why I Built TradeIn

TradeIn is a full-stack trading platform designed around the complete lifecycle of a user’s trading activity — from managing funds to executing orders and tracking portfolio performance.

I wanted to build a product where the different parts of the system work together as they would in a real financial application.
TradeIn

TradeIn is a full-stack trading platform that brings authentication, wallet management, transactions, buy/sell orders, portfolio tracking, and analytics into one connected application.

The platform is built around the complete user flow: a user can create an account, manage virtual funds, place trading orders, track transactions, and monitor their portfolio through a centralized dashboard.

TradeIn is an actively developed project, with continuous improvements being made to its architecture, validation, testing, and cloud readiness.

Key Highlights

* Full-stack trading platform built with React, Node.js, Express, and MongoDB
* JWT-based authentication with cookie-based sessions and protected routes
* Virtual wallet with add funds and withdrawal workflows
* Buy and sell orders with backend balance validation
* Transaction tracking for wallet and trading activity
* Portfolio dashboard with holdings, positions, and trading actions
* Interactive charts for portfolio and trading data
* Risk scoring to provide insights into trading behaviour
* Backend business logic for managing wallet, orders, transactions, and portfolio state

## Product Flow

The application connects the major parts of the product into one workflow:

User
  |
  v
React Frontend
  |
  v
Express REST API
  |
  +---- Authentication & Authorization
  |
  +---- Business Logic
  |
  +---- Wallet & Transactions
  |
  +---- Orders & Portfolio
  |
  v
MongoDB
  |
  v
Updated Dashboard Data

The frontend handles the user interface and application state, while the backend manages authentication, validation, business rules, and database operations.

Project Structure

TradeIn/
│
├── backend/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── ...
│
├── frontend/
│   └── ...
│
└── dashboard/
    └── ...

## Backend

Handles authentication, authorization, REST APIs, business logic, wallet operations, orders, transactions, and database operations.

## Frontend

Contains the public-facing application, landing page, signup, login, and frontend authentication flow.

## Dashboard

Contains the authenticated user experience, including wallet information, holdings, positions, charts, portfolio data, and trading actions.

Authentication & Security

* User signup and login
* Password hashing using bcrypt
* JWT-based authentication
* Cookie-based session handling
* Session verification
* Protected backend routes
* Authorization checks
* Backend validation
* Credentialed API requests

Important business rules are handled on the backend rather than relying only on frontend validation.

## Wallet & Transactions

The wallet manages the user’s available virtual trading funds.

Current functionality includes:

* Add funds
* Withdraw funds
* Available balance tracking
* Balance validation
* Transaction records
* Wallet updates connected with trading activity

Trading & Orders

TradeIn supports the main trading workflow using virtual funds.

Current functionality includes:

* Buy orders
* Sell orders
* Order validation
* Available balance checks
* Holdings and positions
* Order tracking
* Portfolio updates after trading activity

## Dashboard & Analytics

The dashboard brings the user’s trading information together in one place.

It currently includes:

* Holdings
* Positions
* Wallet information
* Trading actions
* Portfolio data
* Interactive charts using Chart.js
* Risk scoring

## Tech Stack

Frontend

* React
* React Router
* Axios
* Chart.js
* Vite

Backend

* Node.js
* Express.js
* JWT
* bcrypt
* cookie-parser
* CORS

Database

* MongoDB
* Mongoose

Tools

* Git
* GitHub
* Vite

Core API Endpoints

POST /signup
POST /login
POST /verify
POST /logout
GET  /allHoldings
GET  /allPositions
POST /newOrder

Additional APIs handle wallet, transaction, and trading workflows.

Cloud & Deployment

Cloud deployment is the next stage of TradeIn. I am currently working toward deploying the application and setting up a production-oriented cloud environment.

Current Development

TradeIn is an actively maintained project. Current development is focused on:

* Improving API validation and error handling
* Strengthening frontend route protection
* Adding automated tests
* Improving transaction and portfolio tracking
* Expanding trading workflows
* Preparing the application for cloud deployment

Project Goal

TradeIn started as a full-stack development project and has evolved into an actively maintained product.

The goal is to build and understand a complete application across frontend, backend, database, authentication, business logic, transactions, and cloud infrastructure, while continuously improving the product as new requirements are introduced.
The product currently includes:

* User authentication with JWT, cookies, password hashing, and protected routes
* Digital wallet for managing available trading funds
* Add Funds & Withdraw workflows with transaction tracking
* Buy & Sell orders using the user’s available balance
* Order management to track executed trading activity
* Portfolio and dashboard views for monitoring holdings and performance
* Interactive charts for visualizing trading and portfolio data
* Risk-scoring system to provide insights into a user’s trading behaviour
* Backend validation and transaction logic to maintain consistent wallet and order states

Rather than building isolated features, I designed TradeIn as a connected product where authentication, wallet management, orders, transactions, portfolio data, and analytics all interact with each other.

The focus was not simply on building a UI for trading, but on understanding how the underlying product logic, data flow, security, and state management come together to support a complete user experience.

## How This Project Is Organized

This repository has three parts:

1. `backend/`  
   Handles API routes, authentication, authorization, and database operations.

2. `frontend/`  
   Public-facing React application with landing pages and signup/login flow.

3. `dashboard/`  
   React dashboard for holdings, positions, watchlist interactions, and order actions.

## What I Have Implemented

### Authentication and Session Flow

I implemented:

1. signup route
2. login route
3. verify route
4. logout route

Passwords are hashed in the user model using a Mongoose pre-save hook.  
JWT is generated on login/signup and stored in cookie-based session flow.

So even if someone directly calls APIs, protected routes are blocked without valid token.

### Dashboard Functionality

Dashboard currently includes:

1. holdings table
2. positions table
3. buy action window with order post
4. chart components (doughnut + vertical bar)

Dashboard API calls are connected with backend protected routes using credentialed requests.

## Tech Stack

1. Frontend: React, React Router, Axios, Chart.js
2. Backend: Node.js, Express, JWT, bcrypt, cookie-parser, CORS
3. Database: MongoDB with Mongoose
4. Build tools: Vite

## API Endpoints Implemented

1. `POST /signup`
2. `POST /login`
3. `POST /verify`
4. `POST /logout`
5. `GET /allHoldings` (protected)
6. `GET /allPositions` (protected)
7. `POST /newOrder` (protected)

## What I Am Working On Next

I am continuing work on this project and currently focusing on:

1. Adding more functionalities based on stock exchange with dummy money.
2. Mainly I am planning to add cloud features.
3. Stronger validation and consistent API error format
4. Better frontend route protection
5. Adding tests for auth and protected endpoints
6. deployment hardening for production setup.

## Next Target 

1. Configure user wallet with Stock Transactions.
2. Preparing Azure deployment using App Service, Static Web Apps, and MongoDB Atlas.
3. Payment Gateways.

This project is still evolving, and I am treating it as an actively maintained portfolio project rather than a one-time build.

