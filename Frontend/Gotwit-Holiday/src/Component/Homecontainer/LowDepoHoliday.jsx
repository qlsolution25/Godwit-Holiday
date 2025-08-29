import { Moon } from "lucide-react";

export default function LowDepositHolidays() {
  const holidayDeals = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      title: "12NT USA HOLIDAY",
      subtitle: "American Spirit Escapade",
      nights: 12,
      price: 1599,
      currency: "£"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=400&h=250&fit=crop",
      title: "Japan Golden Route & Mt. Fuji...",
      subtitle: "The Ultimate Japan Journey",
      nights: 10,
      price: 1699,
      currency: "£"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=250&fit=crop",
      title: "Day of Death in Mexico 2025",
      subtitle: "Legacy of the Past, Celebration of the Present",
      nights: 5,
      price: 1159,
      currency: "£"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop",
      title: "Paradise Island of SRI LANKA",
      subtitle: "Nature's Hidden Gem Revealed",
      nights: 11,
      price: 1799,
      currency: "£"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&h=250&fit=crop",
      title: "Thailand Beach Paradise",
      subtitle: "Tropical Islands & Crystal Waters",
      nights: 14,
      price: 1299,
      currency: "£"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c2e?w=400&h=250&fit=crop",
      title: "Greek Island Adventure",
      subtitle: "Ancient History Meets Paradise",
      nights: 8,
      price: 999,
      currency: "£"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop",
      title: "Maldives Luxury Escape",
      subtitle: "Overwater Villas & Pristine Beaches",
      nights: 7,
      price: 2199,
      currency: "£"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop",
      title: "Dubai City of Gold",
      subtitle: "Modern Luxury in the Desert",
      nights: 6,
      price: 899,
      currency: "£"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-2">Low Deposit Holidays</h2>
        <div className="w-16 h-1 bg-pink-500 mx-auto"></div>
      </div>

      {/* Holiday Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {holidayDeals.map((holiday) => (
          <div
            key={holiday.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex">
              {/* Image Section */}
              <div className="w-1/2 relative">
                <img
                  src={holiday.image}
                  alt={holiday.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
              </div>

              {/* Content Section */}
              <div className="w-1/2 p-6 flex flex-col justify-between">
                {/* Title and Subtitle */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-blue-700 mb-2">
                    {holiday.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {holiday.subtitle}
                  </p>
                  
                  {/* Nights */}
                  <div className="flex items-center space-x-1 text-blue-600 mb-4">
                    <Moon className="h-4 w-4" />
                    <span className="text-sm font-medium">{holiday.nights} Nights</span>
                  </div>
                </div>

                {/* Price and Button Section */}
                <div className="space-y-3">
                  {/* Price */}
                  <div className="bg-blue-700 text-white px-4 py-2 rounded-full inline-flex items-center space-x-2">
                    <span className="text-sm">From</span>
                    <span className="font-bold text-lg">
                      {holiday.currency}{holiday.price.toLocaleString()}
                    </span>
                    <span className="text-sm">PP</span>
                  </div>

                  {/* View Deal Button */}
                  <div>
                    <button className="w-full bg-white text-blue-700 border-2 border-blue-700 py-2 rounded-full font-semibold hover:bg-blue-700 hover:text-white transition-all duration-200">
                      VIEW DEAL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      {/* <div className="text-center mt-12">
        <div className="bg-blue-700 text-white rounded-lg p-8 inline-block">
          <h3 className="text-2xl font-bold mb-2">Start Your Dream Holiday Today!</h3>
          <p className="text-blue-100 mb-4">Secure your holiday with just a low deposit</p>
          <button className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-200">
            Browse All Low Deposit Deals
          </button>
        </div>
      </div> */}
    </div>
  );
}