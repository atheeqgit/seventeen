import React, { useState } from "react";
import "../pages.css";
import axios from "axios";
import { useGlobalContext } from "../../context";

const Login = () => {
  // const [stage, setStage] = useState(1);
  const [isLogin, setIslogin] = useState(true);

  // const handleNext = () => {
  //   setStage(stage + 1);
  // };

  return (
    <div className="login-page">
      <img src="/logo.png" alt="" srcset="" />
      {isLogin ? <NumberForm /> : <SignUpForm />}
      {/* {stage == 1 && }
      {/* {stage == 2 && <OtpForm handleNext={handleNext} />} */}
      {/* {stage == 3 && }  */}
      <div
        className="skip-btn"
        onClick={() => {
          setIslogin(!isLogin);
        }}
      >
        {isLogin ? "SignUp" : "Login"}
      </div>
    </div>
  );
};

const NumberForm = () => {
  const [number, setNumber] = useState("");

  const { setLogin } = useGlobalContext();

  const handleLogin = (body) => {
    try {
      const response = axios.post("localhost:8000/validateUser", {
        mobile_no: number,
      });

      console.log(response);

      if (response.statusCode == 200) {
        setLogin(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className="number-form">
        <div className="form-control">
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
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          Login
        </button>
      </form>
    </>
  );
};

const SignUpForm = () => {
  const [body, setBody] = useState({
    mobile_no: "",
    bike_model: "",
  });

  const handleSignup = () => {
    try {
      const response = axios.post("localhost:8000/createUser", {
        ...body,
      });

      console.log(response);
      if (response.statusCode == 200) {
        setLogin(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className="login-form">
        <p>
          seems like you are new to the Seventeen app , kindly fill the form
        </p>
        <div className="inputs">
          <div className="form-control">
            <div>
              <p>number</p>
            </div>
            <input
              type="text"
              value={body.mobile_no}
              onChange={(e) => {
                setBody({ ...body, mobile_no: e.target.value });
              }}
              placeholder="Enter your number"
            />
          </div>
          <div className="form-control">
            <div>
              <p>bike Model</p>
            </div>
            <input
              type="text"
              value={body.bike_model}
              onChange={(e) => {
                setBody({ ...body, bike_model: e.target.value });
              }}
              placeholder="your bike model"
            />
          </div>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();

            handleSignup();
          }}
        >
          SignIn
        </button>
      </form>
    </>
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
