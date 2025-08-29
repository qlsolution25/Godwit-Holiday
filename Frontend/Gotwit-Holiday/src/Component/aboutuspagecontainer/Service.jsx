import React from "react";
import { Users,Plane,Bed  } from "lucide-react"; // Example icon
import sampleImg from "../../assets/images/home-hero-3.webp"; // Example image
import agent from "../../assets/images/images.jpeg"
import bed from "../../assets/images/barcelona.webp"
import plane from "../../assets/images/airplane.webp"


const data = [
  {
    Topic: "Plane",
    image: plane,
    icons: <Plane size={20} />,
    Details: "This is the detail paragraph for Topic 1.",
  },{
    Topic: "Hotels",
    image: bed,
    icons: <Bed size={20} />,
    Details: "This is the detail paragraph for Topic 1.",
  },
  {
    Topic: "Agent",
    image: agent,
    icons: <Users size={20} />,
    Details: "This is the detail paragraph for Topic 2.",
  },
];

export default function InfoBoxes() {
  return (
    <div className="p-10 bg-gray-100">
        <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-2">Godwit Holidays Services</h2>
        <div className="w-16 h-1 bg-pink-500 mx-auto"></div>
      </div>
    <div className="flex gap-9 flex flex-wrap justify-center flex-wrap p-10 bg-gray-100">
        
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col  rounded-[20px] shadow-md bg-white "
          style={{ width: "200px", height: "350px" }}
        >
          {/* Top Section */}
          <div
            className="flex items-center justify-between px-2"
            style={{ height: "50px" }}
          >
            <h3 className="text-lg font-semibold">{item.Topic}</h3>
            {item.icons}
          </div>

          {/* Image Section */}
          <div style={{ height: "120px" }}>
            <img
              src={item.image}
              alt={item.Topic}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="p-2 flex-1 overflow-auto text-center">
            <p className="text-sm">{item.Details}</p>
          </div>
        </div>
      ))}
    </div></div>
  );
}
