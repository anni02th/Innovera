import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const TimelineEvent = ({ event, status, index, ref, isEven }) => {
  const bgColor =
    status === "live" ? "bg-red-500" : status === "past" ? "bg-green-500" : "bg-orange-400";
  const textColor = status === "live" || status === "past" ? "text-white" : "text-black";
  const isLive = status === "live";

  return (
    <motion.div
      className="relative flex items-start timeline-event"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div
        className={`absolute left-6 md:left-1/2 w-5 h-5 rounded-full transform -translate-x-1/2 shadow-md border-2 border-white transition-all duration-300 ${bgColor} ${
          isLive ? "animate-pulse border-white border-2 shadow-lg" : ""
        }`}
      />
      <div
        className={`relative group ml-12 md:ml-0 md:w-1/2 ${isEven ? "md:pr-8" : "md:pl-12 md:ml-auto"}`}
      >
        <div className="text-white font-bold text-xl text-center mb-2">{event.date}</div>
        <div className="bg-gray-900 rounded-xl shadow-md p-6 relative max-md:max-w-[300px]">
          <div
            className={`absolute -left-8 top-1/2 -translate-y-1/2 w-10 h-10 ${bgColor} flex items-center justify-center ${textColor} font-bold text-lg`}
          >
            {event.number}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>
          <div
            className={`absolute right-0 top-0 w-2 h-full bg-gradient-to-b ${bgColor.replace(
              "bg-",
              "from-"
            )} ${bgColor.replace("bg-", "to-")} rounded-r-xl`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function Timeline() {
  const timelineEvents = [
    { number: "01", title: "Registration Window", description: "Secure your spot and showcase your skills", status: "past", date: "27 Jan - 10 Feb 2025" },
    { number: "02", title: "Submission Window", description: "Submit your PPT to showcase your creativity and innovative ideas!", status: "live", date: "5 Feb - 12 Feb 2025" },
    { number: "03", title: "Results Round 1", description: "Results for the first phase will be announced.", status: "upcoming", date: "16 Feb 2025" },
    { number: "04", title: "Submission for Phase 2", description: "Submit your video showcasing your prototype", status: "upcoming", date: "19 Feb - 20 Feb 2025" },
    { number: "05", title: "Round 2 Result Announcement", description: "Finalists for the ultimate phase will be announced.", status: "upcoming", date: "22 Feb 2025" },
    { number: "06", title: "Grand Finale", description: "Compete in the grand finale - a 12-hour offline hackathon", status: "upcoming", date: "2 March 2025" },
  ];

  const [timelineData, setTimelineData] = useState(timelineEvents);
  const [liveEventIndex, setLiveEventIndex] = useState(null);
  const timelineRef = useRef(null);
  const eventRefs = useRef([]);

  useEffect(() => {
    const initialLiveIndex = timelineData.findIndex((event) => event.status === "live");
    setLiveEventIndex(initialLiveIndex === -1 ? null : initialLiveIndex);
  }, [timelineData]);


  return (
    <div
      id="timeline"
      className="bg-black py-12"
      style={{ backgroundImage: "url('/bg-img.png')", backgroundSize: "cover" }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-white text-center mb-12 tracking-wide">
          TIMELINE
        </h1>
        <div className="relative">
          <motion.div
            className={`absolute left-6 md:left-1/2 h-full w-1 transition-all duration-500 transform -translate-x-1/2 ${
              timelineData.every((event) => event.status === "past")
                ? "bg-green-500 from-green-400 to-green-600"
                : liveEventIndex !== null
                ? "bg-red-500 from-red-400 to-red-600"
                : "bg-gradient-to-b from-orange-400 to-orange-600"
            } ${liveEventIndex !== null ? "shadow-md shadow-red-500" : ""}`}
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5 }}
          />
          <div className="space-y-12" ref={timelineRef}>
            {timelineData.map((event, index) => (
              <TimelineEvent
                key={event.number}
                event={event}
                status={event.status}
                index={index}
                ref={(el) => (eventRefs.current[index] = el)}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
