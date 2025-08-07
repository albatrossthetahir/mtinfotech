import { useState } from 'react';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Experiences', content: 'This is the content of Tab 1' },
    { label: 'Fun Facts', content: 'This is the content of Tab 2' },
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
      <div className="relative 2xl:mt-14 xl:mt-10 lg:mt-8 mt-5">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ease-in-out absolute inset-0 ${activeTab === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <p className='text-base text-white'>{tab.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

;
