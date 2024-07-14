import React from "react";
import { useNavigate } from "react-router-dom";

const Mybookings = () => {
  const navigate = useNavigate();

  return (
    <div className="full-body">
      <h1 className="title-text px-4 py-3">
        <i
          onClick={() => {
            navigate(-1);
          }}
          class="fa-solid fa-chevron-left"
        ></i>
        {"    "}
        My bookings
      </h1>
      <div className="mt-3 flex flex-col gap-1 ">
        <div className="rounded-4 border border-primary pb-3 shadow ">
          <div className="w-full rounded-4 p-2 text- text-center font-semibold capitalize bg-[#4EFD55]">
            On going
          </div>
          <div className="p-5 pb-0 flex flex-col gap-4">
            <div className="flex flex-row gap-5 items-center justify-between">
              <div className="w-1/3">
                <img src="./landing1.png" className="w-100 rounded-4" />
              </div>
              <div className="uppercase font-semibold text-4xl">
                <p>R15 V3</p>
                <p>ph:54566412</p>
              </div>
              <h1 className="font-bold text-5xl">₹2799</h1>
            </div>
            <div className="p-4 flex flex-row gap-5 align-items-center justify-between">
              <h3 className="font-medium text-capitalize fs-1">
                4000 KM General <br /> Service Package
              </h3>
              <button className="secondary-btn">view Details</button>
            </div>
            <div className="border-t-2 pt-3 border-solid border-[#2459E0]">
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
            <div className="flex flex-row justify-evenly gap-3 ">
              <button className="secondary-btn w-full ">Track Order</button>
              <button className="primary-btn w-full ">Add Services</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mybookings;
