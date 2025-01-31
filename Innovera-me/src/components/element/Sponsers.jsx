import React from "react";

const sponsors = [
  { id: 1, logo: "https://dummyimage.com/600x600/000/fff.png&text=Sponser+1", alt: "Sponsor 1" },
  { id: 2, logo: "https://dummyimage.com/600x600/000/fff.png&text=Sponser+2", alt: "Sponsor 2" },
  { id: 3, logo: "https://dummyimage.com/600x600/000/fff.png&text=Sponser+3", alt: "Sponsor 3" },
  { id: 4, logo: "https://dummyimage.com/600x600/000/fff.png&text=Sponser+4", alt: "Sponsor 4" },
  { id: 5, logo: "https://dummyimage.com/600x600/000/fff.png&text=Sponser+5", alt: "Sponsor 5" },
  { id: 6, logo: "https://dummyimage.com/600x600/000/fff.png&text=Sponser+6", alt: "Sponsor 6" },
  { id: 7, logo: "https://dummyimage.com/600x600/000/fff.png&text=Sponser+7", alt: "Sponsor 7" },
  { id: 8, logo: "https://dummyimage.com/600x600/000/fff.png&text=Sponser+8", alt: "Sponsor 8" },
  { id: 9, logo: "https://dummyimage.com/600x600/000/fff.png&text=Sponser+9", alt: "Sponsor 9" },
];

const SponsorsSection = () => {
  return (
    <div className="bg-black text-white py-12 px-12"
     
    >
      <h2 className="text-3xl font-bold text-center mb-8">SPONSERS</h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className="w-48 h-28 bg-black rounded-lg shadow-md flex items-center justify-center border border-gray-500"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.alt}
              className="max-w-full max-h-[100%] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsSection;
