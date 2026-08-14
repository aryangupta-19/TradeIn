import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import AddFunds from "./AddFunds";
import Transactions from "./Transactions";

import { GeneralContextProvider } from "./GeneralContext";


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/addfunds" element={<AddFunds />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
