import React from "react";
import { useGlobalContext } from "../context";
import Mybutton from "../components/mybutton/Mybutton";
import NavigateComp from "../components/navigateComp/NavigateComp";

const HelpSupport = () => {
  const { login } = useGlobalContext();

  return (
    <div className="full-body p-4">
      <NavigateComp title="Help and Support" />
      <h1 className="font-semibold capitalize text-3xl lg:text-4xl p-6 bottom-1 border-solid border-[#333]">
        Help and Support
      </h1>
      <div className="w-full min-h-[70vh] flex flex-col justify-center items-center gap-10">
        <div className="w-28 md:w-44 ">
          <img
            className="w-full"
            src="/icon-settings-customer-support.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between items-center gap-6 whitespace-nowrap ">
          <h1 className="font-semibold capitalize text-center text-3xl lg:text-4xl">
            hello {login?.name}
          </h1>

          <a
            href="https://wa.me/+919566244054"
            className="font-medium flex justify-center capitalize text-2xl h-fit text-white px-6 py-3 md:px-8 w-96 md:py-4 rounded-md bg-[#2459e0] cursor-pointer hover:opacity-80"
            target="blank"
          >
            message us on whats-App
          </a>
          <a
            href="tel:+919566244054"
            className="font-medium flex justify-center capitalize text-2xl h-fit text-white px-6 py-3 md:px-8 w-96 md:py-4 rounded-md bg-[#2459e0] cursor-pointer hover:opacity-80"
            target="blank"
          >
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
