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

