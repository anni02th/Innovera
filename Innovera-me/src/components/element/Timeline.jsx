export default function Timeline() {
  const timelineEvents = [
    {
      dates: "27 Jan - 7 Feb",
      number: "01",
      title: "Registration Window",
      description: "Secure your spot in this dynamic competition and take the first step toward showcasing your skills.",
    },
    {
      dates: "5 Feb - 12 Feb",
      number: "02",
      title: "Submission Window",
      description: "Submit your Phase 1 projects to demonstrate your innovative ideas and creativity.",
    },
    {
      dates: "12 Feb - 15 Feb",
      number: "03",
      title: "PHASE 1: Sankalp Evaluation (PPT)",
      description: "Participate in the first evaluation round by presenting your ideas in a PPT format.",
    },
    {
      dates: "16 Feb",
      number: "04",
      title: "Results Round 1",
      description: "Judges will announce the results of the first evaluation round.",
    },
    {
      dates: "16 Feb - 18 Feb",
      number: "05",
      title: "Preparation Time for Round 2",
      description: "Gear up for the next challenge and refine your ideas for Phase 2: Prakalp.",
    },
    {
      dates: "19 Feb - 20 Feb",
      number: "06",
      title: "Submission for PHASE 2: Prakalp",
      description: "Submit your Phase 2 projects in the form of a video to showcase your execution.",
    },
    {
      dates: "20 Feb - 21 Feb",
      number: "07",
      title: "PHASE 2: Prakalp Evaluation (Video)",
      description: "Judges will evaluate your projects in the second round to determine finalists.",
    },
    {
      dates: "22 Feb",
      number: "08",
      title: "Round 2 Result Announcement",
      description: "Finalists for the ultimate phase will be announced based on Phase 2 evaluations.",
    },
    {
      dates: "2 Mar",
      number: "09",
      title: "PHASE 3: Utkarsh (Offline Hackathon)",
      description: "Compete in the grand finale—a 12-hour offline hackathon to showcase your ultimate skills.",
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
          <div className="space-y-24">
            {timelineEvents.map((event, index) => (
              <div key={event.number} className="relative">
                {/* Timeline Dot */}
                <div className="absolute top-20 left-6 md:left-1/2 w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full transform -translate-x-1/2 shadow-md border-2 border-white" />

                {/* Timeline Card Container */}
                <div
                  className={`relative group ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16 md:ml-auto"
                    }`}
                >
                  {/* Date Above Card */}
                  <div className="text-orange-400 font-bold text-lg mb-4 text-center">
                    {event.dates}
                  </div>

                  {/* Main Card */}
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <div className=" bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg overflow-hidden">
                      {/* Number Circle */}
                      <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-400 flex items-center justify-center">
                        <span className="text-black font-bold text-xl">
                          {event.number}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-8 pl-10">
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-all">
                          {event.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                        <div className="absolute right-0 top-0 w-2 h-full bg-gradient-to-b from-orange-400 to-orange-600" />

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