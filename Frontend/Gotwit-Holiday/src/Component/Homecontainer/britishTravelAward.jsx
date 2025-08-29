import React, { useState } from 'react';
import Img from '../../assets/british-travel-award/bta-usa.svg';
import InclusiveHoliday from '../../assets/british-travel-award/bta-all-inclusive-holidays.svg';
import NorthenEurop from '../../assets/british-travel-award/bta-central-northern-europe.svg';
import CityShort from '../../assets/british-travel-award/bta-city-short-breaks.svg';
import SouthesatErupoeh from '../../assets/british-travel-award/bta-east-southeast-europe.svg';
import CentrelAsia from '../../assets/british-travel-award/bta-far-east-central-asia.svg';
import IndianOcean from '../../assets/british-travel-award/bta-indian-ocean.svg';
import Nordic from '../../assets/british-travel-award/bta-nordic-destinations.svg';
import SouthEast from '../../assets/british-travel-award/bta-southeast-asia.svg';
import SportTuar from '../../assets/british-travel-award/bta-sport-tours-holidays.svg';

const BritishTravelAwards = () => {
  // Sample awards data - replace with your actual images
  const awards = [
    {
      id: 1,
      image: Img,
      title: 'Best Travel Company',
      subtitle: 'U.S.A'
    },
    {
      id: 2,
      image: InclusiveHoliday,
      title: 'Best Travel Company',
      subtitle: 'all inclusive holidays'
    },
    {
      id: 3,
      image: NorthenEurop,
      title: 'Best Travel Company',
      subtitle: 'central northern europe'
    },
    {
      id: 4,
      image: CityShort,
      title: 'Best Travel Company',
      subtitle: 'city short breaks'
    },
    {
      id: 5,
      image: SouthesatErupoeh,
      title: 'Best Travel Company',
      subtitle: 'east southeast europe'
    },
    {
      id: 6,
      image: CentrelAsia,
      title: 'Best Travel Company',
      subtitle: 'far east central asia'
    },
    {
      id: 7,
      image: IndianOcean,
      title: 'Best Travel Company',
      subtitle: 'indian ocean'
    },
    {
      id: 8,
      image: Nordic,
      title: 'Best Travel Company',
      subtitle: 'nordic destinations'
    },
    {
      id: 9,
      image: SouthEast,
      title: 'Best Travel Company',
      subtitle: 'southeast asia'
    },
    {
      id: 10,
      image: SportTuar,
      title: 'Best Travel Company',
      subtitle: 'sport tours holidays'
    }
  ];


  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 2;
  const totalSlides = Math.ceil(awards.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getCurrentItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return awards.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <div>
    <div className="bg-gray-200 text-center flex items-center justify-center h-16">
  © 2025 GODWIT HOLIDAYS. All Rights Reserved.
</div></div>
  );
};

export default BritishTravelAwards;