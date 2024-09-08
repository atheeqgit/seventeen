import React from "react";
import "./confirm.css";
import Mybutton from "../../components/mybutton/MyButton";

const Confirm = () => {
  return (
    <div className="full-body confirm">
      <i class="fa-regular fa-circle-check"></i>
      <h1 className="text-2xl md:text-4xl text-center font-semibold capitalize">
        your order has confirmed <br /> Thankyou for ordering
      </h1>
      <div class="mt-6">
        <Mybutton title="back to home" primary={true} onclick="/" />
      </div>
    </div>
  );
};

export default Confirm;
