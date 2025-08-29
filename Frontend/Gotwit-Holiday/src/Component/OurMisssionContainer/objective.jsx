import { useState } from 'react'
import Assistance from "../../assets/EffortlessTravel/24-7-assistance.svg";
import BestTravel from "../../assets/EffortlessTravel/best-travel-deals.svg";
import BookFlexibility from "../../assets/EffortlessTravel/book-with-flexibility.svg";
import KnowTravel from "../../assets/EffortlessTravel/we-know-travel.svg";
import { Map, ThumbsUp, Globe2, Handshake, ShieldCheck, RefreshCw } from "lucide-react";



const trustData = [
   {
    img: Map,
    label: "Deliver Tailored Travel Solutions",
    Description:
      "Offer customized holiday packages that suit the unique preferences, budgets, and travel styles of every client.",
  },
  {
    img: ThumbsUp,
    label: "Prioritize Customer Satisfaction",
    Description:
      "Ensure a smooth, stress-free experience by offering responsive communication, transparent advice, and end-to-end support.",
  },
  {
    img: Globe2,
    label: "Promote Meaningful Travel",
    Description:
      "Create experiences that are not only enjoyable but also culturally enriching and respectful of local communities.",
  },
  {
    img: Handshake,
    label: "Build Long-Term Relationships",
    Description:
      "Develop strong, trust-based relationships with our customers through consistent quality, care, and reliability.",
  },
  {
    img: ShieldCheck,
    label: "Maintain High Operational Standards",
    Description:
      "Work only with trusted travel partners and suppliers to ensure quality service, safety, and comfort across all touchpoints.",
  },
  {
    img: RefreshCw,
    label: "Innovate and Improve Continuously",
    Description:
      "Adapt to changing travel trends and customer needs by continuously updating our offerings and improving our services.",
  },
];

const TrustEvidence = () => {
  return (
    <div className="py-30">
    <div className=' bg-blue-900 p-10'>
      <h1 className="text-4xl font-bold text-center text-white mb-6">
        Our Objective
        </h1>
        <div className="w-20 h-1 bg-pink-500 mx-auto"></div>
    <div className="flex flex-wrap justify-center gap-8 p-6 bg-blue-900 rounded-lg">
      {trustData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center w-[250px] bg-white p-5 rounded-lg"
        >
          <item.img className="w-10 h-10 text-pink-500" />  
          <h4 className="mt-3 text-sm font-medium text-gray-700">{item.label}</h4>
          <p className="mt-1 text-xs text-gray-500">{item.Description}</p>
        </div>
      ))}
    </div></div></div>
  );
};

export default TrustEvidence;