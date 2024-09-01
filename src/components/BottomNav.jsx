import React from "react";
import "./component.css";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="bottom-nav flex flex-row lg:flex-col lg:h-full fixed bottom-0 left-0 z-[102] w-full lg:w-fit px-8 lg:px-4 py-4 justify-around bg-white border border-gray-400 rounded-2xl">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "nav-button " : isActive ? "nav-button link-active" : ""
        }
      >
        <i className="fa-solid fa-house"></i>
        <p>home</p>
      </NavLink>
      {/* <NavLink
        to="/wallet"
        className={({ isActive, isPending }) =>
          isPending ? "nav-button " : isActive ? "nav-button link-active" : ""
        }
      >
        <i className="fa-solid fa-wallet"></i>
        <p>wallet</p>
      </NavLink> */}
      <NavLink
        to="/cart"
        className={({ isActive, isPending }) =>
          isPending ? "nav-button " : isActive ? "nav-button link-active" : ""
        }
      >
        <span></span>
        <i className="fa-solid fa-wallet"></i>
        <p>cart</p>
      </NavLink>
      <NavLink
        to="/mybooking"
        className={({ isActive, isPending }) =>
          isPending ? "nav-button " : isActive ? "nav-button link-active" : ""
        }
      >
        <i className="fa-solid fa-business-time"></i>
        <p>bookings</p>
      </NavLink>
      <NavLink
        to="/sos"
        className={({ isActive, isPending }) =>
          isPending ? "nav-button " : isActive ? "nav-button link-active" : ""
        }
      >
        <i className="fa-solid fa-car-burst"></i> <p>sos</p>
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive, isPending }) =>
          isPending ? "nav-button " : isActive ? "nav-button link-active" : ""
        }
      >
        <i className="fa-solid fa-user"></i>
        <p>profile</p>
      </NavLink>
    </div>
  );
};

export default BottomNav;
