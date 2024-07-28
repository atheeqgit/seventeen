import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useGlobalContext } from "./context";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/Home";
import TopNav from "./components/TopNav";
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

function App() {
  const [count, setCount] = useState(0);
  const { login } = useGlobalContext();
  return (
    <div className="app">
      <ToastContainer />
      <Router>
        {login == null ? (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        ) : (
          <div className="lg:pl-40">
            <AnimatePresence>
              <Routes>
                <Route key={1} path="/" element={<Home />} />
                <Route key={2} path="/wallet" element={<Wallet />} />
                <Route key={3} path="/cart" element={<Cart />} />
                <Route key={4} path="/profile" element={<Profile />} />
                <Route key={5} path="/details/:id" element={<Details />} />
                {/* <Route
                  key={6}
                  path="/moreDetails/:id/:price"
                  element={<MoreDetails />}
                /> */}
                {/* change this to nested routes */}
                <Route key={7} path="/confirmBooking" element={<Booking />} />
                <Route key={8} path="/confirmed" element={<Confirm />} />
                <Route key={9} path="/Mybooking" element={<Mybookings />} />
                <Route
                  key={10}
                  path="/orderdetails/:id"
                  element={<Orderdetails />}
                />
                <Route
                  key={11}
                  path="/trackorder/:id"
                  element={<Trackorder />}
                />
                <Route key={12} path="*" element={<Notfound />} />
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
