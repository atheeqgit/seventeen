import React from "react";
import "./component.css";

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="top-nav-top">
        <div className="img-div">
          <img src="/r15.png" alt="" />
          <span>R15</span>
        </div>
        <div className="details">
          <h1>
            <i class="fa-solid fa-location-dot"></i> Old washermenpet
          </h1>
          <p>muthaiya mudalai street washermenpet , chennai</p>
        </div>
      </div>
      <div className="top-nav-bottom">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search..." />
        <i class="fa-solid fa-sliders"></i>
      </div>
    </div>
  );
};

export default TopNav;
