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

1. cleaner env-based API configuration
2. stronger validation and consistent API error format
3. better frontend route protection
4. adding tests for auth and protected endpoints
5. deployment hardening for production setup

This project is still evolving, and I am treating it as an actively maintained portfolio project rather than a one-time build.

