import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavigateComp from "../components/navigateComp/NavigateComp";
import { motion } from "framer-motion";
import { useGlobalContext } from "../context";
import { ToastContainer, toast } from "react-toastify";
import CartNav from "../components/CartNav";

const profileData = [
  {
    title: "My Bookings",
    icon: "icon-profile-booking-app.png",
    link: "mybooking",
  },
  {
    title: "Refer and Earn",
    icon: "icon-settings-refer-and-earn.png",
    link: "refer&earn",
  },
  {
    title: "Manage Address",
    icon: "icon-settings-manage-address.png",
    link: "ManageAddress",
  },

  {
    title: "About App",
    icon: "icon-settings-about-app.png",
    link: "aboutapp",
  },
  {
    title: "Help & Support",
    icon: "icon-settings-customer-support.png",
    link: "help&support",
  },
  {
    title: "Tearms & condtions",
    icon: "icon-settings-about-app.png",
    link: "TearmsConditons",
  },
  {
    title: "Privacy Policy",
    icon: "icon-settings-about-app.png",
    link: "PrivacyPolicy",
  },
];

const Profile = () => {
  const { login, logoutFunc, cartData } = useGlobalContext();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      className="part-body profile p-3 flex flex-col gap-3  "
    >
      {cartData.length > 0 && <CartNav fullbody={false} />}

      <NavigateComp title="profile" />
      <div className="container mx-auto p-3 flex flex-col gap-3">
        <div className="p-6  flex flex-col  bg-[#2459E0] rounded-lg text-white mb-4">
          <div className="flex flex-row w-full justify-between items-center gap-10">
            <div className="flex flex-col w-full justify-between items-left capitalize">
              {login ? (
                <>
                  {" "}
                  <h3 className="font-medium mb-8 text-3xl md:text-3xl">
                    {login.name}
                  </h3>
                  <p className="font-medium">mobile: {login.mobile}</p>
                </>
              ) : (
                <></>
              )}
            </div>
            <button
              onClick={() => {
                if (logoutFunc()) {
                  navigate("/");
                }
              }}
              class="p-2 px-4 cursor-pointer font-inherit border-none bg-[#fbfaff] text-black rounded-md text-2xl transition duration-300 hover:bg-[#d5d2ff] w-fit mt-3 capitalize"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="down-div ">
          <ul className="my-list flex flex-col gap-6 list-none bg-white rounded-2xl shadow-md p-4">
            {profileData.map((data, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    navigate(`/${data.link}`);
                  }}
                  className="flex  bg-[#ffffff] cursor-pointer
                     hover:bg-[#e9e9e9] rounded-2xl flex-row gap-1 justify-between items-center px-4 py-3  "
                >
                  <div className="flex flex-row gap-4 items-center justify-center">
                    <div className=" p-6 rounded-full bg-[#eae9ff] ">
                      <img
                        src={"./" + data.icon}
                        className="w-8 md:w-10"
                        alt=""
                      />
                    </div>
                    <p className="font-medium text-2xl md:text-3xl  text-capitalize ">
                      {data.title}
                    </p>
                  </div>
                  <i class="fa-solid fa-chevron-right"></i>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
