import React from "react";

interface ImageChooserProps {
  isOpen: boolean;
  onClose: () => void;
}

const ImageChooser: React.FC<ImageChooserProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl mb-4">Choose an Image</h2>
        {/* Add your image chooser content here */}
      </div>
    </div>
  );
};

export default ImageChooser;
