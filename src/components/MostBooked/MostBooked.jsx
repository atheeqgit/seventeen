import React, { useEffect } from "react";
import "./MostBooked.css";
import { useNavigate } from "react-router-dom";

export const MostBookedData = [
  {
    type: "MechanicalRepairs",
    serviceName: "Oil Change",
    icon: "most-booked-oil.jpeg",
  },
  {
    type: "ScheduledService",
    serviceName: "Water Wash",
    icon: "most-booked-water-wash.jpeg",
  },
  {
    type: "ScheduledService",
    serviceName: "General Service",
    icon: "most-booked-general-service.jpeg",
  },
];

const MostBooked = (props) => {
  const { data } = props;
  const navigate = useNavigate();

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

      {/* Scrollable div for the cards */}
      <div className="todoG-scroll-container flex gap-2 md:gap-6 lg:gap-8 overflow-x-auto w-full px-4">
        {MostBookedData.length > 0 &&
          MostBookedData?.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-2/3 md:w-1/3 lg:w-1/5 h-full"
              onClick={() => {
                navigate(`/details/mr/${item.serviceName}`);
              }}
            >
              <div className="h-full lg:border-gray-300 gap-4 md:gap-6 w-full flex flex-col lg:flex-row items-center p-3 md:p-6 rounded-2xl transition-all hover:scale-105">
                <div className="w-full flex justify-center items-center bg-[#fffafa] rounded-xl shadow-md">
                  <img
                    src={"/" + item.icon}
                    className="w-full rounded-xl shadow-md"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MostBooked;
