import React from "react";
import "./featured.css";

const Featured = (props) => {
  const { data } = props;
  return (
    <div className="featured-div">
      <div className="featured-top">
        <h4>{props.title}</h4>
        <span>see all</span>
      </div>
      <div className="cards-div">
        {data.map((item) => {
          return (
            <div className="card">
              <div className="icon-box">{item.icon}</div>
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
