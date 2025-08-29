import React, { useState, useEffect } from 'react';
import { X, Settings, Check } from 'lucide-react';
import Navbar from "../Component/navbar"
import EmailContact from "./Homecontainer/EmailContact";
import AboutUS from "./Homecontainer/aboutus";
import BritishTravelAwards from "./Homecontainer/britishTravelAward";
import WhastappChat from "./Homecontainer/whatsapp";
import img1 from "../assets/images/cookie-policy-main.png";
import img2 from "../assets/images/home-hero-2.webp";
import img3 from "../assets/images/home-hero-3.webp";

const CookieBanner = ({ onAcceptAll, onOpenSettings, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-700">
            We use cookies to enhance your travel planning experience and provide personalized recommendations. 
            <a href="#cookie-policy" className="text-blue-600 hover:text-blue-800 underline ml-1">
              Learn more about our cookie policy
            </a>
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={onOpenSettings}
            className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            <Settings className="w-4 h-4 inline mr-1" />
            Cookie Settings
          </button>
          <button
            onClick={onAcceptAll}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Check className="w-4 h-4 inline mr-1" />
            Accept All
          </button>
        </div>
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 sm:hidden text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const CookiePolicy = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  
    const images = [img1, img2, img3];
    const [currentIndex, setCurrentIndex] = useState(0);
    
     const [selected, setSelected] = useState("package");

  useEffect(() => {
    const consent = localStorage.getItem('godwit_cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('godwit_cookie_consent', 'all');
    setShowBanner(false);
  };

  const handleOpenSettings = () => {
    setShowPreferences(true);
    setShowBanner(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
      
    </div>
  </div>
</div>

      {/* Main Content */}
     
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-gray-600">
              <strong>Last updated:</strong> August 26, 2025
            </p>
            <p className="mt-4 text-gray-700">
              This Cookie Policy explains what cookies are, how Godwit Holidays uses them to enhance your travel planning experience, 
              and how you can control them. This policy should be read together with our{' '}
              <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">
                Privacy Policy
              </a>.
            </p>
          </div>

          {/* What Are Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies?</h2>
            <div className="prose text-gray-700">
              <p className="mb-4">
                Cookies are small text files stored on your device by websites you visit. They help websites
                function properly, remember your preferences, and understand how visitors use the site to improve services.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
                <p className="mb-2 text-blue-900">
                  <strong>Session cookies</strong> are temporary and deleted when you close your browser.
                </p>
                <p className="text-blue-900">
                  <strong>Persistent cookies</strong> remain on your device until they expire or you delete them.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How Godwit Holidays Uses Cookies</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-gray-400 bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Strictly Necessary Cookies</h3>
                <p className="text-gray-700">
                  Essential for core website functionality including security, navigation, booking forms, and payment processing.
                  These cookies cannot be disabled as they are necessary for the website to work properly.
                </p>
              </div>

              <div className="border-l-4 border-blue-400 bg-blue-50 p-4">
                <h3 className="font-semibold text-blue-800 mb-2">Travel Functionality Cookies</h3>
                <p className="text-blue-700">
                  Remember your travel preferences such as preferred destinations, budget ranges, travel dates, 
                  accommodation types, and language settings to personalize your experience.
                </p>
              </div>

              <div className="border-l-4 border-gray-400 bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Booking & Consultation Cookies</h3>
                <p className="text-gray-700">
                  Store information about your travel enquiries, itinerary customizations, and consultation progress 
                  to ensure a seamless booking experience across multiple sessions.
                </p>
              </div>

              <div className="border-l-4 border-blue-400 bg-blue-50 p-4">
                <h3 className="font-semibold text-blue-800 mb-2">Analytics & Performance Cookies</h3>
                <p className="text-blue-700">
                  Help us understand how visitors use our website, which travel destinations are most popular, 
                  and how we can improve our services and user experience.
                </p>
              </div>

              <div className="border-l-4 border-gray-400 bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Marketing & Personalization Cookies</h3>
                <p className="text-gray-700">
                  Deliver relevant travel recommendations, special offers, and marketing content based on your interests. 
                  These help us show you travel packages that match your preferences.
                </p>
              </div>
            </div>
          </section>

          {/* Travel-Specific Uses */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Travel-Specific Cookie Uses</h2>
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 border border-blue-200 rounded-lg p-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Location Services:</strong> Remember your location preferences for suggesting nearby attractions and travel options</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Customer Support:</strong> Enable live chat functionality and maintain conversation history during support sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Social Media Integration:</strong> Allow sharing of travel experiences and destinations on social platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Booking Integration:</strong> Maintain connection with booking partners and suppliers for real-time availability and pricing</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-700 mb-4">
              Some cookies may be set by third parties including analytics providers, booking platforms, 
              payment processors, social media networks, and advertising partners. We do not control these cookies.
            </p>
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
              <p className="text-gray-800">
                <strong>Note:</strong> Please review the respective third-party privacy policies for details about their cookie practices.
              </p>
            </div>
          </section>

          {/* Your Choices */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Cookie Choices</h2>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Consent Management</h3>
            <p className="text-gray-700 mb-4">
              On your first visit, we display a cookie banner that lets you accept all cookies or set specific preferences.
              You can change your choices at any time by clicking the "Cookie Settings" link in our website footer.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">Browser Controls</h3>
            <p className="text-gray-700 mb-4">
              You can block or delete cookies through your browser settings. However, please note that some website 
              features, particularly booking and personalization features, may not work properly without cookies.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <button 
                onClick={handleOpenSettings}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Manage Cookie Preferences
              </button>
            </div>
          </section>

          {/* Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie Retention</h2>
            <p className="text-gray-700">
              Cookie lifespans vary depending on their purpose. Session cookies expire when you close your browser, 
              while persistent cookies remain until their set expiration date or until you delete them. 
              Most of our cookies are set to expire within 12 months, though some preference cookies may last longer.
            </p>
          </section>

          {/* Updates */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
            <p className="text-gray-700">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, 
              or our business practices. Changes will be posted on this page with an updated date.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <div className="text-gray-700">
              <p className="font-semibold text-gray-900 mb-2">Godwit Holidays</p>
              <p className="mb-2">
                Email: <a href="mailto:info@godwitholidays.com" className="text-blue-600 hover:text-blue-800">info@godwitholidays.com</a>
              </p>
              <p>
                Website: <a href="https://www.godwitholidays.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">www.godwitholidays.com</a>
              </p>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Godwit Holidays. All rights reserved.</p>
            <button 
              onClick={() => setShowPreferences(true)}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      <CookieBanner
        isVisible={showBanner}
        onAcceptAll={handleAcceptAll}
        onOpenSettings={handleOpenSettings}
        onClose={() => setShowBanner(false)}
      />

      {/* Cookie Preferences Modal (placeholder) */}
      {showPreferences && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold mb-4">Cookie Preferences</h3>
            <p className="text-gray-600 mb-4">
              Manage your cookie preferences here. You can enable or disable different types of cookies below.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => setShowPreferences(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  setShowPreferences(false);
                  handleAcceptAll();
                }}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
        <EmailContact />
    <AboutUS />
    <BritishTravelAwards />
    <WhastappChat/>
    </div>
  );
};

export default CookiePolicy;