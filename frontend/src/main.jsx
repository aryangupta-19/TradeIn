import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './landing_page/home/homePage'
import AboutPage from './landing_page/about/aboutpage'
import PricingPage from './landing_page/pricing/pricingpage'
import ProductPage from './landing_page/products/productPage'
import SupportPage from './landing_page/support/supportPage'
import SignUp from './landing_page/signup/signup'
import Login from './landing_page/login/login'
import NotFound from './landing_page/notFound'
import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './landing_page/navbar'
import Footer from './landing_page/footer'
import { AuthProvider } from './context/AuthContext'



createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />

      <Route path="/about" element={<AboutPage/>}></Route>

      <Route path="/pricing" element={<PricingPage/>}></Route>

      <Route path="/products" element={<ProductPage/>}></Route>

      <Route path="/support" element={<SupportPage/>}></Route>

      <Route path="/signup" element={ <SignUp/>}></Route>

      <Route path="/login" element={ <Login/>}></Route>

      <Route path="*" element={ <NotFound/>}></Route>

    </Routes>
    <Footer/>
  </BrowserRouter>
  </AuthProvider>
)
