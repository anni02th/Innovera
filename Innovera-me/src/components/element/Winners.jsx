import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const winnersData = [
  {
    id: 1,
    image: "/Aero.jpg",
    team: "Team INDIC",
    domain: "Ed-Tech",
  },
  {
    id: 2,
    image: "/Teera.jpg",
    team: "Tech Prakalpz",
    domain: "GreenTech",
  },
  {
    id: 3,
    image: "/Hydra.jpg",
    team: "Team Arthankur ",
    domain: "FinTech",
  },
  {
    id: 4,
    image: "/Ignis.jpg",
    team: "Team MedAlign",
    domain: "Next Gen",
  },
  {
    id: 5,
    image: "/Aether.jpg",
    team: "Team Chekravyuh Solver's",
    domain: "Cyber Tech",
  },
  // Add more winners as needed
];

const WinnersCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % winnersData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + winnersData.length) % winnersData.length);
  };

  useEffect(() => {
    let interval;
    if (autoRotate) {
      interval = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(interval);
  }, [autoRotate]);

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">OUR WINNERS</h2>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Main Carousel */}
        <div className="relative h-96 overflow-hidden rounded-2xl">
          {winnersData.map((winner, index) => (
            <div
              key={winner.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={winner.image}
                alt={winner.team}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-2xl font-bold mb-2">{winner.team}</h3>
                <p className="text-orange-500 font-semibold">{winner.domain}</p>
              </div>
            </div>
          ))}
        </div>

    

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
          {winnersData.map((winner, index) => (
            <div
              key={winner.id}
              onClick={() => setActiveIndex(index)}
              className={`relative cursor-pointer transition-transform duration-300 ${
                index === activeIndex ? "scale-110" : "scale-100"
              }`}
            >
              <img
                src={winner.image}
                alt={winner.team}
                className="w-full h-32 object-cover rounded-lg border-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WinnersCarousel;