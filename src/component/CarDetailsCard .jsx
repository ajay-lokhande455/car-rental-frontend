import React from "react";
import { FaGasPump, FaPiggyBank, FaRoad } from "react-icons/fa6";
import { GiGearStick } from "react-icons/gi";
import { MdLocalGasStation, MdSecurity } from "react-icons/md";

const CarDetailsCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto ">
      <div className="flex gap-6">
        <div>
          <img
            src="https://imgs.search.brave.com/4UJsV8j0PS6E43sslVvq3Y7Dq3Va5-DdgyMq44k28lU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS56aWdjZG4uY29t/L21lZGlhL21vZGVs/LzIwMjMvRmViL3dh/Z29uLXJfNjAweDQw/MC5qcGc"
            alt="Maruti Wagon R"
            className="w-60 h-36 object-contain"
          />
          <div className="flex gap-10 px-5">
          <div className="flex items-center gap-1 ">
            <FaGasPump className="text-gray-600" size={"28px"} />
            <p>Petrol</p>
          </div>
          <div className="flex items-center gap-1">
            <GiGearStick className="text-gray-600" size={"28px"} />
            <p>Manual</p>
          </div>
          </div>
        </div>
        <div>
            <h1 className="text-2xl font-semibold text-center">
              Maruti Wagon R New
            </h1>
            <div className="w-40 mx-auto h-1 bg-yellow-500 my-2 mb-2"></div>
            <div className="flex flex-wrap justify-between bg-white p-6 rounded-lg  max-w-md mx-auto">
      {/* Free Kms */}
      <div className="flex items-center gap-3 w-1/2 mb-4">
        <FaRoad className="text-yellow-500 text-2xl" />
        <div>
          <p className="text-gray-600 text-sm">Free kms</p>
          <p className="font-semibold">130 kms</p>
        </div>
      </div>

      {/* Excess KM Charges */}
      <div className="flex items-center gap-3 w-1/2 mb-4">
        <FaPiggyBank className="text-yellow-500 text-2xl" />
        <div>
          <p className="text-gray-600 text-sm">Excess km charges</p>
          <p className="font-semibold">₹ 4/km + GST</p>
        </div>
      </div>

      {/* Fuel */}
      <div className="flex items-center gap-3 w-1/2">
        <MdLocalGasStation className="text-yellow-500 text-2xl" />
        <div>
          <p className="text-gray-600 text-sm">Fuel</p>
          <p className="font-semibold">Not Included</p>
        </div>
      </div>

      {/* Security Deposit */}
      <div className="flex items-center gap-3 w-1/2">
        <MdSecurity className="text-yellow-500 text-2xl" />
        <div>
          <p className="text-gray-600 text-sm">Security deposit</p>
          <p className="font-semibold">₹ 0</p>
        </div>
      </div>
    </div>
          </div>
      </div>

      <p className="text-sm text-gray-500 italic mt-4">
        Note: This image is for representation purposes only. The color of the
        actual vehicle may differ.
      </p>

      <div className="text-gray-600">
        <div className="flex justify-center gap-5 pt-3">
          <p className="border border-gray-300 text-center px-2 py-1 bg-[#FBF9F4] rounded-xl">
            Fuel Type : <strong>Petrol</strong>
          </p>
          <p className="border border-gray-300 text-center px-2 py-1 bg-[#FBF9F4] rounded-xl">
            Seats : <strong>5</strong>
          </p>
          <p className="border border-gray-300 text-center px-2 py-1 bg-[#FBF9F4] rounded-xl">
            Transmission : <strong>Manual</strong>
          </p>
        </div>
        <div className="flex justify-center pt-3 gap-5">
          <p className="border border-gray-300 text-center px-2 py-1 bg-[#FBF9F4] rounded-xl">
            Top Speed : <strong>152/h</strong>
          </p>
          <p className="border border-gray-300 text-center px-2 py-1 bg-[#FBF9F4] rounded-xl">
            Power : <strong>HP67</strong>
          </p>
          <p className="border border-gray-300 text-center px-2 py-1 bg-[#FBF9F4] rounded-xl">
            Mileage : <strong>22.5 Kmpl</strong>
          </p>
        </div>
        <div className="flex justify-center pt-3 gap-5">
          <p className="border border-gray-300 text-center px-2 py-1 bg-[#FBF9F4] rounded-xl">
            Fuel capacity: <strong>42 L</strong>
          </p>
          <p className="border border-gray-300 text-center px-2 py-1 bg-[#FBF9F4] rounded-xl">
            Kerb weight : <strong>820 Kg</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsCard;
