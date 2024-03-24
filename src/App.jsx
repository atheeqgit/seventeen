import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopNav from "./components/topNav";
import BottomNav from "./components/BottomNav";
import Wallet from "./pages/Wallet";
import Profile from "./pages/profile";
import Details from "./pages/details/Details";
import MoreDetails from "./pages/moredetails/MoreDetails";
import Cart from "./pages/cart/Cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Router>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/moreDetails/:id/:price" element={<MoreDetails />} />
        </Routes>
        <BottomNav />
      </Router>
    </div>
  );
}

export default App;
