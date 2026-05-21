import React from "react";
import Navbar from "../navbar";
import Hero from "./hero";
import LeftSection from "./leftSection";
import RightSection from "./rightSection";
import Universe from "./universe";
import Footer from "../footer";

function ProductPage() {
  return (
    <div>
      <Hero />
      <LeftSection
        imgUrl="./media/kite.png"
        prodName="Kite"
        prodDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="https://kite-demo.zerodha.com/dashboard"
        learnMore="https://zerodha.com/products/kite"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        appStore="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"
        baseTag=""
      />

      <RightSection
        imgUrl="./media/products-console.png"
        prodName="Console"
        prodDesc="The central dashboard for your TradeIn account. Gain insights into your trades and investments with in-depth reports and visualisations."
        baseTag="https://zerodha.com/products/console"
        Tag="Learn More"
      />

      <LeftSection
        imgUrl="./media/products-coin.png"
        prodName="Coin"
        prodDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        baseTag="https://coin.zerodha.com/"
        Tag="Coin"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        appStore="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"
      />

      <RightSection
        imgUrl="./media/landing.svg"
        prodName="Kite Connect API"
        prodDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        baseTag="https://zerodha.com/products/api/"
        Tag="Kite connect"
      />

      <LeftSection
        imgUrl="./media/varsity-products.svg"
        prodName="Varsity Mobile"
        prodDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        appStore="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"
      />
      <Universe />
    </div>
  );
}

export default ProductPage;
