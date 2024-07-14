import React from "react";
import "./booking.css";
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();

  const { greet } = useGlobalContext();
  return (
    <div className="full-body booking">
      <div className="top-box">
        <h3>Location for pickup</h3>
        <p>Muthaiya Mudalai street, Old Washermenpet, chennai</p>
      </div>
      <span>Change location for pick up !</span>
      <h5>Select Your Preffered Time and Date</h5>
      <hr />
      <h2>Preffered Date</h2>
      <div className="date-box">
        <div>
          <span>S</span>
          <p>31</p>
        </div>
        <div>
          <span>m</span>
          <p>1</p>
        </div>
        <div>
          <span>t</span>
          <p>2</p>
        </div>
        <div>
          <span>w</span>
          <p>3</p>
        </div>
        <div>
          <span>t</span>
          <p>4</p>
        </div>
        <div>
          <span>f</span>
          <p>5</p>
        </div>
        <div>
          <span>S</span>
          <p>6</p>
        </div>
      </div>
      <br />
      <h2>Preffered Timing</h2>

      <div className="time-box">
        <div>
          <input type="radio" name="" id="" />
          <label htmlFor="">morning</label>
        </div>
        <div>
          <input type="radio" name="" id="" />
          <label htmlFor="">afternoon</label>
        </div>
        <div>
          <input type="radio" name="" id="" />
          <label htmlFor="">evening</label>
        </div>
      </div>
      <div className="bottom-box">
        <div>
          <h5>Slot no</h5>
          <p>XXXXXXX</p>
        </div>
        <div>
          <h5>Date</h5>
          <p>31/03/2024</p>
        </div>
        <div>
          <h5>Total cost</h5>
          <p>$565</p>
        </div>
      </div>
      <div
        className="add-to-cart-btn"
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
