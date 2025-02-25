import React from "react";
import CarRentalSearch from "./CarRentalSearch";


const Hero = () => {
  return (
    <div className="h-[100vh] relative w-full  rounded-b-4xl bg-[#FBF9F4] overflow-hidden">
      <img
        src="https://selfspin-prod.s3.ap-south-1.amazonaws.com/cities/1689588900656-000000-Pune_City_Image-transformed.jpeg"
        alt="Pune City View"
        className="w-full h-[75%] object-cover rounded-b-4xl"
      />
      <div className="absolute bottom-28 z-40 left-[10%]">
        <CarRentalSearch />
      </div>
    </div>
  );
};

export default Hero;
