"use client";

import React, { useState } from "react";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-5">
      <div className="">
        <TabButton
          tab="tab1"
          activeTab={activeTab}
          handleTabClick={handleTabClick}
        >
          Home
        </TabButton>
        <TabButton
          tab="tab2"
          activeTab={activeTab}
          handleTabClick={handleTabClick}
        >
          About
        </TabButton>
        <TabButton
          tab="tab3"
          activeTab={activeTab}
          handleTabClick={handleTabClick}
        >
          Services
        </TabButton>
        <TabButton
          tab="tab4"
          activeTab={activeTab}
          handleTabClick={handleTabClick}
        >
          Events
        </TabButton>
        <TabButton
          tab="tab5"
          activeTab={activeTab}
          handleTabClick={handleTabClick}
        >
          Contact
        </TabButton>
      </div>
      <div className="mt-5">
        {activeTab === "tab1" && <div>Content for Tab 1</div>}
        {activeTab === "tab2" && <div>Content for Tab 2</div>}
        {activeTab === "tab3" && <div>Content for Tab 3</div>}
        {activeTab === "tab4" && <div>Content for Tab 4</div>}
        {activeTab === "tab5" && <div>Content for Tab 5</div>}
      </div>
    </div>
  );
};

const TabButton = ({
  tab,
  activeTab,
  handleTabClick,
  children,
}: {
  tab: string;
  activeTab: string;
  handleTabClick: (tab: string) => void;
  children: React.ReactNode;
}) => {
  const active = activeTab === tab ? "bg-blue-200" : "hover:bg-gray-300";
  return (
    <button
      onClick={() => handleTabClick(tab)}
      className={`${active} px-4 mx-2 py-2 bg-gray-200  rounded-md`}
    >
      {children}
    </button>
  );
};

export default Tabs;
