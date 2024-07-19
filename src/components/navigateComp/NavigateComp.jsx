import React from "react";
import { useNavigate } from "react-router-dom";

const NavigateComp = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-2 px-2 md:px-4 py-3">
      <div
        className=" px-6 md:px-6 rounded-full cursor-pointer border hover:bg-[#e4e4e4]"
        onClick={() => {
          navigate(-1);
        }}
      >
        <i class="fa-solid fa-chevron-left "></i>
      </div>
      <h1 className="title-text  capitalize ">
        {"    "}
        {title}
      </h1>
    </div>
  );
};

export default NavigateComp;
