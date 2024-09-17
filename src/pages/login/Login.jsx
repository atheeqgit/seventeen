import React, { useState, useEffect } from "react";
import "../pages.css";
import { useGlobalContext } from "../../context";
import { toast } from "react-toastify";
import validator from "validator";
import Mybutton from "../../components/mybutton/Mybutton";
import { Outlet, useNavigate } from "react-router-dom";
import Map from "../MapComp";
import Loading from "../../components/Loading";
import { calcLength } from "framer-motion";

const setLocalStorage = (data) => {
  localStorage.setItem("profile", JSON.stringify(data));
};

const Login = () => {
  const { setLogin, login, fetchFunc } = useGlobalContext();
  const [isLogin, setIslogin] = useState(true);

  const handleLogin = async (number) => {
    if (
      !validator.isNumeric(number) ||
      number.length < 10 ||
      number.length > 10
    ) {
      toast.error("Enter a valid Mobile Number ");
    } else {
      try {
        const response = await fetchFunc("post", "/ac/auth/authenticate", {
          mobile: number,
        });

        if (response.status === 200) {
          setLogin({
            ...response.data,
            model_name: response.data.models[0],
            mobile: number,
          });
          setLocalStorage({
            ...response.data,
            model_name: response.data.models[0],
            mobile: number,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleSignup = async (body) => {
    if (
      !validator.isNumeric(body.mobile) ||
      body.mobile.length < 10 ||
      body.mobile.length > 10
    ) {
      toast.error("Enter a valid Mobile Number ");
      return null;
    }
    if (!validator.isLength(body.name, { min: 4, max: 35 })) {
      toast.error("Name length should be atleast 4 to 35");
      return null;
    }
    if (!validator.isEmail(body.email)) {
      toast.error("Enter a valid E-mail ");
      return null;
    }
    if (!body.model_name) {
      toast.error("Please provide a model name");
      return null;
    }
    // if (!body.userLatLng) {
    //   toast.error("Please provide your location using Map");
    //   return null;
    // }
    try {
      const response = await fetchFunc("post", "/ac/auth/register", body);
      if (response.status === 200) {
        setLogin({ ...response.data, ...body });
        setLocalStorage({ ...response.data, ...body });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center  relative flex-col gap-5 p-10 bg-white bg-gradient-to-br from-white to-[rgba(10,72,255,0.23)]">
      <div className="w-full md:w-[60%] lg:w-[50%] bg-transparent rounded-2xl ">
        <div className="w-2/5 m-auto">
          <img src="/logo.png" className="w-full" alt="" />
        </div>

        {isLogin ? (
          <LoginForm handleLogin={handleLogin} />
        ) : (
          <SignUpForm handleSignup={handleSignup} />
        )}
      </div>
      <div
        onClick={() => {
          setIslogin(!isLogin);
        }}
      >
        <p className="text-2xl text-center capitalize font-semibold ">
          {isLogin ? (
            <span className="text-black">Don't have an account?</span>
          ) : (
            <span className="text-black">Already have an account?</span>
          )}
          <span className="text-[#2516ff] cursor-pointer"> click here</span>
        </p>
      </div>
    </div>
  );
};

const LoginForm = ({ handleLogin }) => {
  const [number, setNumber] = useState("");

  return (
    <form className="number-form container flex flex-col gap-8 justify-center text-center">
      <p className="text-2xl text-center capitalize font-semibold text-[#2516ff]">
        Hey! Welcome back! Please login to your account
      </p>
      <div className="form-control w-full flex border-b-2 p-3 border-[#191dff] rounded-lg bg-white">
        <select className="p-2 bg-transparent ">
          <option default value="91">
            +91
          </option>
          <option value="92">+91</option>
        </select>
        <input
          className="p-2 px-4 font-inherit w-4/5 border-none bg-transparent text-2xl outline-none"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter your number"
        />
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          handleLogin(number);
        }}
        className="p-4 px-4 cursor-pointer font-inherit border-none bg-[#2516ff] text-white rounded-xl text-2xl transition duration-300 hover:bg-[#4f43ff] w-[50%] block mx-auto mt-3 md:text-3xl "
      >
        Login
      </button>
    </form>
  );
};

const SignUpForm = ({ handleSignup }) => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [openMap, setOpenMap] = useState(false);
  const [brandName, SetBrandName] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [body, setBody] = useState({
    mobile: "",
    name: "",
    email: "",
    model_name: null,
    userLatLng: `${location.latitude} +"|" +${location.longitude}`,
  });

  return (
    <div className="container">
      <form className="login-form flex flex-col gap-8 justify-center text-center">
        <p className="text-2xl text-center capitalize font-semibold text-[#2516ff]">
          Seems like you are new here, kindly fill the form
        </p>
        <div className="inputs flex flex-col gap-4">
          {["mobile", "name", "email"].map((field, index) => (
            <div
              key={index}
              className="form-control w-full flex border-b-2 p-3 border-[#191dff] rounded-lg bg-white"
            >
              <div className="p-2 flex justify-center items-center w-1/5">
                <p className="font-semibold capitalize text-xl md:text-2xl text-[#0d0d0f]">
                  {field === "mobile" ? "number" : field}
                </p>
              </div>
              <input
                className="p-2 px-4 font-inherit w-4/5 border-none bg-transparent text-2xl outline-none"
                type={
                  field === "email"
                    ? "email"
                    : field === "mobile"
                    ? "number"
                    : "text"
                }
                value={body[field]}
                onChange={(e) => setBody({ ...body, [field]: e.target.value })}
                placeholder={`Enter your ${field}`}
              />
            </div>
          ))}
          {brandName && (
            <div className="form-control w-full flex border-b-2 p-3 border-[#191dff] rounded-lg bg-white">
              <div className="p-2 flex justify-center items-center w-1/5">
                <p className="font-semibold capitalize text-xl md:text-2xl text-[#0d0d0f]">
                  Bike brand
                </p>
              </div>
              <input
                className="p-2 px-4 font-inherit w-4/5 border-none bg-transparent text-2xl outline-none"
                type="text"
                disabled
                value={brandName}
                placeholder={`Brand name`}
              />
            </div>
          )}
          {body.model_name && (
            <div className="form-control w-full flex border-b-2 p-3 border-[#191dff] rounded-lg bg-white">
              <div className="p-2 flex justify-center items-center w-1/5">
                <p className="font-semibold capitalize text-xl md:text-2xl text-[#0d0d0f]">
                  Bike Model
                </p>
              </div>
              <input
                className="p-2 px-4 font-inherit w-4/5 border-none bg-transparent text-2xl outline-none"
                type="text"
                disabled
                placeholder={`Model name`}
                value={body.model_name}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  SetBrandName(null);
                  setShowModal(true);
                  setBody({ ...body, model_name: null });
                }}
                className="p-2 px-2 cursor-pointer font-inherit border-none bg-[#ff1635] text-white rounded-md text-2xl transition duration-300 hover:bg-[#ff436c] w-fit  capitalize"
              >
                Re-enter model
              </button>
            </div>
          )}
        </div>
        {!body.model_name && (
          <div className="flex flex-row justify-evenly gap-3 bg-white">
            <div
              className="font-medium flex justify-center capitalize text-2xl h-fit text-[#ffffff] px-6 py-3 md:px-8 md:py-4 rounded-lg bg-[#2d3fdd] cursor-pointer w-full"
              onClick={() => {
                setShowModal(true);
              }}
            >
              ADD Vehicle
            </div>
          </div>
        )}
        {/* {body.userLatLng && (
          <>
            <div className="form-control w-full flex border-b-2 p-3 border-[#191dff] rounded-lg bg-white">
              <div className="p-2 flex justify-center items-center w-1/5">
                <p className="font-semibold capitalize text-xl md:text-2xl text-[#0d0d0f]">
                  your location
                </p>
              </div>
              <input
                className="p-2 px-4 font-inherit w-4/5 border-none bg-transparent text-2xl outline-none"
                type="text"
                disabled
                placeholder={`Model name`}
                value={location.latitude + " | " + location.longitude}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOpenMap(true);
                }}
                className="p-2  cursor-pointer font-inherit border-none bg-[#ff1635] text-white rounded-md text-2xl transition duration-300 hover:bg-[#ff436c] w-fit  capitalize block m-auto"
              >
                Re-enter location
              </button>
            </div>
          </>
        )} */}

        {/* {!openMap && !body.userLatLng && body.model_name && (
          <div className="flex flex-row justify-evenly gap-3 bg-white">
            <div
              className="font-medium flex justify-center capitalize text-2xl h-fit text-[#ffffff] px-6 py-3 md:px-8 md:py-4 rounded-lg bg-[#2d3fdd] cursor-pointer w-full"
              onClick={() => {
                setOpenMap(!openMap);
              }}
            >
              Add Location
            </div>
          </div>
        )} */}

        <button
          onClick={(e) => {
            e.preventDefault();
            handleSignup(body);
          }}
          className="p-4 px-4 cursor-pointer font-inherit border-none bg-[#2516ff] text-white rounded-xl text-2xl transition duration-300 hover:bg-[#4f43ff] w-[50%] block mx-auto mt-3 md:text-3xl "
        >
          Sign up
        </button>
      </form>
      {/* {openMap && (
        <div className="fixed inset-0 flex justify-center items-center bg-white flex-col p-6 ">
          <Map setLocation={setLocation} location={location} />
          <button
            onClick={(e) => {
              if (location.latitude && location.longitude) {
                setOpenMap(!openMap);
                setBody({
                  ...body,
                  userLatLng: location.latitude + "|" + location.longitude,
                });
              }
            }}
            className="p-2 px-4 cursor-pointer font-inherit border-none bg-[#2516ff] text-white rounded-md text-2xl transition duration-300 hover:bg-[#4f43ff] w-fit mt-3 capitalize block m-auto"
          >
            Confirm location
          </button>
        </div>
      )} */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-white  ">
          <div className="bg-white p-8 rounded-lg text-center">
            <AddVehicle
              SetBrandName={SetBrandName}
              setShowModal={setShowModal}
              setBody={setBody}
              body={body}
            />
            <div className="flex justify-around gap-3 text-nowrap">
              <button
                className="px-4 py-2 bg-gray-300 text-black rounded-lg"
                onClick={() => {
                  setShowModal(!showModal);
                }}
              >
                No, Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const AddVehicle = ({ SetBrandName, setBody, body, setShowModal }) => {
  const { fetchFunc, loading, getImgUrl } = useGlobalContext();
  const [brandSearchName, setSearchBrandName] = useState("");
  const [modelSearchName, setSearchmodelName] = useState("");
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetchBrandNames();
  }, []);

  const fetchBrandNames = async () => {
    try {
      const response = await fetchFunc("get", "/ac/auth/getBrands", {});
      if (response.status === 200) {
        setBrands(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchModelNames = async (name) => {
    setBrands([]);

    try {
      const response = await fetchFunc(
        "get",
        `/ac/auth/getModelsForBrand?name=${name}`,
        {}
      );
      if (response.status === 200) {
        setBrands([]);
        setModels(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="w-[90vw] h-[90vh]  rounded-2xl ">
      <p className="text-2xl text-center capitalize font-semibold text-[#2516ff]">
        Please select your bike brand and model.
      </p>
      <div className="form-control w-full flex border-b-2 p-3 border-[#191dff] rounded-lg mt-4">
        <div className="p-2 flex justify-center items-center">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <input
          className="p-2 px-4 font-inherit border-none bg-transparent text-2xl outline-none w-full"
          type="text"
          value={models.length > 0 ? modelSearchName : brandSearchName}
          onChange={(e) => {
            {
              models.length > 0
                ? setSearchmodelName(e.target.value)
                : setSearchBrandName(e.target.value);
            }
          }}
          placeholder={`Search your ${
            brandSearchName != "" ? "brand name" : brandSearchName + " model"
          } name`}
        />
      </div>
      <div className="max-h-[75vh] overflow-y-scroll">
        {(brands.length > 0) & (models.length < 1) && (
          <ul className="mt-4 grid grid-cols-12 gap-4">
            {brands
              .filter((brand) =>
                brand.toLowerCase().includes(brandSearchName.toLowerCase())
              )
              .map((brand, idx) => (
                <li
                  key={idx}
                  onClick={() => {
                    fetchModelNames(brand);
                    SetBrandName(brand);
                  }}
                  className="col-span-6 md:col-span-4 w-full p-4 rounded-lg text-center border border-solid border-[#ccc] card shadow-lg cursor-pointer flex flex-col gap-2 items-center justify-evenly lg:flex-row"
                >
                  <div className="w-40">
                    <img
                      src={"https://justtodo.in/brands/" + getImgUrl(brand)}
                      className="w-full rounded-xl"
                      alt=""
                    />
                  </div>
                  {brand}
                </li>
              ))}
          </ul>
        )}
        {models.length > 0 && (
          <ul className="mt-4 grid grid-cols-12 gap-4">
            {models
              .filter((model) =>
                model.toLowerCase().includes(modelSearchName.toLowerCase())
              )
              .map((model, idx) => (
                <li
                  key={idx}
                  onClick={() => {
                    setBody({ ...body, model_name: model });
                    setShowModal(false);
                  }}
                  className="col-span-6 md:col-span-4 w-full p-4 rounded-lg text-center border border-solid border-[#ccc] card shadow-lg cursor-pointer flex flex-col gap-2 items-center justify-evenly lg:flex-row"
                >
                  <div className="w-40">
                    <img
                      // src={getImgUrl(model)}

                      src={"https://justtodo.in/models/" + getImgUrl(model)}
                      className="w-full rounded-xl "
                      alt=""
                    />
                  </div>
                  {model}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Login;
