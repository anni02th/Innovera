import React from 'react';

const themes = [
  {
    title: 'Artificial Intelligence and Machine Learning',
    gradient: 'bg-gradient-to-r from-[#B2F4FF] to-[#52BCCE]',
    image: '/wind.png',
  },
  {
    title: 'Blockchain and Web3 Internet of Things (IoT)',
    gradient: 'bg-gradient-to-r from-[#B7E4C7] to-[#81B499]',
    image: '/ground.png',
  },
  {
    title: 'Internet of Things (IoT)',
    gradient: 'bg-gradient-to-r from-[#A3DFFF] to-[#2B7BCD]',
    image: '/water.png', // Fixed typo here
  },
  {
    title: 'Sustainability and Green Tech Open Innovation',
    gradient: 'bg-gradient-to-r from-[#A3B9F3] to-[#5A83F1]',
    image: '/space.png',
  },
  {
    title: 'Derived solely from your original concepts!',
    gradient: 'bg-gradient-to-r from-[#FFD7B5] to-[#EAAC76]',
    image: '/fire.png',
  },
];

const ThemesSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-black p-6 py-10  min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg-img.png')" }} id='themes'>
      <h2 className="text-3xl md:text-5xl text-white font-bold my-12">THEMES</h2>
      <div className="flex flex-row flex-wrap justify-center gap-8 ">
        {themes.map((theme, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg ${theme.gradient} w-[380px] relative flex flex-col items-start justify-between transition-transform transform hover:scale-105`}
          >
            <h3 className="text-lg font-semibold mt-2">{theme.title}</h3>
            <img 
              src={theme.image} 
              alt={theme.title} 
              className="mt-4 h-auto max-w-full" 
            />
            <button className="absolute bottom-4 right-4 bg-white text-3xl text-black rounded-xl px-2 shadow-lg">
              &rarr;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemesSection;
