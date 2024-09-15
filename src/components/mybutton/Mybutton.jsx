import React from "react";
import { useNavigate } from "react-router-dom";

const Mybutton = ({ title, primary, onclick, wfull }) => {
  const navigate = useNavigate();

  return (
    <button
      className={`font-medium flex justify-center capitalize text-2xl h-fit  px-6 py-3 md:px-8 md:py-4 rounded-xl  cursor-pointer shadow-2xl ${
        wfull ? " w-full" : ""
      } ${
        primary
          ? "bg-[#2459e0] text-white hover:bg-[#1d11c4]"
          : "bg-[#f4f5f6] text-[#1e1e1e] hover:bg-[#cfcfcf] border-2"
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
