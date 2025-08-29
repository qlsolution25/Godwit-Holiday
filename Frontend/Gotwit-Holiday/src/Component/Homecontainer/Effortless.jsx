import { useState } from 'react'
import Assistance from "../../assets/EffortlessTravel/24-7-assistance.svg";
import BestTravel from "../../assets/EffortlessTravel/best-travel-deals.svg";
import BookFlexibility from "../../assets/EffortlessTravel/book-with-flexibility.svg";
import KnowTravel from "../../assets/EffortlessTravel/we-know-travel.svg";



const trustData = [
  { img: Assistance, label:"24 7 assistance",Description:"Find the best fares & packages for your retreats with us."},
  { img: BestTravel, label: "best-travel-deals".replace(/-/g, " "),Description:"Take advantage of our low deposit & flexible instalment plans." },
  { img: BookFlexibility, label: "book-with-flexibility".replace(/-/g, " "),Description: "With 38+ years of expertise, we know how to make your getaways unforgettable." },
  { img: KnowTravel, label: KnowTravel.split("/").pop().replace(/\.svg$/i, "").replace(/-/g, " "),Description:"Our team of specialists work around the clock for your convenience." },
  
];

const TrustEvidence = () => {
  return (
    <div className=' bg-blue-900 p-10'>
      <h1 className="text-2xl font-bold text-center text-white mb-6">
        Celebrating Three Decades of Godwit Holidays 
        </h1>
    <div className="flex flex-wrap justify-center gap-8 p-6 bg-blue-900 rounded-lg">
      {trustData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center w-[250px] bg-white p-5 rounded-lg"
        >
          <img
            src={item.img}
            alt={item.label}
            className="w-[40px] h-[50px] object-contain"
          />
          <h4 className="mt-3 text-sm font-medium text-gray-700">{item.label}</h4>
          <p className="mt-1 text-xs text-gray-500">{item.Description}</p>
        </div>
      ))}
    </div></div>
  );
};

export default TrustEvidence;