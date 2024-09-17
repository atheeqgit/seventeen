import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

const CartNav = ({ fullbody }) => {
  const navigate = useNavigate();
  const { cartData } = useGlobalContext();

  const totalPrice = cartData.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return (
    <div
      className={`  bg-opacity-20 backdrop-blur-lg fixed w-[100vw] left-[0%] md:bottom-28 lg:bottom-16 md:w-[40vw] md:left-[55%] z-[108] px-6 py-3 lg:py-5 lg:px-5  bg-[#76adff] border-b-2 border-solid lg:rounded-full capitalize cursor-pointer flex flex-row justify-between items-center text-xl lg:text-2xl ${
        fullbody ? "bottom-16 w-[90vw] left-[5%] rounded-full" : "bottom-24"
      }`}
      onClick={() => {
        navigate("/cart");
      }}
    >
      <div className="flex gap-4 justify-center items-center">
        <i class="fa-solid fa-cart-shopping text-4xl text-blue-700"></i>

        <p className="font-semibold text-left text-2xl flex flex-col">
          {cartData.length} services Added
          <span className="text-lg">₹{totalPrice}</span>
        </p>
      </div>
      <p className="text-center text-lg text-white px-3 md:text-xl py-1 rounded-full bg-[#1430cf]">
        view cart {">"}
      </p>
    </div>
  );
};

export default CartNav;
