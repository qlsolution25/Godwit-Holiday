import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HolidaysByMonthCarousel() {
  const [currentMonth, setCurrentMonth] = useState(0);

  const monthsData = [
    {
      id: 0,
      name: "January",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
      description: "Dubai Skyline - Perfect winter escape"
    },
    {
      id: 1,
      name: "February",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop",
      description: "Safari Adventures - Dry season wildlife"
    },
    {
      id: 2,
      name: "March",
      image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=400&h=300&fit=crop",
      description: "Japan Cherry Blossoms - Spring blooms"
    },
    {
      id: 3,
      name: "April",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop",
      description: "Bali Temples - Perfect weather season"
    },
    {
      id: 4,
      name: "May",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400&h=300&fit=crop",
      description: "Machu Picchu - Ideal hiking conditions"
    },
    {
      id: 5,
      name: "June",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
      description: "Cappadocia - Hot air balloon season"
    },
    {
      id: 6,
      name: "July",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&h=300&fit=crop",
      description: "Greek Islands - Summer paradise"
    },
    {
      id: 7,
      name: "August",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
      description: "Norwegian Fjords - Midnight sun season"
    },
    {
      id: 8,
      name: "September",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      description: "Maldives - Post-monsoon perfection"
    },
    {
      id: 9,
      name: "October",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      description: "Seychelles - Calm seas return"
    },
    {
      id: 10,
      name: "November",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&h=300&fit=crop",
      description: "Thailand - Cool season begins"
    },
    {
      id: 11,
      name: "December",
      image: "https://images.unsplash.com/photo-1551524164-d526a50ba6be?w=400&h=200&fit=crop",
      description: "Swiss Alps - Winter wonderland"
    }
  ];

  const nextMonth = () => {
    setCurrentMonth((prev) => (prev + 1) % monthsData.length);
  };

  const prevMonth = () => {
    setCurrentMonth((prev) => (prev - 1 + monthsData.length) % monthsData.length);
  };

  const goToMonth = (monthIndex) => {
    setCurrentMonth(monthIndex);
  };

  // Calculate visible months (show 7 at a time)
  const getVisibleMonths = () => {
    const visibleCount = 7;
    const visible = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const monthIndex = (currentMonth + i) % monthsData.length;
      visible.push(monthsData[monthIndex]);
    }
    
    return visible;
  };

  const visibleMonths = getVisibleMonths();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">Holidays by Month</h1>
        <div className="w-16 h-1 bg-pink-500 mx-auto"></div>
      </div>

      {/* Main Carousel Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevMonth}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 hover:bg-gray-50"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
        
        <button
          onClick={nextMonth}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 hover:bg-gray-50"
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>

        {/* Month Cards Container */}
        <div className="overflow-hidden">
          <div className="flex space-x-4 px-16">
            {visibleMonths.map((month, index) => (
              <div
                key={`${month.id}-${index}`}
                className="flex-shrink-0 w-48 h-80 relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => goToMonth(month.id)}
              >
                {/* Background Image */}
                <div
                  className="w-full h-full rounded-2xl overflow-hidden shadow-lg relative"
                  style={{
                    backgroundImage: `url(${month.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Month Name */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-xl font-bold text-center">
                      {month.name}
                    </h3>
                  </div>

                  {/* Hover Description */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <p className="text-white text-center text-sm">
                      {month.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {monthsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToMonth(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentMonth
                  ? "bg-pink-500 w-6"
                  : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Current Month Info */}
      {/* <div className="text-center mt-8">
        <div className="bg-white rounded-lg p-6 shadow-md inline-block">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Best Time to Visit: {monthsData[currentMonth].name}
          </h3>
          <p className="text-gray-600">
            {monthsData[currentMonth].description}
          </p>
          <button className="mt-4 bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200">
            Explore {monthsData[currentMonth].name} Deals
          </button>
        </div>
      </div> */}
    </div>
  );
}