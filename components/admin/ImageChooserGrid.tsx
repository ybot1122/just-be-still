"use client";

import { useImageChooser } from "@/context/ImageChooserContext";
import { CloudinaryResource } from "@/server_actions/getCloudinaryImages";
import { useState } from "react";
import BasicButton from "./BasicButton";
import { uploadImageToCloudinary } from "@/server_actions/uploadImageToCloudinary";

interface ImageChooserGridProps {
  images: CloudinaryResource[];
}

export const ImageChooserGrid: React.FC<ImageChooserGridProps> = ({
  images,
}) => {
  const { callback, uploaded } = useImageChooser();

  return (
    <div className="flex flex-wrap gap-4">
      {[...uploaded, ...images].map((image) => (
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

export const ImageChooserUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { callback, addUploaded } = useImageChooser();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const validFormats = ["image/jpeg", "image/jpg", "image/png"];
      if (validFormats.includes(file.type)) {
        setSelectedFile(file);
        setError(null);
      } else {
        setSelectedFile(null);
        setError("Please select a valid image file (jpg, jpeg, png).");
      }
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      setIsLoading(true);
      setError(null);
      const formData = new FormData();
      formData.append("file", selectedFile);
      uploadImageToCloudinary(formData)
        .then((result) => {
          callback?.(result.secure_url);
          addUploaded(result);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="flex flex-col items-center min-h-[500px] justify-center">
      {selectedFile && (
        <div className="mb-4">
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected"
            className="max-w-[200px] h-auto"
          />
        </div>
      )}
      <input type="file" onChange={handleFileChange} className="my-5" />
      {selectedFile && (
        <BasicButton
          onClick={handleUpload}
          disabled={!selectedFile || isLoading}
        >
          {isLoading ? "Uploading..." : "Upload Image"}
        </BasicButton>
      )}
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
};

export const ImageChooserCloseButton: React.FC = () => {
  const { callback } = useImageChooser();

  return (
    <button
      className="absolute top-2 right-5 text-gray-500 hover:text-gray-700 text-3xl"
      onClick={() => callback?.()}
    >
      &times;
    </button>
  );
};
