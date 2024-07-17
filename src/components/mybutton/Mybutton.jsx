import React from "react";
import { useNavigate } from "react-router-dom";

const Mybutton = ({ title, primary, onclick, wfull }) => {
  const navigate = useNavigate();

  return primary ? (
    <button
      className={`primary-btn ${wfull ? " w-full" : ""} `}
      onClick={() => {
        navigate(onclick);
      }}
    >
      {title}
    </button>
  ) : (
    <button
      className={`secondary-btn ${wfull ? " w-full" : ""} `}
      onClick={() => {
        navigate(onclick);
      }}
    >
      {title}
    </button>
  );
};

export default Mybutton;
