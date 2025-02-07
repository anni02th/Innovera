import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const RuleCard = ({ title, content, theme, isTop }) => {
  const styles = {
    borderColor: theme === "blue" ? "#1e90ff" : "#FF6C40",
    boxShadow: isTop
      ? theme === "blue"
        ? "0 0 20px 10px rgba(30, 144, 255, 0.8)"
        : "0 0 20px 10px rgba(255, 165, 0, 0.8)"
      : "none",
    transform: isTop ? "rotate(0deg)" : "rotate(-5deg)",
  };

  const images = {
    blue: "/rnr-b-fire.png",
    orange: "/rnr-fire.png",
  };

  return (
    <div
      className={`rounded-[2rem] overflow-hidden transition-all duration-300 ease-out cursor-pointer border-4 hover:scale-105 hover:shadow-lg ${isTop ? "scale-100 opacity-100" : "scale-90 opacity-70"
        }`}
      style={styles}
    >
      <div className="bg-black flex m-0 p-0 rounded-xl h-full -left-1 relative transform transition-all duration-300">
        <img src={images[theme]} alt={`${theme} Fire`} className="relative" />
        <div className="my-2">
          <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
          <p className="text-gray-300">{content}</p>
        </div>
      </div>
    </div>
  );
};

const Rules = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      title: "Phase 1 Sankalp (Online): Idea Submission",
      content: (
        <>
          <p>&bull; Teams are required to submit a PPT using the provided template.</p>
          <p>&bull; The presentation should clearly articulate the idea, the problem, and potential solutions.</p>
        </>
      ),
      theme: "orange",
    },
    {
      title: "Phase 2 Prakalp (Online): Prototype Submission",
      content: (
        <>
          <p>&bull; Shortlisted teams will develop a prototype based on their idea.</p>
          <p>&bull; Submit a 3–5-minute video demonstrating the prototype's functionality and key features.</p>
        </>
      ),
      theme: "blue",
    },
    {
      title: "Phase 3 Utkarsh: Grand Finale",
      content: (
        <>
          <p>&bull; The Grand Finale will be a 12-hour offline hackathon held at the event venue.</p>
          <p>&bull; Teams will refine, enhance, and finalize their prototypes within the given time.</p>
        </>
      ),
      theme: "orange",
    },
    {
      title: "Team Composition",
      content: (
        <>
          <p>&bull; Teams should consist of 4-6 members with at least one female member.</p>
          <p>&bull; A blend of diverse skills and perspectives fuels groundbreaking innovation.</p>
        </>
      ),
      theme: "blue",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);


  return (
    <div
      className="min-h-screen bg-black text-white py-20 bg-cover bg-center"
      id="rules"
      style={{ backgroundImage: "url('/bg-img.png')" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-3xl sm:text-5xl font-bold text-center mb-12 text-white"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          RULES AND REGULATIONS
        </h2>

        <div className="md:hidden relative h-[400px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`absolute w-full transition-all duration-500 ease-in-out ${index === activeIndex
                ? "z-20 top-0 opacity-100"
                : index === activeIndex - 1 || index === activeIndex + 1
                  ? "z-10 top-8 opacity-60"
                  : "z-0 top-12 opacity-40"
                }`}
              style={{
                transform: `rotate(${index === activeIndex ? "0deg" :
                  index < activeIndex ? "-5deg" : "5deg"
                  }) scale(${index === activeIndex ? 1 :
                    index === activeIndex - 1 || index === activeIndex + 1 ? 0.9 : 0.8
                  })`,
              }}
            >
              <RuleCard
                title={card.title}
                content={card.content}
                theme={card.theme}
                isTop={index === activeIndex}
              />
            </div>
          ))}

          <button
            className="absolute bottom-8 left-4 transform bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition z-30"
            onClick={handlePrev}
          >
            <FaAngleLeft size={24} />
          </button>
          <button
            className="absolute bottom-8 right-4 transform bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition z-30"
            onClick={handleNext}
          >
            <FaAngleRight size={24} />
          </button>
        </div>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <RuleCard
              key={index}
              title={card.title}
              content={card.content}
              theme={card.theme}
              isTop={true}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <button onClick={() => window.open("/Idea ppt template.pptx", "_blank")} className="bg-white text-black font-medium px-6 py-2 rounded-full border border-white hover:text-white transition z-10 hover:bg-black">
            Download PPT
          </button>
          <button onClick={() => window.open("/Guidelines for Innov-Era 2025.pdf", "_blank")} className="bg-black border border-white text-white font-medium px-6 py-2 rounded-full hover:bg-zinc-900 transition ">
            Guidelines
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rules;
