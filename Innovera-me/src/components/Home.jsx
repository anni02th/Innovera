import React, { useState, useEffect } from 'react';
import Hero from './element/Hero';
import About from './element/About';
import Rules from './element/Rules';
import Timeline from './element/Timeline';
import ThemeCard from './element/ThemeCard';
import OrganizingTeam from './element/Organiser';
import SponsersSection from './element/Sponsers';
import Navbar from './Navbar';

const Home = () => {
  const [showPopup, setShowPopup] = useState(true);

  // Close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  // Automatically close after a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 50000); // Close after 5 seconds

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);
  

  return (
    <div>
      <Navbar/>
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 overflow-y-auto h-screen">
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4 z-50">
            <div className="bg-black border-s-white border-2 rounded-xl w-full max-w-4xl mx-auto relative flex flex-col max-h-[90vh]">
              {/* Header with Close Button */}
              <div className="p-6 pb-0 sticky top-0 bg-black z-10">

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
                  Hackathon Details
                </h2>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 pt-0">
                <div className="space-y-4 text-white text-base sm:text-lg">
                  <p>
                    Team leader need to{' '}
                    <span className="text-orange-400 font-semibold">RSVP within 48 hours</span>{' '}
                    for hackathon once they receive the mail of selection for final round.
                  </p>

                  <p>
                    <span className="text-green-400 font-semibold">Travel & Accommodation:</span>{' '}
                    Participants and their mentors (optional) are kindly requested to manage their own travel
                    arrangements. However, to ensure a hassle-free experience, we are recommending affordable
                    accommodation options.
                  </p>

                  <p>
                    <span className="text-blue-400 font-semibold">Essential Documents:</span>{' '}
                    To ensure smooth participation, every team member selected for the finale must carry a
                    stamped photo ID issued by their respective college/institute along with a copy of the
                    consent letter for verification purposes. These documents are mandatory.
                  </p>

                  <p>
                    <span className="text-indigo-400 font-semibold">Faculty Travel:</span>{' '}
                    Faculty members accompanying teams to the grand finale are welcome to support their
                    students.
                  </p>

                  <p>
                    <span className="text-teal-400 font-semibold">Travel Allowance:</span>{' '}
                    Neither faculty nor students will be provided travel allowance.
                  </p>

                  <p>
                    <span className="text-orange-400 font-semibold">Original & Innovative Ideas:</span>{' '}
                    We encourage fresh and creative thinking! All solutions presented must be original,
                    plagiarism-free, and should not have been submitted or showcased in any previous event
                    or competition.
                  </p>

                  <div>
                    <span className="text-green-400 font-semibold">Awards & Recognition:</span>
                    <ul className="list-none mt-2 space-y-2">
                      <li>
                        ✅ Each theme will have one winning team, and a runner-up prize may also be announced.
                      </li>
                      <li>
                        ✅ The winning team will receive a cash prize of{' '}
                        <span className="text-teal-400 font-semibold">Rs.50,000</span> as a recognition of
                        their outstanding efforts.
                      </li>
                      <li>
                        ✅ While each theme is expected to have a winning team, the final decision on the
                        number of winners and prize money allocation will rest with the organizers, based on
                        the quality of solutions and their alignment with the judging criteria.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer with Close Button */}
              <div className="p-6 pt-0 sticky bottom-0 bg-black">
                <button
                  onClick={closePopup}
                  className="block mx-auto bg-black text-white border border-white py-2 px-6 rounded-full hover:bg-zinc-900 transition-colors duration-200 text-base sm:text-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Hero />
      <ThemeCard />
      <Rules />
      <About />
      {/* <OrganizingTeam />
      <SponsersSection /> */}
      <Timeline />
    </div>
  );
};

export default Home;
