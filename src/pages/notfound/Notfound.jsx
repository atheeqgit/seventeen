import React from "react";

const Notfound = () => {
  return (
    <div className="full-body flex justify-center flex-col items-center ">
      <div className="w-full">
        <img
          src="/page-not-found.png"
          className="w-2/5 md:w-2/5  block mx-auto"
          alt=""
        />
      </div>
      <h4 className="font-bold capitalize text-4xl md:text-6xl text-red-600 text-center">
        page - Not found (OR) <br /> under development
      </h4>
    </div>
  );
};

export default Notfound;
