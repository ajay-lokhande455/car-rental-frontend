import React from "react";
import { FaTag } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi";

const offers = [
  {
    discount: "20% OFF",
    title: "Valid for Monthly Duration only",
    dealTitle: "20% OFF on Monthly Rent",
    coupon: "MONTHLY20",
  },
  {
    discount: "20% OFF",
    title: "Book an Apache RTR 160 & get 20% off instantly! Ride the power!",
    dealTitle: "Apache Rush Deal 🔥",
    coupon: "APACHE20OFF",
  },
  {
    discount: "20% OFF",
    title: "Book a Bajaj Pulsar NS 200 & get 20% off instantly! Power meets performance!",
    dealTitle: "Pulsar NS 200 Thrill Deal 🔥",
    coupon: "NS200OFF",
  },
];

const FeaturedOffers = () => {
  return (
    <div className="py-20 px-5 mb-10">
      <h2 className="text-2xl font-bold text-center mb-2">
        Featured Offers 
      </h2>
      <div className="w-20 mx-auto h-1 bg-yellow-500 mb-6"></div>
      <div className="flex flex-wrap justify-center gap-6">
        {offers.map((offer, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg w-80">
            {/* Discount Badge */}
            <div className="flex items-center space-x-2 mb-3">
              <span className="bg-black text-white text-xs font-bold py-1 px-2 rounded">
                {offer.discount}
              </span>
              <p className="text-sm font-semibold">{offer.title}</p>
            </div>

            {/* Deal Section */}
            <div className="bg-gray-100 p-3 rounded-lg mb-3">
              <div className="flex items-center space-x-2">
                <FaTag className="text-yellow-500" />
                <p className="font-semibold">{offer.dealTitle}</p>
              </div>
              <p className="text-gray-600 text-sm">Use Coupon Code - {offer.coupon}</p>
            </div>

            {/* Footer Section */}
            <div className="flex items-center justify-between text-gray-600">
              <div className="flex items-center space-x-2">
                <IoShieldCheckmarkOutline className="text-gray-400" />
                <span className="text-sm">Happy Journey</span>
              </div>
              <HiArrowRight className="text-black cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedOffers;
