import React, { useState, ReactNode } from "react";


type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  return (
    <div className="w-full">
     
      <div className="flex flex-wrap gap-4 justify-start lg:justify-center mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full font-medium border transition-colors
              ${activeTab === tab.id
                ? "bg-primary-500 text-white border-primary-500"
                : "bg-background-7 text-secondary/60 border-stroke-2 dark:text-accent/60"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      
      <div className="w-full">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? "block" : "hidden"} transition-all`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
