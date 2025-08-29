import { useState, useEffect } from "react";

// Import images
import img1 from "../assets/images/about.jpeg";
import img2 from "../assets/images/home-hero-2.webp";
import img3 from "../assets/images/home-hero-3.webp";
import Navbar from "../Component/navbar"
import Service from "../Component/aboutuspagecontainer/Service";
import Introduction from "../Component/aboutuspagecontainer/Introduction";
import EmailContact from "../Component/Homecontainer/EmailContact";
import AboutUS from "./Homecontainer/aboutus";
import BritishTravelAwards from "./Homecontainer/britishTravelAward";
import { FaBox, FaPlane } from "react-icons/fa";

import WhastappChat from "./Homecontainer/whatsapp";


export default function ImageSlider() {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  
   const [selected, setSelected] = useState("package");

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [images.length]);

  return (
    <div>
        <Navbar/>
        <div className="relative h-[130px]"></div>
    <div className="w-full h-[500px]  relative relative  ">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt="Hero"
        className="w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* Dots Navigation */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col space-y-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            } hover:bg-white transition-colors duration-300`}
          />
        ))}
        
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-screen w-full bg-black opacity-50 flex items-center justify-center">
  <div className="flex gap-4 text-white text-lg font-semibold text-[3em]">
    About US
  </div>
</div>



    </div>
    <Introduction/>
   <Service/>
   <EmailContact />
    <AboutUS />
    <BritishTravelAwards />
    <WhastappChat/>
   
     
    
    </div>
  );
}
