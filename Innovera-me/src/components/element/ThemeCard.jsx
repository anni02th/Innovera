import React, { useState } from "react";

const themes = [
  {
    title: "Aero: EdTech",
    gradient: "bg-gradient-to-r from-[#B2F4FF] to-[#52BCCE]",
    image: "/wind.png",
    description: "Innovating education technology to shape better learning experiences.",
    additionalContent: (
      <>
        <p>
          <b>Personalized learning platforms and Gamification of education:</b> Tailored learning experiences to individual needs and preferences, making education more engaging and effective.
        </p>
        <p>
          <b>Virtual classrooms and collaborative tools:</b> Remote learning environments that foster interaction and teamwork.
        </p>
        <p>
          <b>Tools for special education and inclusivity:</b> Technologies that support learners with diverse needs, ensuring equal access to quality education.
        </p>
        <p>
          <b>AI tutors and content recommendation systems:</b> Intelligent tools that provide personalized guidance and resources, enhancing the learning process.
        </p>
        <p>
          <b>Platforms for skill development and certifications:</b> Online platforms for acquiring new skills and earning credentials, boosting employability and career advancement.
        </p> <br />
        <p>EdTech enhances access to quality education, fosters inclusivity, reduces inequalities, and empowers learners of all genders, driving progress toward the Sustainable Development Goals (SDGs Goal 4, 5, 10).</p>
      </>
    ),
  },
  {
    title: "Terra: Green Tech",
    gradient: "bg-gradient-to-r from-[#B7E4C7] to-[#81B499]",
    image: "/ground.png",
    description: "Designing sustainable solutions to protect and heal our planet.",
    additionalContent: (
      <>
        <p>
          <b>Renewable energy solutions (solar, wind, etc.):</b> Technologies that harness clean energy sources to reduce reliance on fossil fuels and mitigate climate change.
        </p>
        <p>
          <b>Solid and E-waste management and recycling innovations:</b> Efficient systems for managing and repurposing waste, minimizing environmental impact.
        </p>
        <p>
          <b>Smart agriculture and water management:</b> Sustainable practices that optimize resource use in agriculture, ensuring food security while protecting the environment.
        </p>
        <p>
          <b>Eco-friendly transportation systems:</b> Innovative transportation solutions that reduce emissions and promote sustainable mobility.
        </p>
         <p>
          <b>Green building and sustainable construction practices:</b> Environmentally conscious building design and construction methods that minimize resource consumption and environmental impact.
        </p> <br />
        <p>Green technologies drive climate action, promote clean energy, foster responsible consumption, and safeguard ecosystems, advancing the Sustainable Development Goals (SDGs Goal 7, 11, 12, 13, 15).</p>
      </>
    ),
  },
  {
    title: "Hydra: FinTech",
    gradient: "bg-gradient-to-r from-[#A3DFFF] to-[#2B7BCD]",
    image: "/water.png",
    description: "Revolutionizing financial systems with smarter, safer, and more accessible solutions.",
    additionalContent: (
      <>
        <p>
          <b>Digital payments and wallets:</b> Secure and convenient electronic payment methods that streamline transactions and enhance financial inclusion.
        </p>
        <p>
          <b>Blockchain and cryptocurrency innovations:</b> Decentralized technologies that enable secure and transparent financial transactions, potentially transforming the financial landscape.
        </p>
        <p>
          <b>Fraud detection and prevention systems:</b> Advanced technologies that detect and prevent fraudulent financial activities, ensuring the integrity of financial systems.
        </p>
        <p>
          <b>Financial inclusion and accessibility tools:</b> Solutions that provide financial services to underserved populations, promoting economic empowerment and reducing inequality.
        </p>
        <p>
          <b>Banking automation using AI/ML:</b> Artificial intelligence and machine learning applications that automate banking processes, improving efficiency and customer experience.
        </p> <br />
        <p>FinTech accelerates financial inclusion, fosters economic growth, reduces poverty, and bridges inequality gaps, aligning with the Sustainable Development Goals (SDGs Goal 1, 8, 9, 10)</p>
      </>
    ),
  },
  {
    title: "Aether: Cyber",
    gradient: "bg-gradient-to-r from-[#A3B9F3] to-[#5A83F1]",
    image: "/space.png",
    description: "Managing cybersecurity threats to safeguard the digital realm.",
    additionalContent: (
      <>
        <p>
          <b>Cyber threat detection and mitigation tools:</b> Technologies that identify and respond to cyberattacks, protecting digital assets and infrastructure.
        </p>
        <p>
          <b>Data encryption and secure communication:</b> Methods for securing data transmission and storage, ensuring confidentiality and integrity.
        </p>
        <p>
          <b>Identity and access management solutions:</b> Systems that control user access to digital resources, preventing unauthorized access and data breaches.
        </p>
        <p>
          <b>Cloud and Network security enhancements:</b> Security measures that protect cloud-based and network-connected systems from cyber threats.
        </p>
        <p>
          <b>Ethical hacking and penetration testing:</b> Authorized security assessments that identify vulnerabilities in systems and networks, enabling proactive remediation.
        </p> <br />
        <p>Cybersecurity protects networks, data, and systems through encryption, threat detection, and risk management while ensuring compliance and user awareness,driving progress toward the Sustainable Development Goals (SDGs 4, 9, 11, 16).</p>
      </>
    ),
  },
  {
    title: "Ignis: Next Gen",
    gradient: "bg-gradient-to-r from-[#FFD7B5] to-[#EAAC76]",
    image: "/fire.png",
    description: "Creating futuristic tech that transforms how we live, work, and play.",
    additionalContent: (
      <>
        <p>
          <b>Artificial Intelligence, Machine Learning and Deep Learning:</b> Technologies that enable machines to learn from data, automate tasks, and make intelligent decisions.
        </p>
        <p>
          <b>Augmented Reality (AR) and Virtual Reality (VR) experiences:</b> Immersive technologies that blend the real and virtual worlds, creating engaging and interactive experiences.
        </p>
        <p>
          <b>Internet of Things (IoT), Robotics and automation:</b> Connected devices and automated systems that enhance efficiency, productivity, and convenience.
        </p>
        <p>
          <b>Quantum Computing:</b> A revolutionary computing paradigm that has the potential to solve complex problems beyond the reach of classical computers.
        </p>
        <p>
          <b>5G and connectivity advancements:</b> High-speed wireless technologies that enable faster data transfer, seamless communication, and new applications.
        </p> <br />
        <p>Next-gen technologies fuel innovation, enhance quality education, promote sustainable consumption, and empower future leaders, driving progress toward the Sustainable Development Goals (SDGs Goal 4, 8, 9, 12).</p>
      </>
    ),
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
                  ? "col-span-1 md:col-span-2 lg:col-span-3 h-[500px] md:h-fit"
                  : "h-[250px]"
              }`}
            >
              <div
                onClick={() => toggleCard(index)}
                className={`${theme.gradient} rounded-2xl p-6 h-full w-full cursor-pointer max-md:overflow-y-scroll
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
