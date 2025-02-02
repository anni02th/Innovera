import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Shubham Somani",
    role: "Owner of Shubham Steel Home",
    text: "Your extra effort and keen attention to detail on my banners were truly commendable. Thanks for the excellent work!",
    image: "/images/shubham.jpg",
  },
  {
    name: "Riya Sharma",
    role: "Marketing Head at XYZ Corp",
    text: "The creative designs delivered were beyond our expectations. Absolutely fantastic service!",
    image: "/images/riya.jpg",
  },
  {
    name: "Arjun Mehta",
    role: "Founder of Mehta Innovations",
    text: "Brilliant execution and prompt responses. A pleasure to work with!",
    image: "/images/arjun.jpg",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center text-center p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        What People Say About <span className="text-[#7155ff]">Us?</span>
      </h1>
      <p className="text-lg text-gray-600 mb-8">Real voices, real reviews from our satisfied clients.</p>
      
      <div className="relative max-w-xl w-full p-6 bg-white shadow-lg rounded-xl border border-gray-200 flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-24 h-24 object-cover rounded-full border-4 border-[#7155ff] mb-4"
            />
            <h3 className="text-2xl font-semibold">{testimonials[index].name}</h3>
            <p className="text-sm text-gray-500 mb-4">{testimonials[index].role}</p>
            <p className="text-lg text-gray-700 italic">"{testimonials[index].text}"</p>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="flex justify-between items-center mt-6 gap-6">
        <button onClick={prevTestimonial} className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition">
          <FaChevronLeft size={24} />
        </button>
        <button onClick={nextTestimonial} className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition">
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;