import React from "react";
import BookingInfo from "../component/BookingInfo";
import CarCard from "../component/CarCard";
import CarSearchFilter from "../component/CarSearchFilter";

const CarDetailsPage = () => {
  return (
    <div>
      <BookingInfo />
      <div className="flex p-10 gap-5">
        <CarSearchFilter />
        <CarCard />
      </div>
    </div>
  );
};

export default CarDetailsPage;
