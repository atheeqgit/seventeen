import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import NavigateComp from "../components/navigateComp/NavigateComp";
import Loading from "../components/Loading";
import Featured from "../components/featured/Featured";
import { BoostData, MostBookedData } from "../utils/data";
import MostBooked from "../components/MostBooked/MostBooked";
import TodoG from "../components/TodoG";

const Search = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const navigate = useNavigate();
  const { fetchFunc, loading, setLoading, getCamelImgUrl } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState(""); // Current input value
  const [debouncedTerm, setDebouncedTerm] = useState(""); // Value used for search
  const [searchData, setSearchData] = useState(null); // Value used for search
  const [notAvail, setNotAvail] = useState(false); // Value used for search

  // Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm); // Set the debounced term when the user stops typing
    }, 700); // Delay in milliseconds (500ms in this case)

    return () => {
      clearTimeout(handler); // Clear the timeout if the user types within 500ms
    };
  }, [searchTerm]);

  // Simulate search logic
  useEffect(() => {
    if (debouncedTerm) {
      if (debouncedTerm.length > 2) {
        searchFunction(debouncedTerm);
      } else {
        setNotAvail(false);
        setSearchData(null);
      }
    }
  }, [debouncedTerm]);

  const searchFunction = async (query) => {
    setNotAvail(false);
    const response = await fetchFunc("get", "/gc/search?query=" + query, {});
    if (response.status == 200) {
      if (response.data.length > 0) {
        setSearchData(response.data);
      } else {
        setSearchData([]);
        setNotAvail(true);
      }
    }
    console.log(notAvail);
  };

  return (
    <div className="full-body flex flex-col gap-6">
      <NavigateComp title="search" />
      <div className=" md:col-span-6 flex items-center px-8 mb-1 bg-[#fff] rounded-full border-[#d3dbff] border-solid border py-4">
        <i class="fa-solid fa-magnifying-glass "></i>
        <input
          className=" px-4 font-inherit  border-none bg-transparent text-2xl outline-none w-full flex"
          type="text"
          placeholder={`Search`}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      {!searchData && (
        <>
          <MostBooked title="Most Booked" data={MostBookedData} />
          <Featured title="Frequently Searched" data={BoostData} />
          <TodoG />
        </>
      )}
      {loading ? (
        <Loading />
      ) : (
        searchData != [] && (
          <div className="grid grid-cols-12 gap-4 ">
            {searchData?.map((data, idx) => {
              return (
                data.serviceName && (
                  <div
                    key={idx}
                    className="col-span-12 md:col-span-6 flex flex-col gap-6 p-6 border rounded-3xl shadow-xl bg-white justify-evenly"
                  >
                    <div className="grid grid-cols-12 gap-5 ">
                      <div className="col-span-4">
                        <img
                          src={getCamelImgUrl(
                            data?.serviceName ? data.serviceName : ""
                          )}
                          className="w-full rounded-xl shadow border border-[#ccc] border-solid"
                          alt=""
                        />
                      </div>
                      <div className="w-full h-full col-span-8 gap-4 flex flex-col justify-between">
                        <div className="flex flex-col gap-3 ">
                          {data.serviceName && (
                            <h4 className="text-2xl md:text-3xl text-blue-700  font-semibold capitalize">
                              <span className="text-black">Service name:</span>
                              <br />
                              {data?.serviceName}
                            </h4>
                          )}
                          {data.mainService && (
                            <h4 className="text-xl md:text-3xl text-blue-700 font-semibold capitalize">
                              <span className="text-black">associated:</span>{" "}
                              {data?.mainService}
                            </h4>
                          )}
                        </div>
                        <button
                          className="border-[#2459E0] border-2 text-[#2459E0] border-solid bg-[#E9F0FF] px-4 py-2 font-medium capitalize rounded-xl text-2xl md:text-3xl"
                          onClick={() => {
                            navigate(`/details/mr/${data.mainService}`);
                          }}
                        >
                          View Service
                        </button>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        )
      )}
      {notAvail && (
        <h1 className="text-center capitalize">
          "{debouncedTerm}" is not available
        </h1>
      )}
    </div>
  );
};

export default Search;
