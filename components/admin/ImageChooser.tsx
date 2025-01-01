import { CloudinaryResource } from "@/server_actions/getCloudinaryImages";
import React, { useCallback } from "react";

interface ImageChooserProps {
  isOpen: boolean;
  onClose?: (path?: string) => void;
  images: CloudinaryResource[];
}

export type ImageChooserOnClose = ImageChooserProps["onClose"];

const ImageChooser: React.FC<ImageChooserProps> = ({
  isOpen,
  onClose,
  images,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-[90vw] h-[90vh] overflow-scroll">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl"
          onClick={() => onClose?.()}
        >
          &times;
        </button>
        <h2 className="text-2xl mb-4 px-5 text-center">Choose an Image</h2>
        <div className="flex flex-wrap gap-4">
          {images.map((image) => (
            <div
              key={image.public_id}
              className="relative cursor-pointer w-[calc(25%-1rem)] h-[calc(25%-1rem)] group"
              onClick={() => onClose?.(image.secure_url)}
            >
              <img
                src={image.secure_url}
                alt={image.public_id}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg">Choose Image</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageChooser;
