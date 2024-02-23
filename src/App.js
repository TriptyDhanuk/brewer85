import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Start from "./components/Start/Start";
import Home from "./components/Home/Home";
import LoginPhoneNo from "./components/LogIn/LoginPhoneNo";
import LoginOTP from "./components/LogIn/LoginOTP";
import MenuItem from "./components/MenuItem/MenuItem";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CheckOut from "./components/Checkout/Checkout";
import ThankYou from "./components/ThankYou/ThankYou";

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
          <Route path="/checkout" exact element={<CheckOut/>} />
          <Route path="/thankyou" exact element={<ThankYou/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
