import React from "react";
import "./featured.css";
import { useNavigate } from "react-router-dom";

const Featured = (props) => {
  const { data } = props;
  const navigate = useNavigate();

  return (
    <div className="featured-div">
      <div className="featured-top">
        <h4 className="title-text">{props.title}</h4>
        <span>{props.title == "seventeen guarentee" ? "" : "see all >"}</span>
      </div>
      <div className="cards-div">
        {data.map((item) => {
          return (
            <div
              className="card-m"
              onClick={() => {
                navigate(`/details/${item.id}`);
              }}
            >
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
