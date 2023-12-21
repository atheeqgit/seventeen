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
import Cart from "./pages/Cart";
import Profile from "./pages/profile";

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
        </Routes>
        <BottomNav />
      </Router>
    </div>
  );
}

export default App;
