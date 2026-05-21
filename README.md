# TradeIn

I built TradeIn as a full-stack trading platform project to practice how a real product is structured end to end, not just how individual pages or APIs work.

The main goal of this project was to connect everything properly:

- authentication and authorization
- backend APIs and database models
- frontend auth state
- dashboard data flow and actions

I started this as a learning-focused project for placements, and I am still actively improving it by cleaning architecture and adding new features.

## Why I Built This

I wanted one project where I could clearly demonstrate:

1. backend development with Express and MongoDB
2. secure authentication flow with JWT and cookies
3. protected route handling on backend
4. frontend state management for auth
5. dashboard-style UI with charts and order actions

Instead of making separate small demos, I combined everything into one connected system.

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

### Authorization

I added `requireAuth` middleware in backend and used it to protect sensitive endpoints:

1. `GET /allHoldings`
2. `GET /allPositions`
3. `POST /newOrder`

So even if someone directly calls APIs, protected routes are blocked without valid token.

### Frontend Auth Handling

I used React Context (`AuthContext`) to manage session state on frontend:

1. session verify on app load
2. auth state handling (`isAuthenticated`, `authLoading`, `user`)
3. login/signup updates state
4. logout clears state

This keeps navbar and auth behavior consistent.

### Dashboard Functionality

Dashboard currently includes:

1. holdings table
2. positions table
3. buy action window with order post
4. chart components (doughnut + vertical bar)

Dashboard API calls are connected with backend protected routes using credentialed requests.

## Schema and Model Connection

I kept schema/model separation to make backend easier to maintain.

### Holdings

- Schema: `backend/schema/HoldingsSchema.js`
- Model: `backend/models/HoldingsModel.js`
- Used in route: `GET /allHoldings`

### Positions

- Schema: `backend/schema/PositionsSchema.js`
- Model: `backend/models/PositionsModel.js`
- Used in route: `GET /allPositions`

### Orders

- Schema: `backend/schema/OrdersSchema.js`
- Model: `backend/models/OrdersModel.js`
- Used in route: `POST /newOrder`

### Users

- Model file: `backend/models/UsersModel.js`
- Used in: signup/login/verify/auth middleware

This gives a clear flow:

`Route -> Model -> Schema -> MongoDB`

## Tech Stack

1. Frontend: React, React Router, Axios, Chart.js
2. Backend: Node.js, Express, JWT, bcrypt, cookie-parser, CORS
3. Database: MongoDB with Mongoose
4. Build tools: Vite

## Local Setup

### 1) Clone repository

```bash
git clone https://github.com/aryangupta-19/TradeIn.git
cd TradeIn
```

### 2) Run backend

```bash
cd backend
npm install
```

Create `.env` in `backend/`:

```env
MONGO_URL=your_mongodb_connection_string
TOKEN_KEY=your_secret_key
NODE_ENV=development
```

Then start server:

```bash
npm start
```

### 3) Run frontend

```bash
cd ../frontend
npm install
npm run dev
```

### 4) Run dashboard

```bash
cd ../dashboard
npm install
npm run dev
```

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

1. cleaner env-based API configuration
2. stronger validation and consistent API error format
3. better frontend route protection
4. adding tests for auth and protected endpoints
5. deployment hardening for production setup

This project is still evolving, and I am treating it as an actively maintained portfolio project rather than a one-time build.

