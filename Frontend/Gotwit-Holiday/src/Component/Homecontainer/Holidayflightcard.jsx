import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Plus, Minus, Users } from "lucide-react"; 
import { Calendar } from "lucide-react";
import { Plane, PlaneTakeoff, PlaneLanding } from "lucide-react";


const TravelSearchForm = () => {
  const [activeTab, setActiveTab] = useState('packages');
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);
  const [showNightsDropdown, setShowNightsDropdown] = useState(false);
  const [showDepartureDropdown, setShowDepartureDropdown] = useState(false);
  const [showGoto, setShowGoto] = useState(false);
    const [showGotoDropdown, setShowGotoDropdown] = useState(false);
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [selectedNights, setSelectedNights] = useState([]);
  const [selectedDepartureCity, setSelectedDepartureCity] = useState('');
  const [selectedGotoCity, setSelectedGotoCity] = useState('');
  const [budgetRange, setBudgetRange] = useState([728, 3776]);
  const [destinationSearch, setDestinationSearch] = useState('');
  const [departureSearch, setDepartureSearch] = useState('');
  const [gotoSearch, setGotoSearch] = useState('');
  const [isSmall, setIsSmall] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  
  const handleStartDateChange = (e) => {
    const selectedStartDate = e.target.value;
    setStartDate(selectedStartDate);
    
    // If end date is before or same as new start date, clear it
    if (endDate && endDate <= selectedStartDate) {
      setEndDate('');
    }
  };
  
  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };
  
  // Calculate minimum end date (day after start date)
  const getMinEndDate = () => {
    if (!startDate) return today;
    
    const startDateObj = new Date(startDate);
    const nextDay = new Date(startDateObj);
    nextDay.setDate(startDateObj.getDate() + 1);
    
    return nextDay.toISOString().split('T')[0];
  };

  const destinations = [
    'Albania', 'Andorra', 'Antigua and Barbuda', 'Austria', 'Belgium', 
    'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark'
  ];

  const departureCities = [
    'New York', 'Los Angeles', 'Chicago', 'Miami', 'San Francisco',
    'London', 'Paris', 'Tokyo', 'Dubai', 'Singapore', 'Sydney', 'Toronto'
  ];

   const gotoCities = [
    'New York', 'Los Angeles', 'Chicago', 'Miami', 'San Francisco',
    'London', 'Paris', 'Tokyo', 'Dubai', 'Singapore', 'Sydney', 'Toronto'
  ];

  const nightOptions = [
    { value: 'any', label: 'Any Nights' },
    { value: '1-5', label: '1-5 Nights' },
    { value: '6-10', label: '6-10 Nights' },
    { value: '11-15', label: '11-15 Nights' },
    { value: '15+', label: 'Above 15 Nights' }
  ];

  const filteredDestinations = destinations.filter(dest =>
    dest.toLowerCase().includes(destinationSearch.toLowerCase())
  );

  const filteredDepartureCities = departureCities.filter(city =>
    city.toLowerCase().includes(departureSearch.toLowerCase())
  );
  const filteredGotoCities = gotoCities.filter(city =>
    city.toLowerCase().includes(gotoSearch.toLowerCase())
  );

  const handleDestinationSelect = (destination) => {
    if (!selectedDestinations.includes(destination)) {
      setSelectedDestinations([...selectedDestinations, destination]);
    }
    setDestinationSearch('');
  };

  const removeDestination = (destination) => {
    setSelectedDestinations(selectedDestinations.filter(dest => dest !== destination));
  };

  const handleDepartureCitySelect = (city) => {
    setSelectedDepartureCity(city);
    setDepartureSearch('');
    setShowGotoDropdown(false);
  };

  const handleGotoCitySelect = (city) => {
    setSelectedGotoCity(city);
    setGotoSearch('');
    setShowDepartureDropdown(false);
  };

  const handleNightSelect = (night) => {
    if (selectedNights.includes(night.value)) {
      setSelectedNights(selectedNights.filter(n => n !== night.value));
    } else {
      setSelectedNights([...selectedNights, night.value]);
    }
  };

  const getDisplayText = (type) => {
    if (type === 'destination') {
      if (selectedDestinations.length === 0) return 'Any Destination';
      if (selectedDestinations.length === 1) return selectedDestinations[0];
      return `${selectedDestinations[0]} +${selectedDestinations.length - 1} more`;
    }
    if (type === 'nights') {
      if (selectedNights.length === 0) return 'Any Nights';
      const selectedLabels = nightOptions.filter(opt => selectedNights.includes(opt.value));
      if (selectedLabels.length === 1) return selectedLabels[0].label;
      return `${selectedLabels[0].label} +${selectedLabels.length - 1} more`;
    }
    if (type === 'departure') {
      return selectedDepartureCity || 'Departing from';
    }
    if (type === 'goto') {
      return selectedGotoCity || 'Going To';
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [childAges, setChildAges] = useState([]);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Update child ages array when children count changes
  useEffect(() => {
    if (children > childAges.length) {
      // Add new age slots
      const newAges = [...childAges];
      for (let i = childAges.length; i < children; i++) {
        newAges.push('');
      }
      setChildAges(newAges);
    } else if (children < childAges.length) {
      // Remove excess age slots
      setChildAges(childAges.slice(0, children));
    }
  }, [children, childAges]);

  const handleAdultChange = (increment) => {
    if (increment) {
      setAdults(adults + 1);
    } else if (adults > 1) {
      setAdults(adults - 1);
    }
  };

  const handleChildrenChange = (increment) => {
    if (increment) {
      setChildren(children + 1);
    } else if (children > 0) {
      setChildren(children - 1);
    }
  };

  const handleChildAgeChange = (index, age) => {
    const newAges = [...childAges];
    newAges[index] = age;
    setChildAges(newAges);
  };

  const getTravelerText = () => {
    const totalTravelers = adults + children;
    if (totalTravelers === 1) return "1 Traveller";
    return `${totalTravelers} Travellers`;
  };

  const handleApply = () => {
    // Validate that all child ages are selected
    if (children > 0 && childAges.some(age => age === '')) {
      alert('Please select age for all children');
      return;
    }
    setIsOpen(false);
    console.log('Applied:', { adults, children, childAges });
  };

   useEffect(() => {
      const handleResize = () => {
        setIsSmall(window.innerWidth < 1024); // triggers if width < 1024px
      };
  
      handleResize(); // check on mount
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <>
      {/* Custom CSS for dual range slider */}
      <style jsx>{`
        .range-slider {
          pointer-events: none;
        }
        
        .range-slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          pointer-events: all;
          position: relative;
          z-index: 100;
        }
        
        .range-slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          pointer-events: all;
        }
        
        .range-slider::-webkit-slider-track {
          background: transparent;
          border: transparent;
        }
        
        .range-slider::-moz-range-track {
          background: transparent;
          border: transparent;
        }
        
        /* Different colors for min and max sliders */
        .range-slider-min::-webkit-slider-thumb {
          background: #ef4444;
        }
        
        .range-slider-min::-moz-range-thumb {
          background: #ef4444;
        }
        
        .range-slider-max::-webkit-slider-thumb {
          background: #3b82f6;
        }
        
        .range-slider-max::-moz-range-thumb {
          background: #3b82f6;
        }
      `}</style>

      <div className="bg-white p-6 rounded-lg   mx-auto w-[100%] z-50 h-[250px] rounded-t-[50px]">
      {/* Tab Navigation */}
      <div className="flex mb-6 z-50">
        <button
          onClick={() => setActiveTab('packages')}
          className={`px-6 py-3 rounded-l-full flex items-center space-x-2 ${
            activeTab === 'packages' 
              ? 'bg-pink-500 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
          </svg>
          <span>Packages</span>
        </button>
        <button
          onClick={() => setActiveTab('flights')}
          className={`px-6 py-3 rounded-r-full flex items-center space-x-2 ${
            activeTab === 'flights' 
              ? 'bg-pink-500 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Plane className="w-5 h-5" />  
          <span>Flights</span>
        </button>
      </div>

      {/* Search Form */}
      <div className={`grid gap-0 items-end ${activeTab === 'packages' ? 'grid-cols-1 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-6'}`}>
        
        {/* Departing From Input - Only show for Flights */}
        {activeTab === 'flights' && (
          <div className="relative z-50 ">
            <label className="block text-sm font-medium text-gray-700 mb-2">Departing From</label>
            <div 
              className="relative cursor-pointer z-50  "
              onClick={() => setShowDepartureDropdown(!showDepartureDropdown)}
            >
              <div className={`w-[200px] p-3 border border-gray-300 rounded-[20px] bg-gray-50 transition-all duration-300 ease-in-out flex items-center justify-between ${
                showDepartureDropdown ? 'border-blue-500 text-blue-600' : 'hover:border-blue-500 hover:text-blue-500'
              }`}>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{getDisplayText('departure')}</span>
                </div>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Departure Dropdown */}
              {showDepartureDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-blue-500 rounded-lg shadow-xl z-50 min-w-80">
                  {/* Search bar */}
                  <div className="p-4 border-b z-50">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-50">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder="Search departure city..."
                        value={departureSearch}
                        onChange={(e) => setDepartureSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        autoFocus
                      />
                    </div>
                  </div>
                  
                  {/* Suggested Cities */}
                  <div className="p-3">
                    <p className="text-sm text-gray-600 mb-2 font-medium">Suggested departure cities:</p>
                    <div className="space-y-1 max-h-40 overflow-y-auto">
                      {filteredDepartureCities.length > 0 ? (
                        filteredDepartureCities.map((city, index) => (
                          <div
                            key={index}
                            onClick={() => handleDepartureCitySelect(city)}
                            className="px-3 py-2 hover:bg-blue-50 hover:text-blue-700 cursor-pointer rounded-md transition-colors duration-200 text-gray-700"
                          >
                            {city}
                          </div>
                        ))
                      ) : (
                        <div className="px-3 py-2 text-gray-500 italic">
                          No cities found matching "{departureSearch}"
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'flights' && (
          <div className="relative ml-[10px]">
            <label className="block text-sm font-medium text-gray-700 mb-2">Going To</label>
            <div 
              className="relative cursor-pointer "
              onClick={() => setShowGotoDropdown(!showGotoDropdown)}
            >
              <div className={`w-[200px] p-3 border border-gray-300 rounded-[20px] bg-gray-50 transition-all duration-300 ease-in-out flex items-center justify-between ${
                showGotoDropdown ? 'border-blue-500 text-blue-600' : 'hover:border-blue-500 hover:text-blue-500'
              }`}>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{getDisplayText('goto')}</span>
                </div>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Departure Dropdown */}
              {showGotoDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-blue-500 rounded-lg shadow-xl z-20 min-w-80">
                  {/* Search bar */}
                  <div className="p-4 border-b">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder="Search departure city..."
                        value={gotoSearch}
                        onChange={(e) => setGotoSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        autoFocus
                      />
                    </div>
                  </div>
                  
                  {/* Suggested Cities */}
                  <div className="p-3">
                    <p className="text-sm text-gray-600 mb-2 font-medium">Suggested Going to cities:</p>
                    <div className="space-y-1 max-h-40 overflow-y-auto">
                      {filteredGotoCities.length > 0 ? (
                        filteredGotoCities.map((city, index) => (
                          <div
                            key={index}
                            onClick={() => handleGotoCitySelect(city)}
                            className="px-3 py-2 hover:bg-blue-50 hover:text-blue-700 cursor-pointer rounded-md transition-colors duration-200 text-gray-700"
                          >
                            {city}
                          </div>
                        ))
                      ) : (
                        <div className="px-3 py-2 text-gray-500 italic">
                          No cities found matching "{gotoSearch}"
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
         {activeTab === 'flights' && (
          <div className="relative ml-[50px]">
        <div className=" ">
      <div className="bg-white rounded-lg  ">
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {/* Start Date */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Start Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={startDate}
                min={today}
                onChange={handleStartDateChange}
                className="w-[150px] px-4 py-3 pr-10 border border-gray-300 rounded-[20px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 bg-white"
                placeholder="Select start date"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            
          </div>

          {/* End Date */}
          <div className="relative relative right-[-60px]">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              End Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={endDate}
                min={getMinEndDate()}
                onChange={handleEndDateChange}
                disabled={!startDate}
                className={`w-[150px] px-4 py-3 pr-10 border rounded-[20px] outline-none transition-colors duration-200  ${
                  startDate 
                    ? 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white' 
                    : 'border-gray-200 bg-gray-50 cursor-not-allowed'
                }`}
                placeholder="Select end date"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Calendar className={`h-5 w-5 ${startDate ? 'text-gray-400' : 'text-gray-300'}`} />
              </div>
            </div>
            
          </div>
        </div>

        

       
      </div>
    </div></div>
         )}
        {/* Number of Travellers */}
         {activeTab === 'flights' && (
        <div className="w-[200px] mx-auto  bg-gray-50  relative right-[-180px]">
      <div className="relative" ref={dropdownRef}>
        {/* Traveller Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between px-4 py-3 bg-white border-2 rounded-[20px] transition-all duration-200 ${
            isOpen 
              ? 'border-blue-500 shadow-lg' 
              : 'border-gray-200 hover:border-gray-300 shadow-sm'
          }`}
        >
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700 font-medium">
              {getTravelerText()}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <ChevronDown 
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`} 
            />
          </div>
        </button>

        {/* Dropdown Content */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-20 p-4">
            <div className="space-y-6">
              {/* Adults Section */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-gray-800 font-semibold">Adults</h3>
                  <p className="text-sm text-gray-500">Age 12 and over</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleAdultChange(false)}
                    disabled={adults <= 1}
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                      adults <= 1
                        ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                        : 'border-blue-500 text-blue-500 hover:bg-blue-50'
                    }`}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-semibold text-gray-800">
                    {adults}
                  </span>
                  <button
                    onClick={() => handleAdultChange(true)}
                    className="w-8 h-8 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Children Section */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-gray-800 font-semibold">Children</h3>
                  <p className="text-sm text-gray-500">Age 0 - 11</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleChildrenChange(false)}
                    disabled={children <= 0}
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                      children <= 0
                        ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                        : 'border-blue-500 text-blue-500 hover:bg-blue-50'
                    }`}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-semibold text-gray-800">
                    {children}
                  </span>
                  <button
                    onClick={() => handleChildrenChange(true)}
                    className="w-8 h-8 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Children Age Selectors */}
              {children > 0 && (
                <div className="space-y-3 pt-2 border-t border-gray-100">
                  {Array.from({ length: children }, (_, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">
                        Child {index + 1}
                      </span>
                      <div className="relative">
                        <select
                          value={childAges[index] || ''}
                          onChange={(e) => handleChildAgeChange(index, e.target.value)}
                          className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-w-32"
                        >
                          <option value="">Select Age</option>
                          {Array.from({ length: 11 }, (_, age) => (
                            <option key={age + 1} value={age + 1}>
                              {age + 1} year{age + 1 > 1 ? 's' : ''} old
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Apply Button */}
              <div className="pt-4 border-t border-gray-100">
                <button
                  onClick={handleApply}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  APPLY
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Display Selected Values (for demo) */}
      
    </div>)}
        

        {/* Destination Input */}
        {activeTab === 'packages' && (
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
          <div 
            className="relative cursor-pointer"
            onClick={() => setShowDestinationDropdown(!showDestinationDropdown)}
          >
            <div className="w-full p-3 border border-gray-300 rounded-[20px] bg-gray-50 hover:border-blue-500 hover:text-blue-500 transition-colors duration-200 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-400 hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{getDisplayText('destination')}</span>
              </div>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Destination Dropdown */}
            {showDestinationDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-[20px] shadow-lg z-20 max-h-80 overflow-y-auto">
                {/* Search bar */}
                <div className="p-3 border-b">
                  <input
                    type="text"
                    placeholder="Search Destination City"
                    value={destinationSearch}
                    onChange={(e) => setDestinationSearch(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-[20px] focus:outline-none focus:border-blue-500"
                  />
                </div>
                
                {/* Selected destinations */}
                {selectedDestinations.length > 0 && (
                  <div className="p-3 border-b bg-gray-50">
                    <div className="flex flex-wrap gap-2">
                      {selectedDestinations.map((dest) => (
                        <div key={dest} className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          <span>{dest}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeDestination(dest);
                            }}
                            className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Destination options */}
                <div className="max-h-48 overflow-y-auto">
                  {filteredDestinations.map((destination) => (
                    <div
                      key={destination}
                      onClick={() => handleDestinationSelect(destination)}
                      className="p-3 hover:bg-gray-100 cursor-pointer flex items-center"
                    >
                      <input
                        type="checkbox"
                        checked={selectedDestinations.includes(destination)}
                        onChange={() => {}}
                        className="mr-3 accent-blue-500"
                      />
                      <span className="text-sm">{destination}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>)}

        {/* Number of Nights */}
        {activeTab === 'packages' && (
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Number of Nights</label>
          <div 
            className="relative cursor-pointer"
            onClick={() => setShowNightsDropdown(!showNightsDropdown)}
          >
            <div className={`${isSmall?"w-full p-3 border border-gray-300 rounded-[20px] relative  bg-gray-50 hover:border-blue-500 hover:text-blue-500 transition-colors duration-200 flex items-center justify-between":"w-full p-3 border border-gray-300 rounded-[20px] relative right-[-20px] bg-gray-50 hover:border-blue-500 hover:text-blue-500 transition-colors duration-200 flex items-center justify-between"}`}>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-400 hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{getDisplayText('nights')}</span>
              </div>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Nights Dropdown */}
            {showNightsDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-20">
                {nightOptions.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => handleNightSelect(option)}
                    className="p-3 hover:bg-gray-100 cursor-pointer flex items-center"
                  >
                    <input
                      type="checkbox"
                      checked={selectedNights.includes(option.value)}
                      onChange={() => {}}
                      className="mr-3 accent-blue-500"
                    />
                    <span className="text-sm">{option.label}</span>
                  </div>
                ))}
                <div className="p-3 border-t">
                  <button
                    onClick={() => setShowNightsDropdown(false)}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                  >
                    APPLY
                  </button>
                </div>
              </div>
            )}
          </div>
          
        </div>)}

        {/* Budget Per Person - Only show for Packages */}
        {activeTab === 'packages' && (
          <div className={`${isSmall?"":"relative right-[-40px]"}`}>
            <label className="block text-sm font-medium text-gray-700 mb-2">Budget Per Person</label>
            <div className="p-3 border border-gray-300 rounded-[30px] bg-gray-50 hover:border-blue-500 hover:text-blue-500 transition-colors duration-200">
              <div className="flex items-center space-x-2 mb-3">
                <svg className="w-5 h-5 text-gray-400 hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.51-1.31c-.562-.649-1.413-1.076-2.353-1.253V5z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Any Budget</span>
              </div>
              
              {/* Budget Input Fields */}
              <div className="flex items-center space-x-3 mb-3">
                {/* <div className="flex-1">
                  <label className="block text-xs text-gray-500 mb-1">Min £</label>
                  <input
                    type="number"
                    min="500"
                    max="5000"
                    value={budgetRange[0]}
                    onChange={(e) => {
                      const value = parseInt(e.target.value) || 500;
                      if (value >= 500 && value <= budgetRange[1]) {
                        setBudgetRange([value, budgetRange[1]]);
                      }
                    }}
                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500 hover:border-blue-400"
                    placeholder="728"
                  />
                </div> */}
                
                {/* <div className="text-gray-400 mt-4">-</div>
                
                <div className="flex-1">
                  <label className="block text-xs text-gray-500 mb-1">Max £</label>
                  <input
                    type="number"
                    min="500"
                    max="5000"
                    value={budgetRange[1]}
                    onChange={(e) => {
                      const value = parseInt(e.target.value) || 5000;
                      if (value <= 5000 && value >= budgetRange[0]) {
                        setBudgetRange([budgetRange[0], value]);
                      }
                    }}
                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500 hover:border-blue-400"
                    placeholder="3776"
                  />
                </div> */}
              </div>
              
              {/* Dual Range Slider Container */}
              <div className="relative mb-2">
                {/* Track */}
                <div className="w-full h-2 bg-gray-300 rounded-lg relative">
                  {/* Active track between sliders */}
                  <div 
                    className="absolute h-2 bg-blue-500 rounded-lg"
                    style={{
                      left: `${((budgetRange[0] - 500) / (5000 - 500)) * 100}%`,
                      width: `${((budgetRange[1] - budgetRange[0]) / (5000 - 500)) * 100}%`
                    }}
                  />
                </div>
                
                {/* Min Range Slider */}
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="50"
                  value={budgetRange[0]}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (value < budgetRange[1]) {
                      setBudgetRange([value, budgetRange[1]]);
                    } else {
                      setBudgetRange([value, value + 100]);
                    }
                  }}
                  className="absolute top-0 w-full h-2 bg-transparent appearance-none cursor-pointer range-slider range-slider-min"
                  style={{ zIndex: 2 }}
                />
                
                {/* Max Range Slider */}
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="50"
                  value={budgetRange[1]}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (value > budgetRange[0]) {
                      setBudgetRange([budgetRange[0], value]);
                    } else {
                      setBudgetRange([value - 100, value]);
                    }
                  }}
                  className="absolute top-0 w-full h-2 bg-transparent appearance-none cursor-pointer range-slider range-slider-max"
                  style={{ zIndex: 1 }}
                />
              </div>
              
              {/* Min and Max Labels */}
              <div className="flex justify-between text-xs text-gray-500">
                <span>£500</span>
                <span>£5000</span>
              </div>
            </div>
          </div>
        )}

        {/* Search Button */}
        <div className={`${isSmall ?"relative -top-2":""}`}>
          <button className={`w-[50px] bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center ${
            activeTab === 'packages' 
              ? 'absolute right-[100px] bottom-[5px] transform -translate-y-1/2': 'absolute right-[100px] bottom-[5px] transform -translate-y-1/2'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      {(showDestinationDropdown || showNightsDropdown || showDepartureDropdown) && (
        <div 
          className="fixed inset-0 z-10"
          onClick={() => {
            setShowDestinationDropdown(false);
            setShowNightsDropdown(false);
            setShowDepartureDropdown(false);
          }}
        />
      )}
      </div>
    </>
  );
};

export default TravelSearchForm;