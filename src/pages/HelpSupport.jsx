import React from "react";
import { useGlobalContext } from "../context";
import Mybutton from "../components/mybutton/Mybutton";
import NavigateComp from "../components/navigateComp/NavigateComp";

const HelpSupport = () => {
  const { login } = useGlobalContext();

  return (
    <div className="full-body p-4">
      <NavigateComp title="Help and Support" />

      <div className="w-full min-h-[70vh] flex flex-col justify-center items-center text-center gap-10 pb-10">
        <div className="flex flex-col justify-between items-center gap-6 ">
          <div className="w-full">
            <img
              className="w-[90%] md:w-[70%] block m-auto h-fit"
              src="/contactus-illu.png"
              alt=""
              srcset=""
            />
          </div>
          <h1 className="text-5xl capitalize  lg:text-6xl font-semibold text-blue-600">
            hello ,{login?.name}
          </h1>

          <p className="md:w-2/3 text-wrap p-4 font-semibold text-center">
            how can we help you?
          </p>
        </div>
        <div className="flex flex-col md:row justify-between items-center gap-6 whitespace-nowrap ">
          <a
            href="https://wa.me/+916382104561"
            className="font-medium flex justify-center capitalize text-2xl h-fit text-black px-6 py-3 md:px-8 w-96 md:py-4 rounded-md border border-solid border-b-4 border-[#2459e0] cursor-pointer hover:opacity-80"
            target="blank"
          >
            chat on whats-App
          </a>
          <a
            href="tel:+916382104561"
            className="font-medium flex justify-center capitalize text-2xl h-fit text-black px-6 py-3 md:px-8 w-96 md:py-4 rounded-md border border-solid border-b-4 border-[#2459e0] cursor-pointer hover:opacity-80"
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
