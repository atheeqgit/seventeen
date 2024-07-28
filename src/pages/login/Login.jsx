import React, { useState } from "react";
import "../pages.css";
import axios from "axios";
import { useGlobalContext } from "../../context";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [isLogin, setIslogin] = useState(true);
  // console.log(import.meta.env.VITE_SERVER_PORT);

  return (
    <div className="login-page w-full h-screen flex justify-center items-center bg-[#fcf0ff] relative flex-col gap-5 p-10">
      <div className="w-full md:w-[50%] lg:w-[40%] bg-white  p-6 rounded-2xl shadow-xl">
        <div className="w-2/5 m-auto">
          <img src="/logo.png" className="w-full" alt="" srcset="" />
        </div>
        {isLogin ? <LoginForm /> : <SignUpForm />}
      </div>
      <div
        className=""
        onClick={() => {
          setIslogin(!isLogin);
        }}
      >
        <p className="text-2xl text-center capitalize font-semibold ">
          {isLogin ? (
            <span className="  text-black ">don't have an account?</span>
          ) : (
            <span className="  text-black ">already have an account?</span>
          )}

          <span className="text-[#2516ff] cursor-pointer "> click here</span>
        </p>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const [number, setNumber] = useState("");

  const { setLogin, login, fetchFunc } = useGlobalContext();

  const handleLogin = async () => {
    if (number.length > 8) {
      try {
        const response = await fetchFunc("post", "/ac/auth/authenticate", {
          mobile: number,
        });
        console.log(response);
        if (response.status == 200) {
          setLogin({ ...response.data, mobile: number });
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Login field required");
    }
  };

  return (
    <form className="number-form conatiner flex flex-col gap-8 justify-center text-center">
      <p className="text-2xl text-center capitalize font-semibold text-[#2516ff] ">
        Hey! welcome back! please login to your account
      </p>
      <div className="form-control w-full flex border-2 border-[#ccc] rounded-md">
        <select>
          <option default value="91">
            +91
          </option>
          <option value="92">+91</option>
        </select>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          placeholder="Enter your number"
          className="p-2 px-4 font-inherit border-none w-full border-l-2 border-[#ccc] text-2xl outline-none"
        />
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setLogin({
            name: "xxxxxxxx",
            mobile: 9566332402,
            model_name: "some bike",
            token: "dummytoken",
          });
          toast.success("dummy auth successful");
          // handleLogin();
        }}
        class="p-2 px-4 cursor-pointer font-inherit border-none bg-[#2516ff] text-white rounded-md text-2xl transition duration-300 hover:bg-[#4f43ff] w-full mt-3"
      >
        Login
      </button>
    </form>
  );
};

const SignUpForm = () => {
  const { setLogin, fetchFunc } = useGlobalContext();

  const [body, setBody] = useState({
    mobile: "",
    name: "",
    email: "",
    model_name: "",
  });

  const handleSignup = async () => {
    if (
      (body.mobile.length > 9) & (body.name !== "") & (body.email !== "") &&
      body.model_name !== ""
    ) {
      try {
        const response = await fetchFunc("post", "/ac/auth/register", body);

        if (response.status == 200) {
          setLogin({ ...body, token: response.data.token });
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("all fields are required");
    }
  };

  return (
    <div className="conatiner">
      <form className="login-form flex flex-col gap-8 justify-center text-center">
        <p className="text-2xl text-center capitalize font-semibold text-[#2516ff] ">
          seems like you are new to the TODO , kindly fill the form
        </p>
        <div className="inputs flex flex-col gap-4">
          <div className="form-control w-full flex border-2 p-3 border-[#cccccc] rounded-lg">
            <div className="p-2 flex justify-center items-center w-1/5">
              <p className="font-semibold capitalize text-2xl text-[#0d0d0f]">
                number
              </p>
            </div>
            <input
              className="p-2 px-4 font-inherit w-4/5 border-none border-l-2 border-[#ccc] bg-transparent text-2xl outline-none"
              type="number"
              value={body.mobile}
              onChange={(e) => {
                setBody({ ...body, mobile: e.target.value });
              }}
              placeholder="Enter your number"
            />
          </div>
          <div className="form-control w-full flex border-2 p-3 border-[#cccccc] rounded-lg">
            <div className="p-2 flex justify-center items-center w-1/5">
              <p className="font-semibold capitalize text-2xl text-[#0d0d0f]">
                full name
              </p>
            </div>
            <input
              className="p-2 px-4 font-inherit w-4/5 border-none border-l-2 border-[#ccc] bg-transparent text-2xl outline-none"
              type="text"
              value={body.name}
              onChange={(e) => {
                setBody({ ...body, name: e.target.value });
              }}
              placeholder="Your full-Name"
            />
          </div>
          <div className="form-control w-full flex border-2 p-3 border-[#cccccc] rounded-lg">
            <div className="p-2 flex justify-center items-center w-1/5">
              <p className="font-semibold capitalize text-2xl text-[#0d0d0f]">
                E-mail
              </p>
            </div>
            <input
              className="p-2 px-4 font-inherit w-4/5 border-none border-l-2 border-[#ccc] bg-transparent text-2xl outline-none"
              type="email"
              value={body.email}
              onChange={(e) => {
                setBody({ ...body, email: e.target.value });
              }}
              placeholder="johndoe007@gmail.com"
            />
          </div>
          <div className="form-control w-full flex border-2 p-3 border-[#cccccc] rounded-lg">
            <div className="p-2 flex justify-center items-center w-1/5">
              <p className="font-semibold capitalize text-2xl text-[#0d0d0f]">
                bike Model
              </p>
            </div>
            <input
              className="p-2 px-4 font-inherit w-4/5 border-none border-l-2 border-[#ccc] bg-transparent text-2xl outline-none"
              type="text"
              value={body.model_name}
              onChange={(e) => {
                setBody({ ...body, model_name: e.target.value });
              }}
              placeholder="your bike model"
            />
          </div>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            setLogin({
              name: "xxxxxxxx",
              mobile: 9566332402,
              model_name: "some bike",
              token: "dummytoken",
            });
            toast.success("dummy auth successful");

            // handleSignup();
          }}
          class="p-2 px-4 cursor-pointer font-inherit border-none bg-[#2516ff] text-white rounded-md text-2xl transition duration-300 hover:bg-[#4f43ff] w-full mt-3 capitalize"
        >
          Sign up
        </button>
      </form>
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
