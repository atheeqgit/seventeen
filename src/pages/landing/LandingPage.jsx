import React, { useState, useEffect } from "react";

import "./landing.scss";
import { details } from "../../utils/data";

const LandingPage = () => {
  const contentData = [
    {
      img: "/landing1.png",
      details: "Worried about bike problems that’s why TODO is here.",
    },
    {
      img: "/landing2.png",

      details:
        "Find Mechanic near you instantly. Get Services done in less time and at reasonable price.",
    },
    {
      img: "/landing3.png",

      details: "Your Ultimate All in one Platform. ",
    },
    {
      img: "/landing4.png",

      details: "Worried about bike problems that’s why TODO is here.",
    },
  ];
  const [move, setMove] = useState(1);

  const [content, setContent] = useState(contentData[0]);
  useEffect(() => {
    setContent(contentData[move - 1]);
    console.log(move);
  }, [move]);

  const makePlusMove = () => {
    if (move < contentData.length) {
      setMove(move + 1);
    }
  };
  const makeMinusMove = () => {
    if (move > 1) {
      setMove(move - 1);
    }
  };
  return (
    <div className="landing d-flex flex-column flex-md-row  ">
      <div
        className="landing-top d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `
      linear-gradient(
        45deg,
        rgba(93, 209, 255, 0.664),
        rgba(44, 111, 255, 0.568)
      ),
      url('${content?.img}')
    `,
        }}
      >
        <div className="img-div">
          <img src={content?.img} />
        </div>
      </div>
      <div className="landing-down p-3 d-flex flex-column gap-2 align-items-center justify-content-around">
        <div className="text-center">
          <p className="text-capitalize fw-medium mb-3">{content?.details}</p>

          <h3 className="text">
            ONE <span>APP</span> APP <span>FEATURES</span>
          </h3>
        </div>
        <div className="d-flex flex-row gap-3 w-100 justify-content-around align-items-center">
          {move > 1 && (
            <div
              className="nxt-btn"
              onClick={() => {
                makeMinusMove();
              }}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </div>
          )}
          {move < contentData?.length && (
            <div
              className="nxt-btn"
              onClick={() => {
                makePlusMove();
              }}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
