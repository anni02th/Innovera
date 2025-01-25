import React from "react";

const AboutInnovEra = () => {
  const data = [
    {
      title: "WHAT is Techathon?",
      description:
        "Techathon is a dynamic hackathon designed to bring together innovative minds to solve real-world challenges. It’s a platform for tech enthusiasts, developers, and creators to showcase their skills and create impactful solutions.",
      gradient: "bg-gradient-to-r from-orange-300 to-orange-400",
    },
    {
      title: "WHO can participate in Techathon?",
      description:
        "Techathon is open to everyone—students, professionals, and tech enthusiasts alike. Whether you’re driven by collaboration or innovation, this is your chance to learn, network, and connect with like-minded individuals.",
      gradient: "bg-gradient-to-r from-green-300 to-green-400",
    },
    {
      title: "WHAT are themes of Techathon?",
      description:
        "Participants can explore diverse themes, such as Artificial Intelligence and Machine Learning, Blockchain and Web3, Internet of Things (IoT), Sustainability and Green Tech, and Open Innovation (Your own ideas)!",
      gradient: "bg-gradient-to-r from-blue-300 to-blue-400",
    },
    {
      title: "WHY to participate?",
      description:
        "Skill Development, Networking, Challenging Creativity, Resume Building, Fun and Collaboration.",
      gradient: "bg-gradient-to-r from-purple-300 to-purple-400",
      button: true,
    },
  ];

  return (
    <div className="bg-black py-16 px-8">
      <h2 className="text-center text-white text-3xl sm:text-5xl font-bold mb-14 ">
        ABOUT INNOV-ERA
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {data.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl ${
              item.gradient
            } text-black ${
              index % 2 === 0
                ? "sm:-rotate-6 hover:rotate-0"
                : "sm:rotate-6 hover:rotate-0"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              {item.title}
            </h3>
            <p className="text-zinc-800 text-base sm:text-lg font-normal leading-relaxed mb-4">
              {item.description}
            </p>
            {item.button && (
              <button className="bg-white text-black font-medium border px-5 py-2 rounded-3xl hover:bg-gray-200 transition">
                Register
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutInnovEra;
