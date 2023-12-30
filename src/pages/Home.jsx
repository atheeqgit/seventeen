import React from "react";
import "./pages.css";
import Featured from "../components/featured/Featured";
import {
  sheduledServicesData,
  mechanicalRepairsData,
  valueAddedServicesData,
  seventeenGuaranteeData,
} from "../utils/data";
import Banner from "../components/banner/Banner";
import SpareParts from "../components/spareParts/SpareParts";

const Home = () => {
  return (
    <div className="home">
      <Banner />
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
      <SpareParts />
      <div className="ad-div">
        <div className="ad-box">ad!</div>
      </div>
      <Featured title="seventeen guarentee" data={seventeenGuaranteeData} />
      <div className="banner-bottom">bottom banner!</div>
    </div>
  );
};

export default Home;
