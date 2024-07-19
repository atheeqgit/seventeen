import React from "react";
import NavigateComp from "../../components/navigateComp/NavigateComp";
import { useNavigate } from "react-router-dom";

import Mybutton from "../../components/mybutton/Mybutton";
import { motion } from "framer-motion";

const Mybookings = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      className="full-body"
    >
      <NavigateComp title="my bookings" />

      <div className="container mt-3 flex m-auto flex-col gap-5 md:grid md:grid-cols-12 ">
        <div className="rounded-2xl border border-primary pb-3 shadow md:col-span-6  ">
          <div className="w-full rounded-2xl p-2 text- text-center font-semibold capitalize bg-[#4EFD55]">
            On going
          </div>
          <div className="p-5 pb-0 flex flex-col gap-4 md:grid md:grid-cols-12">
            <div className="md:col-span-12 flex flex-row gap-5 items-center justify-between">
              <div className="w-1/3">
                <img src="./landing1.png" className="w-100 rounded-4" />
              </div>
              <div className="uppercase font-semibold text-4xl">
                <p>R15 V3</p>
                <p>ph:54566412</p>
              </div>
              <h1 className="font-bold text-5xl">₹2799</h1>
            </div>
            <div className="md:col-span-12 p-4 flex flex-row gap-5 align-items-center justify-between">
              <h3 className="font-medium text-capitalize fs-1">
                4000 KM General <br /> Service Package
              </h3>
              <Mybutton
                primary={false}
                title="view details"
                onclick="/orderdetails/122"
                wfull={false}
              />
            </div>
            <div className="md:col-span-12 border-t-2 pt-3 border-solid border-[#2459E0]">
              <h1 className="text-4xl font-semibold">Selected slot</h1>
              <div className="p-4 flex flex-row gap-5 align-items-center justify-between">
                <h3 className="font-medium text-capitalize fs-1">
                  9th Nov 2024
                  <br />
                  09:00 AM
                </h3>
                <button className="secondary-btn">Change Schedule</button>
              </div>
            </div>
            <div className="md:col-span-12 flex flex-row justify-evenly gap-3 ">
              <Mybutton
                primary={false}
                title="Track Order"
                onclick="/trackorder/122"
                wfull={true}
              />
              <Mybutton
                primary={true}
                title="Add services"
                onclick="/trackorder/122"
                wfull={true}
              />
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-primary pb-3 shadow md:col-span-6 ">
          <div className="w-full rounded-2xl p-2 text- text-center font-semibold capitalize bg-[#4EFD55]">
            On going
          </div>
          <div className="p-5 pb-0 flex flex-col gap-4 md:grid md:grid-cols-12">
            <div className="md:col-span-12 flex flex-row gap-5 items-center justify-between">
              <div className="w-1/3">
                <img src="./landing1.png" className="w-100 rounded-4" />
              </div>
              <div className="uppercase font-semibold text-4xl">
                <p>R15 V3</p>
                <p>ph:54566412</p>
              </div>
              <h1 className="font-bold text-5xl">₹2799</h1>
            </div>
            <div className="md:col-span-12 p-4 flex flex-row gap-5 align-items-center justify-between">
              <h3 className="font-medium text-capitalize fs-1">
                4000 KM General <br /> Service Package
              </h3>
              <Mybutton
                primary={false}
                title="view details"
                onclick="/orderdetails/122"
                wfull={false}
              />
            </div>
            <div className="md:col-span-12 border-t-2 pt-3 border-solid border-[#2459E0]">
              <h1 className="text-4xl font-semibold">Selected slot</h1>
              <div className="p-4 flex flex-row gap-5 align-items-center justify-between">
                <h3 className="font-medium text-capitalize fs-1">
                  9th Nov 2024
                  <br />
                  09:00 AM
                </h3>
                <button className="secondary-btn">Change Schedule</button>
              </div>
            </div>
            <div className="md:col-span-12 flex flex-row justify-evenly gap-3 ">
              <Mybutton
                primary={false}
                title="Track Order"
                onclick="/trackorder/122"
                wfull={true}
              />
              <Mybutton
                primary={true}
                title="Add services"
                onclick="/trackorder/122"
                wfull={true}
              />
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-primary pb-3 shadow md:col-span-6  ">
          <div className="w-full rounded-2xl p-2 text- text-center font-semibold capitalize bg-[#4EFD55]">
            On going
          </div>
          <div className="p-5 pb-0 flex flex-col gap-4 md:grid md:grid-cols-12">
            <div className="md:col-span-12 flex flex-row gap-5 items-center justify-between">
              <div className="w-1/3">
                <img src="./landing1.png" className="w-100 rounded-4" />
              </div>
              <div className="uppercase font-semibold text-4xl">
                <p>R15 V3</p>
                <p>ph:54566412</p>
              </div>
              <h1 className="font-bold text-5xl">₹2799</h1>
            </div>
            <div className="md:col-span-12 p-4 flex flex-row gap-5 align-items-center justify-between">
              <h3 className="font-medium text-capitalize fs-1">
                4000 KM General <br /> Service Package
              </h3>
              <Mybutton
                primary={false}
                title="view details"
                onclick="/orderdetails/122"
                wfull={false}
              />
            </div>
            <div className="md:col-span-12 border-t-2 pt-3 border-solid border-[#2459E0]">
              <h1 className="text-4xl font-semibold">Selected slot</h1>
              <div className="p-4 flex flex-row gap-5 align-items-center justify-between">
                <h3 className="font-medium text-capitalize fs-1">
                  9th Nov 2024
                  <br />
                  09:00 AM
                </h3>
                <button className="secondary-btn">Change Schedule</button>
              </div>
            </div>
            <div className="md:col-span-12 flex flex-row justify-evenly gap-3 ">
              <Mybutton
                primary={false}
                title="Track Order"
                onclick="/trackorder/122"
                wfull={true}
              />
              <Mybutton
                primary={true}
                title="Add services"
                onclick="/trackorder/122"
                wfull={true}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Mybookings;
