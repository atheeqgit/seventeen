import React, { useEffect } from "react";
import "./component.css";
import { useGlobalContext } from "../context";
import { useState } from "react";

const TopNav = () => {
  const { login, getImgUrl } = useGlobalContext();

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down, hide navbar
      setIsVisible(false);
    } else {
      // if scroll up, show navbar
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full bg-white fixed top-0 left-0 lg:pl-40 z-50 shadow-lg transition-transform duration-300 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
      id="top-nav"
    >
      <div className="container mx-auto top-nav flex flex-col md:grid grid-cols-12 p-4 md:p-6 pb-2 gap-4 md:pb-6 ">
        <div className="top-nav-top md:col-span-6 flex items-center justify-center gap-8">
          <div className="img-div w-1/5 justify-center h-24 flex gap-2 flex-col items-center ">
            <img
              src={getImgUrl(login?.model_name ? login?.model_name : "")}
              className="w-28"
              alt=""
            />
          </div>
          <div className="details-tnav flex flex-col w-4/5">
            <h1 className="text-3xl lg:text-4xl ">
              {login?.model_name ? login?.model_name : "no model"}
            </h1>
            <p className="text-lg lg:text-2xl text-prewrap">
              <i className="fa-solid fa-location-dot"></i> Location has set to
              the place you have marked
            </p>
          </div>
        </div>
        <div className="top-nav-bottom md:col-span-6 flex my-4 items-center px-8 bg-gray-200 rounded-full">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search... (currently under development)"
          />
          <i class="fa-solid fa-sliders"></i>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
