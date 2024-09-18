import React, { useState, useEffect } from "react";
import "./moreDetails.css";
import { useParams } from "react-router-dom";

import NavigateComp from "../../components/navigateComp/NavigateComp";
import { useGlobalContext } from "../../context";
import Loading from "../../components/Loading";
import FAQcomp from "../../components/FAQcomp";
import MostBooked from "../../components/MostBooked/MostBooked";
import TodoG from "../../components/TodoG";
const MoreDetails = () => {
  const {
    getMRDetails,
    loading,
    setLoading,
    cartData,
    removeFromCart,
    addToCart,
    getCamelImgUrl,
  } = useGlobalContext();
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: for smooth scrolling
    });

    const fetchData = async () => {
      setData([]);
      try {
        const result = await getMRDetails(params.ServiceDetails);
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  const isPresentInCart = (data) => {
    return cartData.some((item) => item.id === data.id); // Return true if item is found
  };

  return (
    <div className="full-body">
      <NavigateComp title={data ? data.serviceName : "Service details"} />
      {loading ? (
        <Loading />
      ) : (
        data && (
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2 p-6">
              <div className=" ">
                <img
                  src={getCamelImgUrl(
                    data?.serviceName ? data.serviceName : ""
                  )}
                  className="w-full rounded-xl shadow border border-[#101ff0] border-solid"
                  alt=""
                />
              </div>
              <h1 className="text-4xl lg:text-5xl font-semibold text-black mt-6 pt-3 border-t-2 border-solid border-[#ccc]">
                {data.serviceName}
              </h1>
              <h4 className="text-5xl mt-5 lg:text-6xl font-bold capitalize">
                ₹{data?.price}/-
              </h4>

              <div className="flex flex-col gap-3 mt-6  mb-10">
                <div className="grid grid-cols-12 gap-6 items-center font-semibold capitalize">
                  <div className="w-20 col-span-1 text-green-400">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <p className="col-span-11">{data.takesAbout}</p>
                </div>
                <div className="grid grid-cols-12 gap-6 items-center font-semibold capitalize">
                  <div className="w-20 col-span-1 text-orange-400">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="col-span-11">{data.recommendedOn}</p>
                </div>
                <div className="grid grid-cols-12 gap-6 items-center font-semibold capitalize">
                  <div className="w-20 col-span-1 text-red-400">
                    <i className="fa-solid fa-award"></i>
                  </div>
                  <p className="col-span-11">
                    {data.warranty ? data.warranty : "Basic Todo warranty "}
                  </p>
                </div>
                <div className="grid grid-cols-12 gap-6 items-center font-semibold capitalize">
                  <div className="w-20 col-span-1 text-blue-400">
                    <i className="fa-solid fa-truck-pickup"></i>
                  </div>
                  <p className="col-span-11">Free pickup and drop</p>
                </div>
              </div>
              {isPresentInCart(data) ? (
                <div className="flex gap-2 w-full ">
                  <button className="border-[#24e063] border-2 text-[#000000] border-solid bg-[#E9F0FF] w-full px-4 py-2 font-medium capitalize rounded-xl text-2xl md:text-3xl">
                    item in cart
                  </button>
                  <button
                    className="border-[#e02424] border-2 text-[#e02424] border-solid bg-[#ffe9e9] px-4 py-2 font-medium capitalize rounded-xl text-2xl md:text-3xl"
                    onClick={() => {
                      removeFromCart(data);
                    }}
                  >
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
              ) : (
                <button
                  className="border-[#2459E0] border-2 text-[#2459E0] border-solid bg-[#E9F0FF] px-6 py-2 font-medium capitalize rounded-xl text-2xl md:text-3xl"
                  onClick={() => {
                    addToCart(data);
                  }}
                >
                  Add to Cart
                </button>
              )}
              <MostBooked title="Most Booked" data={[]} />
              {/* <Featured title="Frequently Searched" data={BoostData} /> */}
              <TodoG />
              <FAQcomp />
              {/* FAQ Section */}
              {/* <div className="mt-10">
                <h2 className="text-4xl font-semibold text-black mb-6">FAQs</h2>
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    onClick={() => toggleFAQ(index)}
                    className="border-b-2 mb-3 shadow border-solid bg-[#e6e6e6] border-[#ccc] p-4 rounded-2xl"
                  >
                    <h3 className="text-2xl font-semibold cursor-pointer flex flex-row justify-between">
                      {faq.question}
                      <span className="ml-4 text-4xl">
                        {faq.open ? "-" : "+"}
                      </span>
                    </h3>
                    {faq.open && (
                      <p className="mt-4 text-xl text-gray-600">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default MoreDetails;
