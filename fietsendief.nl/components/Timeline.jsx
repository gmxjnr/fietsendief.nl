export default function Timeline() {
  const events = [
    {
      year: "2023",
      description: "Started ProtoGrammers ( Originally known as FastScripts ). And launched my first major project with Tijn.",
    },
    {
        year: "2024",
        description: "Started my first Software Development course/school.",
    },
    {
      year: "2025",
      description: "Built Fietsendief.nl and expanded my portfolio.",
    },
    {
      year: "2025/2026",
      description: "Doing an internship at Samenwerkingsorganisatie Beroepsonderwijs Bedrijfsleven (SBB).",
    },
  ];

  return (
    <section id="timeline" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-500">My Journey</h2>
        <div className="relative border-l-4 border-blue-500 pl-8 space-y-8">
          {events.map((event, index) => (
            <div key={index} className="relative">
              {/* Dot */}
              <div className="absolute -left-5 top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-900"></div>
              {/* Event Content */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-blue-500 mb-2">{event.year}</h3>
                <p className="text-gray-400">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}