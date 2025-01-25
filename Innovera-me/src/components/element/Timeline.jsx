import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TimelineItem = ({ left, right, isLast, isMobile }) => {
  return (
    <div
      className={`grid ${
        isMobile
          ? "grid-cols-[4px,1fr] gap-4"
          : "grid-cols-[1fr,4px,1fr] gap-4"
      } items-center`}
    >
      {/* Left Content (Hidden on Mobile) */}
      {!isMobile && (
        <div className="text-right text-gray-300" data-aos="fade-right">
          {left && (
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="font-semibold text-purple-400">{left.title}</p>
              <p className="text-sm">{left.time}</p>
            </div>
          )}
        </div>
      )}

      {/* Vertical Line and Circle */}
      <div className="relative">
        <div
          className={`bg-gradient-to-b from-purple-600 to-orange-500 h-full w-full rounded-full`}
        />
        {!isLast && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-600 to-transparent h-12" />
        )}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-purple-500 via-purple-600 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white text-xs font-bold">
            {left ? "→" : "←"}
          </span>
        </div>
      </div>

      {/* Right Content */}
      <div
        className={`text-gray-300 ${isMobile ? "pl-4" : ""}`}
        data-aos={isMobile ? "fade-left" : "fade-left"}
      >
        {(right || isMobile) && (
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <p
              className={`font-semibold ${
                isMobile ? "text-purple-400" : "text-orange-400"
              }`}
            >
              {right ? right.title : left.title}
            </p>
            <p className="text-sm">{right ? right.time : left.time}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Timeline = () => {
  const timelineData = [
    { left: { title: "Pre-Registration Arrangements", time: "20 Jan - 23 Jan" }, right: null },
    { left: null, right: { title: "Registration Window", time: "24 Jan - 4 Feb" } },
    { left: { title: "Submission Window", time: "5 Feb - 12 Feb" }, right: null },
    { left: null, right: { title: "Evaluation Round 1 (PPT)", time: "13 Feb - 15 Feb" } },
    { left: { title: "Results Round 1", time: "16 Feb" }, right: null },
    { left: null, right: { title: "Preparation Time For Round 2", time: "16 Feb - 18 Feb" } },
    { left: { title: "Submission for Round 2", time: "19 Feb - 20 Feb" }, right: null },
    { left: null, right: { title: "Round 2 Evaluation", time: "20 Feb - 21 Feb" } },
    { left: { title: "Round 2 Result Announcement", time: "22 Feb" }, right: null },
    { left: null, right: { title: "Evaluation Round 3 (Offline Hackathon)", time: "2 Mar" }, isLast: true },
  ];

  const timelineRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });

    const handleScroll = () => {
      if (!timelineRef.current || !lineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const scrollY = window.scrollY + viewportHeight;
      const timelineStart = timelineRef.current.offsetTop;
      const timelineEnd = timelineStart + timelineRef.current.offsetHeight;

      const progress = Math.min(
        Math.max(0, scrollY - timelineStart) / (timelineEnd - timelineStart),
        1
      );

      lineRef.current.style.height = `${progress * 100}%`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="py-20 bg-black min-h-screen relative z-0"
      ref={timelineRef}
    >
      <div
        ref={lineRef}
        className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-purple-600 to-orange-500 w-1 h-0 transition-all duration-300 ease-in-out"
        style={{ top: "88px" }}
      />
      <h2
        className="text-3xl font-bold text-center mb-12 text-orange-500"
        data-aos="fade-up"
      >
        Event Timeline
      </h2>
      <div className="max-w-4xl mx-auto px-4 space-y-16">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            left={item.left}
            right={item.right}
            isLast={index === timelineData.length - 1}
            isMobile={window.innerWidth < 1024}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
