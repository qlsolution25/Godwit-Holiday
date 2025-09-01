import { useState } from 'react';
import { ChevronRight, ChevronLeft, Menu, X } from 'lucide-react';
import Hom from "../Home"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function TravelNavigationMenu() {
  const [showHolidayDestinations, setShowHolidayDestinations] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const quickLinksItems = [
    'Holiday Destinations',
    'Holiday Countries', 
    'Cruise Holidays',
    'Flight Destinations',
    'Flight Routes',
    'Top Airlines',
    'Hotels'
  ];

  const informationPolicies = [
    { name: 'Privacy Policy', link: "/Godwit-Holiday/Privacy-Policies"},
    { name: 'Cookie Policy', link: "/Godwit-Holiday/Cookie-Policy"},
    { name: 'Terms & Conditions', link: "/Godwit-Holiday/Terms-And-Conditions"},
    { name: 'Payment Policy', link: "/Godwit-Holiday/Payment-Policy"},
    { name: 'Key Rights under PTR', link: "/#"},
    { name: 'Sitemap', link: "/Godwit-Holiday/Site-Map"}
  ];

  const servicesSupport = [
    { name: 'About Us', link: "/Godwit-Holiday/about-us" },
    { name: 'Contact Us', link: '/Godwit-Holiday/contact-us' },
    { name: 'Our Mission', link: '/Godwit-Holiday/Our-Mission' },
    { name: 'Travel Insurance', link: '/#' },
    { name: 'Social Proof', link: '/Godwit-Holiday/Social-Proof' },
    { name: 'Foreign Travel Advice', link: 'https://www.gov.uk/foreign-travel-advice' }
  ];

  const travelAssurance = [
    'ATOL Certificate',
    'ABTA Certificate',
    'IATA Certificate'
  ];

  const insightsOffers = [
    'Special Offers',
    'Blog',
    'Travel Brochures'
  ];

  const holidayRegions = {
    'Europe': [
      'Budapest Holidays',
      'Madrid Holidays',
      'Ibiza Holidays',
      'Santorini Holidays',
      'Paris Holidays',
      'Corfu Holidays'
    ],
    'Asia': [
      'Bali Holidays',
      'Bangkok Holidays',
      'Kuala Lumpur Holidays',
      'Hanoi Holidays',
      'Singapore Holidays',
      'Langkawi Holidays'
    ],
    'North America': [
      'Orlando Holidays',
      'Punta Cana Holidays',
      'Miami Holidays',
      'Cancun Holidays',
      'Alaska Holidays',
      'New York Holidays'
    ],
    'Middle East': [
      'Dubai Holidays',
      'Doha Holidays',
      'Abu Dhabi Holidays',
      'Sharm El Sheikh Holidays',
      'Istanbul Holidays'
    ],
    'Africa': [
      'Zanzibar Holidays',
      'Cape Town Holidays'
    ]
  };

  const handleHolidayDestinationsClick = () => {
    setShowHolidayDestinations(true);
  };

  const handleBackToQuickLinks = () => {
    setShowHolidayDestinations(false);
  };

  const handleQuickLinksClick = () => {
    setShowHolidayDestinations(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Mobile View Component
  const MobileView = () => (
    <div className="bg-white md:hidden">
      {/* Mobile Header */}
      <div className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between">
        <h3 className="font-semibold text-lg">Quick Link</h3>
        <button onClick={toggleMobileMenu} className="p-2">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="bg-white border-t">
          {!showHolidayDestinations ? (
            <div className="space-y-4 p-4">
              {/* Quick Links */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3 text-base">Quick Links</h4>
                <div className="space-y-2">
                  {quickLinksItems.map((item) => (
                    <button
                      key={item}
                      onClick={item === 'Holiday Destinations' ? handleHolidayDestinationsClick : undefined}
                      className="w-full text-left py-3 px-2 text-sm hover:bg-blue-100 rounded flex items-center justify-between group border-b border-blue-100 last:border-b-0"
                    >
                      <span className="text-blue-600">{item}</span>
                      <ChevronRight className="w-4 h-4 text-blue-400" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Information & Policies */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3 text-base">Information & Policies</h4>
                <div className="space-y-2">
                  {informationPolicies.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="block py-3 px-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-gray-100 rounded border-b border-gray-200 last:border-b-0"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Services & Support */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3 text-base">Services & Support</h4>
                <div className="space-y-2">
                  {servicesSupport.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="block py-3 px-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-gray-100 rounded border-b border-gray-200 last:border-b-0"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Insights and Offers */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3 text-base">Insights and Offers</h4>
                <div className="space-y-2">
                  {insightsOffers.map((item) => (
                    <button
                      key={item}
                      className="w-full text-left py-3 px-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-gray-100 rounded border-b border-gray-200 last:border-b-0"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            // Mobile Holiday Destinations View
            <div className="p-4">
              <div className="flex items-center mb-4">
                <button
                  onClick={handleBackToQuickLinks}
                  className="flex items-center text-blue-600 hover:text-blue-800 mr-3"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  <span className="text-sm font-medium">Back to Menu</span>
                </button>
              </div>
              
              <h3 className="font-semibold text-lg text-gray-800 mb-4">Holiday Destinations</h3>
              
              <div className="space-y-6">
                {Object.entries(holidayRegions).map(([region, destinations]) => (
                  <div key={region} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-base text-gray-800 border-b-2 border-red-400 pb-2 mb-3">
                      {region}
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {destinations.map((destination) => (
                        <button
                          key={destination}
                          className="text-left py-2 px-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-gray-100 rounded"
                        >
                          {destination}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  // Desktop View Component
  const DesktopView = () => (
   <div className="bg-white hidden md:block">
      {!showHolidayDestinations ? (
        // First Image Layout - Main Navigation
        <div className="flex">
          {/* Quick Links Section - Active */}
          <div className="bg-blue-600 text-white min-w-64">
            <div className="bg-blue-700 px-4 py-3 border-b border-blue-500">
              <button 
                onClick={handleQuickLinksClick}
                className="flex items-center justify-between w-full text-left hover:bg-blue-600 p-1 rounded"
              >
                <h3 className="font-semibold text-sm">Quick Links</h3>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="py-2">
              {quickLinksItems.map((item) => (
                <button
                  key={item}
                  onClick={item === 'Holiday Destinations' ? handleHolidayDestinationsClick : undefined}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-blue-700 flex items-center justify-between group"
                >
                  <span>{item}</span>
                  <ChevronRight className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                </button>
              ))}
            </div>
          </div>

          {/* Information & Policies */}
          <div className="bg-gray-100 min-w-56">
            <div className="px-4 py-3 border-b-2 border-red-400">
              <h3 className="font-semibold text-sm text-gray-800">Information & Policies</h3>
            </div>
            <div className="py-2">
              {informationPolicies.map((item,index) => (
                <button
                  key={index}
                  className="w-full text-left px-4 py-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-gray-200"
                >
                  <a 
          key={index} 
          href={item.link} 
          className="t hover:text-pink-500"
        >
          {item.name}
        </a>
                </button>
              ))}
            </div>
          </div>

          {/* Services & Support */}
          <div className="bg-gray-100 min-w-56">
            <div className="px-4 py-3 border-b-2 border-red-400">
              <h3 className="font-semibold text-sm text-gray-800">Services & Support</h3>
            </div>
            <div className="py-2">
              {servicesSupport.map((item,index) => (
                <button
                  key={index}
                  className="w-full text-left px-4 py-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-gray-200"
                >
                  <a 
          key={index} 
          href={item.link} 
          className="t hover:text-pink-500"
        >
          {item.name}
        </a>
                </button>
              ))}
            </div>
          </div>

          {/* Travel Assurance */}
          {/* <div className="bg-gray-100 min-w-56">
            <div className="px-4 py-3 border-b-2 border-red-400">
              <h3 className="font-semibold text-sm text-gray-800">Travel Assurance</h3>
            </div>
            <div className="py-2">
              {travelAssurance.map((item) => (
                <button
                  key={item}
                  className="w-full text-left px-4 py-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-gray-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div> */}

          {/* Insights and Offers */}
          <div className="bg-gray-100 min-w-56">
            <div className="px-4 py-3 border-b-2 border-red-400">
              <h3 className="font-semibold text-sm text-gray-800">Insights and Offers</h3>
            </div>
            <div className="py-2">
              {insightsOffers.map((item) => (
                <button
                  key={item}
                  className="w-full text-left px-4 py-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-gray-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Second Image Layout - Holiday Destinations Expanded
        <div className="flex">
          {/* Quick Links Section - Still showing but Holiday Destinations selected */}
          <div className="bg-blue-600 text-white min-w-64">
            <div className="bg-blue-700 px-4 py-3 border-b border-blue-500">
              <button 
                onClick={handleQuickLinksClick}
                className="flex items-center justify-between w-full text-left hover:bg-blue-600 p-1 rounded"
              >
                <h3 className="font-semibold text-sm">Quick Links</h3>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="py-2">
              <button
                onClick={handleBackToQuickLinks}
                className="w-full text-left px-4 py-2 text-sm bg-blue-800 flex items-center justify-between"
              >
                <span>Holiday Destinations</span>
                <ChevronRight className="w-3 h-3" />
              </button>
              {quickLinksItems.slice(1).map((item) => (
                <button
                  key={item}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-blue-700 flex items-center justify-between group"
                >
                  <span>{item}</span>
                  <ChevronRight className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                </button>
              ))}
            </div>
          </div>

          {/* Holiday Destinations Regional Display */}
          <div className="bg-gray-100 flex-1 p-6">
            <div className="grid grid-cols-5 gap-8">
              {Object.entries(holidayRegions).map(([region, destinations]) => (
                <div key={region}>
                  <div className="mb-4">
                    <h3 className="font-semibold text-sm text-gray-800 border-b-2 border-red-400 pb-1">
                      {region}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {destinations.map((destination) => (
                      <button
                        key={destination}
                        className="block text-left text-sm text-blue-600 hover:text-blue-800 hover:underline w-full"
                      >
                        {destination}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full">
      <MobileView />
      <DesktopView />
    </div>
  );
}//hidden md:block