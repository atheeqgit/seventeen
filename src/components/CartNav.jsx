import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

const CartNav = ({ fullbody }) => {
  const navigate = useNavigate();
  const { cartData } = useGlobalContext();

  return (
    <div
      className={`fixed  w-[90vw] left-[5%] lg:bottom-28 md:w-[40vw] md:left-[55%] z-[108] px-6 py-5 rounded-xl bg-white shadow-lg border-2 border-solid border-[#a1a1a1] border-b-4 border-b-[#001ec9] capitalize cursor-pointer flex flex-row justify-between hover:bg-[#e4e4e4] text-2xl  lg:text-3xl ${
        fullbody ? "bottom-20" : "bottom-40"
      }`}
      onClick={() => {
        navigate("/cart");
      }}
    >
      <p className="font-medium text-center ">
        view {cartData.length} items in cart
      </p>
      <p className="font-medium text-center text-[#001ec9]">click here</p>
    </div>
  );
};

export default CartNav;
