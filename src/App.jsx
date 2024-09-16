import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useGlobalContext } from "./context";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/Home";
import BottomNav from "./components/BottomNav";
import Wallet from "./pages/Wallet";
import Profile from "./pages/profile";
import Details from "./pages/details/Details";
import MoreDetails from "./pages/moredetails/MoreDetails";
import Cart from "./pages/cart/Cart";
import Confirm from "./pages/confirmPage/Confirm";
import LandingPage from "./pages/landing/LandingPage";
import Mybookings from "./pages/Mybookings/Mybookings";
import Orderdetails from "./pages/orderdetails/Orderdetails";
import Trackorder from "./pages/trackorder/Trackorder";
import Notfound from "./pages/notfound/Notfound";
import CheckinPage from "./pages/CheckinPage";
import Sos from "./pages/Sos";
import RefEarn from "./pages/RefEarn";
import HelpSupport from "./pages/HelpSupport";
import AboutApp from "./pages/AboutApp";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { useNavigate } from "react-router-dom";
import Search from "./pages/Search";
//import { App as capApp } from "@capacitor/app"; // Ensure this import is correct

function App() {
  const { getLocalStorage, login, cartData } = useGlobalContext();

  const navigate = useNavigate(); // Replacing useHistory with useNavigate

  // useEffect(() => {
  //   const backButtonListener = capApp.addListener("backButton", () => {
  //     if (window.location.pathname === "/") {
  //       // If the user is on the home page, exit the app
  //       capApp.exitApp();
  //     } else {
  //       // Otherwise, go back in the history
  //       navigate(-1); // Replaces history.goBack()
  //     }
  //   });

  //   // Clean up the listener on component unmount
  //   return () => {
  //     backButtonListener.remove();
  //   };
  // }, [navigate]);

  return (
    <div className="app font-poppins">
      <ToastContainer />

      {getLocalStorage() == null ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      ) : (
        <div className="lg:pl-36">
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/sos" element={<Sos />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/details/mr/:ServiceName" element={<Details />} />
              <Route
                path="/moreDetails/mr/:ServiceDetails"
                element={<MoreDetails />}
              />
              <Route path="/checkin" element={<CheckinPage />} />
              <Route path="/confirmed" element={<Confirm />} />
              <Route path="/Mybooking" element={<Mybookings />} />
              <Route path="/orderdetails/:id" element={<Orderdetails />} />
              <Route path="/trackorder/:id" element={<Trackorder />} />
              <Route path="*" element={<Notfound />} />
              <Route path="/refer&earn" element={<RefEarn />} />
              <Route path="/help&support" element={<HelpSupport />} />
              <Route path="/aboutapp" element={<AboutApp />} />
              <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/search" element={<Search />} />
            </Routes>
            <BottomNav />
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

export default App;
