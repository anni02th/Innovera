import React from "react";
import WinnersCarousel from "./Winners";

const AboutInnovEra = () => {
  const aboutCards = [
    {
      title: "WHAT is Innovera?",
      description:
        "Innovera is a National hackathon designed to bring together innovative minds to solve real-world challenges. It’s a platform for tech enthusiasts, developers, and creators to showcase their skills and create impactful solutions.",
      gradient: "from-orange-300 to-orange-400",
      img: "/fire-card.png",
    },
    {
      title: "WHO can participate?",
      description:
        "Innovera welcomes all—students, professionals, and tech enthusiasts! Participate solo or as a team to innovate, learn, and network with peers.",
      gradient: "from-green-300 to-green-400",
      img: "/ground-card.png",
    },
    {
      title: "WHAT are the themes?",
      description:
        "Explore themes like Aero (EdTech), Terra (Green Tech), Hydra (FinTech), Ether (Cyber), and Ignis (Next Gen) to create impactful innovations.",
      gradient: "from-blue-300 to-blue-400",
      img: "/wind-card.png",
    },
    {
      title: "WHY join Innovera?",
      description:
        "Boost skills, network, tackle challenges, unleash creativity, win prizes, enhance your resume, and enjoy Nashik’s vibrant culture, including Trimbakeshwar Temple and Panchavati.",
      gradient: "from-purple-300 to-purple-400",
      img: "/space-card.png",
      hasButton: true,
    },
  ];

  const sponsors = [
    { img: "/spo4.png", name: "Triarq Health" },
    { img: "/spo5.png", name: "Aress." },
    { img: "/spo1.jpg", name: "The Parnika : A Small Leaf" },
    { img: "/spo3.jpg", name: "WePlus Consultancy Pvt. Ltd." },
    { text: "Prashant Bhende", name: "Alumni (2016 batch)" },
  ];

  const sortedSponsors = [...sponsors].sort((a, b) => 
    (a.img && !b.img) ? -1 : (!a.img && b.img) ? 1 : 0
  );

  const SectionTitle = ({ children }) => (
    <h2 className="text-center text-white text-3xl sm:text-5xl font-bold mb-14">
      {children}
    </h2>
  );

  const Card = ({ item, index }) => (
    <div
      className={`relative p-6 rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-white bg-gradient-to-r ${item.gradient} text-black ${
        index % 2 === 0 ? "sm:-rotate-6 hover:rotate-0" : "sm:rotate-6 hover:rotate-0"
      }`}
    >
      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">
        {item.title}
      </h3>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src={item.img} alt={item.title} className="w-auto h-32 object-contain opacity-50" />
      </div>
      <p className="text-zinc-800 text-base sm:text-lg leading-relaxed mb-4 relative z-10">
        {item.description}
      </p>
      {item.hasButton && (
        <div className="text-center relative z-10">
          <a
            href="https://unstop.com/p/innov-era-national-level-hackathon-kkwagh-college-of-engineering-and-researchnashik-1374664"
            className="inline-block bg-white mt-4 text-black font-medium border px-5 py-2 rounded-3xl hover:bg-gray-200 transition-colors"
          >
            Register
          </a>
        </div>
      )}
    </div>
  );

  const SponsorCard = ({ sponsor, index }) => (
    <div
      key={index}
      className="p-6 rounded-lg w-[320px] shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white bg-gray-900 text-white flex flex-col items-center"
    >
      {sponsor.img ? (
        <img
          src={sponsor.img}
          alt={sponsor.name}
          className="w-24 h-24 sm:w-32 sm:h-32 object-contain mb-4"
        />
      ) : (
        <div className="w-24 h-24 sm:w-32 sm:h-32 font-bold flex items-center justify-center text-center mb-4 text-lg">
          {sponsor.text}
        </div>
      )}
      <p className="text-center text-base sm:text-lg font-semibold">
        {sponsor.name}
      </p>
    </div>
  );

  return (
    <section
      className="bg-black py-16 px-8 min-h-screen bg-cover flex flex-col items-center"
      style={{ backgroundImage: "url('/bg-img.png')" }}
      id="about"
    >
      <div className="w-full max-w-7xl">
        <SectionTitle>ABOUT INNOV-ERA</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutCards.map((item, index) => (
            <Card key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      <WinnersCarousel/>

      <div className="mt-16 w-full max-w-5xl">
        <SectionTitle>OUR SPONSORS</SectionTitle>
        <div className="flex gap-8 flex-wrap justify-center wi">
          {sortedSponsors.map((sponsor, index) => (
            <SponsorCard key={index} sponsor={sponsor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutInnovEra;