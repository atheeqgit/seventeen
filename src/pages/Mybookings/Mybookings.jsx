import React, { useContext, useEffect } from "react";
import NavigateComp from "../../components/navigateComp/NavigateComp";
import { useNavigate } from "react-router-dom";
import Mybutton from "../../components/mybutton/Mybutton";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";
import Loading from "../../components/Loading";

const Mybookings = () => {
  const navigate = useNavigate();

  const { bookings, login, loading, getBookings } = useGlobalContext();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  useContext(() => {
    getBookings();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      className="full-body"
    >
      <NavigateComp title="my bookings" />
      {loading ? (
        <Loading />
      ) : bookings ? (
        <div className="container mt-3 flex m-auto flex-col gap-5 md:grid md:grid-cols-12 ">
          {bookings.map((booking, idx) => {
            return (
              <div
                key={idx}
                className="rounded-2xl border border-primary pb-3 shadow md:col-span-6 bg-white"
              >
                {booking.status === "OPEN" && (
                  <div className="w-fit rounded-2xl p-2 px-6 text-center font-semibold capitalize bg-[#4EFD55] text-2xl">
                    On going
                  </div>
                )}
                {booking.status === "CANCELLED" && (
                  <div className="w-fit rounded-2xl p-2 px-6 text-center font-semibold capitalize bg-[#fd4e4e] text-2xl">
                    cancelled
                  </div>
                )}

                <div className="p-3 md:p-5 pb-0 flex flex-col gap-4 ">
                  <div className=" flex flex-row gap-6 items-top justify-around">
                    <div>
                      <h1 className="font-bold text-3xl lg:text-4xl">
                        Cost : ₹2799 static
                      </h1>
                    </div>
                    <div className="capitalize font-semibold ">
                      <p className="text-3xl lg:text-3xl">
                        Bike model :{login.model_name}
                      </p>
                      <p className="text-2xl md:text-2xl ">
                        Mobile : {login.mobile}
                      </p>
                    </div>
                  </div>
                  <div>
                    <ul className="flex flex-col gap-2">
                      {Object.entries(booking.cart)?.map(([key, item], idx) => {
                        return (
                          <li
                            key={idx}
                            className=" p-4 bg-gray-200 flex flex-row justify-between px-10"
                          >
                            <p className="text-2xl lg:text-3xl capitalize font-semibold capitalize ">
                              {idx + 1}. {item}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="p-4 flex flex-row gap-5 align-items-center justify-between">
                    <Mybutton
                      primary={false}
                      title="view details"
                      onclick="/orderdetails/122"
                      wfull={false}
                    />
                  </div>
                  <div className=" border-t-2 pt-2 border-solid border-[#2459E0]">
                    <h1 className="text-3xl lg:text-4xl font-semibold">
                      Selected slot
                    </h1>
                    <div className="p-4 mt-3 flex flex-row gap-5 align-items-center justify-between  border-2 border-solid border-gray-300 rounded-xl">
                      <div className="capitalize font-semibold ">
                        <p className="text-2xl lg:text-3xl">
                          9th Nov 2024 "static"
                        </p>
                        <p className="text-xl md:text-2xl ">
                          09:00 AM "static"
                        </p>
                      </div>

                      <Mybutton
                        primary={false}
                        title="change schedule"
                        onclick="/orderdetails/122"
                        wfull={false}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-evenly gap-3 ">
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
            );
          })}
        </div>
      ) : (
        <div className="min-h-[20vh] flex justify-center items-center">
          <p className="text-4xl font-semibold capitalize ">
            you have no bookings
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default Mybookings;
