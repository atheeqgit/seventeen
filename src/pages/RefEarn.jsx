import React from "react";
import NavigateComp from "../components/navigateComp/NavigateComp";

const RefEarn = () => {
  return (
    <div className="full-body px-4 py-6 ">
      <NavigateComp title="Refer & Earn" />

      <div className="w-full min-h-[70vh] flex flex-col justify-center items-center text-center gap-10 pb-10">
        <div className="flex flex-col justify-between items-center gap-6 ">
          <div className="w-full">
            <img
              className="w-[90%] md:w-[60%] block m-auto h-fit"
              src="/refer&earn.png"
              alt=""
              srcset=""
            />
          </div>
          <h1 className="text-4xl  lg:text-6xl font-semibold text-blue-600">
            Get 15% off Coupon on every <br /> friend you refer{" "}
          </h1>
          <p className="md:w-2/3 text-wrap p-4 text-lg font-semibold text-center">
            You will recive your coupon cone once your friend logged in the app
            using the sharing number
          </p>
          <h1 className="text-4xl uppercase lg:text-5xl font-semibold text--black">
            refer via
          </h1>
          <div className="flex flex-row ga-3 w-100 md:w-[70%] lg:w[60%]">
            <div className="w-[33.3%]">
              <img
                className="w-[50%] md:w-[50%] block m-auto h-fit"
                src="/whats-app-logo.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="w-[33.3%]">
              <img
                className="w-[50%] md:w-[50%] block m-auto h-fit"
                src="/instagram-logo.png"
                alt=""
                srcset=""
              />
            </div>

            <div className="w-[33.3%]">
              <img
                className="w-[50%] md:w-[50%] block m-auto  h-fit"
                src="/link.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefEarn;
