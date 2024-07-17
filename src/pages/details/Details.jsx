import React, { useEffect } from "react";

import "./details.css";
import { details } from "../../utils/data";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavigateComp from "../../components/navigateComp/NavigateComp";

const Details = () => {
  const params = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scrolling smooth
    });
  }, []);

  const navigate = useNavigate();
  const selectedId = +params.id;

  const data = details.find((item) => item.id === selectedId);
  const handleNavigate = (price) => {
    navigate(`/moreDetails/${selectedId}/${price}`);
  };

  return (
    <div className="full-body">
      <div className="details">
        <NavigateComp title="provided services" />

        <div className="details-cards">
          {data.data.map((item, index) => {
            return (
              <div
                className="details-card"
                onClick={() => {
                  handleNavigate(item.price);
                }}
              >
                {item.Title && <p>${item.Title}</p>}
                <p>${item.price}</p>
                <div>
                  <ul>
                    {item.points.map((point, index) => {
                      return <li key={index}>{point}</li>;
                    })}
                  </ul>
                  <div className="img-div">
                    <img src={item.img} alt="" />
                    <span>add</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;
