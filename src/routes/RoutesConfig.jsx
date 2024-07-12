/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Navbar from "../components/navbar/Navbar";
import Buy from "../pages/buy/Buy";
import Seller from "../pages/sell/Seller";
import Signup from "../components/signup/Signup";
import Login from "../components/Login/Login";

const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/seller" element={<Seller />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
