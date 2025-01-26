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
      style={styles}>
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
      style={{ backgroundImage: "url('/bg-img.png')" }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-3xl sm:text-5xl font-bold text-center mb-12 text-white"
          data-aos="fade-down">
          RULES AND REGULATIONS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-aos="fade-up">
            <RuleCard
              title="Selection Process"
              content="The top 25 participants from across India will be selected and invited to join an 8-hour hackathon at KK Wagh College. This rigorous selection ensures only the most innovative minds make it to the final event."
              theme="orange"
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <RuleCard
              title="National Platform"
              content="This national-level hackathon serves as a prestigious platform where the brightest minds come together to showcase their skills and shine among the best in the country."
              theme="blue"
            />
          </div>
          <div data-aos="fade-up">
            <RuleCard
              title="Time Constraint"
              content="Participants will have 8 hours to develop their solutions. This time pressure is designed to simulate real-world scenarios and push creativity to its limits."
              theme="orange"
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <RuleCard
              title="Team Composition"
              content="Teams can consist of 1-4 members. Diversity in skills and backgrounds is encouraged to foster innovative solutions."
              theme="blue"
            />
          </div>
          <div data-aos="fade-up">
            <RuleCard
              title="Judging Criteria"
              content="Projects will be judged on innovation, feasibility, technical complexity, and potential impact. A panel of industry experts will evaluate each submission."
              theme="orange"
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <RuleCard
              title="Code of Conduct"
              content="All participants are expected to adhere to a strict code of conduct, promoting respect, inclusivity, and ethical behavior throughout the event."
              theme="blue"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
