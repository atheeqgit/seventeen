import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
import TopNav from "../components/TopNav";

const Home = () => {
  const { services, AdditionalIssues, Issues } = useGlobalContext();
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const topNav = document.getElementById("top-nav").offsetHeight;

  //   setCount(topNav);
  //   console.log(topNav);
  // }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      className="home pt-72 md:pt-56  px-9 bg-[#F4F5F6]"
    >
      <TopNav />
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
        {/* <Featured
          title="mechanical Services"
          data={Issues ? Issues : mechanicalRepairsData}
        /> */}
        <div className="w-full py-10 px-5 text-center bg-white rounded-lg border border-solid border-[#ccc] shadow-lg">
          <p className="capitalize font-medium text-2xl">
            don't know what the issue is?{" "}
            <span className="text-[#115ab9] capitalize font-bold">
              know more
            </span>
          </p>
        </div>
        <Featured title="value added services" data={valueAddedServicesData} />
        <div className="ad-div flex flex-col gap-4">
          <h4 className="text-2xl md:text-4xl font-medium capitalize">
            Most booked services
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="ad-box col-span-1">most booked</div>
            <div className="ad-box col-span-1">most booked</div>
          </div>
        </div>
        <SpareParts />

        <Featured title="Todo guarentee" data={seventeenGuaranteeData} />
      </div>
    </motion.div>
  );
};

export default Home;
