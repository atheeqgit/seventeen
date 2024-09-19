import React from "react";
import { useGlobalContext } from "../context";
import Mybutton from "../components/mybutton/Mybutton";
import NavigateComp from "../components/navigateComp/NavigateComp";
import { Link, NavLink } from "react-router-dom";

const AboutApp = () => {
  const { login } = useGlobalContext();

  return (
    <div className="full-body px-4 py-6 ">
      <NavigateComp title="About App" />
      <div className="w-full min-h-[70vh] flex flex-col justify-center items-center mt-10 pb-10">
        <h1 className="text-4xl font-bold capitalize ">Who are we?</h1>
        <div
          className="flex flex-col justify-between items-center 
md:w-2/3 whitespace-pre-wrap p-4 leading-relaxed gap-10 font-semibold text-3xl
 text-justify"
        >
          <p className="">
            Todo simplifies bike servicing by bringing maintenance and repairs
            directly to you. From routine servicing, water washes, and tyre
            punctures to seat cover replacements and modifications, Todo ensures
            a hassle-free experience with transparent pricing and timely
            service.
          </p>
          <p className="">
            We aim to solve common issues like hidden costs, delays, and fake
            spare parts by offering clear, predefined pricing and guaranteeing
            genuine parts. Every service provider on our platform is thoroughly
            vetted for quality, ensuring your bike is in safe hands.
          </p>
          <p className="">
            Through our mobile app, you can book services, schedule
            appointments, and track the progress of your service in real-time.
            Our mechanics are incentivized to complete jobs on time, so you can
            count on reliable, prompt service.
          </p>
          <p className="">
            Todo is here to make bike care easy, efficient, and
            transparent—giving you peace of mind with every service.
          </p>
          {/* <h1 className="font-medium capitalize text-center text-3xl lg:text-4xl">
            Developed by Kulshai Technologies
            <br /> <br />© Khulshai Technologies India Pvt. Ltd.
          </h1> */}
          <h1 className="font-extrabold capitalize text-center text-3xl lg:text-4xl">
            <br />© Khulshai Technologies India Pvt. Ltd.
          </h1>
          <div className=" text-blue-500 flex justify-evenly font-semibold capitalize items-center gap-2 w-full">
            <NavLink to="/">
              <p>home</p>
            </NavLink>
            <NavLink to="/mybooking">
              <p>bookings</p>
            </NavLink>
            <NavLink to="/cart">
              <p>cart</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutApp;
