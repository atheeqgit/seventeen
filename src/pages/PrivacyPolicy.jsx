import React from "react";
import NavigateComp from "../components/navigateComp/NavigateComp";
import { NavLink } from "react-router-dom";
import "./pages.css";

const PrivacyPolicy = () => {
  return (
    <div className="full-body container mx-auto p-4">
      <NavigateComp title="Privacy policy" />
      <h1 className="text-4xl font-semibold mb-4 capitalize text-center w-full  ">
        Privacy policy
      </h1>
      <h1 className="text-3xl font-bold mb-6">Privacy Policy for Todo Users</h1>

      <p>Welcome to Todo’s Privacy Policy (“Privacy Policy” or “Policy”).</p>
      <p className="text-justify">
        Khulshai Technologies Pvt Ltd and its affiliates (collectively, “Todo”,
        “we” or “us”) are engaged in providing web-based solutions to facilitate
        connections between customers seeking specific services and service
        professionals offering these services. This Policy outlines our
        practices regarding the collection, storage, usage, processing, and
        disclosure of personal data that you consent to share with us when you
        access, use, or otherwise interact with our website available at todo.in
        or mobile application ‘Todo’ (collectively, “Platform”) or avail
        products or services that Todo offers you on or through the Platform
        (collectively, the “Services”). In this Policy, the services offered to
        you by service professionals on or through the Platform are referred to
        as “Professional Services”.
      </p>
      <p>
        At Todo, we are committed to protecting your personal data and
        respecting your privacy. To provide you with access to the Services or
        Professional Services, we need to collect and process certain data about
        you. This Policy explains how we handle your personal data.
      </p>
      <p>
        Please note that unless specifically defined in this Policy, capitalized
        terms shall have the same meanings ascribed to them in our Terms and
        Conditions, available at{" "}
        <a
          href="https://www.todo.com/terms"
          className="text-blue-500 underline"
        >
          https://www.todo.com/terms
        </a>{" "}
        (“Terms”). Please read this Policy in conjunction with the Terms.
      </p>
      <p>
        By using the Services, you confirm that you have read and agree to be
        bound by this Policy and consent to the processing activities described
        herein.
      </p>

      <section className="mb-8">
        <h2 className="text-3xl font-bold capitalize text-blue-600 mb-4 ">
          1. BACKGROUND AND KEY INFORMATION
        </h2>
        <ul className="list-disc ml-8 space-y-4">
          <li>
            <span className="font-semibold">How this Policy applies:</span>
            This Policy applies to individuals who access or use the Services or
            otherwise avail the Professional Services. References to “you”
            across this Policy are to an end user that uses the Platform. By
            using the Platform, you consent to the collection, storage, usage,
            and disclosure of your personal data, as described in and collected
            by us in accordance with this Policy.
          </li>
          <li>
            <span className="font-semibold">Review and Updates:</span>
            We regularly review and update our Privacy Policy, and we request
            you to review this Policy periodically. It is important that the
            personal data we hold about you is accurate and current. Please let
            us know if your personal data changes during your relationship with
            us.
          </li>
          <li>
            <span className="font-semibold">Third-Party Services:</span>
            The Platform may include links to third-party websites, plug-ins,
            services, and applications (“Third-Party Services”). Clicking on
            those links or enabling those connections may allow third parties to
            collect or share data about you. We neither control nor endorse
            these Third-Party Services and are not responsible for their privacy
            statements. When you leave the Platform or access third-party links
            through the Platform, we encourage you to read the privacy policy of
            such third-party service providers.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold capitalize text-blue-600 mb-4 ">
          2. PERSONAL DATA THAT WE COLLECT
        </h2>
        <ul className="list-disc ml-8 space-y-4">
          <li>
            <span className="font-semibold">
              We collect different types of personal data about you. This
              includes, but is not limited to:
            </span>
            <ul className="list-disc ml-8 space-y-2">
              <li>
                <span className="font-semibold">Contact Data:</span> Your
                mailing or home address, location, email addresses, and mobile
                numbers.
              </li>
              <li>
                <span className="font-semibold">
                  Identity and Profile Data:
                </span>{" "}
                Your name, username or similar identifiers, photographs, and
                gender.
              </li>
              <li>
                <span className="font-semibold">
                  Marketing and Communications Data:
                </span>{" "}
                Your address, email address, information posted in service
                requests, offers, wants, feedback, comments, pictures,
                discussions in our blog and chat boxes, responses to user
                surveys and polls, your preferences in receiving marketing
                communications from us and our third parties, and your
                communication preferences. We also collect your chat and call
                records when you communicate with service professionals through
                the Platform.
              </li>
              <li>
                <span className="font-semibold">Technical Data:</span> Your IP
                address, browser type, internet service provider, details of
                operating system, access time, page views, device ID, device
                type, frequency of visiting our website and use of the Platform,
                website and mobile application activity, clicks, date and time
                stamps, location data, and other technology on the devices that
                you use to access the Platform.
              </li>
              <li>
                <span className="font-semibold">Transaction Data:</span> Details
                of the Services or Professional Services you have availed, a
                limited portion of your credit or debit card details for
                tracking transactions provided by payment processors, and UPI
                IDs for processing payments.
              </li>
              <li>
                <span className="font-semibold">Usage Data:</span> Information
                about how you use the Services and Professional Services, your
                activity on the Platform, booking history, user taps and clicks,
                user interests, time spent on the Platform, details about user
                journey on the mobile application, and page views.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">
              We also collect, use, and share aggregated data such as
              statistical or demographic data for any purpose.
            </span>{" "}
            Aggregated data could be derived from your personal data but is not
            considered personal data under law as it does not directly or
            indirectly reveal your identity. However, if we combine or connect
            aggregated data with your personal data so that it can directly or
            indirectly identify you, we treat the combined data as personal data
            which will be used in accordance with this Policy.
          </li>
          <li>
            <span className="font-semibold">
              What happens if I refuse to provide my personal data?
            </span>{" "}
            Where we need to collect personal data by law or under the terms of
            a contract (such as the Terms), and you fail to provide that data
            when requested, we may not be able to perform the contract (for
            example, to provide you with the Services). In this case, we may
            have to cancel or limit your access to the Services.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold capitalize text-blue-600 mb-4 ">
          3. HOW DO WE COLLECT PERSONAL DATA?
        </h2>
        <ul className="list-disc ml-8 space-y-4">
          <li>
            <span className="font-semibold">
              We use different methods to collect personal data from and about
              you, including through:
            </span>
            <ul className="list-disc ml-8 space-y-2">
              <li>
                <span className="font-semibold">Direct Interactions:</span> You
                provide us your personal data when you interact with us. This
                includes personal data you provide when you:
                <ul className="list-disc ml-8 space-y-2">
                  <li>Create an account or profile with us;</li>
                  <li>
                    Use our Services or carry out other activities in connection
                    with the Services;
                  </li>
                  <li>Enter a promotion, user poll, or online surveys;</li>
                  <li>
                    Request marketing communications to be sent to you; or
                  </li>
                  <li>
                    Report a problem with the Platform and/or our Services, give
                    us feedback, or contact us.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">
                  Automated Technologies or Interactions:
                </span>{" "}
                Each time you visit the Platform or use the Services, we
                automatically collect Technical Data about your equipment,
                browsing actions, and patterns. We collect this personal data by
                using cookies, web beacons, pixel tags, server logs, and other
                similar technologies. We may also receive Technical Data about
                you if you visit other websites or apps that employ our cookies.
              </li>
              <li>
                <span className="font-semibold">
                  Third Parties or Publicly Available Sources:
                </span>{" "}
                We will receive personal data about you from various third
                parties:
                <ul className="list-disc ml-8 space-y-2">
                  <li>
                    Technical data from analytics providers such as Facebook and
                    advertising networks;
                  </li>
                  <li>
                    Identity and profile-related Data and Contact Data from
                    service professionals, publicly available sources, etc.;
                  </li>
                  <li>Personal data about you from our affiliate entities.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold capitalize text-blue-600 mb-4 ">
          4. HOW DO WE USE YOUR PERSONAL DATA?
        </h2>
        <ul className="list-disc ml-8 space-y-4">
          <li>
            <span className="font-semibold">
              We will only use your personal data when the law allows us to.
              Most commonly, we will use your personal data where we need to
              provide you with the Services, enable you to use the Professional
              Services, or where we need to comply with a legal obligation.
            </span>{" "}
            We use your personal data for the following purposes:
            <ul className="list-disc ml-8 space-y-2">
              <li>
                To verify your identity to register you as a user, and create
                your user account with us on the Platform;
              </li>
              <li>To provide the Services to you;</li>
              <li>
                With Service Providers: To fulfill your service requests, we
                share relevant personal data with the mechanics or water service
                partners assigned to your booking. This may include your name,
                contact information, bike details, and service location.
              </li>
              <li>
                With Third-Party Payment Processors: Todo uses third-party
                payment gateways to process transactions securely. These
                processors have access to your payment information solely for
                processing purposes and are obligated to protect your data under
                their privacy policies.
              </li>
              <li>
                With Third-Party Service Providers: We may share your data with
                third-party service providers who assist us with functions such
                as customer support, email delivery, or data analytics. These
                providers are required to use your data only for the specified
                purposes and to protect it under applicable laws.
              </li>
              <li>To enable the provision of Professional Services to you;</li>
              <li>To monitor trends and personalize your experience;</li>
              <li>
                To improve the functionality of our Services based on the
                information and feedback we receive from you;
              </li>
              <li>
                To improve customer service to effectively respond to your
                Service requests and support needs;
              </li>
              <li>To track transactions and process payments;</li>
              <li>
                To send periodic notifications to manage our relationship with
                you including to notify you of changes to the Services, send you
                information and updates pertaining to the Services you have
                availed, and to receive occasional company news and updates
                related to us or the Services;
              </li>
              <li>
                To assist with the facilitation of the Professional Services
                offered to you, including to send you information and updates
                about the Professional Services you have availed;
              </li>
              <li>To market and advertise the Services to you;</li>
              <li>To comply with legal obligations;</li>
              <li>
                To administer and protect our business and the Services,
                including for troubleshooting, data analysis, system testing,
                and performing internal operations;
              </li>
              <li>To improve our business and delivery models;</li>
              <li>
                To perform our obligations that arise out of the arrangement we
                are about to enter or have entered with you;
              </li>
              <li>To enforce our Terms; and</li>
              <li>
                To respond to court orders, establish or exercise our legal
                rights, or defend ourselves against legal claims.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">
              You agree and acknowledge that by using our Services and creating
              an account with us on the Platform, you authorize us, our service
              professionals, associate partners, and affiliates to contact you
              via email, phone, or otherwise.
            </span>{" "}
            This is to provide the Services to you and ensure that you are aware
            of all the features of the Services and for related purposes.
          </li>
          <li>
            <span className="font-semibold">
              You agree and acknowledge that any and all information pertaining
              to you, whether or not you directly provide it to us (via the
              Services or otherwise), including but not limited to personal
              correspondence such as emails, instructions from you, etc., may be
              collected, compiled, and shared by us in order to render the
              Services to you.
            </span>{" "}
            This may include but not be limited to service professionals who
            provide or seek to provide you with Professional Services, vendors,
            social media companies, third-party service providers, storage
            providers, data analytics providers, consultants, lawyers, and
            auditors. We may also share this information with other entities in
            the Todo group in connection with the above-mentioned purposes.
          </li>
          <li>
            <span className="font-semibold">
              You agree and acknowledge that we may share data without your
              consent when it is required by law or by any court or government
              agency or authority to disclose such information.
            </span>{" "}
            Such disclosures are made in good faith and belief that it is
            reasonably necessary to do so for enforcing this Policy or the
            Terms, or in order to comply with any applicable laws and
            regulations.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold capitalize text-blue-600 mb-4 ">
          5. COOKIES
        </h2>
        <ul className="list-disc ml-8 space-y-4">
          <li>
            <span className="font-semibold">
              Cookies are small files that are transferred to and stored on your
              device through your web browser or application that enable the
              Platform to recognize your device and capture and remember certain
              information.
            </span>{" "}
            We use cookies and similar tracking technologies to enhance your
            experience and analyze Platform usage.
          </li>
          <li>
            <span className="font-semibold">Types of Cookies We Use:</span>
            <ul className="list-disc ml-8 space-y-2">
              <li>
                <span className="font-semibold">Essential Cookies:</span>{" "}
                Required for the operation of our Platform. These cookies enable
                you to navigate and use the features of the Platform.
              </li>
              <li>
                <span className="font-semibold">Performance Cookies:</span>{" "}
                Collect information about how you use the Platform, such as
                which pages you visit and whether you experience any errors.
                These cookies help us improve the performance of our Platform.
              </li>
              <li>
                <span className="font-semibold">Functionality Cookies:</span>{" "}
                Allow the Platform to remember your choices and provide
                enhanced, more personalized features.
              </li>
              <li>
                <span className="font-semibold">Targeting Cookies:</span> Used
                to deliver advertisements that are relevant to you and your
                interests. They also limit the number of times you see an
                advertisement and help measure the effectiveness of advertising
                campaigns.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">
              You can manage your cookie preferences through your browser
              settings.
            </span>{" "}
            Please note that disabling cookies may affect your ability to access
            or use certain features of the Platform.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold capitalize text-blue-600 mb-4 ">
          6. DATA SECURITY
        </h2>
        <ul className="list-disc ml-8 space-y-4">
          <li>
            <span className="font-semibold">
              We implement reasonable technical and organizational measures to
              protect your personal data from unauthorized access, loss, misuse,
              alteration, or destruction.
            </span>
          </li>
          <li>
            <span className="font-semibold">
              Despite our efforts to protect your data, please be aware that no
              data transmission or storage system can be guaranteed to be 100%
              secure.
            </span>{" "}
            We cannot guarantee the absolute security of your personal data
            transmitted through our Platform.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold capitalize text-blue-600 mb-4 ">
          7. DATA RETENTION
        </h2>
        <ul className="list-disc ml-8 space-y-4">
          <li>
            <span className="font-semibold">
              We will retain your personal data only for as long as necessary to
              fulfill the purposes outlined in this Policy, or as required by
              applicable laws and regulations.
            </span>
          </li>
          <li>
            <span className="font-semibold">
              Once the retention period has expired or the personal data is no
              longer required, we will securely delete or anonymize your
              personal data.
            </span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold capitalize text-blue-600 mb-4 ">
          8. YOUR RIGHTS
        </h2>
        <ul className="list-disc ml-8 space-y-4">
          <li>
            <span className="font-semibold">Access and Correction:</span> You
            have the right to request access to the personal data we hold about
            you and to request corrections or updates to such data.
          </li>
          <li>
            <span className="font-semibold">Deletion:</span> You may request the
            deletion of your personal data, subject to applicable legal
            requirements and exceptions.
          </li>
          <li>
            <span className="font-semibold">Objection:</span> You have the right
            to object to the processing of your personal data under certain
            circumstances.
          </li>
          <li>
            <span className="font-semibold">Data Portability:</span> You may
            request a copy of your personal data in a structured, commonly used,
            and machine-readable format.
          </li>
          <li>
            To exercise any of these rights, please contact us using the contact
            details provided below.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold capitalize text-blue-600 mb-4 ">
          9. CHANGES TO THIS POLICY
        </h2>
        <ul className="list-disc ml-8 space-y-4">
          <li>
            <span className="font-semibold">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, or legal requirements.
            </span>
          </li>
          <li>
            <span className="font-semibold">
              Any changes will be posted on the Platform and will be effective
              immediately upon posting.
            </span>{" "}
            We encourage you to review this Policy periodically for any updates
            or changes.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold capitalize text-blue-600 mb-4 ">
          10. CONTACT US
        </h2>
        <ul className="list-disc ml-8 space-y-4">
          <li>
            <span className="font-semibold">
              If you have any questions about this Privacy Policy, or if you
              wish to exercise any of your rights, please contact us at:
            </span>
            <ul className="list-disc ml-8 space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:privacy@todo.in"
                  className="text-blue-500 underline"
                >
                  privacy@todo.in
                </a>
              </li>
              <li>
                Address: Khulshai Technologies Pvt Ltd, [Your Address], [City],
                [State], [Postal Code], [Country]
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <div className=" text-blue-500 flex justify-evenly font-semibold capitalize items-center gap-2 w-full">
        <NavLink to="/">
          <p>home</p>
        </NavLink>
        <NavLink to="/mybooking">
          <p>bookings</p>
        </NavLink>
        <NavLink to="/cart">
          <p>cart</p>
        </NavLink>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
