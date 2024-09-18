import React from "react";

const Sos = () => {
  return (
    <div className="part-body h-full w-full flex justify-center items-center">
      <div className="w-full min-h-[70vh] flex flex-col justify-center items-center text-center gap-10 pb-10">
        <div className="flex flex-col justify-between items-center gap-6 ">
          <div className="w-full">
            <img
              className="w-[90%] md:w-[70%] block m-auto h-fit"
              src="/sosillu.png"
              alt=""
              srcset=""
            />
          </div>
          <h1 className="text-4xl capitalize mb-5  lg:text-6xl font-bold ">
            We are un available for now
          </h1>

          <p className="md:w-2/3 capitalize text-wrap p-4 text-2xl font-semibold text-center">
            our team is working tirelessly to bring this service to your
            location
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sos;
