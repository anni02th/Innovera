import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaListAlt,
  FaEye,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [visitorCount, setVisitorCount] = useState(0);

  // Load visitor count from local storage on component mount
  useEffect(() => {
    const count = localStorage.getItem("visitorCount");
    if (count) {
      setVisitorCount(parseInt(count) + 1);
      localStorage.setItem("visitorCount", parseInt(count) + 1);
    } else {
      setVisitorCount(1);
      localStorage.setItem("visitorCount", 1);
    }
  }, []);

  const whatsappLink =
    "https://wa.me/919876543210?text=Hello%20INNOV-ERA%20Team,%20I%20would%20like%20to%20register%20for%20Techathon%20KKWIEER.";

  const legalContent = {
    terms: {
      title: "Terms and Conditions",
      content: (
        <>
          <p className="text-gray-300">
            Here are the terms and conditions for using this website. Please
            read them carefully before using any features or services provided.
          </p>
          <ul className="list-disc ml-6 mt-4 text-gray-400">
            <li>All information is for educational purposes only.</li>
            <li>Content must not be used for any illegal activities.</li>
            <li>Respect intellectual property and copyright rules.</li>
            <li>For any concerns, contact our support team.</li>
          </ul>
        </>
      ),
    },
    privacy: {
      title: "Privacy & Policy",
      content: (
        <>
          <p className="text-gray-300">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your personal information.
          </p>
          <ul className="list-disc ml-6 mt-4 text-gray-400">
            <li>We collect only necessary information for registration.</li>
            <li>Your data will not be shared with third parties without consent.</li>
            <li>We use cookies to enhance your experience.</li>
          </ul>
        </>
      ),
    },
    disclaimer: {
      title: "Disclaimer",
      content: (
        <>
          <p className="text-gray-300">
            The information provided on this website is for general purposes only.
            We make no warranties about the accuracy or completeness of the content.
          </p>
          <ul className="list-disc ml-6 mt-4 text-gray-400">
            <li>Use the information at your own risk.</li>
            <li>We are not liable for any losses or damages.</li>
            <li>External links are not under our control.</li>
          </ul>
        </>
      ),
    },
  };

  const openModal = (contentKey) => {
    setModalContent(legalContent[contentKey]);
    setModalOpen(true);
  };

  return (
    <footer className="bg-neutral-900 p-8">
      <div className="flex flex-col sm:flex-row sm:justify-around sm:items-start">
        {/* Left Section */}
        <section>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-6xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              INNOV-ERA
            </h1>
            <h3 className="text-5xl font-bold text-neutral-300">
              Techathon KKWIEER
            </h3>
          </div>

          <a
            href="https://maps.app.goo.gl/ZGRsBMTENyhR1vXbA"
            className="text-neutral-400 mt-4 hover:text-orange-400 transition-colors"
          >
            <p className="mt-8">KK Wagh Institute of Engineering Education & Research</p>
            <p>Hirabai Hiradas VidyaNagari,</p>
            <p>Amrutdham, Panchavati,</p>
            <p>Nashik, Maharashtra 422003,</p>
            <p>India</p>
          </a>
        </section>

        {/* Quick Links Section */}
        <section className="flex flex-col sm:flex-row gap-8 mt-8 sm:mt-0">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl text-neutral-300 font-semibold">Contact</h1>
            <a
              href="tel:+919876543210"
              className="text-neutral-400 inline-flex items-center gap-2 hover:text-orange-400"
            >
              <FaPhoneAlt /> +91 98765 43210
            </a>
            <a
              href="mailto:contact@innov-era.in"
              className="text-neutral-400 inline-flex items-center gap-2 hover:text-orange-400"
            >
              <FaEnvelope /> contact@innov-era.in
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-2xl text-neutral-300 font-semibold">Quick Links</h1>
            <Link to="home" smooth={true} duration={500} className="text-neutral-400 inline-flex items-center gap-2 hover:text-orange-400 cursor-pointer">
              <FaHome /> Home
            </Link>
            <Link to="about" smooth={true} duration={500} className="text-neutral-400 inline-flex items-center gap-2 hover:text-orange-400 cursor-pointer">
              <FaInfoCircle /> About
            </Link>
            <Link to="timeline" smooth={true} duration={500} className="text-neutral-400 inline-flex items-center gap-2 hover:text-orange-400 cursor-pointer">
              <FaListAlt /> Timeline
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-2xl text-neutral-300 font-semibold">Legal</h1>
            <p onClick={() => openModal("terms")} className="text-neutral-400 hover:text-orange-400 cursor-pointer">
              Terms & Conditions
            </p>
            <p onClick={() => openModal("privacy")} className="text-neutral-400 hover:text-orange-400 cursor-pointer">
              Privacy & Policy
            </p>
            <p onClick={() => openModal("disclaimer")} className="text-neutral-400 hover:text-orange-400 cursor-pointer">
              Disclaimer
            </p>
          </div>
        </section>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-20 my-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 my-8">
          <div className="flex items-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-400 hover:text-orange-400 transition-colors"
            >
              <FaWhatsapp size={24} />
              <span>Contact via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 text-neutral-400 my-8 justify-center">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            <FaLinkedin size={36} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            <FaInstagram size={36} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            <FaFacebook size={36} />
          </a>
        </div>

        {/* Visitor Count */}
        <div className="flex justify-center items-center gap-2 text-neutral-400">
          <FaEye size={24} />
          <p>Visitor Count: {visitorCount}</p>
        </div>
      </div>

      {/* Legal Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-lg shadow-2xl max-w-3xl w-full mx-4 md:mx-auto relative">
            <button onClick={() => setModalOpen(false)} className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl">
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-orange-400">{modalContent.title}</h2>
            {modalContent.content}
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;