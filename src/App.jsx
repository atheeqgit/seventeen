import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import { useGlobalContext } from "./context";
import LandingPage from "./pages/landing/LandingPage";
import Mybookings from "./pages/Mybookings/Mybookings";
import Orderdetails from "./pages/orderdetails/Orderdetails";
import Trackorder from "./pages/trackorder/Trackorder";
import Notfound from "./pages/notfound/Notfound";

function App() {
  const [count, setCount] = useState(0);
  const { login } = useGlobalContext();
  return (
    <div className="app lg:pl-32">
      <Router>
        {login ? (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/landing" element={<LandingPage />} />
          </Routes>
        ) : (
          <>
            <TopNav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/moreDetails/:id/:price" element={<MoreDetails />} />
              {/* change this to nested routes */}
              <Route path="/confirmBooking" element={<Booking />} />
              <Route path="/confirmed" element={<Confirm />} />
              <Route path="/Mybooking" element={<Mybookings />} />
              <Route path="/orderdetails/:id" element={<Orderdetails />} />
              <Route path="/trackorder/:id" element={<Trackorder />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
            <BottomNav />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
