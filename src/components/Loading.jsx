import React from "react";
import { useGlobalContext } from "../context";

const Loading = () => {
  const { loding, setLoading } = useGlobalContext();
  return (
    <div className="w-full h-[80vh] flex justify-center items-center bg-transparent">
      <div role="status ">
        <div className="w-44">
          <img
            src="/loadinggif2.gif"
            className="w-100 block m-auto"
            alt=""
            srcset=""
          />
        </div>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
