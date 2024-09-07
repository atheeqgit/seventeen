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
import Booking from "./pages/booking/Booking";
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

function App() {
  const { getLocalStorage, login } = useGlobalContext();

  return (
    <div className="app">
      <ToastContainer />
      <Router>
        {getLocalStorage() == null ? (
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/landing" element={<LandingPage />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        ) : (
          <div className="lg:pl-40">
            <AnimatePresence>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/sos" element={<Sos />} />
                <Route path="/refer&earn" element={<RefEarn />} />
                <Route path="/help&support" element={<HelpSupport />} />
                <Route path="/aboutapp" element={<AboutApp />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/details/mr/:ServiceName" element={<Details />} />
                <Route
                  path="/moreDetails/mr/:ServiceDetails"
                  element={<MoreDetails />}
                />
                <Route path="/confirmBooking" element={<Booking />} />
                <Route path="/checkin" element={<CheckinPage />} />
                <Route path="/confirmed" element={<Confirm />} />
                <Route path="/Mybooking" element={<Mybookings />} />
                <Route path="/orderdetails/:id" element={<Orderdetails />} />
                <Route path="/trackorder/:id" element={<Trackorder />} />
                <Route path="*" element={<Notfound />} />
              </Routes>
              <BottomNav />
            </AnimatePresence>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
