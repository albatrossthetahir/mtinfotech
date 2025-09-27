import { useState } from 'react';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { 
      label: 'Experiences', 
      content: (
        <p className="text-sm leading-relaxed text-white">
          I have 3+ years of experience as a Frontend Developer, working with modern
          technologies such as <strong>React.js</strong>, <strong>Next.js</strong>,
          <strong>Vue.js</strong>, and <strong>Tailwind CSS</strong>.  
          I specialize in transforming Figma designs into pixel-perfect, responsive
          websites and applications.
          <br /><br />
          I've collaborated with cross-functional teams to build dashboards, e-commerce
          platforms, and interactive landing pages with a focus on performance and user
          experience. My experience also includes WordPress (Elementor) and Webflow for
          no-code projects when speed matters.
        </p>

      )
    },
    { 
      label: 'Fun Facts', 
      content: (
        <ul className="list-disc pl-6 space-y-2 text-sm leading-relaxed text-white">
          <li>I can convert a Figma design into code faster than I can finish a coffee ☕</li>
          <li>I enjoy experimenting with new CSS tricks and micro-animations 🎨</li>
          <li>When I’m not coding, I love biking and going on road trips 🏍️</li>
          <li>I once built a personal project that minifies CSS in real-time — just for fun!</li>
          <li>I enjoy mentoring juniors and sharing tips about clean UI development 💡</li>
        </ul>
      ) 
    },
  ];

  return (
    <div className="w-full mx-auto">
      <div className="flex bg-[#161616] rounded-sm py-1 w-fit">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`text-base leading-normal py-1 px-3 font-medium rounded-sm ${activeTab === index ? 'text-black bg-white' : 'text-white'}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="relative 2xl:mt-14 xl:mt-10 lg:mt-8 mt-5 min-h-[150px]">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ease-in-out absolute inset-0 ${activeTab === index ? 'opacity-100' : 'opacity-0'}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};
