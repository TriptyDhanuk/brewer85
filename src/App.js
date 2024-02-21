import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Start from "./components/Start/Start";
import Home from "./components/Home/Home";
import LoginPhoneNo from "./components/Login/LoginPhoneNo";
import LoginOTP from "./components/Login/LoginOTP";
import MenuItem from "./components/MenuItem/MenuItem";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Start />} />
          <Route path="/login" element={<LoginPhoneNo />} />
          <Route path="/logInOtp" element={<LoginOTP />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/menu" exact element={<MenuItem />} />
          <Route path="/details" exact element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
