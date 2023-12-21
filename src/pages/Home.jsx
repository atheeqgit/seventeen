import React from "react";
import "./pages.css";
import Featured from "../components/featured/Featured";
import {
  sheduledServicesData,
  mechanicalRepairsData,
  valueAddedServicesData,
  seventeenGuaranteeData,
} from "../utils/data";

const Home = () => {
  return (
    <div className="home">
      <div className="home-banner">
        <div className="banner">banner IMG</div>
        <div className="banner">banner IMG</div>
        <div className="banner">banner IMG</div>
      </div>
      <Featured title="sheduled Services" data={sheduledServicesData} />
      <Featured title="mechanical Services" data={mechanicalRepairsData} />
      <div className="ad-div">
        <div className="ad-box">ad!</div>
      </div>
      <Featured title="value added services" data={valueAddedServicesData} />
      <div className="ad-div">
        <div className="ad-box">ad!</div>
        <div className="ad-box">ad!</div>
      </div>
      <Featured title="seventee guarentee" data={seventeenGuaranteeData} />
    </div>
  );
};

export default Home;
