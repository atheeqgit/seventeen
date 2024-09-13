import React from "react";
import "./booking.css";
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();

  const { greet } = useGlobalContext();
  return (
    <div className="full-body booking">
      <div
        className=""
        onClick={() => {
          navigate("/confirmed");
        }}
      >
        confirm booking
      </div>
    </div>
  );
};

export default Booking;
