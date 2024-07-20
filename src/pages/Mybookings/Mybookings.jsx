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
        <div className="rounded-2xl border border-primary pb-3 shadow md:col-span-6 bg-white">
          <div className="w-fit rounded-2xl p-2 px-6 text-center font-semibold capitalize bg-[#4EFD55] text-2xl">
            On going
          </div>
          <div className="p-3 md:p-5 pb-0 flex flex-col gap-4 md:grid md:grid-cols-12">
            <div className="md:col-span-12 flex flex-row gap-6 items-top justify-around">
              <div className="w-1/4">
                <img src="./landing1.png" className="w-100 rounded-4" />
              </div>
              <div className="uppercase font-semibold ">
                <p className="text-3xl lg:text-4xl">R15 V3</p>
                <p className="text-2xl md:text-3xl ">ph:54566412</p>
              </div>
              <h3 className="font-medium text-capitalize text-2xl">
                4000 KM General <br /> Service Package
              </h3>
            </div>
            <div className="md:col-span-12 p-4 flex flex-row gap-5 align-items-center justify-between">
              <h1 className="font-bold text-4xl  lg:text-5xl">₹2799</h1>

              <Mybutton
                primary={false}
                title="view details"
                onclick="/orderdetails/122"
                wfull={false}
              />
            </div>
            <div className="md:col-span-12 border-t-2 pt-2 border-solid border-[#2459E0]">
              <h1 className="text-3xl lg:text-4xl font-semibold">
                Selected slot
              </h1>
              <div className="p-4 mt-3 flex flex-row gap-5 align-items-center justify-between  border-2 border-solid border-[#83a6ff] rounded-xl">
                <div className="capitalize font-semibold ">
                  <p className="text-3xl lg:text-4xl">9th Nov 2024</p>
                  <p className="text-2xl md:text-3xl ">09:00 AM</p>
                </div>

                <Mybutton
                  primary={false}
                  title="change schedule"
                  onclick="/orderdetails/122"
                  wfull={false}
                />
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
        <div className="rounded-2xl border border-primary pb-3 shadow md:col-span-6 bg-white">
          <div className="w-fit rounded-2xl p-2 px-6 text-center font-semibold capitalize bg-[#4EFD55] text-2xl">
            On going
          </div>
          <div className="p-3 md:p-5 pb-0 flex flex-col gap-4 md:grid md:grid-cols-12">
            <div className="md:col-span-12 flex flex-row gap-6 items-top justify-around">
              <div className="w-1/4">
                <img src="./landing1.png" className="w-100 rounded-4" />
              </div>
              <div className="uppercase font-semibold ">
                <p className="text-3xl lg:text-4xl">R15 V3</p>
                <p className="text-2xl md:text-3xl ">ph:54566412</p>
              </div>
              <h3 className="font-medium text-capitalize text-2xl">
                4000 KM General <br /> Service Package
              </h3>
            </div>
            <div className="md:col-span-12 p-4 flex flex-row gap-5 align-items-center justify-between">
              <h1 className="font-bold text-4xl  lg:text-5xl">₹2799</h1>

              <Mybutton
                primary={false}
                title="view details"
                onclick="/orderdetails/122"
                wfull={false}
              />
            </div>
            <div className="md:col-span-12 border-t-2 pt-2 border-solid border-[#2459E0]">
              <h1 className="text-3xl lg:text-4xl font-semibold">
                Selected slot
              </h1>
              <div className="p-4 mt-3 flex flex-row gap-5 align-items-center justify-between  border-2 border-solid border-[#83a6ff] rounded-xl">
                <div className="capitalize font-semibold ">
                  <p className="text-3xl lg:text-4xl">9th Nov 2024</p>
                  <p className="text-2xl md:text-3xl ">09:00 AM</p>
                </div>

                <Mybutton
                  primary={false}
                  title="change schedule"
                  onclick="/orderdetails/122"
                  wfull={false}
                />
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
        <div className="rounded-2xl border border-primary pb-3 shadow md:col-span-6 bg-white">
          <div className="w-fit rounded-2xl p-2 px-6 text-center font-semibold capitalize bg-[#4EFD55] text-2xl">
            On going
          </div>
          <div className="p-3 md:p-5 pb-0 flex flex-col gap-4 md:grid md:grid-cols-12">
            <div className="md:col-span-12 flex flex-row gap-6 items-top justify-around">
              <div className="w-1/4">
                <img src="./landing1.png" className="w-100 rounded-4" />
              </div>
              <div className="uppercase font-semibold ">
                <p className="text-3xl lg:text-4xl">R15 V3</p>
                <p className="text-2xl md:text-3xl ">ph:54566412</p>
              </div>
              <h3 className="font-medium text-capitalize text-2xl">
                4000 KM General <br /> Service Package
              </h3>
            </div>
            <div className="md:col-span-12 p-4 flex flex-row gap-5 align-items-center justify-between">
              <h1 className="font-bold text-4xl  lg:text-5xl">₹2799</h1>

              <Mybutton
                primary={false}
                title="view details"
                onclick="/orderdetails/122"
                wfull={false}
              />
            </div>
            <div className="md:col-span-12 border-t-2 pt-2 border-solid border-[#2459E0]">
              <h1 className="text-3xl lg:text-4xl font-semibold">
                Selected slot
              </h1>
              <div className="p-4 mt-3 flex flex-row gap-5 align-items-center justify-between  border-2 border-solid border-[#83a6ff] rounded-xl">
                <div className="capitalize font-semibold ">
                  <p className="text-3xl lg:text-4xl">9th Nov 2024</p>
                  <p className="text-2xl md:text-3xl ">09:00 AM</p>
                </div>

                <Mybutton
                  primary={false}
                  title="change schedule"
                  onclick="/orderdetails/122"
                  wfull={false}
                />
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
