import { useState, useMemo, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Helper Hook for Responsiveness ---
// This hook determines how many cards to show based on window width.
const useCardsPerView = () => {
    const [cardsPerView, setCardsPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setCardsPerView(1);
            } else if (window.innerWidth < 1024) {
                setCardsPerView(2);
            } else {
                setCardsPerView(3);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial check

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return cardsPerView;
};

// --- Dummy Data and Components (for testing) ---
const dummyServiceCenters = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `City Service Center ${i + 1}`,
    city: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"][i % 5],
    rating: (Math.random() * (5 - 3.5) + 3.5).toFixed(1),
    services: ["Oil Change", "Tire Rotation", "Brake Repair"].slice(0, Math.floor(Math.random() * 3) + 1),
    imageUrl: `https://picsum.photos/seed/${i+1}/400/300` // Placeholder images
}));

const cities = ["All Cities", "New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

const ServiceCard = ({ center, isActive }) => (
    <div className={`flex-shrink-0 w-full transition-transform duration-300 ${isActive ? "scale-105" : "scale-100"}`}>
        <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
            <img src={center.imageUrl} alt={center.name} className="w-full h-40 object-cover"/>
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{center.name}</h3>
                <p className="text-sm text-gray-500">{center.city}</p>
                <div className="flex items-center mt-2">
                    <span className="text-teal-600 font-bold">{center.rating} ★</span>
                </div>
            </div>
        </div>
    </div>
);

const CityDropdown = ({ cities, selectedCity, onChange }) => (
    <select
        value={selectedCity}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white text-gray-800 px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-white"
    >
        {cities.map(city => <option key={city} value={city}>{city}</option>)}
    </select>
);


// --- Main ServiceCarousel Component ---
export default function ServiceCarousel({ service }) {
    const [selectedCity, setSelectedCity] = useState("All Cities");
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerView = useCardsPerView(); // Responsive cards per view

    const filteredCenters = useMemo(() => {
        if (selectedCity === "All Cities") return dummyServiceCenters;
        return dummyServiceCenters.filter(center => center.city === selectedCity);
    }, [selectedCity]);

    const maxIndex = Math.max(0, filteredCenters.length - cardsPerView);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };
    const goToSlide = (index) => {
        setCurrentIndex(Math.min(index, maxIndex));
    };
    
    // Auto-slide functionality (optional)
    useEffect(() => {
        if (filteredCenters.length <= cardsPerView) return; // Don't slide if not enough cards
        const slideInterval = setInterval(nextSlide, 3000);
        return () => clearInterval(slideInterval);
    }, [currentIndex, maxIndex, filteredCenters.length, cardsPerView]);


    return (
        <div className="bg-gray-50 py-3 md:py-4 w-full mb-5">
            {/* Eye-catching Header */}
            <div className="relative bg-gradient-to-r from-teal-500 to-teal-600 py-8 md:py-10 mb-10 md:mb-12 shadow-lg">
                <div className="container mx-auto px-4 flex justify-center items-center">
                    <h2 className="text-3xl sm:text-4xl text-white font-extrabold text-center tracking-tight">
                        {service}
                    </h2>
                    {/* <div className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2">
                        <CityDropdown
                            cities={cities}
                            selectedCity={selectedCity}
                            onChange={setSelectedCity}
                        />
                    </div> */}
                </div>
            </div>

            <div className="container mx-auto px-4">
                {/* Carousel Section */}
                <div className="relative">
                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 -translate-y-1/2 -left-2 md:-left-4 z-10 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={filteredCenters.length <= cardsPerView}
                    >
                        <ChevronLeft size={28} className="text-gray-700"/>
                    </button>

                    {/* Sliding Cards */}
                    <div className="overflow-hidden mx-auto">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                // Adjust card width and transform based on responsive cardsPerView
                                width: `${100 / cardsPerView}%`,
                                transform: `translateX(-${currentIndex * 100}%)`,
                                gap: '1.5rem' // `gap-6`
                            }}
                        >
                            {filteredCenters.map((center, idx) => (
                                <div key={center.id} className="w-full flex-shrink-0">
                                    <ServiceCard
                                        center={center}
                                        isActive={
                                          cardsPerView === 1 ? true : 
                                          (idx >= currentIndex + Math.floor(cardsPerView / 2)) && (idx < currentIndex + Math.floor(cardsPerView/2) +1)
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 -translate-y-1/2 -right-2 md:-right-4 z-10 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={filteredCenters.length <= cardsPerView}
                    >
                        <ChevronRight size={28} className="text-gray-700"/>
                    </button>
                </div>

                {/* Dot Indicators */}
                {filteredCenters.length > cardsPerView && (
                    <div className="flex justify-center mt-8 gap-2">
                        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                            <button
                                key={i}
                                className={`h-3 rounded-full transition-all duration-300 ${
                                    i === currentIndex ? "w-6 bg-teal-600" : "w-3 bg-gray-300 hover:bg-gray-400"
                                }`}
                                onClick={() => goToSlide(i)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}