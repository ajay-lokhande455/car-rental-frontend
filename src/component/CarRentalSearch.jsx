import { useState } from "react";
import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function CarRentalSearch() {
  const [location, setLocation] = useState("All areas");
  const [pickupDate, setPickupDate] = useState("2025-02-25");
  const [pickupTime, setPickupTime] = useState("12:00");
  const [dropDate, setDropDate] = useState("2025-02-25");
  const [dropTime, setDropTime] = useState("13:00");

  const handleDropDateChange = (e) => {
    const selectedDate = e.target.value;
    if (selectedDate < pickupDate) {
      alert("Drop-off date cannot be before pickup date.");
    } else {
      setDropDate(selectedDate);
    }
  };

  const handleDropTimeChange = (e) => {
    const selectedTime = e.target.value;
    if (dropDate === pickupDate && selectedTime < pickupTime) {
      alert("Drop-off time cannot be before pickup time.");
    } else {
      setDropTime(selectedTime);
    }
  };

  return (
    <div className="bg-white p-7 rounded-full shadow-2xl flex flex-wrap md:flex-nowrap items-center justify-between gap-5  space-x-4">
      {/* Location Selector */}
      <div className="flex flex-col">
        <label className="text-gray-500 text-sm">Your nearest area</label>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-black" />
          <select
            className="font-semibold outline-none border-b-2 w-[180px] py-1 bg-transparent"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>All areas</option>
            <option>Mumbai</option>
            <option>Pune</option>
            <option>Delhi</option>
          </select>
        </div>
      </div>

      {/* Pickup Date */}
      <div className="flex flex-col">
        <label className="text-gray-500 text-sm">Pickup date</label>
        <div className="flex items-center space-x-2">
          <FaCalendarAlt className="text-black " />
          <input
            type="date"
            className="font-semibold outline-none border-b-2  py-1 bg-transparent cursor-pointer"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
          />
        </div>
      </div>

      {/* Pickup Time */}
      <div className="flex flex-col">
        <label className="text-gray-500 text-sm">Pickup time</label>
        <div className="flex items-center space-x-2">
          <FaClock className="text-black" />
          <input
            type="time"
            className="font-semibold outline-none border-b-2  py-1 bg-transparent cursor-pointer"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
          />
        </div>
      </div>

      {/* Drop Date */}
      <div className="flex flex-col">
        <label className="text-gray-500 text-sm">Drop date</label>
        <div className="flex items-center space-x-2">
          <FaCalendarAlt className="text-black" />
          <input
            type="date"
            className="font-semibold outline-none border-b-2  py-1 bg-transparent cursor-pointer"
            value={dropDate}
            onChange={handleDropDateChange}
          />
        </div>
      </div>

      {/* Drop Time */}
      <div className="flex flex-col">
        <label className="text-gray-500 text-sm ">Drop time</label>
        <div className="flex items-center space-x-2">
          <FaClock className="text-black " />
          <input
            type="time"
            className="font-semibold outline-none bg-transparent border-b-2  py-1 cursor-pointer"
            value={dropTime}
            onChange={handleDropTimeChange}
          />
        </div>
      </div>

      {/* Search Button */}
      <Link to="/carDetailsPage"><button className="bg-black text-yellow-400 p-4 rounded-full" aria-label="Search Cars">
        <FaSearch size={20} />
      </button>
      </Link>
    </div>
  );
}

export default CarRentalSearch;
