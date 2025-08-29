import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plane, Hotel, Car, Utensils, Wifi, ShoppingBag, MapPin, Camera } from "lucide-react";

export default function MissionContainer() {
  

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50 relative z-[-1]">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-2">Our Aim</h2>
        <div className="w-16 h-1 bg-pink-500 mx-auto"></div>
      </div>

      <div className=" whitespace-pre-line text-center">
  {`To become a trusted travel partner known for delivering outstanding holiday experiences and personalized customer service that exceeds expectations.`}
</div>


      
       <div className="flex justify-center p-5">
      {/* <button className="bg-white text-pink-500 border border-pink-500 rounded-[20px] px-4 py-2 hover:bg-pink-500 hover:text-white">
        See More Deals
      </button> */}
    </div>
    </div>
  );
}