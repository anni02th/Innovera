export default function Timeline() {
  const timelineEvents = [
    {
      dates: "20 Jan - 23 Jan",
      number: "01",
      title: "Pre-registration",
      description:
        "Gear up for innovation! The team's pre-register preps start now to ensure a smooth functioning of the event",
    },
    {
      dates: "24 Jan - 4 Feb",
      number: "02",
      title: "Registration window",
      description: "This is the time to secure your spot in an exhilarating hackathon where ideas come to life.",
    },
    {
      dates: "5 Feb - 12 Feb",
      number: "03",
      title: "Submission window",
      description: "This is the time to submit your round 1 projects.",
    },
    {
      dates: "13 Feb - 15 Feb",
      number: "04",
      title: "Evaluation Round 1 (PPT)",
      description:
        "Showcase your vision! Participate in the PPT evaluation round to present your ideas and impress the judges.",
    },
    {
      dates: "16 Feb",
      number: "05",
      title: "Results Round 1 (PPT)",
      description: "Result of round 1 will be declared by judges.",
    },
  ];

  return (
    <div className="bg-black bg-cover bg-center py-16" style={{ backgroundImage: "url('/bg-img.png')" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-0">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16 tracking-wide">
          TIMELINE
        </h1>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 h-full w-1 bg-gradient-to-b from-orange-400 to-orange-600 transform -translate-x-1/2" />

          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div key={event.number} className="relative">
                {/* Timeline Dot */}
                <div className="absolute top-16 left-6 md:left-1/2 w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full transform -translate-x-1/2 shadow-md border-2 border-white" />

                {/* Timeline Card */}
                <div
                  className={`relative group hover:scale-105 transition-transform duration-300 ease-in-out ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16 md:ml-auto"
                    }`}
                >
                  <div className="p-8 rounded-2xl shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-lg border border-gray-700 relative overflow-hidden">
                    {/* Floating Number */}
                    <div className="absolute left-0 bg-orange-400 text-5xl font-extrabold text-black">
                      {event.number}
                    </div>

                    {/* Event Content */}
                    <div>
                      <p className="text-orange-400 font-bold text-lg mb-2">{event.dates}</p>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-all">
                        {event.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">{event.description}</p>
                    </div>

                    {/* Decorative Border */}
                    <div className="absolute right-0 bottom-0 w-5 h-full bg-orange-400 rounded-r-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}