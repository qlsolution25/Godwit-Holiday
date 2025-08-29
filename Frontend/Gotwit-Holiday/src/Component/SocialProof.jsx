import {useState} from 'react';
import { Star, Award, Shield, Users, MapPin, Calendar, Phone, Mail, Globe,Plane, Building,  } from 'lucide-react';




import Navbar from "./navbar";
import EmailContact from "./Homecontainer/EmailContact";
import AboutUS from "./Homecontainer/aboutus";
import BritishTravelAwards from "./Homecontainer/britishTravelAward";
import WhastappChat from "./Homecontainer/whatsapp";

const SocialProofPage = () => {
  const partners = [
  { name: "Emirates", icon: Plane, color: "text-red-600" },
  { name: "Hilton", icon: Building, color: "text-blue-600" },
  { name: "Marriott", icon: Building, color: "text-purple-600" },
  { name: "Booking.com", icon: Globe, color: "text-blue-500" },
  { name: "Expedia", icon: MapPin, color: "text-yellow-600" },
  { name: "TripAdvisor", icon: Star, color: "text-green-600" }
];
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "Godwit Holidays made our dream vacation to Bali absolutely perfect. Every detail was handled professionally, and the local guides were incredible!",
      image: "/api/placeholder/60/60"
    },
    {
      name: "Michael Chen",
      location: "Toronto, Canada", 
      rating: 5,
      text: "Outstanding service! The customized itinerary for our European tour exceeded all expectations. Will definitely book with them again.",
      image: "/api/placeholder/60/60"
    },
    {
      name: "Emma Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      text: "From booking to return, everything was seamless. The 24/7 support during our trip gave us complete peace of mind.",
      image: "/api/placeholder/60/60"
    }
  ];

  const stats = [
    { number: "15,000+", label: "Happy Travelers" },
    { number: "95+", label: "Destinations" },
    { number: "8", label: "Years Experience" },
    { number: "4.9/5", label: "Average Rating" }
  ];

  const awards = [
    { title: "Best Travel Agency 2024", organization: "Travel Excellence Awards" },
    { title: "Customer Choice Award", organization: "TripAdvisor" },
    { title: "Sustainable Tourism Leader", organization: "Green Travel Association" }
  ];

 

  return (
    <div>
      <Navbar/>
      <div className="relative h-[162px]"></div>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
     
      {/* Hero Section with Stats */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Thousands of Travelers Worldwide
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Creating unforgettable journeys with personalized service and expert local knowledge
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4">
            <div className="flex items-center space-x-2 text-green-600">
              <Shield className="h-6 w-6" />
              <span className="font-semibold">100% Secure Booking</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-600">
              <Award className="h-6 w-6" />
              <span className="font-semibold">IATA Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-600">
              <Users className="h-6 w-6" />
              <span className="font-semibold">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-white">What Our Travelers Say</h3>
            <div className="w-16 h-1 bg-pink-500 mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-white">
              Read genuine reviews from travelers who have experienced the magic of Godwit Holidays
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 ">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-yellow-100 rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Awards & Recognition</h3>
            <div className="w-16 h-1 bg-pink-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="text-center bg-blue-700 text-white rounded-lg p-6">
                <div className="bg-gradient-to-r from-pink-500 to-red-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">{award.title}</h4>
                <p className="text-white">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold text-white">Trusted Partners</h3>
    </div>
    
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
      {partners.map((partner, index) => {
        const IconComponent = partner.icon;
        return (
          <div key={index} className="text-center group">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform transition-transform">
              <IconComponent className={`h-8 w-8 mx-auto mb-2 ${partner.color}`} />
              <span className="text-gray-600 font-medium text-sm">{partner.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">About Godwit Holidays</h3>
              <p className="text-gray-700 mb-6">
                Founded in 2017, Godwit Holidays has been dedicated to creating extraordinary travel experiences 
                that go beyond the ordinary. Our name is inspired by the godwit bird, known for its incredible 
                long-distance migrations, symbolizing our commitment to taking you on journeys that matter.
              </p>
              <p className="text-gray-700 mb-6">
                We specialize in personalized travel planning, offering everything from luxury escapes to 
                adventure expeditions. Our team of travel experts has explored every destination we recommend, 
                ensuring authentic and memorable experiences for our clients.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Our Mission</h4>
                  <p className="text-gray-600 text-sm">
                    To create transformative travel experiences that connect people with cultures, 
                    nature, and themselves.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-gray-600 text-sm">
                    To be the world's most trusted travel companion, making every journey 
                    extraordinary and sustainable.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Why Choose Us?</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Calendar className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Personalized itineraries tailored to your preferences</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>24/7 customer support throughout your journey</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Local expertise in 95+ destinations worldwide</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Comprehensive travel insurance and protection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
      
    </div>
     <EmailContact/>
    
     <AboutUS />
    <BritishTravelAwards />
    <WhastappChat/>
    
    
    </div>
  );
};

export default SocialProofPage;