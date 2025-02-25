import React from "react";

const reachData = [
  {
    img: "https://www.selfspin.com/assets/images/reach/happy-users.png", 
    text: "100K+ Happy Users",
  },
  {
    img: "https://www.selfspin.com/assets/images/reach/covered-cities.png", 
    text: "5 Cities in India",
  },
  {
    img: "https://www.selfspin.com/assets/images/reach/bookings-served.png", 
    text: "50K+ Bookings Served",
  },
  {
    img: "https://www.selfspin.com/assets/images/reach/miles-travelled.png", 
    text: "10 Million+ Miles Travelled",
  },
];

const OurReach = () => {
  return (
    <div className="py-20 px-5 text-center mb-20">
      <h2 className="text-2xl font-bold mb-4">Our Reach</h2>
      <div className="w-16 mx-auto h-1 bg-yellow-500 mb-6"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {reachData.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
            <img src={item.img} alt={item.text} className="w-24 h-24 mb-4" />
            <p className="text-lg font-semibold">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurReach;
