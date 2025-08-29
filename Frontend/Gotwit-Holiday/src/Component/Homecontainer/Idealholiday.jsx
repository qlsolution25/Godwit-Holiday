import { useState } from "react";
import { Plane, Hotel, Car, Utensils, Wifi, Users, Heart, MapPin } from "lucide-react";

export default function HolidayFilterComponent() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "Multi Centre Holidays",
    "F1 Holidays", 
    "Overwater Villa Holidays",
    "Luxury Holidays",
    "Beach Holidays",
    "Ski Holidays",
    "Theme Park Holidays",
    "Escorted Holidays",
    "Adults-Only Holidays", 
    "Honeymoon Holidays",
    "Family Holidays",
    "City Breaks",
    "All-Inclusive Holidays",
    "Safari Holidays",
    "Last-Minute Holidays",
    "Cruise Holidays",
    "Island Hopping Holidays"
  ];

  const holidayData = [
    {
      id: 1,
      title: "Greek Island Hopping",
      subtitle: "Discover Greece's Island Gems",
      nights: 9,
      price: 999,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=300&h=200&fit=crop",
      categories: ["Island Hopping Holidays", "Beach Holidays", "Multi Centre Holidays"],
      amenities: [Hotel, Plane]
    },
    {
      id: 2,
      title: "Thailand Island Hopping",
      subtitle: "Exploring Thailand's Hidden Gems",
      nights: 14,
      price: 1329,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=300&h=200&fit=crop",
      categories: ["Island Hopping Holidays", "Beach Holidays", "Honeymoon Holidays"],
      amenities: [Hotel, Plane, Car, Wifi]
    },
    {
      id: 3,
      title: "All Inclusive Maldives...",
      subtitle: "Unforgettable Vacation Between Islands",
      nights: 9,
      price: 2499,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
      categories: ["All-Inclusive Holidays", "Luxury Holidays", "Honeymoon Holidays", "Beach Holidays"],
      amenities: [Hotel, Plane, Utensils, Wifi]
    },
    {
      id: 4,
      title: "Seychelles Island Hopping",
      subtitle: "Unveiling Hidden Islands in Seychelles",
      nights: 12,
      price: 1699,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop",
      categories: ["Island Hopping Holidays", "Luxury Holidays", "Beach Holidays"],
      amenities: [Hotel, Plane, Car]
    },
    {
      id: 5,
      title: "Island Hopping in...",
      subtitle: "Discovering Hidden Tropical Gems",
      nights: 28,
      price: 2999,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop",
      categories: ["Island Hopping Holidays", "Multi Centre Holidays", "Luxury Holidays"],
      amenities: [Hotel, Plane, Car, Wifi]
    },
    {
      id: 6,
      title: "Caribbean Island Hopping",
      subtitle: "Crystal Clear Waters and Paradise",
      nights: 21,
      price: 3799,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=300&h=200&fit=crop",
      categories: ["Island Hopping Holidays", "Beach Holidays", "Luxury Holidays"],
      amenities: [Hotel, Plane, Car]
    },
    {
      id: 7,
      title: "Vietnam Island Hopping",
      subtitle: "Discover Vietnam's Islands",
      nights: 9,
      price: 1499,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?w=300&h=200&fit=crop",
      categories: ["Island Hopping Holidays", "Beach Holidays", "Escorted Holidays"],
      amenities: [Hotel, Plane, Car]
    },
    {
      id: 8,
      title: "Ultimate Thai Island...",
      subtitle: "Koh Samui & Koh Phi Phi",
      nights: 30,
      price: 1999,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=300&h=200&fit=crop",
      categories: ["Island Hopping Holidays", "Beach Holidays", "Multi Centre Holidays"],
      amenities: [Hotel, Plane, Car]
    },
    {
      id: 9,
      title: "Dubai City Break",
      subtitle: "Modern Luxury in the Desert",
      nights: 5,
      price: 899,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&h=200&fit=crop",
      categories: ["City Breaks", "Luxury Holidays"],
      amenities: [Hotel, Plane]
    },
    {
      id: 10,
      title: "Safari Kenya Adventure",
      subtitle: "Wildlife Safari Experience",
      nights: 10,
      price: 2299,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=300&h=200&fit=crop",
      categories: ["Safari Holidays", "Escorted Holidays"],
      amenities: [Hotel, Plane, Car]
    },
    {
      id: 11,
      title: "Swiss Alps Ski Resort",
      subtitle: "Premium Mountain Experience",
      nights: 7,
      price: 1599,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1551524164-d526a50ba6be?w=300&h=200&fit=crop",
      categories: ["Ski Holidays", "Luxury Holidays"],
      amenities: [Hotel, Plane, Car]
    },
    {
      id: 12,
      title: "Disney World Orlando",
      subtitle: "Magic Kingdom Family Fun",
      nights: 7,
      price: 1299,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop",
      categories: ["Theme Park Holidays", "Family Holidays"],
      amenities: [Hotel, Plane]
    }
  ];

  const filteredHolidays = selectedCategory === "All" 
    ? holidayData 
    : holidayData.filter(holiday => 
        holiday.categories.includes(selectedCategory)
      );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-2">Find Your Ideal Holiday</h2>
        <div className="w-16 h-1 bg-pink-500 mx-auto"></div>
      </div>

      {/* Category Filter Tabs */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
              selectedCategory === "All"
                ? "bg-gray-500 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                selectedCategory === category
                  ? "bg-gray-500 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Holiday Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredHolidays.map((holiday) => (
          <div
            key={holiday.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative h-48">
              <img
                src={holiday.image}
                alt={holiday.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Title and Subtitle */}
              <div className="mb-3">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{holiday.title}</h3>
                <p className="text-gray-600 text-sm">{holiday.subtitle}</p>
              </div>

              {/* Amenities Icons */}
              <div className="flex items-center space-x-3 mb-3">
                {holiday.amenities.map((IconComponent, idx) => (
                  <IconComponent key={idx} className="h-4 w-4 text-gray-400" />
                ))}
              </div>

              {/* Price Section */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-blue-700 font-semibold text-sm">{holiday.nights} Nights</span>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm text-gray-500">From</span>
                    <span className="text-pink-500 font-bold text-lg">
                      £{holiday.price.toLocaleString()} PP
                    </span>
                  </div>
                </div>
              </div>

              {/* View Deal Button */}
              <button className="w-full bg-blue-700 text-white py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors duration-200 text-sm">
                VIEW DEAL
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredHolidays.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No holidays found for the selected category.</p>
          <button
            onClick={() => setSelectedCategory("All")}
            className="mt-4 text-blue-700 hover:text-blue-800 font-medium"
          >
            View All Holidays
          </button>
        </div>
      )}
      <div className="flex justify-center p-5">
      <button className="bg-white text-pink-500 border border-pink-500 rounded-[20px] px-4 py-2 hover:bg-pink-500 hover:text-white">
        View More Deals
      </button>
    </div>
    </div>
  );
}