import React, { useState, useEffect } from "react";
import "../pages.css";
import { useGlobalContext } from "../../context";
import { toast } from "react-toastify";
import validator from "validator";

const setLocalStorage = (data) => {
  localStorage.setItem("profile", JSON.stringify(data));
};

const Login = () => {
  const { setLogin, login, fetchFunc } = useGlobalContext();
  const [isLogin, setIslogin] = useState(true);

  const handleLogin = async (number) => {
    console.log(number, !number.length < 10, !number.length > 10);
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
    try {
      const response = await fetchFunc("post", "/ac/auth/register", body);
      if (response.status === 200) {
        console.log({ ...response.data, ...body });
        setLogin({ ...response.data, ...body });
        setLocalStorage({ ...response.data, ...body });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#fcf0ff] relative flex-col gap-5 p-10 ">
      <div className="w-full md:w-[50%] lg:w-[40%] bg-white p-6 rounded-2xl shadow-xl">
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
      <div className="form-control w-full flex border-2 border-[#ccc] rounded-md">
        <select className="p-2 border-r-2 border-[#ccc]">
          <option default value="91">
            +91
          </option>
          <option value="92">+91</option>
        </select>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter your number"
          className="p-2 px-4 font-inherit border-none w-full text-2xl outline-none"
        />
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleLogin(number);
        }}
        className="p-2 px-4 cursor-pointer font-inherit border-none bg-[#2516ff] text-white rounded-md text-2xl transition duration-300 hover:bg-[#4f43ff] w-full mt-3"
      >
        Login
      </button>
    </form>
  );
};

const SignUpForm = ({ handleSignup }) => {
  const [brandName, SetBrandName] = useState(null);
  const [body, setBody] = useState({
    mobile: "",
    name: "",
    email: "",
    model_name: null,
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
              className="form-control w-full flex border-2 p-3 border-[#cccccc] rounded-lg"
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
            <div className="form-control w-full flex border-2 p-3 border-[#cccccc] rounded-lg">
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
            <div className="form-control w-full flex border-2 p-3 border-[#cccccc] rounded-lg">
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
            </div>
          )}
        </div>
        <AddVehicle SetBrandName={SetBrandName} setBody={setBody} body={body} />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSignup(body);
          }}
          className="p-2 px-4 cursor-pointer font-inherit border-none bg-[#2516ff] text-white rounded-md text-2xl transition duration-300 hover:bg-[#4f43ff] w-full mt-3 capitalize"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

const AddVehicle = ({ SetBrandName, setBody, body }) => {
  const { fetchFunc, notify, setLogin, login } = useGlobalContext();
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

  return (
    <div className="w-full bg-white p-3 md:p-6 rounded-2xl shadow-xl">
      {body.model_name ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            SetBrandName(null);
            setModels([]);
            fetchBrandNames();
            setBody({ ...body, model_name: null });
          }}
          className="p-2 px-4 cursor-pointer font-inherit border-none bg-[#ff1635] text-white rounded-md text-2xl transition duration-300 hover:bg-[#ff436c] w-fit  capitalize"
        >
          Re-enter model
        </button>
      ) : (
        <>
          <p className="text-2xl text-center capitalize font-semibold text-[#2516ff]">
            Please select your bike brand and model.
          </p>
          <div className="form-control w-full flex border-2 p-3 border-[#cccccc] rounded-lg mt-4">
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
                brandSearchName != ""
                  ? "brand name"
                  : brandSearchName + " model"
              } name`}
            />
          </div>
          <div className="max-h-[40vh] overflow-y-scroll">
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
                      className="col-span-12 md:col-span-6 p-4 rounded-lg text-center border border-solid border-[#ccc] card shadow-lg cursor-pointer"
                    >
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
                      }}
                      className="col-span-12 md:col-span-6  p-4 rounded-lg text-center border border-solid border-[#ccc] card shadow-lg cursor-pointer"
                    >
                      {model}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
