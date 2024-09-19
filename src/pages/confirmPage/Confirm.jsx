import React from "react";
import "./confirm.css";
import Mybutton from "../../components/mybutton/Mybutton";

const Confirm = () => {
  return (
    <div className="full-body confirm">
      <div className="w-60">
        <img src="./confirmgif.gif" alt="" />
      </div>

      <h1 className="text-2xl md:text-4xl text-center font-semibold capitalize">
        your order has confirmed <br /> Thankyou for ordering
      </h1>
      <div class="mt-6 flex flex-row justify-center items-center gap-3">
        <Mybutton title="back to home" primary={true} onclick="/" />
        <Mybutton title="go to bookings" primary={true} onclick="/myBooking" />
      </div>
    </div>
  );
};

export default Confirm;
