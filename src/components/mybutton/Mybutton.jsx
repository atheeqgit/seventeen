import React from "react";
import { useNavigate } from "react-router-dom";

const Mybutton = ({ title, primary, onclick, wfull }) => {
  const navigate = useNavigate();

  return primary ? (
    <button
      className={`font-medium flex justify-center capitalize text-2xl h-fit text-white px-6 py-3 md:px-8 md:py-4 rounded-md bg-[#2459e0] cursor-pointer ${
        wfull ? " w-full" : ""
      } `}
      onClick={() => {
        navigate(onclick);
      }}
    >
      {title}
    </button>
  ) : (
    <button
      className={`font-medium flex justify-center capitalize text-2xl h-fit text-[#1e1e1e] px-6 py-3 md:px-8 md:py-4 rounded-md bg-[#f4f5f6] cursor-pointer border-2 ${
        wfull ? " w-full" : ""
      } `}
      onClick={() => {
        navigate(onclick);
      }}
    >
      {title}
    </button>
  );
};

export default Mybutton;
