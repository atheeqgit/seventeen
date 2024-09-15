import React from "react";
import { useGlobalContext } from "../context";

const Loading = () => {
  const { loding, setLoading } = useGlobalContext();
  return (
    <div className="w-full flex justify-center items-center bg-[#F4F5F6]">
      <div role="status ">
        <div className="w-24 md:w-32 ">
          <img src="/loadinggif.gif" alt="" srcset="" />
        </div>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
