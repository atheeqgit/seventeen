import React, { useState } from "react";

const FAQComponent = () => {
  const faqs = [
    {
      question: "What is Todo?",
      answer:
        "Todo is an easy-to-use platform for booking skilled bike mechanics. Our expert technicians follow manufacturer-recommended procedures and use only genuine spare parts, ensuring you get a smooth and reliable service experience with just some clicks.",
    },
    {
      question: "What services does Todo offer?",
      answer:
        "Todo offers a wide range of services, including routine maintenance, emergency repairs, comprehensive diagnostics, and all types of repair services for motorcycles.",
    },
    {
      question: "How can I book a service with Todo?",
      answer:
        "You can book a service through our mobile app or website. Simply create an account, select the type of service you need, choose a convenient time, and confirm your booking.",
    },
    {
      question: "How are Todo’s mechanics vetted?",
      answer:
        "All Todo mechanics are thoroughly vetted and undergo a rigorous background check. They are certified professionals with extensive experience in motorcycle repair and maintenance to ensure high-quality service.",
    },
    {
      question: "How much do Todo’s services cost?",
      answer:
        "The cost of services varies depending on the type of service and the motorcycle model. You can get a detailed quote by selecting your required service in the Todo app or website.",
    },
    {
      question: "How do I pay for Todo’s services?",
      answer:
        "We offer multiple payment options for your convenience, including credit/debit cards, UPI, net banking, digital wallets, and Cash on Vehicle Delivery. You can make payments securely through our app or website.",
    },
    {
      question: "What if I need to cancel or reschedule my appointment?",
      answer:
        "You can easily cancel or reschedule your appointment through the Todo app or website. Please refer to our cancellation policy for details on any applicable fees.",
    },
    {
      question: "What happens if there is an issue with the service provided?",
      answer:
        "If you encounter any issues with the service, please contact our customer support team immediately. We are committed to ensuring your satisfaction and will work to resolve any problems promptly.",
    },
    {
      question: "How can I contact Todo’s customer support?",
      answer:
        "You can reach our customer support team through the app or website, via email at support@todo.com, or by calling our customer service hotline at +91 6382104561.",
    },
    {
      question: "Can I track the status of my motorcycle service?",
      answer:
        "Yes, you can track the status of your motorcycle service in real-time through the Todo app. You will receive notifications at each stage, from pickup to servicing to delivery.",
    },
    {
      question: "Can I choose my preferred mechanic?",
      answer:
        "Todo assigns mechanics based on their proximity, availability, and expertise to ensure timely and efficient service.",
    },
    {
      question: "Is there a referral program available for Todo customers?",
      answer:
        "Yes, Todo offers a referral program where you can earn a 10% discount on your service by referring friends and family. Details about the referral program can be found in the app or on our website.",
    },
    {
      question: "Why should I choose Todo?",
      answer:
        "Todo offers easy online booking and doorstep service at an affordable price, saving you time, effort, and money.",
    },
  ];

  const [visibleFAQs, setVisibleFAQs] = useState(3); // Initially show 3 FAQs
  const [openFAQ, setOpenFAQ] = useState(null); // Track the open FAQ

  const toggleFAQ = (index) => {
    // If the clicked FAQ is the third one, increase the visible count
    if (index === visibleFAQs - 1 && visibleFAQs < faqs.length) {
      setVisibleFAQs(visibleFAQs + 1);
    }
    // Toggle the FAQ
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="mt-10">
      <h2 className="text-4xl font-semibold text-black mb-6">FAQs</h2>
      {faqs.slice(0, visibleFAQs).map((faq, index) => (
        <div
          key={index}
          onClick={() => toggleFAQ(index)}
          className="border-b-2 mb-3 shadow border-solid bg-[#e6e6e6] border-[#ccc] p-4 rounded-2xl"
        >
          <h3 className="text-2xl font-semibold cursor-pointer flex flex-row justify-between">
            {faq.question}
            <span className="ml-4 text-4xl">
              {openFAQ === index ? "-" : "+"}
            </span>
          </h3>
          {openFAQ === index && (
            <p className="mt-4 text-xl text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
