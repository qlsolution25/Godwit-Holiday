import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plane, Hotel, Car, Utensils, Wifi, ShoppingBag, MapPin, Camera } from "lucide-react";

export default function HolidayDealsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % holidayDeals.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + holidayDeals.length) % holidayDeals.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality (optional)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50 relative z-[-1]">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-2">Introduction about the company</h2>
        <div className="w-16 h-1 bg-pink-500 mx-auto"></div>
      </div>

      <div className=" whitespace-pre-line text-center">
  {`At Godwit Holidays, we believe that every journey should be more than just a trip; it should
be a truly unforgettable experience. Our company is founded on a genuine passion for
travel, deep destination knowledge, and an unwavering commitment to personalized
customer care.

With years of experience in crafting immersive holidays, we specialize in creating
tailor-made travel experiences that reflect your unique interests and aspirations. Whether
it’s relaxing on sun-kissed beaches, exploring vibrant cities, or uncovering hidden cultural
gems, our thoughtfully curated itineraries are designed to turn travel dreams into lasting
memories.

At the heart of everything we do is exceptional customer service. From your first enquiry to
your safe return home, our dedicated travel advisors are here to make every step of your
journey smooth, stress-free, and enjoyable. We listen closely, plan carefully, and always go
the extra mile because for us, it’s not just about where you go, but how you experience it.
Let Godwit Holidays be your trusted travel partner where experience meets excellence.`}
</div>


      
       <div className="flex justify-center p-5">
      {/* <button className="bg-white text-pink-500 border border-pink-500 rounded-[20px] px-4 py-2 hover:bg-pink-500 hover:text-white">
        See More Deals
      </button> */}
    </div>
    </div>
  );
}