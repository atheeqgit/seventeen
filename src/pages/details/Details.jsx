import React, { useEffect } from "react";

import "./details.css";
import { details } from "../../utils/data";
import { useParams } from "react-router-dom";
import NavigateComp from "../../components/navigateComp/NavigateComp";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scrolling smooth
    });
  }, []);

  const selectedId = +params.id;

  const data = details.find((item) => item.id === selectedId);
  const handleNavigate = (price) => {
    navigate(`/moreDetails/${selectedId}/${price}`);
  };

  return (
    <div className="full-body">
      <div className="details">
        <NavigateComp title="provided services" />

        <div className="grid grid-cols-12 gap-4 ">
          {data.data.map((item, index) => {
            return (
              <div
                className="col-span-12 md:col-span-6 flex flex-col gap-6 p-6 border rounded-3xl shadow-xl bg-white"
                onClick={() => {
                  handleNavigate(item.price);
                }}
                key={index}
              >
                <div className="grid grid-cols-12 gap-5 ">
                  <div className="col-span-4 ">
                    <img
                      src="/landing1.png"
                      className="w-full rounded-xl shadow border-2 border-[#ccc] border-solid"
                      alt=""
                    />
                  </div>
                  <div className="col-span-8 flex flex-col gap-3 ">
                    {item.title && (
                      <h4 className="text-2xl md:text-4xl font-semibold capitalize">
                        {item.title}
                      </h4>
                    )}

                    <ul className="list-disc ml-8 capitalize font-medium text-xl md:text-2xl">
                      {item.points.map((point, index) => {
                        return <li key={index}>{point}</li>;
                      })}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row justify-around items-center gap-6">
                  <h4 className="text-3xl md:text-4xl font-bold capitalize">
                    ${item.price}/-
                  </h4>
                  <button className="border-[#2459E0] border-2 text-[#2459E0] border-solid bg-[#E9F0FF] px-8 py-3 font-medium capitalize rounded-xl">
                    add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;

// {item.Title && <p>${item.Title}</p>}
// <p>${item.price}</p>
// <div>
//   <ul>
//     {item.points.map((point, index) => {
//       return <li key={index}>{point}</li>;
//     })}
//   </ul>
//   <div className="img-div">
//     <img src={item.img} alt="" />
//     <span>add</span>
//   </div>
// </div>
