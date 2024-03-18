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


import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import loadingGif from "./images/Bean.gif";
import "./index.css";

const Start = lazy(() => import("./components/Start/Start"));
const Home = lazy(() => import("./components/Home/Home"));
const LoginPhoneNo = lazy(() => import("./components/LogIn/LoginPhoneNo"));
const LoginOTP = lazy(() => import("./components/LogIn/LoginOTP"));
const MenuItem = lazy(() => import("./components/MenuItem/MenuItem"));
const ProductDetails = lazy(() =>
  import("./components/ProductDetails/ProductDetails")
);
const CheckOut = lazy(() => import("./components/Checkout/Checkout"));
const ThankYou = lazy(() => import("./components/ThankYou/ThankYou"));
const SaveForLater = lazy(() =>
  import("./components/SaveForLater/SaveForLater")
);



function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<img src={loadingGif} alt="Loading..." style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}/>}>
          <Routes>
            <Route path="/" exact element={<Start />} />
            <Route path="/login" element={<LoginPhoneNo />} />
            <Route path="/logInOtp" element={<LoginOTP />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/menu" exact element={<MenuItem />} />
            <Route
              path="/details/:productId"
              exact
              element={<ProductDetails />}
            />
            <Route path="/wishlist" exact element={<SaveForLater />} />
            <Route path="/checkout" exact element={<CheckOut />} />
            <Route path="/thankyou" exact element={<ThankYou />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
