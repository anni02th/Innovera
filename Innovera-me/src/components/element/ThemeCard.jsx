import React, { useState } from "react";

const themes = [
  {
    title: "Aero: EdTech",
    gradient: "bg-gradient-to-r from-[#B2F4FF] to-[#52BCCE]",
    image: "/wind.png", 
    description: "Focus: Innovating education technology to shape better learning experiences.",
    additionalContent: "Key areas: Personalized learning platforms, Gamification of education, Virtual classrooms and collaborative tools, Tools for special education and inclusivity, AI tutors and content recommendation systems, Platforms for skill development and certifications",
  },
  {
    title: "Terra: Green Tech",
    gradient: "bg-gradient-to-r from-[#B7E4C7] to-[#81B499]",
    image: "/ground.png", 
    description: "Focus: Designing sustainable solutions to protect and heal our planet.",
    additionalContent: "Key areas:Renewable energy solutions (solar, wind, etc.), Waste management and recycling innovations, Smart agriculture and water management, Carbon footprint reduction technologies, Eco-friendly transportation systems",
  },
  {
    title: "Hydra: FinTech",
    gradient: "bg-gradient-to-r from-[#A3DFFF] to-[#2B7BCD]",
    image: "/water.png", 
    description: "Focus: Revolutionizing financial systems with smarter, safer and more accessible solutions.",
    additionalContent: "Key areas:Digital payments and wallets, Blockchain and cryptocurrency innovations, Fraud detection and prevention systems, Investment and wealth management platforms, Financial inclusion and accessibility tools, Banking automation using AI/ML.",
  },
  {
    title: "Ether: Cyber",
    gradient: "bg-gradient-to-r from-[#A3B9F3] to-[#5A83F1]",
    image: "/space.png", 
    description: "Focus: Tackling cybersecurity threats to safeguard the digital realm.",
    additionalContent: "Key areas:Cyber threat detection and mitigation tools, Data encryption and secure communication, Identity and access management solutions, Network security innovations, Cloud security enhancements, Ethical hacking and penetration testing",
  },
  {
    title: "Ignis: Next Gen",
    gradient: "bg-gradient-to-r from-[#FFD7B5] to-[#EAAC76]",
    image: "/fire.png", 
    description: "Focus: Creating futuristic tech that transforms how we live, work, and play.",
    additionalContent: "Key areas:Artificial Intelligence and Machine Learning applications, Internet of Things (IoT) for smart living, Augmented Reality (AR) and Virtual Reality (VR) experiences, Robotics and automation, 5G and connectivity advancements",
  },
];

const ThemesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleCard = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen bg-black bg-cover p-4 md:p-8"
      style={{ backgroundImage: "url('/bg-img.png')" }}
      id="themes"
    >
      <h2 className="text-3xl md:text-5xl text-white font-bold text-center my-8">
        THEMES
      </h2>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-in-out ${
                expandedIndex === index
                  ? "col-span-1 md:col-span-2 lg:col-span-3 h-[500px] md:h-[400px]"
                  : "h-[250px]"
              }`}
            >
              <div
                onClick={() => toggleCard(index)}
                className={`${theme.gradient} rounded-2xl p-6 h-full w-full cursor-pointer 
                  transition-all duration-500 ease-in-out relative overflow-hidden
                  ${
                    expandedIndex === index
                      ? "scale-100"
                      : expandedIndex !== null
                      ? "scale-95 opacity-70"
                      : "hover:scale-105"
                  }`}
              >
                <div className={`transition-all duration-500 ${
                  expandedIndex === index
                    ? "flex flex-col md:flex-row items-start gap-8"
                    : ""
                }`}>
                  {/* Content Container */}
                  <div className={`${
                    expandedIndex === index
                      ? "md:w-2/3"
                      : "w-full"
                  }`}>
                    <h3 className={`font-bold transition-all duration-300 ${
                      expandedIndex === index
                        ? "text-2xl md:text-3xl mb-6"
                        : "text-lg mb-3"
                    }`}>
                      {theme.title}
                    </h3>
                    
                    <p className="text-sm md:text-base mb-4">
                      {theme.description}
                    </p>

                    {/* Additional content shown when expanded */}
                    <div className={`transition-all duration-500 ${
                      expandedIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10 hidden"
                    }`}>
                      <p className="text-sm md:text-base">
                        {theme.additionalContent}
                      </p>
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className={`transition-all duration-500 ${
                    expandedIndex === index
                      ? "md:w-1/3"
                      : "w-full mt-4"
                  }`}>
                    <img
                      src={theme.image}
                      alt={theme.title}
                      className={`transition-all duration-500 ${
                        expandedIndex === index
                          ? "w-full"
                          : "w-24 md:w-32"
                      }`}
                    />
                  </div>
                </div>

                {/* Arrow button */}
                <button
                  className={`absolute bottom-4 right-4 bg-white text-3xl text-black 
                    rounded-xl px-2 shadow-lg transition-opacity duration-300 ${
                      expandedIndex === index ? "opacity-0" : "opacity-100"
                    }`}
                >
                  &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemesSection;
