import React, { useState } from "react";

const faqs = [
  {
    question: "What is Selfspin?",
    answer:
      "We are offering you the best class experience to use the self-drive vehicle rental service on an hourly to yearly basis that too anytime around the city.",
  },
  {
    question: "How to book a vehicle from Selfspin?",
    answer: "You can book a vehicle from Selfspin by visiting our website or mobile app.",
  },
  {
    question: "Selfspin available in which cities?",
    answer: "We offer self-drive rentals throughout Bengaluru, Pune, Amritsar, Jaipur, Goa, and Chandigarh.",
  },
  {
    question: "Where do I pick up the vehicle?",
    answer:
      "The Selfspin pickup locations are where the user/customer can pick up the vehicle. On our platform, you can discover a list of Selfspin pickup locations.",
  },
  {
    question: "Is there any limit on the age of the user/customer?",
    answer:
      "The user/customer must be older than 18 years old. However, a minimum age of 21 is required to receive some vehicles.",
  },
  {
    question: "Does Selfspin provide the home delivery of the vehicle?",
    answer:
      "Yes, the vehicle can be delivered and picked up from your desired location by our rider.",
  },
  {
    question: "What is the longest amount of time you can rent a vehicle?",
    answer:
      "Yes, it's possible to rent a vehicle for 2 months. For more than 2 months of booking, there is a subscription model that can be availed by contacting the Selfspin staff.",
  },
  {
    question: "For group reservations, a prior inquiry is required?",
    answer: "Yes, the user/customer can request 15 days before the day of reservation.",
  },
  {
    question: "Which types of vehicles are provided by Selfspin?",
    answer: "Selfspin provides various ranges of motorbikes, cars, and scooters.",
  },
  {
    question: "What documents need to be uploaded and submitted?",
    answer:
      "You need a valid Driving Licence, Local address Proof, and KYC documents. (PAN card will not be accepted as valid government ID proof).",
  },
  {
    question: "Is fuel included in Selfspin?",
    answer: "No, fuel costs are to be borne by the user/customer.",
  },
  {
    question: "Does Selfspin offer promo codes?",
    answer: "Yes, Selfspin offers promo codes. More info….",
  },
  {
    question: "Is there any security deposit to be paid?",
    answer:
      "Initially, a security deposit is required when booking a vehicle through Selfspin. However, after a series of successful bookings with a good track record, this requirement may be waived.",
  },
  {
    question: "Can we travel outstation (to another state)?",
    answer:
      "Bikes are not allowed to be taken outside the city limits. Cars are allowed to drive and explore the entire nation with permission of concerned authorities.",
  },
  {
    question: "How long will it take to get the refund if any?",
    answer: "Within 7-9 working days, the user's /customer’s account will be credited with the refund if any.",
  },
  {
    question: "Is there any penalty for a late return?",
    answer:
      "For Two Wheeler: Overtime charges 250+ double the hourly fare if the Customers use a vehicle without making an extension payment.\n\nFor Four Wheeler: Overtime charges 500+ double the hourly fare if the customer is using the vehicle without making an extension payment.",
  },
  {
    question: "Does Selfspin charge for damages?",
    answer: "Yes, Selfspin charges for the damages made by the customer. More info….",
  },
  {
    question: "Is there any way to earn with Selfspin?",
    answer: "Yes, by attaching your vehicle with Selfspin you can earn money.",
  },
  {
    question: "Can I get a refund for the remaining Fastag recharge amount?",
    answer:
      "Yes, if the remaining balance in your account is more than ₹500, it is refundable. However, if the balance is ₹500 or less, it will not be eligible for a refund.",
  },
  {
    question: "Who will bear the traffic challan and penalties?",
    answer:
      "User/Customer is responsible to make the payment of the traffic challan and payments.",
  },
];

const FAQPage = () => {

  return (<div className="max-w-3xl mx-auto p-6">
    <h1 className="text-2xl font-bold mb-6">FAQs - How to rent a self-driven vehicle</h1>
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">{faq.question}</h2>
          <p className="text-gray-700 mt-1">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default FAQPage;