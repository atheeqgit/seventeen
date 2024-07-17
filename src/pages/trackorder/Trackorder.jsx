import React from "react";
import NavigateComp from "../../components/navigateComp/NavigateComp";

const Trackorder = () => {
  return (
    <div className="full-body">
      <NavigateComp title="track order" />
      <div className="p-4">
        <div className="flex flex-col gap-3 p-8 border border-solid bg-[#F3F3F3] border-[#2459E0] shadow rounded-2xl">
          <div className="flex flex-row justify-between mb-3 font-semibold ">
            <h1 className="text-4xl">Order ID : 1546332465</h1>
            <p>on progress</p>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="flex flex-row gap-6">
              <span className="p-4 bg-[#2459E0] rounded-full"></span>
              <h3>Lorem, ipsum dolor.</h3>
            </li>
            <li className="flex flex-row gap-6">
              <span className="p-4 bg-[#2459E0] rounded-full"></span>
              <h3>Lorem, ipsum dolor.</h3>
            </li>
            <li className="flex flex-row gap-6">
              <span className="p-4 bg-[#2459E0] rounded-full"></span>
              <h3>Lorem, ipsum dolor.</h3>
            </li>
            <li className="flex flex-row gap-6">
              <span className="p-4 bg-[#2459E0] rounded-full"></span>
              <h3>Lorem, ipsum dolor.</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Trackorder;
