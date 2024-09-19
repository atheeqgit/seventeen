import React from "react";
import { useGlobalContext } from "../context";
import NavigateComp from "../components/navigateComp/NavigateComp";
import { NavLink } from "react-router-dom";
import "./pages.css";

const TearmsConditons = () => {
  const { login } = useGlobalContext();

  return (
    <div className="full-body px-4 py-6 ">
      <NavigateComp title="Tearms & conditions" />
      <h1 className="text-4xl font-bold capitalize text-center w-full ">
        terms & Conditions
      </h1>

      <div className="tearms-conditions w-full min-h-[70vh] flex flex-col justify-center items-center mt-10 pb-10">
        <h2>1. Introduction</h2>
        <ul>
          <li>
            <strong>Agreement Overview:</strong> These Terms and Conditions
            ("Agreement") govern the relationship between you ("Customer" or
            "You") and Khulshai Technologies Private Limited, operating under
            the brand name "Todo" ("Todo," "We," "Our," or "Us") regarding the
            use of our bike repair and water wash services, as well as the use
            of the Todo Platform.
          </li>
          <li>
            <strong>Definitions:</strong>
            <ul>
              <li>
                "<strong>Platform:</strong> The Todo online and mobile
                application platform, including websites, apps, and other
                digital services.
              </li>
              <li>
                "<strong>Service Provider:</strong> Third-party partners who
                provide bike repair and water wash services through the Todo
                Platform.
              </li>
              <li>
                "<strong>Services:</strong> The bike repair and water wash
                services provided by Service Providers.
              </li>
            </ul>
          </li>
        </ul>

        <h2>2. User Obligations</h2>
        <ul>
          <li>
            <strong>Eligibility:</strong> By using the Todo Platform, you
            represent and warrant that you are at least 18 years old and legally
            capable of entering into binding contracts.
          </li>
          <li>
            <strong>Account Registration:</strong> You must register for an
            account on the Platform to access and use the Services. You agree to
            provide accurate, current, and complete information during the
            registration process and to update such information as necessary.
          </li>
          <li>
            <strong>Account Security:</strong> You are responsible for
            maintaining the confidentiality of your account credentials and for
            all activities that occur under your account. You agree to notify
            Todo immediately of any unauthorized use of your account.
          </li>
          <li>
            <strong>Prohibited Conduct:</strong> You agree not to engage in any
            illegal activities, violate any laws or regulations, or use the
            Platform for fraudulent purposes. You also agree not to harm, abuse,
            or harass any Service Providers or other customers.
          </li>
        </ul>

        <h2>3. Service Booking</h2>
        <ul>
          <li>
            <strong>Booking Process:</strong> You can book bike repair or water
            wash services through the Platform by selecting the desired service,
            entering your location details, and choosing a convenient time slot.
            Once the booking is confirmed, you will receive a confirmation
            message with the details of the Service Provider assigned to your
            request on your mobile application.
          </li>
          <li>
            <strong>Cancellations:</strong> You may cancel your booking at any
            time before the scheduled service. However, cancellations made in
            the last 15 minutes before the scheduled time or after the Todo
            partner has reached the pickup location may be subject to a
            cancellation fee.
          </li>
          <li>
            <strong>Rescheduling:</strong> You can reschedule your booking by
            contacting the Todo Support Provider or through the Platform in the
            My Booking section, subject to availability. Rescheduling requests
            made in the last 15 minutes before the scheduled pickup time or
            after the Todo partner has reached the pickup location may be
            subject to a rescheduling fee.
          </li>
          <li>
            <strong>Customer Responsibilities:</strong> You agree to provide
            accurate information about your bike, including make, model, and any
            specific issues or requirements for repair or water wash. You also
            agree to ensure that your bike is accessible at the scheduled
            service time and that you are available to hand over the keys if
            necessary.
          </li>
        </ul>

        <h2>4. Pricing and Payment</h2>
        <ul>
          <li>
            <strong>Pricing:</strong> The prices for bike repair and water wash
            services are listed on the Platform and may vary based on the
            service type, bike model, and location. Todo reserves the right to
            modify prices at any time, and any changes will be communicated to
            you before booking.
          </li>
          <li>
            <strong>Updated Charges and Payment Terms:</strong>
            <ul>
              <li>
                <strong>Updated Charges:</strong> The charges for services may
                be updated or changed at any time based on the analysis of the
                third-party service provider or your new service requests.
                Updated charges will be communicated to you by Todo, and
                services will only be provided upon your approval of these
                charges.
              </li>
              <li>
                <strong>Non-Payment Consequences:</strong> If there is a default
                in payment, Todo reserves the right to retain your vehicle until
                full payment, along with any applicable costs, is made. If
                payment remains outstanding for more than 90 days following
                service completion, Todo is entitled to recover the amount by
                selling your vehicle.
              </li>
              <li>
                <strong>Storage Fees:</strong> If you fail to collect your bike
                at the agreed delivery date, Todo will arrange for storage at
                your risk and expense, with a parking fee of Rs. 500 per day
                charged for such storage.
              </li>
            </ul>
          </li>
          <li>
            <strong>Payment Methods:</strong> Payment for services must be made
            through the Platform using the available payment methods, including
            credit/debit cards, UPI, or digital wallets. Cash payments may be
            accepted at the discretion of the Service Provider.
          </li>
          <li>
            <strong>Third-Party Payment Providers:</strong> Payment for services
            may be processed through third-party internet payment service
            providers. By purchasing services through the Todo platform, you
            agree to the terms and conditions and privacy policies of these
            providers. Todo is not responsible or liable for any issues arising
            from their terms, and you should address any payment disruptions or
            disputes directly with the provider.
          </li>
          <li>
            <strong>Refunds:</strong> Refunds for cancellations, unsatisfactory
            services, or other reasons will be handled in accordance with Todo’s
            refund policy. Refunds may be issued in the form of credits in Todo
            Wallet.
          </li>
        </ul>

        <h2>5. Service Quality and Warranty</h2>
        <ul>
          <li>
            <strong>Service Standards:</strong> Todo requires Service Providers
            to meet high standards of quality and professionalism. If you are
            not satisfied with the service provided, you may contact Todo’s
            customer support within [48 hours] of the service to request a
            review or resolution.
          </li>
          <li>
            <strong>Repair Warranty:</strong> Bike repair services may come with
            a warranty period, during which you can request free re-repair or
            adjustments if the service was not performed to your satisfaction.
            The warranty period may vary based on the service type, typically
            ranging from 10 to 30 days.
          </li>
          <li>
            <strong>Service Complaints:</strong> If you have any complaints or
            issues with the service provided, please contact Todo’s customer
            support with details of your complaint. Todo will investigate the
            matter and work with the Service Provider to resolve the issue as
            quickly as possible.
          </li>
        </ul>

        <h2>6. Liability and Disclaimers</h2>
        <ul>
          <li>
            <strong>Service Provider Responsibility:</strong> The Service
            Providers are independent contractors and are solely responsible for
            the services they provide. Todo acts only as an intermediary
            platform connecting you with the Service Providers and is not
            responsible for any damages, losses, or injuries resulting from the
            services provided.
          </li>
          <li>
            <strong>Damage to Vehicle:</strong> In the unlikely event that your
            bike is damaged during the service, you must notify Todo and the
            Service Provider immediately. The Service Provider is responsible
            for covering the cost of repairs or replacements. Todo may assist in
            resolving disputes but is not liable for any damages.
          </li>
          <li>
            <strong>Liability for Theft or Accidents:</strong> Todo will provide
            assistance and cooperation in the event of theft or accidents while
            your vehicle is with a service partner. This includes helping with
            insurance claims, police reporting, and other formal steps. However,
            Todo will not be liable for compensation unless the loss is due to
            an act solely attributable to Todo or due to gross negligence by
            Todo (not the service partner).
          </li>
          <li>
            <strong>Service Delays:</strong> Todo shall not be responsible for
            delays or unavailability of services due to factors such as your
            failure to cooperate, provide accurate information, or any event
            beyond Todo’s reasonable control.
          </li>
          <li>
            <strong>Accidental Damage:</strong> Todo is not responsible for any
            damages that occur to the bike in the event of an accident during
            the pickup or drop-off of the vehicle.
          </li>
          <li>
            <strong>Limitation of Liability:</strong> To the fullest extent
            permitted by law, Todo’s liability to you for any claims arising out
            of or related to this Agreement shall be limited to the total amount
            paid by you for the services in question. Todo shall not be liable
            for any indirect, incidental, or consequential damages.
          </li>
        </ul>

        <h2>7. Privacy and Data Protection</h2>
        <ul>
          <li>
            <strong>Data Collection:</strong> Todo collects and processes
            personal data in accordance with its Privacy Policy. By using the
            Platform, you consent to the collection, use, and sharing of your
            data as described in the Privacy Policy.
          </li>
          <li>
            <strong>Data Security:</strong> Todo implements appropriate
            technical and organizational measures to protect your personal data
            from unauthorized access, disclosure, or misuse. However, Todo
            cannot guarantee absolute security and encourages you to take steps
            to protect your account and personal information.
          </li>
          <li>
            <strong>Third-Party Access:</strong> Todo may share your personal
            data with Service Providers and other third parties as necessary to
            provide the services. All third parties are required to comply with
            applicable data protection laws and to use your data only for the
            purposes specified by Todo.
          </li>
        </ul>

        <h2>8. Intellectual Property</h2>
        <ul>
          <li>
            <strong>Platform Content:</strong> All content on the Platform,
            including text, images, logos, and software, is the property of Todo
            or its licensors and is protected by intellectual property laws. You
            may not use, copy, modify, or distribute any content from the
            Platform without Todo’s prior written consent.
          </li>
          <li>
            <strong>User-Generated Content:</strong> Any content you submit to
            the Platform, including reviews, comments, or photos, may be used by
            Todo for marketing or promotional purposes. By submitting content,
            you grant Todo a non-exclusive, royalty-free, worldwide license to
            use, display, and reproduce the content.
          </li>
        </ul>

        <h2>9. Amendments and Termination</h2>
        <ul>
          <li>
            <strong>Changes to Terms:</strong> Todo reserves the right to amend
            these Terms and Conditions at any time. Any changes will be posted
            on the Platform and will take effect immediately. Continued use of
            the Platform after the changes constitutes your acceptance of the
            revised Terms.
          </li>
          <li>
            <strong>Termination by Customer:</strong> You may terminate your
            account at any time by contacting Todo’s customer support.
            Termination will not affect any rights or obligations that accrued
            prior to the termination date.
          </li>
          <li>
            <strong>Termination by Todo:</strong> Todo may suspend or terminate
            your account or access to the Platform if you breach these Terms,
            engage in prohibited conduct, or if Todo decides to discontinue the
            Platform or services. In the event of termination, all outstanding
            bookings and payments will be processed in accordance with this
            Agreement.
          </li>
        </ul>

        <h2>10. Dispute Resolution</h2>
        <ul>
          <li>
            <strong>Negotiation:</strong> In the event of any disputes arising
            out of or related to this Agreement, the parties agree to first
            attempt to resolve the matter through good faith negotiations.
          </li>
          <li>
            <strong>Mediation/Arbitration:</strong> If the dispute cannot be
            resolved through negotiation, it may be submitted to
            [mediation/arbitration] in [location], under the rules of
            [mediation/arbitration body, e.g., Indian Arbitration and
            Conciliation Act, 1996].
          </li>
          <li>
            <strong>Governing Law:</strong> This Agreement shall be governed by
            and construed in accordance with the laws of [State/Country]. Any
            legal actions or proceedings arising out of or related to this
            Agreement shall be brought exclusively in the courts of
            [jurisdiction].
          </li>
        </ul>

        <h2>11. Miscellaneous</h2>
        <ul>
          <li>
            <strong>Entire Agreement:</strong> This Agreement, along with Todo’s
            Privacy Policy and any other policies referenced herein, constitutes
            the entire agreement between you and Todo regarding the use of the
            Platform and services. It supersedes all prior agreements or
            understandings, whether oral or written.
          </li>
          <li>
            <strong>Severability:</strong> If any provision of this Agreement is
            found to be invalid or unenforceable, the remaining provisions shall
            remain in full force and effect.
          </li>
          <li>
            <strong>Force Majeure:</strong> Todo shall not be liable for any
            delays or failures in performance due to events beyond its
            reasonable control, including but not limited to acts of God, war,
            terrorism, strikes, or other labor disputes, or governmental
            actions.
          </li>
        </ul>

        <h2>12. Contact Information</h2>
        <ul>
          <li>
            <strong>Customer Support:</strong> For any questions, concerns, or
            support needs, please contact Todo’s customer support at:
            <ul>
              <li>
                <strong>Address:</strong> Khulshai Technologies Private Limited,
                15 SIVAPRAKASAM ST, MOUNT ROAD, Chintadripet, Chennai- 600002,
                Tamil Nadu
              </li>
              <li>
                <strong>Email:</strong> support@todo.com
              </li>
              <li>
                <strong>Phone:</strong> [Phone Number]
              </li>
            </ul>
          </li>
        </ul>

        <h2>13. Acceptance</h2>
        <ul>
          <li>
            <strong>Acceptance of Terms:</strong> By using the Todo Platform and
            booking services, you acknowledge that you have read, understood,
            and agree to be bound by these Terms and Conditions.
          </li>
        </ul>
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
    </div>
  );
};

export default TearmsConditons;
