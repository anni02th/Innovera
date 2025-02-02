import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div
      className="bg-black text-white py-16 px-8 flex flex-col items-center justify-center min-h-screen bg-cover"
      style={{ backgroundImage: "url('/bg-img.png')" }}
      id="home"
    >
      <div className="text-center flex flex-col items-center z-10">
        {/* AOS animation for the logo */}
        <img
          src="/main-img.png"
          alt="Moscot"
          width={400}
          className="w-64 sm:w-96"
          data-aos="fade-down"
          data-aos-delay="100"
        />

        {/* AOS animation for the heading */}
        <h1
          className="text-4xl sm:text-8xl font-bold mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          INNOV-ERA
        </h1>

        {/* AOS animation for the description */}
        <p
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <span className="text-orange-400 font-semibold">Innov-era</span> is a National hackathon designed to bring together
          innovative minds to solve <span className="text-green-400 font-semibold">real-world challenges</span>. It’s a platform
          for tech enthusiasts, <span className="text-blue-400 font-semibold">developers</span>, and creators to showcase
          their <span className="text-indigo-400 font-semibold">skills</span> and create impactful{" "}
          <span className="text-teal-400 font-semibold">solutions</span>.
        </p>

        {/* AOS animation for the buttons */}
        <div
          className="mt-8 flex flex-wrap gap-4 justify-center z-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="https://unstop.com/p/innov-era-national-level-hackathon-kkwagh-college-of-engineering-and-researchnashik-1374664"
            className="bg-white text-black font-medium px-6 py-2 rounded-full border border-white hover:text-white transition z-10 hover:bg-black"
          >
            Register
          </a>

          {/* Button to open the modal */}
          <button
            className="bg-black border border-white text-white font-medium px-6 py-2 rounded-full hover:bg-zinc-900 transition hover:scale-105"
            onClick={openModal}
          >
            Details
          </button>
        </div>
      </div>

      {/* Modal for Flyer */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div
            className="bg-white p-3 sm:p-4 rounded-lg relative max-w-3xl mx-4"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
            data-aos="zoom-in" // AOS animation for the modal
          >
            <button
              className="absolute top-6 right-6 text-white text-2xl hover:text-gray-700"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src="/flyer.jpg"
              alt="Flyer"
              className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;

<style jsx>{`
  img {
    z-index: 0;
    user-select: none;
  }
`}</style>