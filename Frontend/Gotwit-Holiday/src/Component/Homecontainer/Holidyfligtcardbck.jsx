import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Plus, Minus, Users, Calendar, Plane, Search } from "lucide-react";

const TravelSearchForm = () => {
  const [activeTab, setActiveTab] = useState('packages');
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);
  const [showNightsDropdown, setShowNightsDropdown] = useState(false);
  const [showDepartureDropdown, setShowDepartureDropdown] = useState(false);
  const [showGotoDropdown, setShowGotoDropdown] = useState(false);
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [selectedNights, setSelectedNights] = useState([]);
  const [selectedDepartureCity, setSelectedDepartureCity] = useState('');
  const [selectedGotoCity, setSelectedGotoCity] = useState('');
  const [budgetRange, setBudgetRange] = useState([728, 3776]);
  const [destinationSearch, setDestinationSearch] = useState('');
  const [departureSearch, setDepartureSearch] = useState('');
  const [gotoSearch, setGotoSearch] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  // Traveler state
  const [isOpen, setIsOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [childAges, setChildAges] = useState([]);
  const dropdownRef = useRef(null);
  
  const today = new Date().toISOString().split('T')[0];
  
  const destinations = [
    'Albania', 'Andorra', 'Antigua and Barbuda', 'Austria', 'Belgium', 
    'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark'
  ];

  const departureCities = [
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

  // Helper functions
  const handleStartDateChange = (e) => {
    const selectedStartDate = e.target.value;
    setStartDate(selectedStartDate);
    if (endDate && endDate <= selectedStartDate) {
      setEndDate('');
    }
  };
  
  const getMinEndDate = () => {
    if (!startDate) return today;
    const startDateObj = new Date(startDate);
    const nextDay = new Date(startDateObj);
    nextDay.setDate(startDateObj.getDate() + 1);
    return nextDay.toISOString().split('T')[0];
  };

  const getTravelerText = () => {
    const totalTravelers = adults + children;
    if (totalTravelers === 1) return "1 Traveller";
    return `${totalTravelers} Travellers`;
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
    if (type === 'departure') return selectedDepartureCity || 'Departing from';
    if (type === 'goto') return selectedGotoCity || 'Going To';
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg mx-auto w-full max-w-7xl">
      {/* Tab Navigation */}
      <div className="flex mb-6 w-full max-w-md mx-auto sm:mx-0">
        <button
          onClick={() => setActiveTab('packages')}
          className={`flex-1 px-4 py-3 rounded-l-full flex items-center justify-center space-x-2 text-sm sm:text-base ${
            activeTab === 'packages' 
              ? 'bg-pink-500 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
          </svg>
          <span>Packages</span>
        </button>
        <button
          onClick={() => setActiveTab('flights')}
          className={`flex-1 px-4 py-3 rounded-r-full flex items-center justify-center space-x-2 text-sm sm:text-base ${
            activeTab === 'flights' 
              ? 'bg-pink-500 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Plane className="w-4 h-4 sm:w-5 sm:h-5" />  
          <span>Flights</span>
        </button>
      </div>

      {/* Search Form - Mobile First Approach */}
      <div className="space-y-4">
        
        {/* Mobile: Stack all fields vertically */}
        <div className="block lg:hidden space-y-4">
          {activeTab === 'flights' && (
            <>
              {/* Departure City */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Departing From</label>
                <div 
                  className="relative cursor-pointer"
                  onClick={() => setShowDepartureDropdown(!showDepartureDropdown)}
                >
                  <div className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center justify-between">
                    <span className="text-sm">{getDisplayText('departure')}</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                  {/* Mobile Dropdown */}
                  {showDepartureDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto">
                      <div className="p-3">
                        <input
                          type="text"
                          placeholder="Search departure city..."
                          value={departureSearch}
                          onChange={(e) => setDepartureSearch(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                      </div>
                      <div className="max-h-40 overflow-y-auto">
                        {departureCities.map((city, index) => (
                          <div
                            key={index}
                            onClick={() => {
                              setSelectedDepartureCity(city);
                              setShowDepartureDropdown(false);
                            }}
                            className="px-3 py-2 hover:bg-blue-50 cursor-pointer"
                          >
                            {city}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Going To */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Going To</label>
                <div 
                  className="relative cursor-pointer"
                  onClick={() => setShowGotoDropdown(!showGotoDropdown)}
                >
                  <div className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center justify-between">
                    <span className="text-sm">{getDisplayText('goto')}</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                  {/* Mobile Dropdown */}
                  {showGotoDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto">
                      <div className="p-3">
                        <input
                          type="text"
                          placeholder="Search destination..."
                          value={gotoSearch}
                          onChange={(e) => setGotoSearch(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                      </div>
                      <div className="max-h-40 overflow-y-auto">
                        {departureCities.map((city, index) => (
                          <div
                            key={index}
                            onClick={() => {
                              setSelectedGotoCity(city);
                              setShowGotoDropdown(false);
                            }}
                            className="px-3 py-2 hover:bg-blue-50 cursor-pointer"
                          >
                            {city}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Date Range - Mobile */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={startDate}
                      min={today}
                      onChange={handleStartDateChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={endDate}
                      min={getMinEndDate()}
                      onChange={(e) => setEndDate(e.target.value)}
                      disabled={!startDate}
                      className={`w-full px-3 py-3 border rounded-xl outline-none ${
                        startDate 
                          ? 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white' 
                          : 'border-gray-200 bg-gray-50 cursor-not-allowed'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Travelers - Mobile */}
              <div className="relative" ref={dropdownRef}>
                <label className="block text-sm font-medium text-gray-700 mb-2">Travelers</label>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full flex items-center justify-between px-3 py-3 bg-gray-50 border border-gray-300 rounded-xl"
                >
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">{getTravelerText()}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Travelers Dropdown - Mobile Optimized */}
                {isOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 p-4">
                    <div className="space-y-4">
                      {/* Adults */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-gray-800 font-semibold">Adults</h3>
                          <p className="text-sm text-gray-500">Age 12 and over</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => adults > 1 && setAdults(adults - 1)}
                            disabled={adults <= 1}
                            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                              adults <= 1 ? 'border-gray-200 text-gray-300' : 'border-blue-500 text-blue-500'
                            }`}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-semibold">{adults}</span>
                          <button
                            onClick={() => setAdults(adults + 1)}
                            className="w-8 h-8 rounded-full border-2 border-blue-500 text-blue-500 flex items-center justify-center"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Children */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-gray-800 font-semibold">Children</h3>
                          <p className="text-sm text-gray-500">Age 0 - 11</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => children > 0 && setChildren(children - 1)}
                            disabled={children <= 0}
                            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                              children <= 0 ? 'border-gray-200 text-gray-300' : 'border-blue-500 text-blue-500'
                            }`}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-semibold">{children}</span>
                          <button
                            onClick={() => setChildren(children + 1)}
                            className="w-8 h-8 rounded-full border-2 border-blue-500 text-blue-500 flex items-center justify-center"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Child Ages */}
                      {children > 0 && (
                        <div className="space-y-3 pt-2 border-t">
                          {Array.from({ length: children }, (_, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <span className="text-gray-700">Child {index + 1}</span>
                              <select
                                value={childAges[index] || ''}
                                onChange={(e) => {
                                  const newAges = [...childAges];
                                  newAges[index] = e.target.value;
                                  setChildAges(newAges);
                                }}
                                className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-blue-500"
                              >
                                <option value="">Age</option>
                                {Array.from({ length: 11 }, (_, age) => (
                                  <option key={age + 1} value={age + 1}>
                                    {age + 1}
                                  </option>
                                ))}
                              </select>
                            </div>
                          ))}
                        </div>
                      )}

                      <button
                        onClick={() => setIsOpen(false)}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Package Fields for Mobile */}
          {activeTab === 'packages' && (
            <>
              {/* Destination */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                <div 
                  className="relative cursor-pointer"
                  onClick={() => setShowDestinationDropdown(!showDestinationDropdown)}
                >
                  <div className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center justify-between">
                    <span className="text-sm">{getDisplayText('destination')}</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                  {/* Destination Dropdown */}
                  {showDestinationDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto">
                      <div className="p-3">
                        <input
                          type="text"
                          placeholder="Search destination..."
                          value={destinationSearch}
                          onChange={(e) => setDestinationSearch(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                      </div>
                      <div className="max-h-40 overflow-y-auto">
                        {destinations.map((destination, index) => (
                          <div
                            key={index}
                            onClick={() => {
                              if (!selectedDestinations.includes(destination)) {
                                setSelectedDestinations([...selectedDestinations, destination]);
                              }
                            }}
                            className="px-3 py-2 hover:bg-blue-50 cursor-pointer flex items-center"
                          >
                            <input
                              type="checkbox"
                              checked={selectedDestinations.includes(destination)}
                              onChange={() => {}}
                              className="mr-3"
                            />
                            <span>{destination}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Nights */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Nights</label>
                <div 
                  className="relative cursor-pointer"
                  onClick={() => setShowNightsDropdown(!showNightsDropdown)}
                >
                  <div className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 flex items-center justify-between">
                    <span className="text-sm">{getDisplayText('nights')}</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                  {/* Nights Dropdown */}
                  {showNightsDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-xl z-50">
                      {nightOptions.map((option) => (
                        <div
                          key={option.value}
                          onClick={() => {
                            if (selectedNights.includes(option.value)) {
                              setSelectedNights(selectedNights.filter(n => n !== option.value));
                            } else {
                              setSelectedNights([...selectedNights, option.value]);
                            }
                          }}
                          className="p-3 hover:bg-gray-100 cursor-pointer flex items-center"
                        >
                          <input
                            type="checkbox"
                            checked={selectedNights.includes(option.value)}
                            onChange={() => {}}
                            className="mr-3"
                          />
                          <span>{option.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Per Person</label>
                <div className="p-3 border border-gray-300 rounded-xl bg-gray-50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm">£{budgetRange[0]}</span>
                    <span className="text-sm">£{budgetRange[1]}</span>
                  </div>
                  {/* Simple range slider for mobile */}
                  <input
                    type="range"
                    min="500"
                    max="5000"
                    step="50"
                    value={budgetRange[1]}
                    onChange={(e) => setBudgetRange([budgetRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </>
          )}

          {/* Search Button - Mobile */}
          <button className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
            <Search className="w-5 h-5" />
            <span className="font-semibold">Search {activeTab === 'packages' ? 'Packages' : 'Flights'}</span>
          </button>
        </div>

        {/* Desktop: Horizontal layout (your existing desktop code can go here with proper responsive classes) */}
        <div className="hidden lg:block">
          {/* Add your desktop layout here with proper responsive classes */}
          <div className={`grid gap-4 items-end ${activeTab === 'packages' ? 'grid-cols-4' : 'grid-cols-5'}`}>
            {/* Desktop fields here */}
          </div>
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      {(showDestinationDropdown || showNightsDropdown || showDepartureDropdown || showGotoDropdown) && (
        <div 
          className="fixed inset-0 z-10"
          onClick={() => {
            setShowDestinationDropdown(false);
            setShowNightsDropdown(false);
            setShowDepartureDropdown(false);
            setShowGotoDropdown(false);
          }}
        />
      )}
    </div>
  );
};

export default TravelSearchForm;