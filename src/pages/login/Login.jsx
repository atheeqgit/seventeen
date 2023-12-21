import React, { useState } from "react";
import "../pages.css";

const Login = () => {
  const [stage, setStage] = useState(1);

  const handleNext = () => {
    setStage(stage + 1);
  };

  return (
    <div className="login-page">
      <h1 className="logo">logo</h1>
      {stage == 1 && <NumberForm handleNext={handleNext} />}
      {stage == 2 && <OtpForm handleNext={handleNext} />}
      {stage == 3 && <SignInForm />}
    </div>
  );
};

const NumberForm = ({ handleNext }) => {
  return (
    <>
      <form className="number-form">
        <div className="form-control">
          <select>
            <option default value="91">
              +91
            </option>
            <option value="92">+92</option>
          </select>
          <input type="number" placeholder="Enter your number" />
        </div>
        <button
          onClick={() => {
            handleNext();
          }}
        >
          Get OTP
        </button>
      </form>
      <div className="skip-btn">skip</div>
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

const SignInForm = () => {
  return (
    <>
      <form className="login-form">
        <p>
          seems like you are new to the Seventeen app , kindly fill the form
        </p>
        <div className="inputs">
          <div className="form-control">
            <div>
              <p>name</p>
            </div>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="form-control">
            <div>
              <p>email</p>
            </div>
            <input type="email" placeholder="Enter your email" />
          </div>
        </div>

        <button>SignIn</button>
      </form>
    </>
  );
};

export default Login;
