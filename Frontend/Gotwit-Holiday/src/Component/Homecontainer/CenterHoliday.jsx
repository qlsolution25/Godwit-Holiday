import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function MultiCentreCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const holidayDestinations = [
    {
      id: 1,
      title: "Europe Multi Centre Holidays 2025",
      description: "Our multi-destination holidays are the best way to experience more in one fell swoop. Europe multi-centre holidays have become a popular escape route for travellers in the UK, and it's not surprising!",
      fullDescription: "With over 50 countries under its name, Europe has something in store for everyone. We can help you choose and combine places for the perfect multi-destination holiday. So, take a look at our...",
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=600&h=400&fit=crop",
      buttonText: "Explore More"
    },
    {
      id: 2,
      title: "Asia Multi Centre Adventures 2025",
      description: "Discover the vibrant cultures, ancient temples, and modern marvels of Asia in one incredible journey. From bustling Tokyo streets to serene Bali beaches.",
      fullDescription: "Experience the perfect blend of tradition and innovation across multiple Asian destinations. Visit Japan's cherry blossoms, Thailand's golden temples, and Singapore's futuristic skyline all in one trip...",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      buttonText: "Discover Asia"
    },
    {
      id: 3,
      title: "Americas Coast to Coast 2025",
      description: "Journey across the diverse landscapes of the Americas, from the bustling cities of the East Coast to the stunning natural wonders of the West.",
      fullDescription: "Experience New York's skyline, the grandeur of the Grand Canyon, and the beaches of California. Our Americas multi-centre holidays offer the ultimate road trip experience...",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop",
      buttonText: "Explore Americas"
    },
    {
      id: 4,
      title: "Middle East Luxury Escapes 2025",
      description: "Combine the modern luxury of Dubai with the ancient wonders of Jordan and the cultural richness of Morocco in one unforgettable journey.",
      fullDescription: "From Dubai's towering skyscrapers to Petra's ancient ruins and Marrakech's vibrant souks, experience the perfect blend of luxury, history, and culture...",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c2e?w=600&h=400&fit=crop",
      buttonText: "Luxury Awaits"
    },
    {
      id: 5,
      title: "African Safari & Beach 2025",
      description: "Experience the thrill of an African safari followed by relaxation on pristine beaches. The perfect combination of adventure and tranquility.",
      fullDescription: "Witness the Big Five in Kenya's Masai Mara, then unwind on Zanzibar's white sand beaches. Our Africa multi-centre holidays offer the ultimate contrast of experiences...",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop",
      buttonText: "Safari Adventure"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % holidayDestinations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + holidayDestinations.length) % holidayDestinations.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentDestination = holidayDestinations[currentSlide];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-2">Discover Our Multi Centre Holidays</h2>
        <div className="w-16 h-1 bg-pink-500 mx-auto"></div>
      </div>

      {/* Main Carousel Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 hover:bg-gray-50"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 hover:bg-gray-50"
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>

        {/* Main Content Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row min-h-[400px]">
            {/* Text Content */}
            <div className="flex-1 p-8 lg:p-12 text-white flex flex-col justify-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                {currentDestination.title}
              </h3>
              <div className="w-12 h-1 bg-white mb-6"></div>
              
              <p className="text-blue-100 mb-4 text-base lg:text-lg leading-relaxed">
                {currentDestination.description}
              </p>
              
              <p className="text-blue-100 mb-8 text-sm lg:text-base leading-relaxed opacity-90">
                {currentDestination.fullDescription}
              </p>

              <button className="inline-flex items-center space-x-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 w-fit group">
                <span>{currentDestination.buttonText}</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Image */}
            <div className="flex-1 relative">
              <img
                src={currentDestination.image}
                alt={currentDestination.title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-700/20"></div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {holidayDestinations.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-blue-600 w-6"
                  : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      
    </div>
  );
}