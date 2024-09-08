import React, { useState, useEffect, useMemo } from "react";
import NavigateComp from "../components/navigateComp/NavigateComp";
import { useGlobalContext } from "../context";

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { Navigate, useNavigate } from "react-router-dom";

const getNextWeekDates = () => {
  const today = new Date();
  const nextWeekDates = [];

  // Function to format the date as "DD-MM-YYYY"
  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Loop to get the next 7 dates
  for (let i = 0; i < 7; i++) {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i); // Add i days to today's date
    nextWeekDates.push(formatDate(nextDate)); // Format the date as "DD-MM-YYYY"
  }

  return nextWeekDates;
};

const CheckinPage = () => {
  const navigate = useNavigate();
  const { cartData, login, postBooking } = useGlobalContext();
  const date = new Date();
  const [cart, setCart] = useState(null);
  const [preferred, setPreferred] = useState({
    date: null,
    time: null,
  });
  const timeData = [
    {
      24: "09-11",
      12: "9AM - 11AM",
    },
    {
      24: "11-13",
      12: "11AM - 1PM",
    },
    {
      24: "13-15",
      12: "1PM - 3PM",
    },
    {
      24: "15-17",
      12: "3PM - 5PM",
    },
    {
      24: "17-19",
      12: "5PM - 7PM",
    },
    {
      24: "19-21",
      12: "7PM - 9PM",
    },
  ];

  const [weekDates, setWeekDates] = useState(null);

  const totalPrice = cartData.reduce((total, product) => {
    return total + product.price;
  }, 0);

  useEffect(() => {
    console.log(cartData);
    setCart(cartData);
    console.log(getNextWeekDates());
    setWeekDates(getNextWeekDates());
  }, [cartData]);

  // {
  //   "mobile":"8248596070",
  //   "model":"Ntorq",
  //   "preferredDate":"29-08-2024",
  //   "preferredTime":"11-13",
  //   "cart":[1,18,22]
  //   }

  // const nextWeekDates = useMemo(() => getNextWeekDates(), []);

  return (
    <div className="full-body">
      <NavigateComp title="Checkin" />
      <div className="flex flex-col gap-3 lg:grid grid-cols-12 ">
        <div className="md:col-span-6 border  border-solid border-[#2459E0] rounded-3xl p-8 flex flex-col gap-5 w-full bg-white shadow-lg">
          <h1 className="text-2xl lg:text-4xl capitalize font-semibold text-[#1e1f20]">
            order summary :
          </h1>
          <hr />
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              order Date :
            </h1>
            <p className="text-2xl lg:text-3xl capitalize font-semibold">
              {date.toLocaleDateString()}
            </p>
          </div>
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              Order Time :
            </h1>
            <p className="text-2xl lg:text-3xl capitalize font-semibold">
              {date.toLocaleTimeString()}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              Items :
            </h1>
            <ul className="flex flex-col gap-2">
              {cart?.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="ml-10 p-4 bg-gray-200 flex flex-row justify-between px-10"
                  >
                    <p className="text-2xl lg:text-3xl capitalize font-semibold capitalize ">
                      {item.serviceName}
                    </p>
                    <p className="text-2xl lg:text-3xl capitalize font-semibold capitalize">
                      ₹{item.price}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="md:col-span-6 border  border-solid border-[#2459E0] rounded-3xl p-8 flex flex-col gap-5 w-full bg-white">
          <h1 className="text-2xl lg:text-4xl capitalize font-semibold text-[#1e1f20]">
            details :
          </h1>
          <hr />
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              Name :
            </h1>
            <p className="text-2xl lg:text-3xl capitalize font-semibold">
              {login?.name}
            </p>
          </div>
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              Mobile number:
            </h1>
            <p className="text-2xl lg:text-3xl capitalize font-semibold">
              {login?.mobile}
            </p>
          </div>
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              bike model :
            </h1>
            <p className="text-2xl lg:text-3xl capitalize font-semibold">
              {login?.model_name ? login?.model_name : "no model"}
            </p>
          </div>
          <hr className="my-4" />
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              payment method :
            </h1>
            <p className="text-2xl lg:text-3xl capitalize font-semibold">
              CASH
            </p>
          </div>
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              Preffered Time
            </h1>
            <p className="text-2xl lg:text-3xl capitalize font-semibold">
              {preferred.time ? preferred.time : "please select time"}
            </p>
          </div>
          <ul className="grid grid-cols-4 flex-wrap gap-2">
            {timeData?.map((time) => {
              return (
                <li
                  className={`col-span-2 lg:col-span-1 font-medium text-md p-1 text-center border  shadow rounded-lg hover:bg-slate-300 active:scale-95 cursor-pointer  
                      ${
                        preferred.time == time[24]
                          ? " bg-[#0144c0] text-white hover:bg-[#3c75df]"
                          : "bg-slate-200 hover:bg-slate-300"
                      }`}
                  onClick={() => {
                    if (preferred.time !== time[24]) {
                      setPreferred({ ...preferred, time: time[24] });
                    } else {
                      setPreferred({ ...preferred, time: null });
                    }
                  }}
                >
                  {time[12]}
                </li>
              );
            })}
          </ul>
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              prefered :date
            </h1>
            <p className="text-2xl lg:text-3xl capitalize font-semibold">
              {preferred.date ? preferred.date : "please select date"}
            </p>
          </div>
          <ul className="grid grid-cols-4 flex-wrap gap-2">
            {weekDates?.map((date) => {
              return (
                <li
                  className={`col-span-2 lg:col-span-1 font-medium text-md p-1 text-center border  shadow rounded-lg hover:bg-slate-300 active:scale-95 cursor-pointer  
                     ${
                       preferred.date == date
                         ? " bg-[#0144c0] text-white hover:bg-[#3c75df]"
                         : "bg-slate-200 hover:bg-slate-300"
                     }`}
                  onClick={() => {
                    if (preferred.date !== date) {
                      setPreferred({ ...preferred, date });
                    } else {
                      setPreferred({ ...preferred, date: null });
                    }
                  }}
                >
                  {date}
                </li>
              );
            })}
          </ul>
          <p className="text-4xl font-semibold capitalize text-center">
            grand total : ₹{totalPrice}
          </p>{" "}
          <div
            className="w-full border-0 border-solid p-6 mt-5 rounded capitalize  text-white rounded-md bg-[#2459e0]  transition-colors hover:opacity-85 cursor-pointer"
            onClick={() => {
              const result = postBooking(preferred);

              if (result) {
                navigate("/confirmed");
              }
            }}
          >
            <p className="text-4xl font-medium capitalize text-center">
              PLACE ORDER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckinPage;
