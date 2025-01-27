import React, { useState } from "react";

const themes = [
  {
    title: "Artificial Intelligence and Machine Learning",
    gradient: "bg-gradient-to-r from-[#B2F4FF] to-[#52BCCE]",
    image: "/wind.png",
    description: "Explore the latest advancements in AI and ML technologies.",
    additionalContent:
      "AI and ML are revolutionizing industries worldwide, from healthcare to finance, providing efficient and intelligent solutions.",
    aosStyle: "fade-right",
  },
  {
    title: "Blockchain and Web3 Internet of Things (IoT)",
    gradient: "bg-gradient-to-r from-[#B7E4C7] to-[#81B499]",
    image: "/ground.png",
    description: "Discover how blockchain is transforming IoT applications.",
    additionalContent:
      "Blockchain ensures secure, decentralized, and transparent data handling in IoT networks.",
    aosStyle: "fade-up",
  },
  {
    title: "Internet of Things (IoT)",
    gradient: "bg-gradient-to-r from-[#A3DFFF] to-[#2B7BCD]",
    image: "/water.png",
    description: "Learn about the interconnected world of smart devices.",
    additionalContent:
      "IoT enables real-time monitoring and data collection across various industries, enhancing connectivity and efficiency.",
    aosStyle: "fade-left",
  },
  {
    title: "Sustainability and Green Tech Open Innovation",
    gradient: "bg-gradient-to-r from-[#A3B9F3] to-[#5A83F1]",
    image: "/space.png",
    description: "Innovative solutions for a sustainable future.",
    additionalContent:
      "Green technology focuses on reducing carbon footprints and promoting renewable energy sources.",
    aosStyle: "fade-in",
  },
  {
    title: "Derived solely from your original concepts!",
    gradient: "bg-gradient-to-r from-[#FFD7B5] to-[#EAAC76]",
    image: "/fire.png",
    description: "Unique ideas that stem from your creativity.",
    additionalContent:
      "Your innovative ideas can pave the way for groundbreaking solutions and opportunities.",
    aosStyle: "fade-in",
  },
];

const ThemesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleCard = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className="flex flex-col items-center justify-center bg-black text-black p-6 py-10 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-img.png')" }}
      id="themes">
      <h2 className="text-3xl md:text-5xl text-white font-bold my-12">
        THEMES
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {themes.map((theme, index) => (
          <div
            key={index}
            // onClick={() => toggleCard(index)}
            className={`relative p-6 rounded-lg transition-all duration-500 cursor-pointer shadow-lg hover:scale-105 ${
              expandedIndex === index
                ? "w-[1000px] h-[600px] bg-opacity-90"
                : "w-[300px] md:w-[380px] h-[250px]"
            } ${theme.gradient}`}
            style={{
              overflow: "hidden",
            }}
            data-aos={theme.aosStyle}>
            <h3 className="text-lg font-bold ">{theme.title}</h3>
            <img
              src={theme.image}
              alt={theme.title}
              className={`mt-4  transition-transform duration-300 ${
                expandedIndex === index ? "animate-spin-slow" : ""
              }`}
            />
            <button className="absolute bottom-4 right-4 bg-white text-3xl text-black rounded-xl px-2 shadow-lg">
              &rarr;
            </button>
            <div
              className={`mt-4 text-white transition-opacity duration-500 ${
                expandedIndex === index ? "opacity-100" : "opacity-0"
              }`}>
              <p>{theme.description}</p>
              {expandedIndex === index && (
                <div className="mt-4">
                  <p className="text-sm">{theme.additionalContent}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemesSection;
