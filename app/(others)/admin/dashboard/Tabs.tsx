"use client";

import React, { useState } from "react";
import EditEvents from "./EditEvents";
import { Content_Event } from "@/content/events";
import ImageChooser, {
  ImageChooserOnClose,
} from "@/components/admin/ImageChooser";
import { CloudinaryResource } from "@/server_actions/getCloudinaryImages";

const Tabs = ({
  events,
  images,
}: {
  events: Content_Event;
  images: CloudinaryResource[];
}) => {
  const [activeTab, setActiveTab] = useState<string>("tab1");
  const [imageChooserCb, setImageChooserCb] = useState<ImageChooserOnClose>();

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
        {activeTab === "tab1" && <div>Not Available Yet</div>}
        {activeTab === "tab2" && <div>Not Available Yet</div>}
        {activeTab === "tab3" && <div>Not Available Yet</div>}
        {activeTab === "tab4" && (
          <div>
            <EditEvents events={events} setImageChooserCb={setImageChooserCb} />
          </div>
        )}
        {activeTab === "tab5" && <div>Not Available Yet</div>}
      </div>
      <ImageChooser
        isOpen={!!imageChooserCb}
        onClose={imageChooserCb}
        images={images}
      />
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
  const active =
    activeTab === tab ? "bg-blue-200" : "bg-gray-200 hover:bg-gray-300";
  return (
    <button
      onClick={() => handleTabClick(tab)}
      className={`${active} px-4 mx-2 py-2 rounded-md`}
    >
      {children}
    </button>
  );
};

export default Tabs;
