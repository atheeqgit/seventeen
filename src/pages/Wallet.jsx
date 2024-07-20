import React from "react";
import "./pages.css";
import { useNavigate } from "react-router-dom";
import NavigateComp from "../components/navigateComp/NavigateComp";
import { motion } from "framer-motion";

const Wallet = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      className="full-body wallet p-3  "
    >
      <NavigateComp title="wallets" />
      <div className="container mx-auto flex flex-col gap-6 md:grid grid-cols-12">
        <div className="p-6   md:col-span-6   lg:col-span-5 flex flex-col   gap-4 bg-[#2459E0] rounded-2xl text-white">
          <div className="flex flex-row w-full justify-between items-center">
            <h3>Todo wallet</h3>
            <div className="ques-icon">
              <img src="./icon-question.png" alt="" />
            </div>
          </div>
          <div className="flex flex-row w-full justify-between items-center">
            <div className="flex flex-col justify-center items-center">
              <p className="fs-1">Total Balance</p>
              <h2 className="fs-rate">499.00</h2>
            </div>
            <div className="button bg-white rounded-xl px-4 py-2 capitalize text-[#2459E0] fw-semibold">
              Add money
            </div>
          </div>
        </div>
        <div className="down-div   md:col-span-6   lg:col-span-7 flex flex-col gap-5 ">
          <div className="heading flex w-full flex-row justify-between">
            <h3 className="fw-semibold capitalize">Last Transactions</h3>
            <p className="text-[#2459E0] ">View All</p>
          </div>
          <ul className="my-list flex flex-col gap-2 list-unstyled">
            <li className="flex flex-row gap-1 justify-between items-center px-4 border py-3 rounded shadow bg-white">
              <div className="flex flex-row gap-4 items-center justify-center">
                <div>
                  <img src="./icon-wallet-minus.png" alt="" />
                </div>
                <div className="flex flex-col ">
                  <p className="id-num">ID no : 24356789509</p>
                  <p className="date">Oct 14, 10:24 AM</p>
                </div>
              </div>
              <h1 className="">-$15</h1>
            </li>
            <li className="flex flex-row gap-1 justify-between items-center px-4 border py-3 rounded shadow bg-white">
              <div className="flex flex-row gap-4 items-center justify-center">
                <div>
                  <img src="./icon-wallet-plus.png" alt="" />
                </div>
                <div className="flex flex-col ">
                  <p className="id-num">ID no : 13567895458</p>
                  <p className="date">Oct 11, 01:19 AM</p>
                </div>
              </div>
              <h1 className="">+$10</h1>
            </li>
            <li className="flex flex-row gap-1 justify-between items-center px-4 border py-3 rounded shadow bg-white">
              <div className="flex flex-row gap-4 items-center justify-center">
                <div>
                  <img src="./icon-wallet-plus.png" alt="" />
                </div>
                <div className="flex flex-col ">
                  <p className="id-num">ID no : 65678985632</p>
                  <p className="date">Oct 10, 02:13 PM</p>
                </div>
              </div>
              <h1 className="">+$15</h1>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Wallet;
