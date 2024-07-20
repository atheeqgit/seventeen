import React from "react";
import "./featured.css";
import { useNavigate } from "react-router-dom";

const Featured = (props) => {
  const { data } = props;
  const navigate = useNavigate();

  return (
    <div className="featured-div flex flex-col gap-2 mt-5 justify-center items-center mb-4">
      <div className="featured-top w-full flex flex-row gap-4 justify-between items-center mb-3 md:mb-6">
        <h4 className="text-2xl md:text-4xl font-medium capitalize">
          {props.title}
        </h4>
        <span className="text-lg md:text-2xl font-medium md:font-semibold capitalize px-3 py-1.5 cursor-pointer ">
          {props.title == "seventeen guarentee" ? "" : "see all >"}
        </span>
      </div>
      <div className="w-full cards-div grid grid-cols-12 gap-6 md:gap-6 lg:gap-8 justify-center items-center">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="card-m col-span-3 h-full "
              onClick={() => {
                navigate(`/details/${item.id}`);
              }}
            >
              <div
                className="md:border-2 h-full border-gray-300 gap-4 md:gap-6 w-full flex flex-col lg:flex-row items-center p-3 md:p-6 md:bg-[#f3f3f3] rounded-2xl md:shadow-md transition-all hover:scale-105   
              "
              >
                <div className="icon-box">{item.icon}</div>
                <p className="text-base md:text-2xl font-medium text-center capitalize overflow-hidden whitespace-normal">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
