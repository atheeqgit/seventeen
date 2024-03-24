import React from "react";
import "./pages.css";

const Wallet = () => {
  return (
    <div className="full-body wallet">
      <div className="top-box">
        <div className="hey">
          <h1>TODO wallet</h1>
          <i class="fa-solid fa-indian-rupee-sign"></i>
        </div>
        <div className="btn">Deposite</div>
        <div className="btn">withdraw</div>
      </div>
      <h3 className="title-text">Add money using UPI</h3>
      <ul>
        <li>
          <i class="fa-brands fa-google-pay"></i> Gpay
        </li>
        <li>
          <i class="fa-brands fa-apple-pay"></i>apple pay
        </li>
        <li>
          <i class="fa-brands fa-amazon-pay"></i>amazon pay
        </li>
        <h3 className="title-text">transactions hostory</h3>
        <li>
          show transactions <i class="fa-solid fa-arrow-right"></i>
        </li>
      </ul>
    </div>
  );
};

export default Wallet;
