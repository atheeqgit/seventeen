import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const profileData = [
    {
      title: "My Bookings",
      icon: "icon-profile-personsm.png",
    },
    {
      title: "Refer and Earn",
      icon: "icon-profile-personsm.png",
    },
    {
      title: "Manage Payment Method",
      icon: "icon-profile-personsm.png",
    },
    {
      title: "Manage Address",
      icon: "icon-profile-personsm.png",
    },
    {
      title: "Settings",
      icon: "icon-profile-personsm.png",
    },
    {
      title: "Help & Support",
      icon: "icon-profile-personsm.png",
    },
    {
      title: "About App",
      icon: "icon-profile-personsm.png",
    },
  ];

  return (
    <div className="full-body profile p-3 flex flex-col gap-3 ">
      <h1 className="title-text px-4 py-3">
        <i
          onClick={() => {
            navigate(-1);
          }}
          class="fa-solid fa-chevron-left"
        ></i>
        {"    "}
        Profile
      </h1>
      <div className="p-4 flex flex-col gap-4 bg-[#2459E0] rounded-lg text-white mb-4">
        <div className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-col w-full justify-between items-left">
            <h3 className="font-semibold">Raj Kumar</h3>
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
                className="flex flex-row gap-1 justify-between items-center px-4 py-3 "
              >
                <div className="flex flex-row gap-4 items-center justify-center">
                  <div>
                    <img src={"./" + data.icon} alt="" />
                  </div>
                  <p className="font-medium fs-2 text-capitalize ">
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
  );
};

export default Profile;
