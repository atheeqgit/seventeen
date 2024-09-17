import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./pages.css";
import Featured from "../components/featured/Featured";
import Banner from "../components/banner/Banner";
import SpareParts from "../components/spareParts/SpareParts";
import { useGlobalContext } from "../context";
import TopNav from "../components/TopNav";
import Loading from "../components/Loading";
import CartNav from "../components/CartNav";
import { MostBookedData } from "../utils/data";
import MostBooked from "../components/MostBooked/MostBooked";
import TodoG from "../components/todoG";

const Home = () => {
  const {
    mechanicalRepairs,
    valueAddedServices,
    sheduledServices,
    fetchAllServices,
    loading,
    cartData,
  } = useGlobalContext();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      className="home min-vh-100 pt-56 md:pt-52  px-4 pb-44 bg-[#F4F5F6] relative"
    >
      <TopNav />
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto ">
          {cartData.length > 0 && <CartNav />}

          <Banner />
          <Featured title="sheduled Services" data={sheduledServices} />
          <Featured title="mechanical Services" data={mechanicalRepairs} />
          {/* <Featured
          title="mechanical Services"
          data={Issues ? Issues : mechanicalRepairsData}
        /> */}
          <div className="w-full py-5 px-3 md:py-7 md:px-4 text-center  bg-white rounded-2xl border-2 border-solid border-[#115ab9] shadow-lg">
            <p className="dont-know-box  text-[#1013bb] font-medium  text-2xl md:text-4xl ">
              I Don't know what the issue is with my bike?
            </p>
          </div>

          <MostBooked title="Most Booked" data={MostBookedData} />

          <Featured title="value added services" data={valueAddedServices} />
          <TodoG />
          {/* <div className="ad-div flex flex-col gap-4">
            <h4 className="text-2xl md:text-4xl font-medium capitalize">
              Most booked services
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="ad-box col-span-1">most booked</div>
              <div className="ad-box col-span-1">most booked</div>
            </div>
          </div> */}
          {/* <SpareParts /> */}
        </div>
      )}
    </motion.div>
  );
};

export default Home;
