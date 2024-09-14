import React from "react";
import { useGlobalContext } from "../context";
import Mybutton from "../components/mybutton/Mybutton";
import NavigateComp from "../components/navigateComp/NavigateComp";

const PrivacyPolicy = () => {
  const { login } = useGlobalContext();

  return (
    <div className="full-body px-4 py-6 ">
      <NavigateComp title="Tearms & conditions" />

      <div className="w-full min-h-[70vh] flex flex-col justify-center items-center gap-10 pb-10">
        <h1>terms & Conditions</h1>
        <div
          className="flex flex-col justify-between items-center 
md:w-2/3 whitespace-pre-wrap p-4 leading-relaxed gap-6 text-xl
"
        >
          <p className="">
            Welcome to Todo’s Privacy Policy (“Privacy Policy” or “Policy”).
          </p>
          <p className="">
            Khulshai Technologies Pvt Ltd and its affiliates (collectively,
            “Todo”, “we” or “us”) are engaged in providing web-based solutions
            to facilitate connections between customers seeking specific
            services and service professionals offering these services. <br />{" "}
            This Policy outlines our practices regarding the collection,
            storage, usage, processing, and disclosure of personal data that you
            consent to share with us when you access, use, or otherwise interact
            with our website available at todo.in mobile application ‘Todo’
            (collectively, “Platform”) or avail products or services that Todo
            offers you on or through the Platform (collectively, the
            “Services”). <br /> In this Policy, the services offered to you by
            service professionals on or through the Platform are referred to as
            “Professional Services”.
          </p>
          <p className="">
            At Todo, we are committed to protecting your personal data and
            respecting your privacy. To provide you with access to the Services
            or Professional Services, we need to collect and process certain
            data about you. This Policy explains how we handle your personal
            data.
          </p>
          <p className="">
            Please note that unless specifically defined in this Policy,
            capitalized terms shall have the same meanings ascribed to them in
            our Terms and Conditions, available at https://www.todo.com/terms
            (“Terms”). Please read this Policy in conjunction with the Terms.
          </p>
          <p className="">
            By using the Services, you confirm that you have read and agree to
            be bound by this Policy and consent to the processing activities
            described herein.
          </p>
          <p className="">
            (a) How this Policy applies: <br />
            This Policy applies to individuals who access or use the Services or
            otherwise avail the Professional Services. References to “you”
            across this Policy are to an end user that uses the Platform. <br />
            By using the Platform, you consent to the collection, storage,
            usage, and disclosure of your personal data, as described in and
            collected by us in accordance with this Policy.
          </p>
          <p className="">
            b) Review and Updates: <br />
            We regularly review and update our Privacy Policy, and we request
            you to review this Policy periodically. <br /> It is important that
            the personal data we hold about you is accurate and current. Please
            let us know if your personal data changes during your relationship
            with us.
          </p>
          <p className="">
            The Platform may include links to third-party websites, plug-ins,
            services, and applications (“Third-Party Services”). <br /> Clicking
            on those links or enabling those connections may allow third parties
            to collect or share data about you. We neither control nor endorse
            these Third-Party Services and are not responsible for their privacy
            statements. When you leave the Platform or access third-party links
            through the Platform, we encourage you to read the privacy policy of
            such third-party service providers.
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

export default PrivacyPolicy;
