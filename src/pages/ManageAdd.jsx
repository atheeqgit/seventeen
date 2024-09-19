import React, { useContext, useState } from "react";
import MapComp from "./MapComp";
import { useGlobalContext } from "../context";
import { calcLength } from "framer-motion";
import NavigateComp from "../components/navigateComp/NavigateComp";
import Mybutton from "../components/mybutton/Mybutton";
import { useNavigate } from "react-router-dom";

const ManageAdd = () => {
  const navigate = useNavigate();
  const { location, setLocation, updateLocation, notify } = useGlobalContext();

  return (
    <div className="full-body ">
      <NavigateComp title="map" />
      {/* Display current selected location */}
      <div className="flex flex-col justify-center items-center">
        <p className="text-sm">
          {location?.latitude && location?.longitude
            ? `Lat: ${location.latitude}, Long: ${location.longitude}`
            : "No location selected yet"}
        </p>
        <MapComp setLocation={setLocation} location={location} />

        <button
          className="font-medium flex justify-center capitalize text-2xl h-fit  px-6 py-3 md:px-8 md:py-4 rounded-xl  cursor-pointer shadow-2xl bg-[#2459e0] text-white hover:bg-[#1d11c4] w-full mt-5 "
          onClick={async () => {
            const bool = await updateLocation(
              location.latitude,
              location.longitude
            );

            if (bool) {
              notify("Location updated", true);
              navigate(-1);
            } else {
              notify("Error while updating location", false);
            }
          }}
        >
          Confirm location
        </button>
      </div>
    </div>
  );
};

export default ManageAdd;
