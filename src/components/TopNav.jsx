import React from "react";
import "./component.css";
import { useGlobalContext } from "../context";

const TopNav = () => {
  const { login } = useGlobalContext();

  return (
    <div className=" w-full bg-white fixed top-0 left-0 lg:pl-40  z-50 shadow-lg">
      <div className="container mx-auto top-nav flex flex-col md:grid grid-cols-12 p-6 pb-2 gap-4 md:pb-6 ">
        <div className="top-nav-top md:col-span-6 flex items-center justify-center gap-8">
          <div className="img-div w-1/5 justify-center h-24 flex gap-2 flex-col items-center ">
            <img src="/r15.png" className="w-28" alt="" />
          </div>
          <div className="details-tnav flex flex-col w-4/5">
            <h1 className="text-3xl lg:text-4xl ">
              {login.model_name ? login.model_name : "no model from backend"}
            </h1>
            <p>
              {" "}
              <i class="fa-solid fa-location-dot"></i> muthaiya mudalai street
              washermenpet , chennai 600018{" "}
            </p>
          </div>
        </div>
        <div className="top-nav-bottom md:col-span-6 flex my-4 items-center px-8 bg-gray-200 rounded-full">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search..." />
          <i class="fa-solid fa-sliders"></i>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
