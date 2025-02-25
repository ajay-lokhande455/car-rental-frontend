import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa';

 function BookingInfo() {
    return (
      <div className="bg-amber-50 py-7 px-30 flex justify-between items-center rounded-2xl ">
        {/* Location */}
        <div className="flex items-center gap-2">
          <span className="text-red-500 text-xl">📍</span>
          <div>
            <p className="text-gray-500 text-sm font-bold">Location</p>
            <p className="text-black font-semibold">Pune</p>
          </div>
        </div>
  
        {/* Delivery Info */}
        <div className="text-center text-sm font-semibold text-gray-700">
          <p>You can select <span className="font-bold">Home & Airport Delivery</span> on the next page.</p>
          <p>Now free <span className="font-bold">10 km/hr</span> (240Km/day).</p>
        </div>
  
        {/* Date Range */}
        <div className="flex items-center gap-2">
          <span className="text-red-500 text-xl"><FaCalendarAlt className="text-black" /></span>
          <div>
            <p className="text-black font-semibold">25 February to 25 February</p>
          </div>
        </div>
      </div>
    );
  }
  

export default BookingInfo
