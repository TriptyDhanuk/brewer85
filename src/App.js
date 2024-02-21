import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./components/Start/Start";
import Home from "./components/Home/Home";
import LoginPhoneNo from "./components/Login/LoginPhoneNo";
import LoginOTP from "./components/Login/LoginOTP";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Start />} />
          <Route path="/login" element={<LoginPhoneNo />} />
          <Route path="/logInOtp" element={<LoginOTP />} />
          <Route path="/home" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
