import React from "react";
import "./banner.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={2500}
      infinite={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      showDots={true}
    >
      <div
        className="banner  min-h-[140px] h-[21vh] md:h-[30vh] rounded-xl"
        style={{
          backgroundImage: `url("/landing1.png")`,
        }}
      >
        <p className="p-4 bg-white text-center capitalize">
          Mechanical services
        </p>
      </div>
      <div
        className="banner  min-h-[140px] h-[21vh] md:h-[30vh] rounded-xl"
        style={{
          backgroundImage: `url("/landing2.png")`,
        }}
      >
        <p className="p-4 bg-white text-center capitalize">cleaning services</p>
      </div>
      <div
        className="banner  min-h-[140px] h-[21vh] md:h-[30vh] rounded-xl"
        style={{
          backgroundImage: `url("/landing3.png")`,
        }}
      >
        <p className="p-4 bg-white text-center capitalize">
          Value Added services
        </p>
      </div>
      <div
        className="banner  min-h-[140px] h-[21vh] md:h-[30vh] rounded-xl"
        style={{
          backgroundImage: `url("/landing4.png")`,
        }}
      >
        <p className="p-4 bg-white text-center capitalize">General services</p>
      </div>
    </Carousel>
  );
};

export default Banner;
