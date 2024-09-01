import React, { useState, useEffect } from "react";
import NavigateComp from "../components/navigateComp/NavigateComp";
import { useGlobalContext } from "../context";

const CheckinPage = () => {
  const date = new Date();
  const [cart, setCart] = useState(null);

  const { cartData, login, postBooking } = useGlobalContext();

  const totalPrice = cartData.reduce((total, product) => {
    return total + product.price;
  }, 0);
  useEffect(() => {
    console.log(cartData);
    setCart(cartData);
  }, [cartData]);

  return (
    <div className="full-body">
      <NavigateComp title="Checkin" />
      <div className="flex flex-col gap-3 lg:grid grid-cols-12 ">
        <div className="md:col-span-6 border  border-solid border-[#2459E0] rounded-3xl p-8 flex flex-col gap-5 w-full bg-white shadow-lg">
          <h1 className="text-2xl lg:text-4xl capitalize font-semibold text-[#1e1f20]">
            order summary :
          </h1>
          <hr />
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              order Date :
            </h1>
            <p className="text-2xl lg:text-3xl capitalize font-semibold">
              {date.toLocaleDateString()}
            </p>
          </div>
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              Order Time :
            </h1>
            <p className="text-2xl lg:text-3xl capitalize font-semibold">
              {date.toLocaleTimeString()}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              Items :
            </h1>
            <ul className="flex flex-col gap-2">
              {cart?.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="ml-10 p-4 bg-gray-200 flex flex-row justify-between px-10"
                  >
                    <p className="text-2xl lg:text-3xl capitalize font-semibold capitalize ">
                      {item.serviceName}
                    </p>
                    <p className="text-2xl lg:text-3xl capitalize font-semibold capitalize">
                      ₹{item.price}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="md:col-span-6 border  border-solid border-[#2459E0] rounded-3xl p-8 flex flex-col gap-5 w-full bg-white">
          <h1 className="text-2xl lg:text-4xl capitalize font-semibold text-[#1e1f20]">
            details :
          </h1>
          <hr />
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              Name :
            </h1>
            <p className="text-2xl lg:text-3xl capitalize font-semibold">
              {login?.name}
            </p>
          </div>
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              Mobile number:
            </h1>
            <p className="text-2xl lg:text-3xl capitalize font-semibold">
              {login?.mobile}
            </p>
          </div>
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              bike model :
            </h1>
            <p className="text-2xl lg:text-3xl capitalize font-semibold">
              {login?.model_name ? login?.model_name : "no model"}
            </p>
          </div>
          <hr className="my-4" />
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              payment method :
            </h1>
            <p className="text-2xl lg:text-3xl capitalize font-semibold">
              CASH
            </p>
          </div>
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              Time
            </h1>
            <p className="text-2xl lg:text-3xl capitalize font-semibold">
              select
            </p>
          </div>
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl lg:text-3xl capitalize font-semibold text-[#4E5562]">
              date
            </h1>
            <p className="text-2xl lg:text-3xl capitalize font-semibold">
              select
            </p>
          </div>
          <p className="text-4xl font-semibold capitalize text-center">
            grand total : ₹{totalPrice}
          </p>{" "}
          <div
            className="w-full border-0 border-solid p-6 mt-5 rounded capitalize  text-white rounded-md bg-[#2459e0]  transition-colors hover:opacity-85 cursor-pointer"
            onClick={() => {
              postBooking();
            }}
          >
            <p className="text-4xl font-medium capitalize text-center">
              PLACE ORDER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckinPage;
