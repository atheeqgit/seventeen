import React from "react";
import NavigateComp from "../components/navigateComp/NavigateComp";

const RefEarn = () => {
  return (
    <div className="full-body px-4 py-6 ">
      <NavigateComp title="Refer & Earn" />
      <h1 className="font-semibold capitalize text-3xl lg:text-4xl p-6 bottom-1 border-solid border-[#333]">
        Refer & Earn
      </h1>
      <div className="w-full min-h-[70vh] flex flex-col justify-center items-center text-center gap-10 pb-10">
        <div className="flex flex-col justify-between items-center gap-6 ">
          <h1>Refer our app to your friends and family </h1>
          <p className="md:w-2/3 text-wrap p-4 font-semibold text-center">
            You can refer Todo-Mechanics to friends using the referral feature
            in the app. When your referral signs up and completes their first
            booking, both you and your friend may receive a reward, subject to
            the terms of the referral program.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefEarn;
