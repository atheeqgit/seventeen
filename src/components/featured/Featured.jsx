import React, { useEffect } from "react";
import "./featured.css";
import { useNavigate } from "react-router-dom";

const Featured = (props) => {
  const { data } = props;
  const navigate = useNavigate();

  const HandleNavigation = () => {};

  const toCamelCase = (str) => {
    return str
      .trim() // Remove leading or trailing whitespace
      .split(" ") // Split the string into an array by spaces
      .map(
        (word, index) =>
          index === 0
            ? word.toLowerCase() // Lowercase the first word
            : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize the first letter of the rest
      )
      .join(""); // Join the array back into a single string
  };

  return (
    <div className="featured-div flex flex-col gap-2 mt-5 justify-center items-center mb-4">
      <div className="featured-top w-full flex flex-row gap-4 justify-between items-center mb-3 md:mb-6">
        <h4 className="text-2xl md:text-4xl font-medium capitalize">
          {props.title}
        </h4>
      </div>
      <div className="w-full cards-div grid grid-cols-4 gap-2 md:gap-6 lg:gap-8 justify-center items-center">
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <div
                key={index}
                className="card-m col-span-1 h-full "
                onClick={() => {
                  navigate(`/details/mr/${item.serviceName}`);
                }}
              >
                <div
                  className="lg:border-2 h-full lg:border-gray-300 gap-4 md:gap-6 w-full flex flex-col lg:flex-row items-center p-3 md:p-6 lg:bg-[#f3f3f3] rounded-2xl lg:shadow-md transition-all hover:scale-105   
              "
                >
                  <div className="icon-box ">
                    <img src={toCamelCase(item.serviceName)} alt="" srcSet="" />{" "}
                  </div>
                  {/* <div className="icon-box">{item.icon}</div> */}
                  <p className="text-base md:text-2xl font-medium text-center capitalize overflow-hidden whitespace-normal">
                    {item.serviceName}
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
