import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const teamData = [
  {
    name: "Shivraj Talekar",
    team: "Marketing & Secretariat",
    role: "Head",
    image: "/images/shivraj.jpg",
    socials: ["facebook", "instagram", "linkedin"]
  },
  {
    name: "Kundan Suryavanshi",
    team: "Logistics & EPM",
    role: "Head",
    image: "/images/kundan.jpg",
    socials: ["facebook", "instagram", "linkedin"]
  },
  {
    name: "Riddhi Singvi",
    team: "Sponsorship & Curation",
    role: "Head",
    image: "/images/riddhi.jpg",
    socials: ["facebook", "instagram", "linkedin"]
  },
  {
    name: "Ashish Nagmoti",
    team: "WEB & IT",
    role: "Head",
    image: "/images/ashish.jpg",
    socials: ["facebook", "instagram", "linkedin"]
  },
  {
    name: "Aditya Ahirrao",
    team: "Design & Branding",
    role: "Head",
    image: "/images/aditya.jpg",
    socials: ["facebook", "instagram", "linkedin"]
  },
  {
    name: "Soham Penshanwar",
    team: "Finance & Participant Affairs",
    role: "Head",
    image: "/images/soham.jpg",
    socials: ["facebook", "instagram", "linkedin"]
  },
  {
    name: "Samyak Raka",
    team: "Hackathon Operations",
    role: "Head",
    image: "/images/samyak.jpg",
    socials: ["facebook", "instagram", "linkedin"]
  },
  {
    name: "Suraj Yeola",
    team: "Research & Planning",
    role: "Head",
    image: "/images/suraj.jpg",
    socials: ["facebook", "instagram", "linkedin"]
  },
  {
    name: "Rimzim Chark",
    team: "Research & Planning",
    role: "Co-Head",
    image: "/images/rimzim.jpg",
    socials: ["facebook", "instagram", "linkedin"]
  }
];

const iconMap = {
  facebook: <FaFacebookF />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedinIn />
};

const OrganizingTeam = () => {
  return (
    <div className="bg-black text-white py-12 px-4"
    style={{ backgroundImage: "url('/bg-img.png')" }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">ORGANIZING TEAM</h2>
      <div className="container mx-auto grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-4">
        {teamData.map((member, index) => (
          <div key={index} className="bg-gray-800 rounded-lg text-center shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-white">
            <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
            <img 
              src={member.image} 
              alt={member.name} 
              className="h-48 w-48 mx-auto rounded-md object-cover my-3 border border-gray-600"
            />
            <p className="font-medium text-gray-300">{member.role} of</p>
            <p className="text-gray-100 font-semibold mb-2">{member.team}</p>
            <div className="flex justify-center gap-3 pb-4 text-gray-400">
              {member.socials.map((social, i) => (
                <a key={i} href="#" className="hover:text-white text-lg">
                  {iconMap[social]}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizingTeam;
