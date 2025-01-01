import BasicButton from "@/components/admin/BasicButton";
import { Content_Event } from "@/content/events";
import { useImageChooser } from "@/context/ImageChooserContext";
import React, { Dispatch, SetStateAction, useState } from "react";

const EditEvents = ({ events }: { events: Content_Event }) => {
  const [poster, setPoster] = useState(events.poster);

  return (
    <div className="text-left">
      <div className="mt-5">
        <h2 className="text-xl">Poster</h2>
        <ImageUploader original={events.poster} />
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

const ImageUploader = ({ original }: { original: Content_Event["poster"] }) => {
  const [selectedImage, setSelectedImage] = useState<File | string>(
    original.path,
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { setCallback: setImageChooserCb } = useImageChooser();

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
    <div className="flex gap-5">
      <div>
        <img
          src={
            typeof selectedImage === "string"
              ? selectedImage
              : URL.createObjectURL(selectedImage)
          }
          alt="Selected"
          className="mt-2 w-[200px]"
        />
      </div>
      <div className="">
        <div>
          Description: <EditableText text={original.alt} />
        </div>
        <div className="mt-5">
          <BasicButton
            onClick={() =>
              setImageChooserCb(() => (p?: string) => {
                if (p) setSelectedImage(p);
                setImageChooserCb(() => null);
              })
            }
          >
            Change Image
          </BasicButton>
        </div>
      </div>
    </div>
  );
};

const EditableText = ({ text }: { text: string }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(text);

  const className =
    "border border-gray-300 p-2 cursor-text inline-block w-[400px] ml-2";

  const handleBlur = () => {
    setIsEditing(false);
  };

  return isEditing ? (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={handleBlur}
      className={className}
      autoFocus
    />
  ) : (
    <span onClick={() => setIsEditing(true)} className={className}>
      {value} <span className="text-blue-500">click to edit</span>
    </span>
  );
};

export default EditEvents;
