import { useState, useEffect } from "react";

// Import images
import img1 from "../assets/images/contactus.jpeg";
import img2 from "../assets/images/home-hero-2.webp";
import img3 from "../assets/images/home-hero-3.webp";
import Navbar from "../Component/navbar"
import Location from "../Component/ContactUScontainer/Location";
import Introduction from "../Component/aboutuspagecontainer/Introduction";
import EmailContact from "../Component/Homecontainer/EmailContact";
import AboutUS from "./Homecontainer/aboutus";
import BritishTravelAwards from "./Homecontainer/britishTravelAward";
import { FaBox, FaPlane } from "react-icons/fa";
import ContactForm from "./ContactUScontainer/ContactForm";
import WhastappChat from "./Homecontainer/whatsapp";


export default function ContactUS() {
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
    <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] relative">
  {/* Image - this part is fine */}
  <img
    src={images[currentIndex]}
    alt="Hero"
    className="w-full h-full object-cover transition-opacity duration-1000"
  />

  {/* Dots - could be smaller on mobile */}
  <div className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 flex flex-col space-y-2">
    {images.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentIndex(index)}
        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
          index === currentIndex ? "bg-white" : "bg-gray-400"
        } hover:bg-white transition-colors duration-300`}
      />
    ))}
  </div>

  {/* Responsive text */}
  <div className="absolute bottom-[40%] left-1/2 transform -translate-x-1/2 flex items-center justify-center">
    <div className="text-white font-semibold text-2xl sm:text-4xl lg:text-6xl text-center px-4">
      Contact Us
    </div>
  </div>
</div>
    <Location/>
    <ContactForm/>
   <EmailContact />
    <AboutUS />
    <BritishTravelAwards />
    <WhastappChat/>
   
     
    
    </div>
  );
}
