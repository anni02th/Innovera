import React from 'react';

const themes = [
  {
    title: 'Artificial Intelligence and Machine Learning',
    gradient: 'bg-gradient-to-r from-teal-400 to-teal-600',
    image: '/wind.png',
  },
  {
    title: 'Blockchain and Web3 Internet of Things (IoT)',
    gradient: 'bg-gradient-to-r from-green-300 to-green-500',
    image: '/ground.png',
  },
  {
    title: 'Internet of Things (IoT)',
    gradient: 'bg-gradient-to-r from-blue-400 to-blue-600',
    image: '/water.png', // Fixed typo here
  },
  {
    title: 'Sustainability and Green Tech Open Innovation',
    gradient: 'bg-gradient-to-r from-indigo-400 to-indigo-600',
    image: '/space.png',
  },
  {
    title: 'Derived solely from your original concepts!',
    gradient: 'bg-gradient-to-r from-orange-300 to-orange-500',
    image: '/fire.png',
  },
];

const ThemesSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white p-6 py-10">
      <h2 className="text-3xl md:text-5xl font-bold mb-12">THEMES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl">
        {themes.map((theme, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg ${theme.gradient} relative flex flex-col items-start justify-between transition-transform transform hover:scale-105`}
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
