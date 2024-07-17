import React from "react";
import "./featured.css";
import { useNavigate } from "react-router-dom";

const Featured = (props) => {
  const { data } = props;
  const navigate = useNavigate();

  return (
    <div className="featured-div flex flex-col gap-2 mt-5 justify-center items-center mb-4">
      <div className="featured-top w-full flex flex-row gap-4 justify-between items-center">
        <h4 className="title-text">{props.title}</h4>
        <span className="text-2xl font-semibold capitalize px-3 py-1.5 rounded-full cursor-pointer">
          {props.title == "seventeen guarentee" ? "" : "see all >"}
        </span>
      </div>
      <div className="w-full cards-div grid grid-cols-12 gap-6 md:gap-6 lg:gap-8 justify-center items-center">
        {data.map((item) => {
          return (
            <div
              className="card-m col-span-4 sm:col-span-3 h-full "
              onClick={() => {
                navigate(`/details/${item.id}`);
              }}
            >
              <div
                className=" border-2 h-full border-gray-300 gap-6 w-full flex flex-col lg:flex-row items-center p-4 md:p-6 bg-[#ece8ff] rounded-2xl shadow-md 
                transition-all
                hover:scale-105   
              "
              >
                <div className="icon-box">{item.icon}</div>
                <p>{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
