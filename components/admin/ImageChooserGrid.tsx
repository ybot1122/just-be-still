"use client";

import { useImageChooser } from "@/context/ImageChooserContext";
import { CloudinaryResource } from "@/server_actions/getCloudinaryImages";

interface ImageChooserGridProps {
  images: CloudinaryResource[];
}

export const ImageChooserGrid: React.FC<ImageChooserGridProps> = ({
  images,
}) => {
  const { callback } = useImageChooser();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div
          key={image.public_id}
          className="relative cursor-pointer w-[calc(25%-1rem)] h-[calc(25%-1rem)] group"
          onClick={() => callback?.(image.secure_url)}
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
  );
};

export const ImageChooserCloseButton: React.FC = () => {
  const { callback } = useImageChooser();

  return (
    <button
      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl"
      onClick={() => callback?.()}
    >
      &times;
    </button>
  );
};
