import React, { useState, useRef, useEffect } from "react";

const RuleCard = ({ title, content, theme }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.transform = isHovered
        ? "translateY(-10px) scale(1.05)"
        : "translateY(0) scale(1)";
    }
  }, [isHovered]);

  const styles = {
    borderColor: theme === "blue" ? "#1e90ff" : "#FF6C40",
    boxShadow: isHovered
      ? theme === "blue"
        ? "0 0 20px 10px rgba(30, 144, 255, 0.8)"
        : "0 0 20px 10px rgba(255, 165, 0, 0.8)"
      : "none",
  };

  // Define images based on theme
  const images = {
    blue: "/rnr-b-fire.png", // Replace with your blue image path
    orange: "/rnr-fire.png", // Replace with your orange image path
  };

  return (
    <div
      ref={cardRef}
      className={`rounded-[2rem] overflow-hidden transition-all duration-300 ease-out cursor-pointer border-4`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={styles}
    >
      <div className="bg-black flex m-0 p-0 rounded-xl h-full -left-1 relative">
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
  return (
    <div
      className="min-h-screen bg-black text-white py-20 bg-cover bg-center"
      id="rules"
      style={{ backgroundImage: "url('/bg-img.png')" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12 text-white">
          RULES AND REGULATIONS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RuleCard
            title="Phase 1 Sankalp (Online): Idea Submission"
            content={
              <>
                <p>&bull; Teams are required to submit a PPT using the provided template.</p>
                <p>&bull; The presentation should clearly articulate the idea, the problem and potential solutions.</p>
              </>
            } theme="orange"
          />
          <RuleCard
            title="Phase 2 Prakalp (Online): Prototype Submission"
            content={
              <>
                <p>&bull; Shortlisted teams will develop a prototype based on their idea.</p>
                <p>&bull; Submit a 3–5-minute video demonstrating the prototype's functionality and key features.</p>
              </>
            } theme="blue"
          />
          <RuleCard
            title="Phase 3 Utkarsh: Grand Finale"
            content={
              <>
                <p>&bull; The Grand Finale will be a 12-hour offline hackathon held at the event venue.</p>
                <p>&bull; Teams will refine, enhance, and finalize their prototypes within the given time.</p>
              </>
            } theme="orange"
          />
          <RuleCard
            title="Team Composition"
            content={
              <>
                <p>&bull; Teams should consist of 4-6 members with at least one female member.</p>
                <p>&bull; A blend of diverse skills and perspectives fuels groundbreaking innovation.</p>
              </>
            } theme="blue"
          />
          
        </div>
      </div>
    </div>
  );
};

export default Rules;
