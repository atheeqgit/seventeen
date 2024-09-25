import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./banner.css";
import { useNavigate } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  const navigate = useNavigate();
  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={3000}
      infinite={false}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      showDots={true}
    >
      {/* Use img tag for better accessibility and control */}
      <div className="banner-wrapper">
        <img
          src="/banner1.jpeg"
          alt="Banner 1"
          className="w-full max-w-screen-xl h-auto max-h-[90vh] object-cover rounded-xl"
        />
      </div>
      <div
        className="banner-wrapper"
        onClick={() => {
          navigate("details/mr/Water%20Wash");
        }}
      >
        <img
          src="/banner2.jpeg"
          alt="Banner 2"
          className="w-full max-w-screen-xl h-auto max-h-[90vh] object-cover rounded-xl"
        />
      </div>
      <div
        className="banner-wrapper"
        onClick={() => {
          navigate("details/mr/Water%20Wash");
        }}
      >
        <img
          src="/banner3.jpeg"
          alt="Banner 3"
          className="w-full max-w-screen-xl h-auto max-h-[90vh] object-cover rounded-xl"
        />
      </div>
      <div className="banner-wrapper">
        <img
          src="/banner4.jpeg"
          alt="Banner 4"
          className="w-full max-w-screen-xl h-auto max-h-[90vh] object-cover rounded-xl"
        />
      </div>
    </Carousel>
  );
};

export default Banner;
