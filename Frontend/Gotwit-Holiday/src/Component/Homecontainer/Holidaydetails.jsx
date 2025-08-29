import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plane, Hotel, Car, Utensils, Wifi, ShoppingBag, MapPin, Camera } from "lucide-react";

export default function HolidayDealsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  const holidayDeals = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=250&fit=crop",
      title: "Japan And Bali",
      subtitle: "Journey: Japan To Bali's Wonders",
      nights: 14,
      price: 1599,
      currency: "£",
      amenities: [
        { icon: Hotel, label: "Accommodations" },
        { icon: Plane, label: "Flights" },
        { icon: Car, label: "Transfers" },
        { icon: Utensils, label: "Meals" }
      ]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=250&fit=crop",
      title: "Dubai, Singapore & Bali",
      subtitle: "Elegance Across Three Destinations",
      nights: 14,
      price: 1399,
      currency: "£",
      amenities: [
        { icon: Hotel, label: "Accommodations" },
        { icon: Plane, label: "Flights" },
        { icon: ShoppingBag, label: "Shopping" },
        { icon: Wifi, label: "WiFi" }
      ]
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=250&fit=crop",
      title: "Thailand With Elephant Hills",
      subtitle: "14 Nights, Thai Wonders",
      nights: 14,
      price: 1359,
      currency: "£",
      amenities: [
        { icon: Hotel, label: "Accommodations" },
        { icon: Plane, label: "Flights" },
        { icon: Car, label: "Transfers" },
        { icon: Camera, label: "Tours And Excursions" }
      ]
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      title: "Maldives Paradise",
      subtitle: "Luxury Resort Experience",
      nights: 7,
      price: 2299,
      currency: "£",
      amenities: [
        { icon: Hotel, label: "Accommodations" },
        { icon: Plane, label: "Flights" },
        { icon: Utensils, label: "All Inclusive" },
        { icon: Wifi, label: "WiFi" }
      ]
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c2e?w=400&h=250&fit=crop",
      title: "Greek Islands Hopping",
      subtitle: "Santorini & Mykonos Adventure",
      nights: 10,
      price: 1899,
      currency: "£",
      amenities: [
        { icon: Hotel, label: "Accommodations" },
        { icon: Plane, label: "Flights" },
        { icon: Car, label: "Transfers" },
        { icon: MapPin, label: "Island Tours" }
      ]
    }
  ];

  // Responsive slides calculation
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesToShow(1); // Mobile: 1 card
      } else if (width < 1024) {
        setSlidesToShow(2); // Tablet: 2 cards
      } else {
        setSlidesToShow(3); // Desktop: 3 cards
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  // Calculate max slides based on current slidesToShow
  const maxSlides = holidayDeals.length - slidesToShow + 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const goToSlide = (index) => {
    if (index < maxSlides) {
      setCurrentSlide(index);
    }
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [maxSlides]);

  // Touch/Swipe support
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 bg-gray-50 relative z-[-1]">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
          Top-Selling Holiday Deal
        </h2>
        <div className="w-16 h-1 bg-pink-500 mx-auto"></div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
        <button
          onClick={prevSlide}
          className="hidden sm:block absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 hover:bg-gray-50"
        >
          <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6 text-gray-600" />
        </button>
        
        <button
          onClick={nextSlide}
          className="hidden sm:block absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 hover:bg-gray-50"
        >
          <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6 text-gray-600" />
        </button>

        {/* Cards Container with Touch Support */}
        <div 
          className="overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` 
            }}
          >
            {holidayDeals.map((deal, index) => (
              <div
                key={deal.id}
                className={`flex-shrink-0 px-2 sm:px-3 ${
                  slidesToShow === 1 ? 'w-full' : 
                  slidesToShow === 2 ? 'w-1/2' : 'w-1/3'
                }`}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Image */}
                  <div className="relative h-40 sm:h-48">
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    {/* Title and Subtitle */}
                    <div className="mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
                        {deal.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{deal.subtitle}</p>
                    </div>

                    {/* Amenities Icons */}
                    <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                      {deal.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center text-gray-500">
                          <amenity.icon className="h-4 w-4" />
                        </div>
                      ))}
                    </div>

                    {/* Amenities Text - Hidden on very small screens */}
                    <p className="hidden sm:block text-xs text-gray-500 mb-4">
                      {deal.amenities.map(a => a.label).join(", ")}
                    </p>

                    {/* Price and Nights */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div>
                        <span className="text-pink-500 font-bold text-base sm:text-lg">
                          {deal.nights} Nights
                        </span>
                        <div className="flex items-center space-x-1">
                          <span className="text-sm text-gray-500">From</span>
                          <span className="text-pink-500 font-bold text-lg sm:text-xl">
                            {deal.currency}{deal.price.toLocaleString()} PP
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* View Deal Button */}
                    <button className="w-full bg-blue-700 text-white py-2.5 sm:py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors duration-200 text-sm sm:text-base">
                      VIEW DEAL
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {Array.from({ length: maxSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-pink-500 w-6 sm:w-8"
                  : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* See More Button */}
      <div className="flex justify-center p-4 sm:p-5">
        <button className="bg-white text-pink-500 border border-pink-500 rounded-[20px] px-6 py-2.5 hover:bg-pink-500 hover:text-white transition-colors duration-200 text-sm sm:text-base">
          See More Deals
        </button>
      </div>
    </div>
  );
}