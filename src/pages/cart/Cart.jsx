import React, { useEffect } from "react";
import "./cart.css";
import { useGlobalContext } from "../../context";
import NavigateComp from "../../components/navigateComp/NavigateComp";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const { cartData, removeFromCart, notify } = useGlobalContext();

  useEffect(() => {
    console.log(totalPrice);
  }, [cartData]);

  const totalPrice = cartData.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return (
    <div className="part-body">
      <NavigateComp title="CART" />
      {cartData.length > 0 ? (
        <div className="grid grid-cols-12 gap-4 ">
          {cartData.map((data) => {
            return (
              <div className="col-span-12 md:col-span-6 flex flex-col gap-6 p-6 border rounded-3xl shadow-xl bg-white justify-evenly">
                <div className="grid grid-cols-12 gap-5 ">
                  <div className="col-span-12 flex flex-col gap-3 ">
                    {data?.serviceName && (
                      <h4 className="text-4xl font-semibold capitalize">
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
                <div className="flex flex-row justify-around data?s-center gap-6 ">
                  <h4 className="text-3xl md:text-4xl font-bold capitalize">
                    ${data?.price}
                  </h4>
                  <button
                    className="border-[#e02424] border-2 text-[#e02424] border-solid bg-[#ffe9e9] px-4 py-2 font-medium capitalize rounded-xl text-2xl md:text-3xl"
                    onClick={() => {
                      removeFromCart(data);
                    }}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="min-h-[20vh] flex justify-center items-center">
          <p className="text-4xl font-semibold capitalize  ">
            No Items in the cart
          </p>
        </div>
      )}

      <div
        className="w-full border-0 border-solid flex gap-3 p-8 mt-5 rounded capitalize  text-white  rounded-md bg-[#2459e0] justify-between transition-colors hover:opacity-85 cursor-pointer"
        onClick={() => {
          if (cartData.length > 0) {
            navigate("/checkin");
          } else {
            notify("The Cart Has No items...", false);
          }
        }}
      >
        <p className="text-3xl font-semibold capitalize">
          total : {totalPrice}
        </p>{" "}
        <p className="text-2xl font-medium capitalize">proceed to checkin</p>{" "}
      </div>
    </div>
  );
};

export default Cart;
