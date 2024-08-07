/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Navbar from "../components/navbar/Navbar";
import Buy from "../pages/buy/Buy";
import Seller from "../pages/sell/Seller";
import Login from "../components/Login/Login";
import Signup from "../components/signup/Signup";
import CheckProperty from "../pages/checkProperty/CheckProperty";
import Map from "../pages/map/Map";

const RoutesConfig = () => {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkproperty" element={<CheckProperty />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
