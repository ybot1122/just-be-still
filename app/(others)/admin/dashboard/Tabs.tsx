"use client";

import React, { useState } from "react";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-5">
      <div className="tabs">
        <button
          onClick={() => handleTabClick("tab1")}
          className={activeTab === "tab1" ? "active" : ""}
        >
          Home
        </button>
        <button
          onClick={() => handleTabClick("tab2")}
          className={activeTab === "tab2" ? "active" : ""}
        >
          About
        </button>
        <button
          onClick={() => handleTabClick("tab3")}
          className={activeTab === "tab3" ? "active" : ""}
        >
          Services
        </button>
        <button
          onClick={() => handleTabClick("tab4")}
          className={activeTab === "tab4" ? "active" : ""}
        >
          Events
        </button>
        <button
          onClick={() => handleTabClick("tab5")}
          className={activeTab === "tab5" ? "active" : ""}
        >
          Contact
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "tab1" && <div>Content for Tab 1</div>}
        {activeTab === "tab2" && <div>Content for Tab 2</div>}
        {activeTab === "tab3" && <div>Content for Tab 3</div>}
        {activeTab === "tab4" && <div>Content for Tab 4</div>}
        {activeTab === "tab5" && <div>Content for Tab 5</div>}
      </div>
    </div>
  );
};

export default Tabs;
