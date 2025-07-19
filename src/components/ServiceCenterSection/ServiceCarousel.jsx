import { useState,useMemo } from "react";   
import {ChevronLeft, ChevronRight, Divide } from "lucide-react";
import ServiceCard from "./ServiceCard";
import useAutoSlide from "../../hooks/useAutoSlide";
import CityDropdown from "./CityDropdown";
// import axios from "axios";
import {dummyServiceCenters} from "../../data/dummyServiceCenters";

const cities = ["All Cities", "New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

export default function ServiceCarousel({service}) {
    const [selectedCity, setSelectedCity] = useState("All Cities");
    const [ currentIndex, setCurrentIndex] = useState(0);
    const cardsPerView = 3;

    const filteredCenters = useMemo(() => {
        return selectedCity === "All Cities"
            ? dummyServiceCenters
            : dummyServiceCenters.filter(center => center.city === selectedCity);
    }, [selectedCity]);

    const maxIndex = Math.max(0, filteredCenters.length - cardsPerView);

    const nextSlide = () => {setCurrentIndex((prev)=> (prev >=maxIndex ? 0 : prev + 1)); }
    const prevSlide = () => {setCurrentIndex((prev)=> (prev <= 0 ? maxIndex : prev - 1)); }
    const  goToSlide = (index) => {
        setCurrentIndex(Math.min(index, maxIndex));}

        useAutoSlide(nextSlide, 3000);

   return (
  <div className="bg-gray-100 py-8 w-full min-h-screen">
    {/* Centered Heading with Right-Aligned Dropdown */}
    <div className="relative bg-teal-500 py-6 mb-8">
      <h2 className="text-3xl text-white font-bold text-center">{service} </h2>

      {/* Dropdown positioned top-right of heading */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2">
        <CityDropdown
          cities={cities}
          selectedCity={selectedCity}
          onChange={setSelectedCity}
        />
      </div>
    </div>

    <div className="w-full px-6">
      {/* Carousel Section */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-0 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft />
        </button>

        {/* Sliding Cards */}
        <div className="overflow-hidden mx-12">
          <div
            className="flex gap-4 transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
          >
            {filteredCenters.map((center, idx) => (
              <ServiceCard
                key={center.id}
                center={center}
                isActive={idx === currentIndex + 1}
              />
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-0 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === currentIndex ? "bg-teal-600" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  </div>
);

}