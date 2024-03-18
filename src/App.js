// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index.css";
// import Start from "./components/Start/Start";
// import Home from "./components/Home/Home";
// import LoginPhoneNo from "./components/LogIn/LoginPhoneNo";
// import LoginOTP from "./components/LogIn/LoginOTP";
// import MenuItem from "./components/MenuItem/MenuItem";
// import ProductDetails from "./components/ProductDetails/ProductDetails";
// import CheckOut from "./components/Checkout/Checkout";
// import ThankYou from "./components/ThankYou/ThankYou";
// import SaveForLater from "./components/SaveForLater/SaveForLater";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" exact element={<Start />} />
//           <Route path="/login" element={<LoginPhoneNo />} />
//           <Route path="/logInOtp" element={<LoginOTP />} />
//           <Route path="/home" exact element={<Home />} />
//           <Route path="/menu" exact element={<MenuItem />} />
//           <Route
//             path="/details/:productId"
//             exact
//             element={<ProductDetails />}
//           />
//           <Route path="/wishlist" exact element={<SaveForLater />} />
//           <Route path="/checkout" exact element={<CheckOut />} />
//           <Route path="/thankyou" exact element={<ThankYou />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;


//React 18 code splitting done with Suspense and lazy 
import React, { Suspense, useState, useEffect } from "react";
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
import SaveForLater from "./components/SaveForLater/SaveForLater";
import loadingGif from "./images/Bean.gif";

// Loading component to show during suspense
const Loading = () => {
  return (
    <div className="loading-container" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <img src={loadingGif} alt="Loading" />
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Set loading state to false after 500 milliseconds (adjust as needed)

    return () => clearTimeout(delay); // Cleanup timeout
  }, []); // Run once on mount

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/login" element={<LoginPhoneNo />} />
            <Route path="/logInOtp" element={<LoginOTP />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/menu"
              element={ 
                <Suspense fallback={<Loading />}>
                  <MenuItem />
                </Suspense>
              }
            />
            <Route
              path="/details/:productId"
              element={
                <Suspense fallback={<Loading />}>
                  <ProductDetails />
                </Suspense>
              }
            />
            <Route
              path="/wishlist"
              element={
                <Suspense fallback={<Loading />}>
                  <SaveForLater />
                </Suspense>
              }
            />
            <Route
              path="/checkout"
              element={
                <Suspense fallback={<Loading />}>
                  <CheckOut />
                </Suspense>
              }
            />
            <Route
              path="/thankyou"
              element={
                <Suspense fallback={<Loading />}>
                  <ThankYou />
                </Suspense>
              }
            />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
