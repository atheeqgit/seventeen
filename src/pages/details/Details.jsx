import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigateComp from "../../components/navigateComp/NavigateComp";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import Loading from "../../components/Loading";
import CartNav from "../../components/CartNav";

const Details = () => {
  const {
    getMRdata,
    getMRDetails,
    setLoading,
    loading,
    addToCart,
    cartData,
    getCamelImgUrl,
    getImgUrl,
    removeFromCart,
  } = useGlobalContext();
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scrolling smooth
    });

    const fetchData = async () => {
      try {
        const result = await getMRdata(params.ServiceName);
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [params.ServiceName]);

  useEffect(() => {
    if (data?.length > 0) {
      fetchAllData();
    }
  }, [data]);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const results = await Promise.all(
        data.map(async ({ serviceName }) => {
          const replacedStr = serviceName.replace(/%20/g, " ");
          const res = await getMRDetails(replacedStr);
          return res;
        })
      );

      setAllData(results);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  const isPresentInCart = (data) => {
    return cartData.some((item) => item.id === data.id); // Return true if item is found
  };

  return (
    <div className="full-body relative">
      {cartData.length > 0 && <CartNav fullbody={true} />}
      <div className="details">
        <NavigateComp title="provided services" />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-12 gap-4 ">
          {allData &&
            allData.map((data, idx) => {
              return (
                data.serviceName && (
                  <div
                    key={idx}
                    className="col-span-12 md:col-span-6 flex flex-col gap-8  p-10 border rounded-3xl shadow-xl bg-white justify-evenly"
                  >
                    <div className="grid grid-cols-12 gap-5 ">
                      <div className="col-span-4 ">
                        <img
                          src={getCamelImgUrl(
                            data?.serviceName ? data.serviceName : ""
                          )}
                          className="w-full rounded-xl shadow border border-[#101ff0] border-solid"
                          alt=""
                        />
                      </div>
                      <div className="col-span-8 flex flex-col gap-3 ">
                        {data.serviceName && (
                          <h4 className="text-3xl md:text-4xl font-bold capitalize">
                            {data?.serviceName}
                          </h4>
                        )}

                        <ul className="list-disc ml-8 capitalize font-medium text-xl md:text-2xl">
                          <li>{data.recommendedOn}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-row justify-around data?s-center gap-6">
                      <h4 className="text-3xl md:text-4xl font-bold capitalize">
                        ₹{data?.price}/-
                      </h4>
                      {isPresentInCart(data) ? (
                        <div className="flex gap-2">
                          <button className="border-[#24e063] border-2 text-[#000000] border-solid bg-[#E9F0FF] px-4 py-2 font-medium capitalize rounded-xl text-2xl md:text-3xl">
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
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              navigate("/moreDetails/" + data.serviceName);
                            }}
                            className="border-[#2495e0] border-2 text-[#000000] border-solid bg-[#E9F0FF] px-4 py-2 font-medium capitalize rounded-xl text-xl md:text-3xl"
                          >
                            view Details
                          </button>
                          <button
                            className="border-[#2485e0] border-2 text-[#9cc4ff] border-solid bg-[#ffe9e9] px-4 py-2 font-medium capitalize rounded-xl text-2xl md:text-3xl"
                            onClick={() => {
                              addToCart(data);
                            }}
                          >
                            <i class="fa-solid fa-cart-shopping text-3xl text-blue-700"></i>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Details;
