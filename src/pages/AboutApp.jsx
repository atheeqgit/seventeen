import React from "react";
import { useGlobalContext } from "../context";
import Mybutton from "../components/mybutton/Mybutton";
import NavigateComp from "../components/navigateComp/NavigateComp";

const AboutApp = () => {
  const { login } = useGlobalContext();

  return (
    <div className="full-body px-4 py-6 ">
      <NavigateComp title="About App" />
      <h1 className="font-semibold capitalize text-3xl lg:text-4xl p-6 bottom-1 border-solid border-[#333]">
        About App
      </h1>
      <div className="w-full min-h-[70vh] flex flex-col justify-center items-center gap-10 pb-10">
        <div className="flex flex-col justify-between items-center gap-6">
          <h1>terms & Conditions</h1>
          <p className="md:w-2/3 text-wrap p-4">
            Last Updated: 8/09/24
            <br />
            <br />
            Welcome to Todo-Mechanics! By using our app, you agree to these
            Terms and Conditions.
            <br /> <br /> Please read them carefully. 1. Acceptance of Terms By
            accessing Todo-Mechanics, you agree to these Terms. If you disagree,
            do not use the app. <br /> <br /> 2. Service Bookings Todo-Mechanics
            connects users with third-party motorbike service providers
            ("Service Providers"). We act as a platform for booking and do not
            provide the services directly. <br /> <br /> 3. Payment You agree to
            pay for services booked through the app. Payment disputes should be
            resolved between you and the Service Provider. <br /> <br /> 4.
            Cancellations and Refunds Each Service Provider sets its own
            cancellation policies. Refunds are subject to the provider's terms.{" "}
            <br /> <br />
            5. Limitation of Liability Todo-Mechanics is not liable for damages
            or issues arising from services provided by Service Providers.{" "}
            <br /> <br /> 6. User Conduct You must not misuse the app, provide
            false information, or interfere with the app’s functionality. <br />{" "}
            <br /> 7. Intellectual Property All content in Todo-Mechanics is
            owned by or licensed to Kulshai Technologies. You may not use any
            content without permission. <br /> <br /> 8. Changes to Terms We may
            update these Terms. Continued use of the app constitutes your
            acceptance of any changes. <br /> <br /> 9. Termination We reserve
            the right to suspend or terminate your access if you violate these
            Terms. <br /> <br /> 10. Contact For any inquiries, contact us at
            Todocorpofficial@gmail.com .
          </p>
          <h1 className="font-medium capitalize text-center text-3xl lg:text-4xl">
            Developed by Kulshai Technologies
            <br /> <br />© Khulshai Technologies India Pvt. Ltd.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutApp;
