import React, { useState, useEffect } from "react";
import "../pages.css";
import axios from "axios";
import { useGlobalContext } from "../../context";
import { ToastContainer, toast } from "react-toastify";

const setLocalStorage = (data) => {
  localStorage.setItem("profile", JSON.stringify(data));
};

const Login = () => {
  const { setLogin, login, fetchFunc, tok, setTok } = useGlobalContext();
  const [isLogin, setIslogin] = useState(true);
  const [BodyL, setBodyL] = useState(null);

  const handleLogin = async (number) => {
    if (number.length > 8) {
      try {
        const response = await fetchFunc("post", "/ac/auth/authenticate", {
          mobile: number,
        });

        if (response.status === 200) {
          setLogin({ ...response.data, mobile: number });
          setTok(response.data.token);
          setLocalStorage({ ...response.data, mobile: number });
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("Login field required");
    }
  };

  const handleSignup = async (body) => {
    if ((body.mobile.length > 9) & (body.name !== "") & (body.email !== "")) {
      try {
        const response = await fetchFunc("post", "/ac/auth/register", body);
        if (response.status === 200) {
          setTok(response.data.token);
          setBodyL({ ...body, ...response.data });
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("All fields are required");
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#fcf0ff] relative flex-col gap-5 p-10 ">
      {tok ? (
        <AddVehicle BodyL={BodyL} />
      ) : (
        <>
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
        </>
      )}
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
  const [body, setBody] = useState({
    mobile: "",
    name: "",
    email: "",
    model_name: "123456",
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
                <p className="font-semibold capitalize text-2xl text-[#0d0d0f]">
                  {field === "mobile" ? "number" : field}
                </p>
              </div>
              <input
                className="p-2 px-4 font-inherit w-4/5 border-none bg-transparent text-2xl outline-none"
                type={field === "email" ? "email" : "text"}
                value={body[field]}
                onChange={(e) => setBody({ ...body, [field]: e.target.value })}
                placeholder={`Enter your ${field}`}
              />
            </div>
          ))}
        </div>
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

const AddVehicle = ({ BodyL }) => {
  const { fetchFunc, notify, setLogin, tok, login } = useGlobalContext();
  const [brandName, setBrandName] = useState("");
  const [modelName, setmodelName] = useState("");
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchBrandNames = async () => {
      try {
        const response = await fetchFunc("get", "/gc/getBrands", {});
        if (response.status === 200) {
          setBrands(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchBrandNames();
  }, []);

  const fetchModelNames = async (name) => {
    try {
      const response = await fetchFunc(
        "get",
        `/gc/getModelsForBrand?name=${name}`,
        {}
      );
      if (response.status === 200) {
        setModels(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-[80vh] m-2 w-full md:w-[70%] lg:w-[60%] bg-white p-3 md:p-6 rounded-2xl shadow-xl">
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
          value={models.length > 0 ? modelName : brandName}
          onChange={(e) => {
            {
              models.length > 0
                ? setmodelName(e.target.value)
                : setBrandName(e.target.value);
            }
          }}
          placeholder={`Search your ${
            brandName != "" ? "brand name" : brandName + " model"
          } name`}
        />
      </div>
      {(brands.length > 0) & (models.length < 1) && (
        <ul className="mt-4 grid grid-cols-12 gap-4">
          {brands
            .filter((brand) =>
              brand.toLowerCase().includes(brandName.toLowerCase())
            )
            .map((brand, idx) => (
              <li
                key={idx}
                onClick={() => {
                  fetchModelNames(brand);
                }}
                className="col-span-12 md:col-span-6 p-4 rounded-lg text-center border border-solid border-[#ccc] card shadow-lg"
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
              model.toLowerCase().includes(modelName.toLowerCase())
            )
            .map((model, idx) => (
              <li
                key={idx}
                onClick={() => {
                  setLogin({ ...BodyL, model_name: model });
                  setLocalStorage({ ...BodyL, model_name: model });
                  notify("SignUp is Successful!!", true);
                }}
                className="col-span-12 md:col-span-6  p-4 rounded-lg text-center border border-solid border-[#ccc] card shadow-lg"
              >
                {model}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

const OtpForm = ({ handleNext }) => {
  return (
    <>
      <form className="otp-form">
        <h3>
          the otp is sent to the number #######054 <span>Edit?</span>
        </h3>
        <div className="inputs-div">
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
        </div>
        <p>
          haven't recevied the OTP yet ? <span>Resend</span>
        </p>
        <button
          onClick={() => {
            handleNext();
          }}
        >
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default Login;
