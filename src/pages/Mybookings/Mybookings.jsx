import React, { useContext, useEffect, useState } from "react";
import NavigateComp from "../../components/navigateComp/NavigateComp";
import { useNavigate } from "react-router-dom";
import Mybutton from "../../components/mybutton/Mybutton";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";
import Loading from "../../components/Loading";
import CartNav from "../../components/CartNav";

const timeData = [
  {
    24: "09-11",
    12: "9AM-11AM",
  },
  {
    24: "11-13",
    12: "11AM-1PM",
  },
  {
    24: "13-15",
    12: "1PM-3PM",
  },
  {
    24: "15-17",
    12: "3PM-5PM",
  },
  {
    24: "17-19",
    12: "5PM-7PM",
  },
  {
    24: "19-21",
    12: "7PM-9PM",
  },
];

const Mybookings = () => {
  const navigate = useNavigate();
  const {
    bookings,
    login,
    loading,
    getImgUrl,
    cancelBookings,
    getCamelImgUrl,
    cartData,
  } = useGlobalContext();

  const [showModal, setShowModal] = useState(false);
  const [orderStatus, setOrderStatus] = useState(null);
  const [selectedBookingId, setSelectedBookingId] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const openCancelModal = (bookingId) => {
    setSelectedBookingId(bookingId);
    setShowModal(true);
  };

  const confirmCancel = () => {
    cancelBookings(selectedBookingId);
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const timeData = [
    {
      24: "09-11",
      12: "9AM-11AM",
    },
    {
      24: "11-13",
      12: "11AM-1PM",
    },
    {
      24: "13-15",
      12: "1PM-3PM",
    },
    {
      24: "15-17",
      12: "3PM-5PM",
    },
    {
      24: "17-19",
      12: "5PM-7PM",
    },
    {
      24: "19-21",
      12: "7PM-9PM",
    },
  ];

  function convertTo12Hour(time24) {
    // Create a Date object with the time string
    const [hours, minutes, seconds] = time24.split(":");
    let period = "AM";
    let hour = parseInt(hours, 10);

    // Adjust for PM
    if (hour >= 12) {
      period = "PM";
      if (hour > 12) {
        hour -= 12;
      }
    } else if (hour === 0) {
      hour = 12; // Midnight case
    }

    return `${hour}:${minutes}${period}`;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      className="part-body"
    >
      {cartData.length > 0 && <CartNav fullbody={false} />}
      <NavigateComp title="my bookings" />
      {loading ? (
        <Loading />
      ) : bookings ? (
        <div className="container mt-3 flex m-auto flex-col gap-6 md:gap-10 md:grid md:grid-cols-12 ">
          {bookings?.map((booking, idx) => {
            return (
              <div
                key={idx}
                className="rounded-2xl border h-fit border-primary pb-3 shadow md:col-span-6 bg-white "
              >
                <div
                  className={`flex flex-row justify-between w-full mb-3 rounded-2xl p-3 px-6 text-center capitalize shadow-lg text-2xl ${
                    booking.status === "OPEN"
                      ? "bg-[#4EFD55] text-black font-semibold"
                      : "bg-[#fd4e4e] text-white font-medium"
                  }`}
                >
                  {booking.status === "OPEN" && (
                    <div className="">On going</div>
                  )}
                  {booking.status === "CANCELLED" && (
                    <div className="">Cancelled</div>
                  )}

                  <div>
                    <p className="text-2xl lg:text-3xl capitalize">
                      Booking id: {booking.id}
                    </p>
                  </div>
                </div>

                <div className="p-3 md:p-5 pb-0 flex flex-col gap-8 md:gap-12 justify-between">
                  <div className="flex flex-row gap-6 items-top justify-around">
                    <div className="w-36">
                      <img
                        src={
                          login.model_name
                            ? "https://justtodo.in/models/" +
                              getImgUrl(login.model_name)
                            : ""
                        }
                        alt=""
                        srcset=""
                      />
                    </div>

                    <div className="capitalize font-semibold">
                      <h4 className="text-2xl md:text-3xl text-blue-700  font-semibold capitalize">
                        <span className="text-black text-xl"> Bike model:</span>
                        <br />
                        <p className="text-3xl md:text-4xl font-bold">
                          {login.model_name}
                        </p>
                      </h4>
                      <h4 className="text-2xl md:text-3xl text-blue-700  font-semibold capitalize">
                        <span className="text-black text-xl"> mobile:</span>
                        <br />
                        <p className="text-3xl md:text-4xl font-bold">
                          {login.mobile}
                        </p>
                      </h4>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                      <h1 className=" font-semibold capitalize">
                        <span className="text-black text-2xl">Cost:</span>
                      </h1>
                      <p className="text-5xl text-blue-700 font-extrabold capitalize">
                        ₹
                        {booking.cart.reduce(
                          (total, item) => total + item.price,
                          0
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Services List */}
                  <div>
                    <ul className="flex flex-col gap-2">
                      {Object.entries(booking.cart)?.map(([key, item], idx) => (
                        <li
                          key={idx}
                          className="items-center p-4 bg-[#f5f5f5] rounded-xl flex flex-row justify-between px-5 md:px-10"
                        >
                          {" "}
                          <p className="text-2xl mr-6 lg:text-3xl capitalize font-semibold capitalize ">
                            {idx + 1}
                          </p>
                          <div className="w-24">
                            <img
                              src={getCamelImgUrl(
                                item?.serviceName ? item.serviceName : ""
                              )}
                              className="w-full rounded-xl shadow border border-[#ccc] border-solid"
                              alt=""
                            />
                          </div>
                          <div className="flex flex-row justify-between px-4 md:px-10 w-full">
                            <p className="text-2xl lg:text-3xl capitalize font-semibold  ">
                              {item.serviceName}
                            </p>
                            <p className="text-2xl lg:text-3xl capitalize font-semibold ">
                              ₹{item.price}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="">
                    <h1 className="text-3xl lg:text-4xl font-semibold">
                      Selected slot
                    </h1>
                    <div className="p-4 mt-3 flex flex-row gap-5 align-items-center justify-between border-2 border-solid border-gray-300 rounded-xl capitalize font-semibold">
                      <p className="text-2xl lg:text-3xl">
                        Date: {booking.scheduledDate.split(" ")[0]}
                      </p>
                      <p className="text-xl md:text-2xl">
                        Time:{" "}
                        {timeData.map((time) => {
                          if (time[24] == booking.scheduledTime) {
                            return time[12];
                          }
                        })}
                      </p>
                    </div>
                  </div>
                  {booking.status !== "CANCELLED" && (
                    <div className="flex flex-row gap-4 w-full">
                      <div className="flex flex-row justify-evenly gap-3 w-full">
                        <div
                          className="font-medium flex justify-center capitalize text-2xl h-fit text-[#ffffff] px-6 py-3 md:px-8 md:py-4 rounded-lg bg-[#1641ff] cursor-pointer w-full"
                          onClick={() => {
                            setOrderStatus(booking);
                          }}
                        >
                          Track order
                        </div>
                      </div>

                      <div className="flex flex-row justify-evenly gap-3 w-full">
                        <div
                          className="font-medium flex justify-center capitalize text-2xl h-fit text-[#ffffff] px-6 py-3 md:px-8 md:py-4 rounded-lg bg-[#dd2d2d] cursor-pointer w-full"
                          onClick={() => openCancelModal(booking.id)}
                        >
                          Cancel order
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="min-h-[20vh] flex justify-center items-center">
          <p className="text-4xl font-semibold capitalize">
            You have no bookings
          </p>
        </div>
      )}

      {showModal && (
        <div className="fixed z-[109] p-6 inset-0 flex justify-center items-center bg-black bg-opacity-50 ">
          <div className="bg-white p-8 rounded-lg shadow-lg  text-center">
            <p className="text-3xl font-bold text-red-600 mb-6">
              Are you sure you want to cancel this order?
            </p>
            <div className="flex justify-around gap-3 text-nowrap">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg"
                onClick={confirmCancel}
              >
                Yes, Cancel
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-black rounded-lg"
                onClick={closeModal}
              >
                No, Go Back
              </button>
            </div>
          </div>
        </div>
      )}
      {orderStatus != null && (
        <div className="lg:ml-36 fixed  z-[109] inset-0 p-6 min-h-[100vh] overflow-scroll  mb-20 w-100  bg-white  ">
          <div className="flex mb-32 flex-col justify-top items-center ">
            <div className="container md:col-span-6 border  border-solid border-[#2459E0] rounded-3xl p-8 flex flex-col gap-5 w-full bg-white shadow-lg">
              <h1 className="text-4xl lg:text-4xl capitalize font-semibold text-[#1e1f20]">
                order Status
              </h1>
              <hr />
              <div className="flex flex-row justify-between ">
                <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
                  order Date :
                </h1>
                <p className="text-2xl lg:text-3xl capitalize font-semibold">
                  {orderStatus.bookingDate.split(" ")[0]}
                </p>
              </div>
              <div className="flex flex-row justify-between ">
                <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
                  Order Time :
                </h1>
                <p className="text-2xl lg:text-3xl capitalize font-semibold">
                  {convertTo12Hour(orderStatus.bookingDate.split(" ")[1])}
                </p>
              </div>
              <div className="flex flex-row justify-between ">
                <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
                  scheduled Date :
                </h1>
                <p className="text-2xl lg:text-3xl capitalize font-semibold">
                  {orderStatus.scheduledDate.split(" ")[0]}
                </p>
              </div>
              <div className="flex flex-row justify-between ">
                <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
                  scheduled Time :
                </h1>
                <p className="text-2xl lg:text-3xl capitalize font-semibold">
                  {timeData.map((time) => {
                    if (time[24] == orderStatus.scheduledTime) {
                      return time[12];
                    }
                  })}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
                  Status :
                </h1>
                <ul className="flex flex-col gap-2">
                  {orderStatus.cart?.map((item, idx) => {
                    return (
                      <li
                        key={idx}
                        className="items-center flex flex-row gap-6 justify-between md:px-10"
                      >
                        <span
                          className={`h-10 text-center flex justify-center items-center w-10 rounded-full ${
                            item.status == "NOT_STARTED"
                              ? " bg-red-600"
                              : "bg-blue-600"
                          }`}
                        ></span>
                        <div className="items-left md:items-center p-4 flex flex-col md:flex-row justify-between px-4 md:px-10 gap-4 w-full">
                          <p className="text-2xl mr-6 lg:text-3xl capitalize font-semibold capitalize ">
                            {item.serviceName}
                          </p>
                          <p className="text-2xl lg:text-3xl capitalize font-semibold capitalize ">
                            {item.status}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="flex justify-around gap-3 text-nowrap">
              <button
                className="px-4 py-2 mt-6 bg-gray-300 text-black rounded-lg"
                onClick={() => setOrderStatus(null)}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Mybookings;
