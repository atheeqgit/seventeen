import React from "react";
import "./component.css";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "nav-button" : isActive ? "nav-button link-active" : ""
        }
      >
        <i className="fa-solid fa-house"></i>
        <p>home</p>
      </NavLink>
      <NavLink
        to="/wallet"
        className={({ isActive, isPending }) =>
          isPending ? "nav-button" : isActive ? "nav-button link-active" : ""
        }
      >
        <i class="fa-solid fa-wallet"></i>
        <p>wallet</p>
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive, isPending }) =>
          isPending ? "nav-button" : isActive ? "nav-button link-active" : ""
        }
      >
        <i class="fa-solid fa-cart-shopping"></i>
        <p>cart</p>
      </NavLink>
      <NavLink
        to="/sos"
        className={({ isActive, isPending }) =>
          isPending ? "nav-button" : isActive ? "nav-button link-active" : ""
        }
      >
        <i class="fa-solid fa-car-burst"></i> <p>sos</p>
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive, isPending }) =>
          isPending ? "nav-button" : isActive ? "nav-button link-active" : ""
        }
      >
        <i class="fa-solid fa-user"></i>
        <p>profile</p>
      </NavLink>
    </div>
  );
};

export default BottomNav;
