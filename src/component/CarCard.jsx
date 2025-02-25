import React from "react";
import { FaGasPump } from "react-icons/fa";
import { GiGearStick } from "react-icons/gi";
import { Link } from "react-router-dom";

function CarCard() {
  const car = [
    {
      name: "Maruti Wagon R New",
      image:
        "https://imgs.search.brave.com/4UJsV8j0PS6E43sslVvq3Y7Dq3Va5-DdgyMq44k28lU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS56aWdjZG4uY29t/L21lZGlhL21vZGVs/LzIwMjMvRmViL3dh/Z29uLXJfNjAweDQw/MC5qcGc", // Replace with actual car image
      freeKms: 130,
      extraCharge: 4,
      price: 907,
    },
    {
      name: "Renault Kwid",
      image:
        "https://imgs.search.brave.com/VsTccNWEYbhBsnYu-jIe97hzd9-5RAltAY3GvZJsmgE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZW5h/dWx0c3ByaW5ncy5j/by56YS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wMi9SZW5h/dWx0LUt3aWQtMS5q/cGc",
      fuelType: "Petrol",
      transmission: "Manual",
      availability: "Available",
      freeKms: 130,
      extraCharge: 4,
      price: 921,
    },
    {
        name: "Hyundai i20",
        image: "https://imgs.search.brave.com/3fPvZ4OK9uE-SG6fpDnu3RwSKader16fPGgSPLa4sgA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LWN0LmFlcGxjZG4u/Y29tLzEwNTZ4NjYw/L24vY3cvZWMvMTU4/MjA1L2kyMC1uLWxp/bmUtcmlnaHQtZnJv/bnQtdGhyZWUtcXVh/cnRlci0yLmpwZWc_/aXNpZz0wJnE9ODA",  
        fuelType: "Petrol",
        transmission: "Automatic",
        availability: "Available",
        freeKms: 150,
        extraCharge: 5,
        price: 1100,
    },
    
    {
        name: "Tata Nexon",
        image: "https://imgs.search.brave.com/97-vZ96PCNBSSljuIZUsGfF5k8OzW5ZX4WYdWyS4maw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzEwNTZ4NTk0L24v/Y3cvZWMvMTQxODY3/L25leG9uLWV4dGVy/aW9yLXJpZ2h0LWZy/b250LXRocmVlLXF1/YXJ0ZXItNzEuanBl/Zz9pc2lnPTAmcT04/MCZ3bT0x",
        fuelType: "Diesel",
        transmission: "Manual",
        availability: "Available",
        freeKms: 140,
        extraCharge: 6,
        price: 1300,
    },
    
  ];

  return (
    <Link to="/carBookingPage">
    <div className="flex flex-wrap gap-4">
      {car.map((item, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-xl w-70 text-center">
          {/* Car Name */}
          <h2 className="font-bold text-lg border-b py-5 border-dotted border-gray-500">{item.name}</h2>

          {/* Car Image */}
          <img src={item.image} alt={item.name} className="w-full h-32 object-contain my-2" />

          {/* Fuel & Transmission */}
          <div className="flex justify-center gap-6 pt-3 border-t border-dashed border-gray-400 text-gray-700 text-sm mt-2">
            <div className="flex items-center gap-1 ">
              <FaGasPump className="text-gray-600" size={"28px"} />
              <p>Petrol</p>
            </div>
            <div className="flex items-center gap-1">
              <GiGearStick className="text-gray-600" size={"28px"} />
              <p>Manual</p>
            </div>
          </div>

          {/* Availability */}
          <p className="text-green-600 text-2xl font-bold m-4">Available</p>

          {/* Free Km & Charges */}
          <div className="py-2 px-2 flex gap-16 bg-[#FFFBEB] text-gray-700 text-sm">
            <p>
              <strong>Free kms:</strong> {item.freeKms} kms
            </p>
            <p>
              <strong>Excess km charges:</strong> ₹ {item.extraCharge}/km + GST
            </p>
          </div>

          {/* Price & Book Button */}
          <div className="flex justify-between items-center bg-[#585959] text-white px-2 py-3 rounded-b-2xl">
            <p className="font-bold text-lg">₹ {item.price}</p>
            <button className="bg-yellow-400 text-black px-4 py-1 rounded-lg font-semibold">Book</button>
          </div>
        </div>
      ))}
    </div>
    </Link>
  );
}

export default CarCard;
