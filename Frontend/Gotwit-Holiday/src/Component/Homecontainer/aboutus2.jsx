import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Hom from "../Home"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function TravelNavigationMenu() {
  const [showHolidayDestinations, setShowHolidayDestinations] = useState(false);

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
  { name: 'Privacy Policy', link: "/GODWIT-HOLIDAYS/Privacy-Policies"},
  { name: 'Cookie Policy', link: "/GODWIT-HOLIDAYS/Cookie-Policy"},
  { name: 'Terms & Conditions', link: "/GODWIT-HOLIDAYS/Terms-And-Conditions"},
  { name: 'Payment Policy', link: "/GODWIT-HOLIDAYS/Payment-Policy"},
  { name: 'Key Rights under PTR', link: "/#"},
  { name: 'Sitemap', link: "/GODWIT-HOLIDAYS/Site-Map"}
  ];

  const servicesSupport = [
    { name: 'About Us', link: "/GODWIT-HOLIDAYS/about-us" },
    { name: 'Contact Us', link: '/GODWIT-HOLIDAYS/contact-us' },
    { name: 'Our Mission', link: '/GODWIT-HOLIDAYS/Our-Mission' },
    { name: 'Travel Insurance', link: '/#' },
    { name: 'Social Proof', link: '/GODWIT-HOLIDAYS/Social-Proof' },
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

  return (
    <div className="bg-white">
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
}