import { useState, useEffect } from "react";

// Import images
import img1 from "../assets/images/home-hero-1.webp";
import img2 from "../assets/images/home-hero-2.webp";
import img3 from "../assets/images/home-hero-3.webp";
import Navbar from "./navbar"
import HolidayDealsCarousel from "./Homecontainer/Holidaydetails";
import CenterHoliday from "./Homecontainer/CenterHoliday";
import HolidayFilterComponent from "./Homecontainer/Idealholiday";
import FeaturedFaresComponent  from "./Homecontainer/Featarefare";
import TrustEvidence from "./Homecontainer/Trustedevidence";
import HolidaysByMonthCarousel from "./Homecontainer/Holidaymonths";
import Effortless from "./Homecontainer/Effortless";
import LowDepositHolidays from "./Homecontainer/LowDepoHoliday";
import FeaturedCruiseDeals from "./Homecontainer/FeaterCruiseDeal";
import FandQ from "./Homecontainer/F&Q";
import EmailContact from "./Homecontainer/EmailContact";
import AboutUS from "./Homecontainer/aboutus";
import BritishTravelAwards from "./Homecontainer/britishTravelAward";
import { FaBox, FaPlane } from "react-icons/fa";
import HolidayFlightCard from "./Homecontainer/Holidayflightcard";
import WhastappChat from "./Homecontainer/whatsapp";
import Holidyfligtcardbck from "./Homecontainer/Holidyfligtcardbck";

export default function ImageSlider() {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState("package");
  
  // Responsive state
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      // You can adjust this breakpoint as needed (640px = Tailwind's sm breakpoint)
      setIsMobile(window.innerWidth < 640);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener for resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Image slider effect (only run when not mobile for performance)
  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [images.length, isMobile]);

  return (
    <div>
      <Navbar/>
      <div className="relative h-[130px]"></div>
      
      {/* Conditional rendering based on screen size */}
      {isMobile ? (
        // Mobile View
        <Holidyfligtcardbck/>
      ) : (
        // Desktop/Tablet View
        <div className="w-full h-[500px] relative">
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
          
          {/* Overlay Card */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[250px] w-[90%] bg-gray-200 bg-opacity-80 justify-center rounded-t-[100px]">
            <div className="flex gap-4">
              <HolidayFlightCard />
            </div>
          </div>
        </div>
      )}
    
      {/* Rest of your components */}
      <HolidayDealsCarousel />
      <CenterHoliday />
      <HolidayFilterComponent />
      {/* <FeaturedFaresComponent/> */}
      <TrustEvidence />
      <HolidaysByMonthCarousel />
      <Effortless></Effortless>
      {/* <LowDepositHolidays /> */}
      {/* <FeaturedCruiseDeals /> */}
      <FandQ />
      <EmailContact />
      <AboutUS />
      <BritishTravelAwards />
      <WhastappChat/>
    </div>
  );
}