import React from "react";

const locations = [
  ["Aundh DP Road", "Dhanori", "Kesnand", "Kothrud", "Pimple Saudagar"],
  ["Aundh Gaon", "Hadapsar", "Kesnand", "Kunal Icon Road (PCMC)", "Wakad - Bridge"],
  ["Bhugaon HDFC Bank", "Karvenagar", "Kharadi", "Manjri Bk"]
];

const PrimeLocations = () => {
  return (
    <div className="py-20 px-5 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-4">
        Self Drive Cars Available at Prime Pune Locations:
      </h2>
      <div className="w-20 mx-auto h-1 bg-yellow-500 mb-6"></div>
      <div className="bg-[#585959] text-white rounded-lg p-8 mt-15 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {locations.map((column, index) => (
            <ul key={index} className="text-left space-y-2">
              {column.map((place, i) => (
                <li key={i} className="flex items-center">
                  <span className="mr-2">•</span> {place}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrimeLocations;
