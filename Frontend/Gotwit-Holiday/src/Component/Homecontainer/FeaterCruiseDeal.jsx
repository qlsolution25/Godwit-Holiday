export default function FeaturedCruiseDeals() {
  const cruiseDeals = [
    {
      id: 1,
      cruiseLine: "CUNARD",
      title: "SEA ODYSSEY",
      subtitle: "FROM SINGAPORE TO SOUTHAMPTON",
      nights: 36,
      price: 4499,
      currency: "£",
      backgroundImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=300&fit=crop",
      cruiseLineColor: "text-red-600",
      titleColor: "text-red-500",
      priceColor: "text-red-500"
    },
    {
      id: 2,
      cruiseLine: "NORWEGIAN",
      cruiseLineSubtext: "CRUISE LINE",
      title: "JAPAN & SOUTH KOREA",
      subtitle: "CRUISE 2025",
      nights: 15,
      price: 2799,
      currency: "£",
      backgroundImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
      cruiseLineColor: "text-blue-600",
      titleColor: "text-white",
      priceColor: "text-pink-500"
    },
    {
      id: 3,
      cruiseLine: "NORWEGIAN",
      cruiseLineSubtext: "CRUISE LINE",
      title: "GREEK ISLES AND ITALY",
      subtitle: "CRUISE",
      nights: 12,
      price: 1899,
      currency: "£",
      backgroundImage: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=500&h=300&fit=crop",
      cruiseLineColor: "text-blue-600",
      titleColor: "text-white",
      priceColor: "text-white"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-800 to-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Featured Cruise Deals</h1>
          <div className="w-20 h-1 bg-pink-500 mx-auto"></div>
        </div>

        {/* Cruise Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {cruiseDeals.map((cruise) => (
            <div
              key={cruise.id}
              className="relative h-80 rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 group cursor-pointer"
              style={{
                backgroundImage: `url(${cruise.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
              
              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-between">
                {/* Top Section - Cruise Line */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className={`font-bold text-lg ${cruise.cruiseLineColor} bg-white px-3 py-1 rounded`}>
                      {cruise.cruiseLine}
                    </div>
                    {cruise.cruiseLineSubtext && (
                      <div className="text-xs text-white/80 mt-1 ml-1">
                        {cruise.cruiseLineSubtext}
                      </div>
                    )}
                  </div>
                  
                  {/* Ship Image/Icon */}
                  <div className="w-12 h-8 bg-white/20 rounded flex items-center justify-center">
                    <div className="w-8 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Middle Section - Title */}
                <div className="flex-1 flex items-center">
                  <div>
                    <h3 className={`text-2xl font-bold ${cruise.titleColor} leading-tight mb-2`}>
                      {cruise.title}
                    </h3>
                    <p className="text-white/90 text-sm font-medium">
                      {cruise.subtitle}
                    </p>
                  </div>
                </div>

                {/* Bottom Section - Nights and Price */}
                <div className="flex items-end justify-between">
                  <div className="bg-pink-500 text-white px-4 py-2 rounded-full">
                    <span className="font-bold">{cruise.nights} nights</span>
                  </div>
                  
                  <div className={`text-right bg-white/90 px-4 py-2 rounded-full ${cruise.priceColor}`}>
                    <div className="font-bold text-2xl">
                      {cruise.currency}{cruise.price.toLocaleString()}
                      <span className="text-sm font-medium">pp</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
            See more Deals
          </button>
        </div>

        
      </div>
    </div>
  );
}