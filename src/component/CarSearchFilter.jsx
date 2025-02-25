import React, { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaSearch } from "react-icons/fa";

const CarSearchFilter = () => {
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [dropTime, setDropTime] = useState("");

  return (
    <div>
    <div className="bg-[#FFFBEB] p-2 rounded-xl shadow-md w-70">
      <h2 className="font-bold text-lg text-center">FIND YOUR VEHICLE</h2>

      {/* Location */}
      <div className="mt-4">
        <label className="text-gray-600 text-sm">Your nearest area</label>
        <div className="flex items-center border-b border-gray-400 py-2">
          <FaMapMarkerAlt className="text-gray-500 mr-2" />
          <select className="w-full bg-transparent outline-none">
            <option>All areas</option>
            <option>Pune</option>
            <option>Mumbai</option>
            <option>Delhi</option>
          </select>
        </div>
      </div>

      {/* Pickup Date & Time */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <label className="text-gray-600 text-sm">Pickup date</label>
          <div className="flex items-center border-b border-gray-400 py-2">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <input
              type="date"
              className="w-full bg-transparent outline-none"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label className="text-gray-600 text-sm">Pickup time</label>
          <div className="flex items-center border-b border-gray-400 py-2">
            <FaClock className="text-gray-500 mr-2" />
            <input
              type="time"
              className="w-full bg-transparent outline-none"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Drop Date & Time */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <label className="text-gray-600 text-sm">Drop date</label>
          <div className="flex items-center border-b border-gray-400 py-2">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <input
              type="date"
              className="w-full bg-transparent outline-none"
              value={dropDate}
              onChange={(e) => setDropDate(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label className="text-gray-600 text-sm">Drop time</label>
          <div className="flex items-center border-b border-gray-400 py-2">
            <FaClock className="text-gray-500 mr-2" />
            <input
              type="time"
              className="w-full bg-transparent outline-none"
              value={dropTime}
              onChange={(e) => setDropTime(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Search Button */}
      <button className="w-full bg-yellow-400 text-black font-semibold py-3 mt-4 rounded-md flex items-center justify-center gap-2">
        <FaSearch />
        Search
      </button>

      {/* More Filters */}
      <button className="w-full bg-gray-700 text-white font-semibold py-3 mt-3 rounded-md flex items-center justify-between px-4">
        More Filters
        <span className="text-lg">▼</span>
      </button>
    </div>
    </div>
  );
};

export default CarSearchFilter;
