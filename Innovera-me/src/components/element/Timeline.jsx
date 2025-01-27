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
      description:
        "This is the time to secure your spot in an exhilarating hackathon where ideas come to life.",
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
    <div
      className=" bg-black bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-img.png')" }}>
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
          data-aos="fade-up">
          TIMELINE
        </h1>

        <div className="relative pb-4">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 h-full w-1 bg-white transform -translate-x-1/2" />

          {/* Timeline Events */}
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div
                key={event.number}
                className="relative"
                data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"
                  }`}>
                  <div className="bg-gray-800/80 backdrop-blur rounded-lg p-6 border border-cyan-400/20">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl font-bold text-[#EAAC76]">
                        {event.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {event.title}
                        </h3>
                        <p className="text-[#5A83F1] font-medium mb-2">
                          {event.dates}
                        </p>
                        <p className="text-gray-300">{event.description}</p>
                      </div>
                    </div>
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
