import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Footer = () => {
  const [tncOpen, setTncOpen] = useState(false);

  return (
    <footer className="bg-black py-12 text-white z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-purple-400">FAQs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="hover:text-orange-400 transition-colors">
                  Common Questions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-purple-400">About KKWIEER</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.kkwagh.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors"
                >
                  College Website
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-purple-400">Team</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/team" className="hover:text-orange-400 transition-colors">
                  Meet the Team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-purple-400">Sponsors</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sponsors" className="hover:text-orange-400 transition-colors">
                  Our Sponsors
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-purple-400">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-purple-400">TnC</h3>
            <button
              onClick={() => setTncOpen(!tncOpen)}
              className="hover:text-orange-400 transition-colors"
            >
              View Terms
            </button>
          </div>
        </div>

        {/* TnC Modal */}
        {tncOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-gray-900 p-8 rounded-lg shadow-2xl max-w-3xl w-full mx-4 md:mx-auto relative">
              <button
                onClick={() => setTncOpen(false)}
                className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Terms and Conditions</h2>
              <p className="text-gray-300">
                Here are the terms and conditions for using this website. Please read them
                carefully before using any features or services provided.
              </p>
              <ul className="list-disc ml-6 mt-4 text-gray-400">
                <li>All information is for educational purposes only.</li>
                <li>Content must not be used for any illegal activities.</li>
                <li>Respect intellectual property and copyright rules.</li>
                <li>For any concerns, contact our support team.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="text-center text-gray-500 mt-8">
         {new Date().getFullYear()} KKWIEER. All rights reserved.
         Created by Aniket D More
      </div>
    </footer>
  );
};

export default Footer;
