import React from "react";
import { useNavigate } from "react-router-dom";
import NavigateComp from "../components/navigateComp/NavigateComp";
import { motion } from "framer-motion";

const Profile = () => {
  const navigate = useNavigate();

  const profileData = [
    {
      title: "My Bookings",
      icon: "icon-profile-booking-app.png",
    },
    {
      title: "Refer and Earn",
      icon: "icon-settings-refer-and-earn.png",
    },
    {
      title: "Manage Payment Method",
      icon: "icon-settings-manage-payment.png",
    },
    {
      title: "Manage Address",
      icon: "icon-settings-manage-address.png",
    },
    {
      title: "Settings",
      icon: "icon-profile-settings.png",
    },
    {
      title: "Help & Support",
      icon: "icon-settings-customer-support.png",
    },
    {
      title: "About App",
      icon: "icon-settings-about-app.png",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      className="full-body profile p-3 flex flex-col gap-3 "
    >
      <NavigateComp title="profile" />
      <div className="container mx-auto p-3 flex flex-col gap-3">
        <div className="p-4 flex flex-col  bg-[#2459E0] rounded-lg text-white mb-4">
          <div className="flex flex-row w-full justify-between items-center gap-10">
            <div className="flex flex-col w-full justify-between items-left">
              <h3 className="font-semibold mb-8">Raj Kumar</h3>
              <p className="font-medium">Ref ID: 00741658</p>
            </div>
            <div className="">
              <img src="./icon-profile-pencil.png" alt="" />
            </div>
          </div>
        </div>
        <div className="down-div ">
          <ul className="my-list flex flex-col gap-4 list-none">
            {profileData.map((data, index) => {
              return (
                <li
                  key={index}
                  className="flex flex-row gap-1 justify-between items-center px-4 py-3 bg-white rounded-2xl shadow-md"
                >
                  <div className="flex flex-row gap-4 items-center justify-center">
                    <div className=" p-6 rounded-full bg-[#eae9ff]">
                      <img src={"./" + data.icon} className="w-10" alt="" />
                    </div>
                    <p className="font-medium font-xl text-capitalize ">
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
