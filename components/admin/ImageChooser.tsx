"use client";

import { CloudinaryResource } from "@/server_actions/getCloudinaryImages";
import React, { useCallback, useState } from "react";
import {
  ImageChooserCloseButton,
  ImageChooserGrid,
  ImageChooserUpload,
} from "./ImageChooserGrid";

interface ImageChooserProps {
  isOpen: boolean;
  images: CloudinaryResource[];
}

const ImageChooser: React.FC<ImageChooserProps> = ({ isOpen, images }) => {
  const [activeTab, setActiveTab] = useState<"choose" | "upload">("choose");
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-[90vw] h-[90vh] overflow-scroll">
        <ImageChooserCloseButton />
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 mx-2 ${activeTab === "choose" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setActiveTab("choose")}
          >
            Choose an Image
          </button>
          <button
            className={`px-4 py-2 mx-2 ${activeTab === "upload" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setActiveTab("upload")}
          >
            Upload an Image
          </button>
        </div>
        {activeTab === "choose" && <ImageChooserGrid images={images} />}
        {activeTab === "upload" && <ImageChooserUpload />}
      </div>
    </div>
  );
};

export default ImageChooser;
