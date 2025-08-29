import { ChevronDown, Phone, MapPin, Menu, X } from "lucide-react";
import logo from "../assets/Logo/logo.jpg"; 
import React, { useState, useEffect } from "react";

export default function TravelNavbar() {
  const [isSmall, setIsSmall] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    {
      label: "Holidays",
      hasDropdown: [
        { name: "Holiday Destinations", link: "#" },
        { name: "Holiday Types", link: "#" },
        { name: "Holiday by Month", link: "#" },
        { name: "Holiday by Regions", link: "#" },
        { name: "Hotels", link: "#" },
        { name: "All Holiday Deals", link: "#" },
        { name: "Cheap Holidays", link: "/GODWIT-HOLIDAYS/cheap-holidays" }
      ]
    },
    {
      label: "Flights",
      hasDropdown: [
        { name: "Flight Destinations", link: "#" },
        { name: "Flight Types", link: "#" },
        { name: "Airlines", link: "#" },
        { name: "Flight Deals", link: "/GODWIT-HOLIDAYS/flight-deals" }
      ]
    },
    {
      label: "Cruise",
      hasDropdown: [
        { name: "Cruise Holidays", link: "#" },
        { name: "Grand Prix Cruises", link: "#" },
        { name: "Cruise Ports", link: "#" },
        { name: "Cruise Lines", link: "/GODWIT-HOLIDAYS/cruise-lines" }
      ]
    },
    {
      label: "Promotions",
      hasDropdown: [
        { name: "Deals", link: "#" },
        { name: "Special Offers", link: "/GODWIT-HOLIDAYS/special-offers" }
      ]
    },
    {
      label: "More",
      hasDropdown: [
        { name: "About Us", link: "/GODWIT-HOLIDAYS/about-us" },
        { name: "Contact Us", link: "/GODWIT-HOLIDAYS/contact-us" }
      ]
    }
  ];
  
  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <nav className="bg-blue-700 text-white fixed w-full z-[9999] shadow-lg">
      {/* Top Bar */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[100px]">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <img
                src={logo}
                alt="Logo"
                className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-contain"
              />
            </div>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded-full transition-colors duration-200">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                </div>
                <span className="font-medium">Start Planning</span>
              </button>

              <a 
                href="tel:02076127222" 
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full transition-colors duration-200"
              >
                <Phone className="h-4 w-4 text-pink-500" />
                <span className="font-medium text-blue-700">0207 612 7222</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-blue-700 p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <div className="relative group">
              <a 
                href="/GODWIT-HOLIDAYS/" 
                className="flex items-center space-x-1 px-3 py-2 text-white hover:text-blue-200 transition-colors duration-200"
              >
                <span className="font-medium">Home</span>
              </a>
            </div>
            
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className="flex items-center space-x-1 px-3 py-2 text-white hover:text-blue-200 transition-colors duration-200">
                  <span className="font-medium">{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />}
                </button>

                {/* Desktop Dropdown */}
                {Array.isArray(item.hasDropdown) && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                    {item.hasDropdown.map((subItem, i) => (
                      <a 
                        key={i} 
                        href={subItem.link} 
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-800 rounded-md transition-colors duration-200">
              <MapPin className="h-4 w-4" />
              <span className="font-medium">Multi Centre</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-700 border-t border-blue-600">
          <div className="px-4 py-2 space-y-1">
            {/* Mobile Start Planning Button */}
            <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-pink-500 hover:bg-pink-600 rounded-full transition-colors duration-200 mb-4">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
              </div>
              <span className="font-medium">Start Planning</span>
            </button>

            {/* Mobile Phone */}
            <a 
              href="tel:02076127222" 
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 border border-blue-500 rounded-full transition-colors duration-200 mb-4"
            >
              <Phone className="h-4 w-4 text-pink-500" />
              <span className="font-medium">0207 612 7222</span>
            </a>

            {/* Mobile Home */}
            <a 
              href="/GODWIT-HOLIDAYS/" 
              className="block px-3 py-2 text-white hover:bg-blue-600 rounded-md"
            >
              Home
            </a>

            {/* Mobile Navigation Items */}
            {navItems.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full flex items-center justify-between px-3 py-2 text-white hover:bg-blue-600 rounded-md"
                >
                  <span className="font-medium">{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openDropdown === index ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </button>
                
                {/* Mobile Dropdown */}
                {Array.isArray(item.hasDropdown) && openDropdown === index && (
                  <div className="pl-4 pb-2">
                    {item.hasDropdown.map((subItem, i) => (
                      <a 
                        key={i} 
                        href={subItem.link} 
                        className="block px-3 py-2 text-blue-200 hover:text-white hover:bg-blue-600 rounded-md text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Multi Centre */}
            <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 hover:bg-blue-800 rounded-md transition-colors duration-200 mt-4">
              <MapPin className="h-4 w-4" />
              <span className="font-medium">Multi Centre</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}