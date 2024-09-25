import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";
import NavigateComp from "../../components/navigateComp/NavigateComp";
import { useNavigate } from "react-router-dom";
import Featured from "../../components/featured/Featured";
import { BoostData } from "../../utils/data";

const Cart = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const navigate = useNavigate();
  const {
    cartData,
    removeFromCart,
    notify,
    getImgUrl,
    sheduledServices,
    getCamelImgUrl,
  } = useGlobalContext();

  useEffect(() => {}, [cartData]);

  const totalPrice = cartData.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return (
    <div className="part-body relative">
      <NavigateComp title="CART" />

      {cartData.length > 0 ? (
        <>
          <div className="md:col-span-6 border  border-solid mb-3 border-[#2459E0] rounded-3xl p-8 flex flex-col gap-5 w-full bg-white shadow-lg">
            <h1 className="text-2xl lg:text-4xl capitalize font-semibold text-[#1e1f20]">
              order Details :
            </h1>
            <hr />
            <div className="flex flex-row justify-between ">
              <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
                Total Services :
              </h1>
              <p className="text-2xl lg:text-3xl capitalize font-semibold">
                {cartData.length}
              </p>
            </div>
            <div className="flex flex-row justify-between ">
              <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
                Total Price :
              </h1>
              <p className="text-2xl lg:text-3xl capitalize font-semibold">
                ₹{totalPrice}
              </p>
            </div>
            <div className="flex flex-row justify-between ">
              <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
                Convinence Fee :
              </h1>
              <p className="text-2xl lg:text-3xl capitalize font-semibold">
                ₹{0}
              </p>
            </div>

            <div className="flex pt-4 flex-row justify-between  border-t-2 border-solid border-[#1e65ff]">
              <h1 className="text-3xl lg:text-4xl capitalize  font-bold text-[#1e1f20]">
                TOTAL PRICE :
              </h1>
              <p className="text-3xl lg:text-3xl capitalize font-bold">
                ₹{totalPrice}/-
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 ">
            {cartData.map((data) => {
              return (
                <div className="col-span-12 md:col-span-6 flex grid-cols-12 gap-6 p-8 border rounded-3xl shadow-xl bg-white justify-evenly">
                  <div className="grid grid-cols-12 gap-5 col-span-8">
                    <div className="col-span-3">
                      <img
                        src={getCamelImgUrl(
                          data?.serviceName ? data?.serviceName : ""
                        )}
                        className="w-full rounded-xl shadow border border-[#1b58ff] border-solid"
                        alt=""
                      />
                    </div>
                    <div className="col-span-9 md:col-span-6 flex flex-col gap-3 ">
                      {data?.serviceName && (
                        <h4 className="text-3xl md:text-3 font-semibold capitalize">
                          {data?.serviceName}
                        </h4>
                      )}
                      <h4 className="text-3xl md:text-4xl font-bold capitalize">
                        ₹{data?.price}
                      </h4>
                      {/* <ul className="list-disc ml-8 capitalize font-medium text-xl md:text-2xl">
                        <li>{data?.recommendedOn}</li>
                        {data?.points.map((point, index) => {
                   return <li key={index}>{point}</li>;
                 })} 
                      </ul> */}
                    </div>
                  </div>
                  <div className="flex flex-col justify-around  gap-6 col-span-4">
                    <button
                      className="border-[#e02424] border-2 text-[#e02424] border-solid bg-[#ffe9e9] px-4 py-2 font-medium capitalize rounded-full text-2xl md:text-3xl"
                      onClick={() => {
                        removeFromCart(data);
                      }}
                    >
                      <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <Featured title="Frequently ordered" data={BoostData} />
          {/* <div
            className="w-full border-0 border-solid flex gap-3 p-8 mt-8 rounded capitalize  text-white  rounded-md bg-[#2459e0] justify-between transition-colors hover:opacity-85 cursor-pointer"
            onClick={() => {
              if (cartData.length > 0) {
                navigate("/checkin");
              } else {
                notify("The Cart Has No items...", false);
              }
            }}
          >
            <p className="text-3xl font-semibold capitalize">
              ₹ total : {totalPrice}/-
            </p>{" "}
            <p className="text-2xl font-medium capitalize">
              proceed to checkOut
            </p>{" "}
          </div> */}

          <div
            className={` bg-opacity-20 backdrop-blur-lg fixed w-[100vw] left-[0%] bottom-[58px] md:bottom-28 lg:bottom-16 md:w-[42vw] md:left-[55%] z-[120] px-6 py-2 lg:py-5 lg:px-5  bg-[#76adff] border-b-2 border-solid md:rounded-full capitalize cursor-pointer flex flex-row justify-between  items-center text-xl lg:text-2xl
        `}
            onClick={() => {
              if (cartData.length > 0) {
                navigate("/checkin");
              } else {
                notify("The Cart Has No items...", false);
              }
            }}
          >
            <div className="flex gap-4 justify-center items-center">
              <i class="fa-solid fa-cart-shopping text-4xl text-blue-700"></i>

              <p className="font-semibold text-left text-2xl flex flex-col">
                {cartData.length} services Added
                <span className="text-lg">₹{totalPrice}</span>
              </p>
            </div>
            <p className="text-center text-xl md:text-2xl text-white px-3 py-1 rounded-full bg-[#1430cf]">
              Proceed to checkout{" >"}
            </p>
          </div>
        </>
      ) : (
        <div className="min-h-[60vh] flex flex-col gap-6 justify-center items-center text-center">
          <div className="w-[65%] md:w-[80%] block mx-auto p-auto">
            <img src="/emptycart.png" className="w-100 block mx-auto" alt="" />
          </div>
          <h1 className="text-4xl font-bold capitalize  text-[#ff1e1e] ">
            OOPS! Cart Empty
          </h1>
          <p className="text-2xl font-semibold capitalize  ">
            Looks like your cart is empty, <br /> please add cart items
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
