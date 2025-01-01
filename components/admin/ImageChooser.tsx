import { CloudinaryResource } from "@/server_actions/getCloudinaryImages";
import React, { useCallback } from "react";
import { ImageChooserCloseButton, ImageChooserGrid } from "./ImageChooserGrid";

interface ImageChooserProps {
  isOpen: boolean;
  images: CloudinaryResource[];
}

const ImageChooser: React.FC<ImageChooserProps> = ({ isOpen, images }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-[90vw] h-[90vh] overflow-scroll">
        <ImageChooserCloseButton />
        <h2 className="text-2xl mb-4 px-5 text-center">Choose an Image</h2>
        <ImageChooserGrid images={images} />
      </div>
    </div>
  );
};

export default ImageChooser;
