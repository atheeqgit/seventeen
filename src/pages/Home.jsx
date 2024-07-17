import React, { useEffect } from "react";
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
import { useGlobalContext } from "../context";

const Home = () => {
  const { services, AdditionalIssues, Issues } = useGlobalContext();

  return (
    <div className="home bg-[#F4F5F6] ">
      <div className="container mx-auto ">
        <Banner />
        <Featured
          title="sheduled Services"
          data={services ? services : sheduledServicesData}
        />
        <Featured
          title="mechanical Services"
          data={AdditionalIssues ? AdditionalIssues : mechanicalRepairsData}
        />
        <Featured
          title="mechanical Services"
          data={Issues ? Issues : mechanicalRepairsData}
        />
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
    </div>
  );
};

export default Home;
