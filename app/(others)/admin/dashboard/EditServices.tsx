import React, { useState } from "react";

const EditServices: React.FC = () => {
  return (
    <div className="text-left">
      <div className="mt-5">
        <h2 className="text-xl">Update the Poster</h2>
        <ImageUploader />
      </div>
      <div className="mt-5">
        <h2 className="text-xl">Update the Extra Images</h2>
        <p>Content for section 2</p>
      </div>
      <div className="mt-5">
        <h2 className="text-xl">Update the Banner Message</h2>
        <p>Content for section 3</p>
      </div>
    </div>
  );
};

const ImageUploader: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (!file.type.startsWith("image/")) {
        setErrorMessage("Please select a valid image file.");
        return;
      }
      setErrorMessage(null);
      setSelectedImage(file);
    }
  };

  return (
    <div className="flex">
      <div>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </div>
      {selectedImage && (
        <div>
          <h3 className="text-lg">Selected Image:</h3>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            className="mt-2"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
};

export default EditServices;
