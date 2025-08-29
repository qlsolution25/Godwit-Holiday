import { Plane } from "lucide-react";

export default function FeaturedFaresComponent() {
  const flightData = {
    economy: [
      {
        id: 1,
        from: "London All",
        fromCountry: "United Kingdom",
        to: "Bangkok",
        toCountry: "Thailand",
        airline: "British Airways",
        airlineCode: "BA",
        price: 699,
        currency: "£"
      },
      {
        id: 2,
        from: "London All",
        fromCountry: "United Kingdom",
        to: "Colombo",
        toCountry: "Sri Lanka",
        airline: "Air Lanka",
        airlineCode: "AL",
        price: 672,
        currency: "£"
      },
      {
        id: 3,
        from: "London All",
        fromCountry: "United Kingdom",
        to: "Bangalore",
        toCountry: "India",
        airline: "Air India",
        airlineCode: "AI",
        price: 452,
        currency: "£"
      },
      {
        id: 4,
        from: "London All",
        fromCountry: "United Kingdom",
        to: "Accra",
        toCountry: "Ghana",
        airline: "Virgin Atlantic",
        airlineCode: "VA",
        price: 605,
        currency: "£"
      },
      {
        id: 5,
        from: "London All",
        fromCountry: "United Kingdom",
        to: "Manila",
        toCountry: "Philippines",
        airline: "Cebu Pacific",
        airlineCode: "CP",
        price: 770,
        currency: "£"
      }
    ],
    business: [
      {
        id: 6,
        from: "London All",
        fromCountry: "United Kingdom",
        to: "Johannesburg",
        toCountry: "South Africa",
        airline: "South African Airways",
        airlineCode: "SA",
        price: 1443,
        currency: "£"
      },
      {
        id: 7,
        from: "London All",
        fromCountry: "United Kingdom",
        to: "Los Angeles",
        toCountry: "United States",
        airline: "American Airlines",
        airlineCode: "AA",
        price: 4100,
        currency: "£"
      },
      {
        id: 8,
        from: "London All",
        fromCountry: "United Kingdom",
        to: "Tokyo",
        toCountry: "Japan",
        airline: "All Nippon Airways",
        airlineCode: "ANA",
        price: 3138,
        currency: "£"
      },
      {
        id: 9,
        from: "London All",
        fromCountry: "United Kingdom",
        to: "Toronto",
        toCountry: "Canada",
        airline: "Air Canada",
        airlineCode: "AC",
        price: 3332,
        currency: "£"
      },
      {
        id: 10,
        from: "London All",
        fromCountry: "United Kingdom",
        to: "Mumbai",
        toCountry: "India",
        airline: "Air India",
        airlineCode: "AI",
        price: 1991,
        currency: "£"
      }
    ],
    first: [
      {
        id: 11,
        from: "London All",
        fromCountry: "United Kingdom",
        to: "Dubai",
        toCountry: "United Arab Emirates",
        airline: "Emirates",
        airlineCode: "EK",
        price: 3830,
        currency: "£"
      },
      {
        id: 12,
        from: "London All",
        fromCountry: "United Kingdom",
        to: "Las Vegas",
        toCountry: "United States",
        airline: "Virgin Atlantic",
        airlineCode: "VS",
        price: 5630,
        currency: "£"
      },
      {
        id: 13,
        from: "London All",
        fromCountry: "United Kingdom",
        to: "Singapore",
        toCountry: "Singapore",
        airline: "Singapore Airlines",
        airlineCode: "SQ",
        price: 6420,
        currency: "£"
      },
      {
        id: 14,
        from: "London All",
        fromCountry: "United Kingdom",
        to: "Sydney",
        toCountry: "Australia",
        airline: "Emirates",
        airlineCode: "EK",
        price: 9889,
        currency: "£"
      },
      {
        id: 15,
        from: "London All",
        fromCountry: "United Kingdom",
        to: "New York",
        toCountry: "United States",
        airline: "British Airways",
        airlineCode: "BA",
        price: 3839,
        currency: "£"
      }
    ]
  };

  const getAirlineColor = (airlineCode) => {
    const colors = {
      'BA': 'bg-blue-600',
      'AL': 'bg-green-600',
      'AI': 'bg-red-600',
      'VA': 'bg-red-500',
      'CP': 'bg-orange-500',
      'SA': 'bg-green-700',
      'AA': 'bg-blue-700',
      'ANA': 'bg-blue-800',
      'AC': 'bg-red-700',
      'EK': 'bg-red-600',
      'VS': 'bg-red-500',
      'SQ': 'bg-blue-900'
    };
    return colors[airlineCode] || 'bg-gray-600';
  };

  const FlightCard = ({ flight }) => (
    <div className="bg-white rounded-lg p-4 mb-3 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between">
        {/* Flight Route */}
        <div className="flex items-center space-x-3 flex-1">
          <div className="text-left">
            <div className="font-semibold text-gray-800 text-sm">{flight.from}</div>
            <div className="text-xs text-gray-500">{flight.fromCountry}</div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-px bg-gray-300"></div>
            <Plane className="h-4 w-4 text-gray-400 rotate-90" />
            <div className="w-8 h-px bg-gray-300"></div>
          </div>
          
          <div className="text-right">
            <div className="font-semibold text-gray-800 text-sm">{flight.to}</div>
            <div className="text-xs text-gray-500">{flight.toCountry}</div>
          </div>
        </div>

        {/* Airline */}
        <div className="mx-4">
          <div className={`${getAirlineColor(flight.airlineCode)} text-white px-2 py-1 rounded text-xs font-semibold`}>
            {flight.airlineCode}
          </div>
        </div>

        {/* Price and Book Button */}
        
        {/* <div className="text-right">
          <div className="text-pink-500 font-bold text-lg">
            {flight.currency}{flight.price} <span className="text-sm">pp</span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-1 rounded text-xs font-medium hover:bg-blue-700 transition-colors duration-200 mt-1">
            Book now
          </button>
        </div> */}
      </div>
      <div className="">
      <div className="text-right flex items-center justify-between">
          <div className="text-pink-500 font-bold text-lg">
            {flight.currency}{flight.price} <span className="text-sm">pp</span>
          </div>
          <div>
          <button className="bg-blue-600 text-white px-4 py-1 rounded text-xs font-medium hover:bg-blue-700 transition-colors duration-200 mt-1">
            Book now
          </button></div>
        </div>
        </div>
    </div>
    
  );

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Start Your Journey With Our Featured Fares
        </h1>

        {/* Class Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Economy Class */}
          <div className="bg-blue-500/30 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-white mb-6 text-center bg-blue-500/50 rounded-lg py-3">
              Economy Class
            </h2>
            <div className="space-y-3">
              {flightData.economy.map((flight) => (
                <FlightCard key={flight.id} flight={flight} />
              ))}
            </div>
          </div>

          {/* Business Class */}
          <div className="bg-blue-500/30 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-white mb-6 text-center bg-blue-500/50 rounded-lg py-3">
              Business Class
            </h2>
            <div className="space-y-3">
              {flightData.business.map((flight) => (
                <FlightCard key={flight.id} flight={flight} />
              ))}
            </div>
          </div>

          {/* First Class */}
          <div className="bg-blue-500/30 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-white mb-6 text-center bg-blue-500/50 rounded-lg py-3">
              First Class
            </h2>
            <div className="space-y-3">
              {flightData.first.map((flight) => (
                <FlightCard key={flight.id} flight={flight} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}