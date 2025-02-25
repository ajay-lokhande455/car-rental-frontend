import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BookingDetails = () => {
  return (
    <div className="bg-white p-6 rounded-lg mt-5 shadow-md max-w-3xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Booking Details</h2>

      <div className="relative border-l-2 border-dashed border-gray-300 pl-6">
        {/* Pickup Section */}
        <div className="relative mb-6">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Pickup</h3>
            <FaArrowRight className="text-gray-500" />
            <p className="text-sm font-semibold text-gray-700">
              Tuesday, 25 February 2025, 19:30 PM
            </p>
          </div>
        </div>

        {/* Booking Duration */}
        <div className="relative mb-6">
          <p className="italic text-gray-700 font-medium">
            Booking Duration: <span className="font-bold">1 hour(s)</span>
          </p>
        </div>

        {/* Drop Section */}
        <div className="relative">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Drop</h3>
            <FaArrowRight className="text-gray-500" />
            <p className="text-sm font-semibold text-gray-700">
              Tuesday, 25 February 2025, 20:30 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
