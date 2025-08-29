import React, { useState } from 'react';

const GoogleMapComponent = () => {
  const [selectedLocation] = useState({
    name: "Seattle, Washington, USA",
    address: "Seattle, WA, USA",
    googleMapsUrl: "https://www.google.com/maps/place/Seattle,+WA,+USA/@47.6061389,-122.3328481,11z/data=!3m1!4b1!4m6!3m5!1s0x5490102c93e83355:0x102565466944d59a!8m2!3d47.6062095!4d-122.3320708!16zL20vMF9mY18"
  });

  const handleVisitMap = () => {
    window.open(selectedLocation.googleMapsUrl, '_blank');
  };

  const handlePhoneCall = () => {
    window.open('tel:+12076127222', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:info@travelcenter.uk', '_self');
  };

  return (
    <div className='p-20'>
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left Side - Contact Information */}
        <div className="p-6 bg-gray-50">
          {/* Address Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Address</h2>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="bg-blue-100 px-4 py-3 rounded-lg flex-1">
                <p className="text-sm text-gray-700 font-medium">
                  12 Stephen Mews, London W1T 1AH
                </p>
              </div>
            </div>
          </div>

          {/* Help Center Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Help Center</h3>
            <div className="border-b-2 border-red-500 w-12 mb-4"></div>
            <p className="text-sm text-gray-600 mb-6">
              Get immediate assistance for your travel queries from our customer care executives
            </p>

            {/* Phone Contact */}
            <div 
              className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200 mb-4 cursor-pointer hover:bg-blue-50 transition-colors"
              onClick={handlePhoneCall}
            >
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">0207 612 7222</p>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Email Contact */}
            <div 
              className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200 mb-6 cursor-pointer hover:bg-blue-50 transition-colors"
              onClick={handleEmailClick}
            >
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">godwitholidays@gmail.com</p>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Operating Hours */}
            <div className="text-sm text-gray-600">
              <p className="mb-1">
                <span className="font-medium text-gray-800">Monday to Friday</span> 8:00 am to 12 midnight
              </p>
              <p>
                <span className="font-medium text-gray-800">Sunday and Sunday</span> 8:00 am to 11:00 pm
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Google Map */}
        <div className="relative h-96 lg:h-full min-h-[400px]">
          {/* Google Map Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827374.1815147595!2d-124.65845537304688!3d47.60620989999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA%2C%20USA!5e0!3m2!1sen!2sus!4v1692820000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map showing Seattle, Washington"
            className="absolute inset-0"
          ></iframe>

          {/* Map Controls Overlay */}
          <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-2">
            
          </div>

          <div className="absolute top-14 left-4 bg-white rounded-lg shadow-lg p-2">
            
          </div>

          {/* Visit Map Button */}
          <div className="absolute bottom-4 right-4">
            
          </div>

          {/* Google Maps Logo (Required by Google Maps Terms) */}
          <div className="absolute bottom-4 left-4">
            <div className="bg-white px-2 py-1 rounded text-xs text-gray-600 shadow-lg flex items-center space-x-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335"/>
                <circle cx="12" cy="9" r="2.5" fill="white"/>
              </svg>
              <span>Google</span>
            </div>
          </div>

          {/* Location Marker Indicator */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="relative">
              <svg className="w-8 h-8 text-red-500 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" clipRule="evenodd"/>
                <circle cx="12" cy="9" r="2.5" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Attribution Footer (Required for Google Maps) */}
      <div className="px-4 py-2 bg-gray-100 text-xs text-gray-500 border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span>Keyboard shortcuts</span>
            <span>Map data ©2024 Google</span>
            <span>Terms</span>
            <button className="hover:underline">Report a map error</button>
          </div>
          <div className="flex items-center space-x-2">
            <span>Satellite</span>
            <span>Labels</span>
          </div>
        </div>
      </div>
    </div></div>
  );
};

export default GoogleMapComponent;