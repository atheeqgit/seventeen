import React, { useContext, useState } from "react";
import MapComp from "./MapComp";
import { useGlobalContext } from "../context";
import { calcLength } from "framer-motion";
import NavigateComp from "../components/navigateComp/NavigateComp";
import Mybutton from "../components/mybutton/Mybutton";

const ManageAdd = () => {
  const { location, setLocation } = useGlobalContext();

  return (
    <div className="full-body flex flex-col justify-center items-center">
      <NavigateComp title="map" />
      {/* Display current selected location */}
      <p>
        {location?.latitude && location?.longitude
          ? `Lat: ${location.latitude}, Long: ${location.longitude}`
          : "No location selected yet"}
      </p>

      <MapComp setLocation={setLocation} location={location} />
      <Mybutton
        fullw={false}
        title={"go back"}
        onclick={"/profile"}
        primary={true}
      />
    </div>
  );
};

export default ManageAdd;
