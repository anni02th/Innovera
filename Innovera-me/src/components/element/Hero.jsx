import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <div
      className="bg-black text-white py-16 px-8 flex flex-col items-center justify-center min-h-screen bg-cover"
      style={{ backgroundImage: "url('/bg-img.png')" }} >
      <div className="text-center flex flex-col items-center z-10">
        <img src="/main-img.png" alt="Moscot" width={400}/>
        <h1 className="text-4xl sm:text-8xl font-bold mb-6">INNOV-ERA</h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          <span className="text-orange-400 font-semibold">Innov-era</span> is a National hackathon designed to bring together
          innovative minds to solve <span className="text-green-400 font-semibold">real-world challenges</span>. It’s a platform
          for tech enthusiasts, <span className="text-blue-400 font-semibold">developers</span>, and creators to showcase
          their <span className="text-indigo-400 font-semibold">skills</span> and create impactful{" "}
          <span className="text-teal-400 font-semibold">solutions</span>.
        </p>

        <div className="absolute top-0 left-0 opacity-50 z-0">
          <img src="white-r-bg.png" alt="" />
        </div>
        <div className="absolute top-0 right-0 opacity-50 z-0">
          <img src="white-l-bg.png" alt="" />
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a href ="https://unstop.com/p/innov-era-national-level-hackathon-kkwagh-college-of-engineering-and-researchnashik-1374664" className="bg-white text-black font-medium px-6 py-2 rounded-full border border-white hover:text-white transition hover:bg-black">
            Register
          </a>
          
    <ScrollLink
            className="bg-black border border-white text-white font-medium px-6 py-2 rounded-full hover:bg-zinc-900 transition hover:scale-105"
            to="themes"
            smooth={true}
            duration={500}
          >
            Details
          </ScrollLink>
        </div>
      </div>
      
    </div>

  );
};

export default Hero;
