import React, { useState, useEffect } from "react";
import NavigateComp from "../components/navigateComp/NavigateComp";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";

const getNextWeekDates = () => {
  const today = new Date();
  const nextWeekDates = [];

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  for (let i = 0; i < 7; i++) {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    nextWeekDates.push(formatDate(nextDate));
  }

  return nextWeekDates;
};

const CheckinPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const navigate = useNavigate();
  const { cartData, login, postBooking, getImgUrl, getCamelImgUrl } =
    useGlobalContext();
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
    setCart(cartData);
    setWeekDates(getNextWeekDates());
  }, [cartData]);

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
                    className="items-center p-4 bg-gray-200 flex flex-row justify-between px-5 md:px-10"
                  >
                    {" "}
                    <p className="text-2xl mr-6 lg:text-3xl capitalize font-semibold capitalize ">
                      {idx + 1}
                    </p>
                    <div className="w-24">
                      <img
                        src={
                          item?.serviceName && getCamelImgUrl(item?.serviceName)
                        }
                        className="w-full rounded-xl shadow border-2 border-[#ccc] border-solid"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-row justify-between px-4 md:px-10 w-full">
                      <p className="text-2xl lg:text-3xl  font-semibold capitalize ">
                        {item.serviceName}
                      </p>
                      <p className="text-2xl lg:text-3xl  font-semibold capitalize">
                        ₹{item.price}
                      </p>
                    </div>
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
            <p
              className="text-2xl lg:text-3xl capitalize font-semibold"
              onClick={() => {
                if (preferred.time) {
                  setPreferred({ ...preferred, time: null });
                }
              }}
            >
              {preferred.time ? preferred.time : "please select time"}
            </p>
          </div>
          {!preferred.time && (
            <ul className="grid grid-cols-4 flex-wrap gap-2">
              {timeData?.map((time, idx) => {
                return (
                  <li
                    key={idx}
                    className={`col-span-2 md:col-span-1 font-medium text-md p-1 text-center border  shadow rounded-lg hover:bg-slate-300 active:scale-95 cursor-pointer  
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
          )}
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              prefered :date
            </h1>
            <p
              className="text-2xl lg:text-3xl capitalize font-semibold"
              onClick={() => {
                if (preferred.date) {
                  setPreferred({ ...preferred, date: null });
                }
              }}
            >
              {preferred.date ? preferred.date : "please select date"}
            </p>
          </div>
          {!preferred.date && (
            <ul className="grid grid-cols-4 flex-wrap gap-2">
              {weekDates?.map((date, idx) => {
                return (
                  <li
                    key={idx}
                    className={`col-span-2 md:col-span-1 font-medium text-md p-1 text-center border  shadow rounded-lg hover:bg-slate-300 active:scale-95 cursor-pointer  
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
          )}
          <p className="text-4xl font-semibold capitalize text-center">
            grand total : ₹{totalPrice}
          </p>{" "}
          <div
            className="w-full border-0 border-solid p-6 mt-5  capitalize  text-white rounded-md bg-[#2459e0]  transition-colors hover:opacity-85 cursor-pointer"
            onClick={async () => {
              const result = await postBooking(preferred);
              if (result) {
                navigate("/confirmed");
              }
            }}
          >
            <p className="text-3xl font-medium capitalize text-center">
              PLACE ORDER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckinPage;

// {
//   "bookingPoint": "13.05950623921726|80.2731935509633",
//   "cart": [1],
//   "mobile": "1234512345",
//   "model": "Passion",
//   "preferredDate": "10-09-2024",
//   "preferredTime": "11-13"
//   }
