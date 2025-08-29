import React, { useState } from 'react';
import Img from '../../assets/british-travel-award/bta-usa.svg';
import InclusiveHoliday from '../../assets/british-travel-award/bta-all-inclusive-holidays.svg';
import NorthenEurop from '../../assets/british-travel-award/bta-central-northern-europe.svg';
import CityShort from '../../assets/british-travel-award/bta-city-short-breaks.svg';
import SouthesatErupoeh from '../../assets/british-travel-award/bta-east-southeast-europe.svg';
import CentrelAsia from '../../assets/british-travel-award/bta-far-east-central-asia.svg';
import IndianOcean from '../../assets/british-travel-award/bta-indian-ocean.svg';
import Nordic from '../../assets/british-travel-award/bta-nordic-destinations.svg';
import SouthEast from '../../assets/british-travel-award/bta-southeast-asia.svg';
import SportTuar from '../../assets/british-travel-award/bta-sport-tours-holidays.svg';

const BritishTravelAwards = () => {
  // Sample awards data - replace with your actual images
  const awards = [
    {
      id: 1,
      image: Img,
      title: 'Best Travel Company',
      subtitle: 'U.S.A'
    },
    {
      id: 2,
      image: InclusiveHoliday,
      title: 'Best Travel Company',
      subtitle: 'all inclusive holidays'
    },
    {
      id: 3,
      image: NorthenEurop,
      title: 'Best Travel Company',
      subtitle: 'central northern europe'
    },
    {
      id: 4,
      image: CityShort,
      title: 'Best Travel Company',
      subtitle: 'city short breaks'
    },
    {
      id: 5,
      image: SouthesatErupoeh,
      title: 'Best Travel Company',
      subtitle: 'east southeast europe'
    },
    {
      id: 6,
      image: CentrelAsia,
      title: 'Best Travel Company',
      subtitle: 'far east central asia'
    },
    {
      id: 7,
      image: IndianOcean,
      title: 'Best Travel Company',
      subtitle: 'indian ocean'
    },
    {
      id: 8,
      image: Nordic,
      title: 'Best Travel Company',
      subtitle: 'nordic destinations'
    },
    {
      id: 9,
      image: SouthEast,
      title: 'Best Travel Company',
      subtitle: 'southeast asia'
    },
    {
      id: 10,
      image: SportTuar,
      title: 'Best Travel Company',
      subtitle: 'sport tours holidays'
    }
  ];


  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 2;
  const totalSlides = Math.ceil(awards.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getCurrentItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return awards.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <div>
    <div className="bg-white py-12 px-6">
      <div className=" mx-auto">
        <div className="grid  lg:grid-cols-2 gap-8 items-center  ">
          
          {/* Left Side - Awards Carousel */}
          <div className="relative w-[50%] ">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">British Travel Awards</h2>
            
            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-50"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-50"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Awards Display */}
              <div className="flex justify-center gap-6 px-12 py-4">
                {getCurrentItems().map((award) => (
                  <div key={award.id} className="flex flex-col items-center">
                    <div className="w-32 h-32  rounded-full flex items-center justify-center mb-3">
                      {/* Replace with actual image */}
                      
                      {/* Uncomment and use this when you have actual images */}
                      {<img 
                        src={award.image} 
                        alt={award.title}
                        className="w-[150px] h-[100px] object-contain"
                      /> }
                    </div>
                    <p className="text-sm font-semibold text-center text-gray-800 text-[0.7em]">Best Travel Company</p>
                    <p className="text-xs text-center text-gray-600 mt-1 text-[0.7em]">{award.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-600 w-8' // Active dot is wider
                      : 'bg-gray-300 w-2' // Inactive dots are smaller
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className=' ml-[-200px]'>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Your Award-Winning Partner for Holidays & Flights
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              All flights and packages, purchased from Travel Center in and departing from the UK, are protected under 
              our ATOL 3517 by the Civil Aviation Authority (CAA), except for scheduled flights when e-tickets are sent 
              to you on the day of payment. This website is operated by Moresand Ltd. t/a Travel Center registered in 
              England and Wales 2114691, Head Office, 12 Stephen Mews, London W1T 1AH.
            </p>

            {/* Partner Logos */}
            <div className="flex flex-wrap items-center gap-4">
              {/* ABTA Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-12 h-8 bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
                  ABTA
                </div>
                <span className="text-xs text-gray-500">ABTA No. P1234</span>
              </div>

              {/* IATA Logo */}
              <div className="w-12 h-8 bg-red-600 text-white text-xs flex items-center justify-center font-bold rounded">
                IATA
              </div>

              {/* British Airways Logo */}
              <div className="text-xs text-gray-600 font-semibold">BRITISH AIRWAYS</div>

              {/* Payment Methods */}
              <div className="flex space-x-2 ml-auto">
                <div className="w-8 h-6 bg-blue-600 text-white text-xs flex items-center justify-center">VISA</div>
                <div className="w-8 h-6 bg-red-600 text-white text-xs flex items-center justify-center">MC</div>
                <div className="w-8 h-6 bg-blue-500 text-white text-xs flex items-center justify-center">AMEX</div>
                <div className="w-8 h-6 bg-gray-800 text-white text-xs flex items-center justify-center">Pay</div>
                <div className="w-8 h-6 bg-green-500 text-white text-xs flex items-center justify-center">G</div>
                <div className="w-12 h-6 bg-gray-700 text-white text-xs flex items-center justify-center">Direct</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div><div className="bg-gray-200 text-center flex items-center justify-center h-16">
  © 2009 - 2025 Travel Center. All Rights Reserved.
</div></div>
  );
};

export default BritishTravelAwards;