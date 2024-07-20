import React from "react";
import NavigateComp from "../../components/navigateComp/NavigateComp";

const Orderdetails = () => {
  return (
    <div className="full-body ">
      <NavigateComp title="Order details" />
      <div className="container mx-auto flex flex-col md:grid md:grid-cols-12 gap-3 ">
        <div className="md:col-span-6 border border-solid border-[#2459E0] rounded-lg p-4 flex flex-col gap-3 w-full">
          <h1 className="font-semibold capitalize text-center text-4xl mb-4">
            4000 KM General Service Package
          </h1>
          <div className="flex flex-row gap-5 items-center justify-between">
            <div className="w-1/5">
              <img src="/landing1.png" className="w-100 rounded-4" />
            </div>
            <div className="uppercase font-semibold text-2xl md:text-4xl ">
              <p>R15 V3</p>
              <p>ph:54566412</p>
            </div>
            <button className="secondary-btn my-text-xs p-1">
              What’s Included in package
            </button>
          </div>
        </div>
        <div className="md:col-span-6 border  border-solid border-[#2459E0] rounded-lg p-8 flex flex-col gap-5 w-full">
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              order status :
            </h1>
            <p className="text-2xl lg:3xl capitalize font-semibold">ON GOING</p>
          </div>
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              Order ID :
            </h1>
            <p className="text-2xl lg:3xl capitalize font-semibold">
              202459862A
            </p>
          </div>
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              Date :
            </h1>
            <p className="text-2xl lg:3xl capitalize font-semibold">
              15-JUNE-2024
            </p>
          </div>
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              payment method :
            </h1>
            <p className="text-2xl lg:3xl capitalize font-semibold">online</p>
          </div>
          <hr className="my-4" />
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              payment method :
            </h1>
            <p className="text-2xl lg:3xl capitalize font-semibold">online</p>
          </div>
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              order status :
            </h1>
            <p className="text-2xl lg:3xl capitalize font-semibold">ON GOING</p>
          </div>
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              Order ID :
            </h1>
            <p className="text-2xl lg:3xl capitalize font-semibold">
              202459862A
            </p>
          </div>
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              Date :
            </h1>
            <p className="text-2xl lg:3xl capitalize font-semibold">
              15-JUNE-2024
            </p>
          </div>
        </div>
        <div className="md:col-span-12 border  border-solid border-[#2459E0] rounded-lg p-8 flex flex-row gap-4 justify-between w-full">
          <h1 className="text-2xl lg:3xl  uppercase font-semibold text-[#4E5562]">
            GRAND TOTAL:
          </h1>
          <p className="text-3xl lg:4xl capitalize font-semibold">399</p>
        </div>
      </div>
    </div>
  );
};

export default Orderdetails;
