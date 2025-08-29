import {useState} from 'react';
import img1 from "../assets/images/Wonders.webp";
import img2 from "../assets/images/home-hero-2.webp";
import img3 from "../assets/images/home-hero-3.webp";
import { Home, MapPin, Calendar, Globe, Tag, Users, Phone, Info } from 'lucide-react';
import Navbar from "./navbar";
import EmailContact from "./Homecontainer/EmailContact";
import AboutUS from "./Homecontainer/aboutus";
import BritishTravelAwards from "./Homecontainer/britishTravelAward";
import WhastappChat from "./Homecontainer/whatsapp";


const Sitemap = () => {
      const images = [img1, img2, img3];
      const [currentIndex, setCurrentIndex] = useState(0);
  const countries = [
    'Albania', 'Andorra', 'Antigua and Barbuda', 'Arctic and Antarctica',
    'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 
    'Bahrain', 'Balearic Islands', 'Belarus', 'Belgium', 'Botswana', 'Brazil',
    'Bulgaria', 'Cambodia', 'Canada', 'Canary Islands', 'Cape Verde', 
    'Cayman Island', 'China', 'Colombia', 'Costa Rica', 'Croatia', 'Cyprus', 
    'Czech Republic', 'Denmark', 'Dominican Republic', 'Ecuador', 'Egypt',
    'Estonia', 'Fiji', 'Finland', 'France', 'French Polynesia', 'Georgia', 
    'Germany', 'Gibraltar', 'Greece', 'Grenada', 'Hungary', 'Iceland',
    'India', 'Indonesia', 'Ireland', 'Israel', 'Italy', 'Jamaica', 
    'Japan', 'Jordan', 'Kenya', 'Madagascar', 'Malawi', 'Malaysia',
    'Maldives', 'Malta', 'Mauritius', 'Mexico'
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const destinations = [
    'Beach Holidays', 'City Breaks', 'Adventure Tours', 'Cultural Tours',
    'Luxury Resorts', 'Family Holidays', 'Honeymoon Packages', 'Safari Tours',
    'Cruise Holidays', 'Ski Holidays', 'Wellness Retreats', 'Food & Wine Tours'
  ];

  const mainSections = [
    { name: 'HOME', icon: Home, link: '/' },
    { name: 'DESTINATIONS', icon: MapPin, link: '/destinations' },
    { name: 'DEALS & OFFERS', icon: Tag, link: '/deals' },
    { name: 'TRAVEL GUIDES', icon: Globe, link: '/guides' },
    { name: 'ABOUT US', icon: Info, link: '/about' },
    { name: 'CONTACT', icon: Phone, link: '/contact' }
  ];

  const SectionCard = ({ title, icon: Icon, children, className = "" }) => (
    <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${className}`}>
      <div className="flex items-center space-x-2 mb-4">
        <Icon className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      {children}
    </div>
  );

  const LinkItem = ({ children, className = "" }) => (
    <div className={`text-sm text-gray-600 hover:text-blue-600 cursor-pointer py-1 transition-colors ${className}`}>
      {children}
    </div>
  );

  return (
    <div>
        <Navbar/>   
        <div className="relative h-[160px]"></div>
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
      Site Map
    </div>
  </div>
</div>
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Site Map</h1>
        <div className="w-16 h-1 bg-orange-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Navigate through our comprehensive travel offerings</p>
      </div>

      {/* Grid Layout */}
      <div className="grid gap-6">
        
       

        {/* Three Column Layout for Holiday Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Countries */}
          <SectionCard title="Holiday by Countries" icon={MapPin}>
            <div className="max-h-96 overflow-y-auto">
              <div className="grid grid-cols-1 gap-1">
                {countries.map((country, index) => (
                  <LinkItem key={index}>{country}</LinkItem>
                ))}
              </div>
            </div>
          </SectionCard>

          {/* Months */}
          <SectionCard title="Holiday by Month" icon={Calendar}>
            <div className="grid grid-cols-1 gap-2">
              {months.map((month, index) => (
                <LinkItem key={index}>{month}</LinkItem>
              ))}
            </div>
          </SectionCard>

          {/* Destination Types */}
          <SectionCard title="Holiday by Destination Type" icon={Globe}>
            <div className="grid grid-cols-1 gap-2">
              {destinations.map((destination, index) => (
                <LinkItem key={index}>{destination}</LinkItem>
              ))}
            </div>
          </SectionCard>
        </div>

        {/* Quick Links Section */}
        <SectionCard title="Quick Links" icon={Users} className="col-span-full">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <LinkItem className="font-medium">All Destinations</LinkItem>
            <LinkItem className="font-medium">Popular Packages</LinkItem>
            <LinkItem className="font-medium">Last Minute Deals</LinkItem>
            <LinkItem className="font-medium">Group Travel</LinkItem>
            <LinkItem className="font-medium">Travel Insurance</LinkItem>
            <LinkItem className="font-medium">Travel Tips</LinkItem>
          </div>
        </SectionCard>
      </div>
    </div>
    <EmailContact/>
    
     <AboutUS />
    <BritishTravelAwards />
    <WhastappChat/>
    </div>
  );
};

export default Sitemap;