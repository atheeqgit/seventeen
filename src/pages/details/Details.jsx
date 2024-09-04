import React, { useEffect, useState } from "react";
import "./details.css";
import { details } from "../../utils/data";
import { useParams } from "react-router-dom";
import NavigateComp from "../../components/navigateComp/NavigateComp";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import Loading from "../../components/Loading";
Loading;

const Details = () => {
  const { getMRdata, loading, setLoading } = useGlobalContext();
  const navigate = useNavigate();
  const params = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scrolling smooth
    });

    const fetchData = async () => {
      try {
        const result = await getMRdata(params.ServiceName);
        setData(result); // Set the fetched data to state
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [params.ServiceName]);

  const handleNavigate = (serviceName) => {
    navigate(`/moreDetails/mr/${serviceName}`);
  };

  return (
    <div className="full-body">
      <div className="details">
        <NavigateComp title="provided services" />
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-12 gap-4 ">
            {data?.map((item, index) => {
              return (
                <div
                  className="col-span-12 md:col-span-6 flex flex-col gap-6 p-6 border rounded-3xl shadow-xl bg-white justify-evenly"
                  onClick={() => {
                    handleNavigate(item.serviceName);
                  }}
                  key={index}
                >
                  <div className="grid grid-cols-12 gap-5 ">
                    <div className="col-span-4 ">
                      <img
                        src="/no-img.png"
                        className="w-full rounded-xl shadow border-2 border-[#ccc] border-solid"
                        alt=""
                      />
                    </div>
                    <div className="col-span-8 flex flex-col gap-3 ">
                      {item.serviceName && (
                        <h4 className="text-2xl md:text-4xl font-semibold capitalize">
                          {item.serviceName}
                        </h4>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;

// {item.Title && <p>${item.Title}</p>}
// <p>${item.price}</p>
// <div>
//   <ul>
//     {item.points.map((point, index) => {
//       return <li key={index}>{point}</li>;
//     })}
//   </ul>
//   <div className="img-div">
//     <img src={item.img} alt="" />
//     <span>add</span>
//   </div>
// </div>

// return (
//   <div className="full-body">
//     hello
//     <div className="details">
//       <NavigateComp title="provided services" />

//       <div className="grid grid-cols-12 gap-4 ">
//         {data.map((item, index) => {
//           return (
//             <div
//               className="col-span-12 md:col-span-6 flex flex-col gap-6 p-6 border rounded-3xl shadow-xl bg-white justify-evenly"
//               onClick={() => {
//                 handleNavigate(item.price);
//               }}
//               key={index}
//             >
//               <div className="grid grid-cols-12 gap-5 ">
//                 <div className="col-span-4 ">
//                   <img
//                     src="/landing1.png"
//                     className="w-full rounded-xl shadow border-2 border-[#ccc] border-solid"
//                     alt=""
//                   />
//                 </div>
//                 <div className="col-span-8 flex flex-col gap-3 ">
//                   {item.title && (
//                     <h4 className="text-2xl md:text-4xl font-semibold capitalize">
//                       {item.title}
//                     </h4>
//                   )}

//                   <ul className="list-disc ml-8 capitalize font-medium text-xl md:text-2xl">
//                     {item.points.map((point, index) => {
//                       return <li key={index}>{point}</li>;
//                     })}
//                   </ul>
//                 </div>
//               </div>
//               <div className="flex flex-row justify-around items-center gap-6">
//                 <h4 className="text-3xl md:text-4xl font-bold capitalize">
//                   ${item.price}/-
//                 </h4>
//                 <button className="border-[#2459E0] border-2 text-[#2459E0] border-solid bg-[#E9F0FF] px-4 py-2 font-medium capitalize rounded-xl text-2xl md:text-3xl">
//                   add to cart
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   </div>
// );
