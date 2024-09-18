import React, { useEffect } from "react";
import "./component.css";
import { useGlobalContext } from "../context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
  const navigate = useNavigate();
  const { login, getImgUrl, location } = useGlobalContext();

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
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
      className={`w-full bg-white fixed top-0 left-0 lg:pl-40 z-50 shadow-sm transition-transform duration-300 pb-1 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
      id="top-nav"
    >
      <div className="container mx-auto top-nav flex flex-col md:grid grid-cols-12 p-4 md:p-6 pb-2 gap-3 md:gap-4 md:pb-6 ">
        <div className="top-nav-top md:col-span-6 flex items-center justify-center gap-3 md:gap-6">
          <div
            onClick={() => {
              navigate("/ChangeModel");
            }}
            className="img-div w-1/5 justify-center h-24 flex gap-2 flex-col items-center "
          >
            <img
              src={
                "https://justtodo.in/models/" +
                getImgUrl(login?.model_name ? login?.model_name : "")
              }
              className="w-28"
              alt=""
            />
          </div>
          <div className="details-tnav flex flex-col w-4/5">
            <h1 className="text-3xl lg:text-4xl font-medium ">
              {login?.model_name ? login?.model_name : "no model"}
            </h1>

            <div
              onClick={() => {
                navigate("/ManageAddress");
              }}
            >
              {login?.userLatLng ? (
                <p className="text-lg lg:text-2xl w-90 text-[rgb(63,62,62)] leading-8 font-medium truncate">
                  <i className="fa-solid fa-location-dot"></i> Your current
                  location has been set.
                </p>
              ) : (
                <>
                  <p className="text-lg lg:text-2xl w-90 text-[rgb(212,10,10)] leading-8 font-medium truncate">
                    <i className="fa-solid fa-circle-exclamation"></i> Please
                    set your location.
                  </p>
                  {!location?.latitude && (
                    <p className="text-lg lg:text-2xl w-90 text-[rgb(212,10,10)] leading-8 font-medium truncate">
                      <i className="fa-solid fa-circle-exclamation"></i> Please
                      allow location permission.
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            navigate("/search");
          }}
          className=" md:col-span-6 flex items-center px-8 py-3 md:py-0 mb-1 bg-[#fff] rounded-full border-[#d3dbff] border-solid border "
        >
          <i class="fa-solid fa-magnifying-glass "></i>
          <input
            className=" px-4 font-inherit  border-none bg-transparent text-2xl outline-none w-full flex"
            type="text"
            placeholder={`Search`}
          />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
