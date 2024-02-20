import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./components/Start/Start";
import Home from "./components/Home/Home";
import LoginPhoneNo from "./components/LogIn/LoginPhoneNo";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Start />} />
          <Route path="/login" element={<LoginPhoneNo/>}/>
          
          <Route path="/home" exact element={<Home />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
