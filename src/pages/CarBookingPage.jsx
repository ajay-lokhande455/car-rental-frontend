import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import CarDetailsCard from "../component/CarDetailsCard ";
import BookingDetails from "../component/BookingDetails";
import CostBreakdown from "../component/CostBreakdown";

const CarBookingPage = () => {
  return (
    <div className="px-28 py-10">
      <h2 className="text-xl font-bold">Booking Details</h2>
      <div className="flex items-center gap-2 text-gray-500 mt-2">
        <span className="text-md font-semibold">Tuesday, 25 February</span>
        <FaArrowRight className="text-gray-400" />
        <span className="text-md font-semibold">Tuesday, 25 February</span>
      </div>
      <div className="flex gap-7 py-10">
        <div>
        <CarDetailsCard />
        <BookingDetails />
        </div>
        <div>
            <CostBreakdown />
        </div>
      </div>
    </div>
  );
};

export default CarBookingPage;
