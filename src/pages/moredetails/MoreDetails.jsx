import React, { useState, useEffect } from "react";
import "./moreDetails.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavigateComp from "../../components/navigateComp/NavigateComp";
import { useGlobalContext } from "../../context";

const MoreDetails = () => {
  const { getMRDetails, addToCart } = useGlobalContext();
  const params = useParams();

  const navigate = useNavigate();
  const ServiceDetails = params.ServiceDetails;
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: for smooth scrolling
    });
    const fetchData = async () => {
      try {
        const result = await getMRDetails(params.ServiceDetails);
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="full-body">
      <NavigateComp title="service details" />
      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-12 md:col-span-6 flex flex-col gap-6 p-6 border rounded-3xl shadow-xl bg-white justify-evenly">
          <div className="grid grid-cols-12 gap-5 ">
            <div className="col-span-4 ">
              <img
                src="/landing1.png"
                className="w-full rounded-xl shadow border-2 border-[#ccc] border-solid"
                alt=""
              />
            </div>
            <div className="col-span-8 flex flex-col gap-3 ">
              {data?.serviceName && (
                <h4 className="text-2xl md:text-4xl font-semibold capitalize">
                  {data?.serviceName}
                </h4>
              )}

              <ul className="list-disc ml-8 capitalize font-medium text-xl md:text-2xl">
                <li>{data?.recommendedOn}</li>
                {/* {data?.points.map((point, index) => {
                       return <li key={index}>{point}</li>;
                     })} */}
              </ul>
            </div>
          </div>
          <div className="flex flex-row justify-around data?s-center gap-6">
            <h4 className="text-3xl md:text-4xl font-bold capitalize">
              ${data?.price}
            </h4>
            <button
              className="border-[#2459E0] border-2 text-[#2459E0] border-solid bg-[#E9F0FF] px-4 py-2 font-medium capitalize rounded-xl text-2xl md:text-3xl"
              onClick={() => {
                addToCart(data);
              }}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
