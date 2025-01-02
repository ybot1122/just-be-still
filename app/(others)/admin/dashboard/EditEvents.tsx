import BasicButton from "@/components/admin/BasicButton";
import { Content_Event } from "@/content/events";
import { useImageChooser } from "@/context/ImageChooserContext";
import { updatePageContent } from "@/server_actions/updatePageContent";
import React, { Dispatch, SetStateAction, useCallback, useState } from "react";

const EditEvents = ({ events }: { events: Content_Event }) => {
  const [poster, setPoster] = useState(events.poster);

  const submitForm = useCallback(async (e: FormData) => {
    const update = await updatePageContent("test", JSON.stringify(e));
  }, []);

  return (
    <div className="text-left">
      <form action={submitForm}>
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
        <div className="mt-5">
          <BasicButton type="submit">Update Page</BasicButton>
        </div>
      </form>
    </div>
  );
};

const ImageUploader = ({ original }: { original: Content_Event["poster"] }) => {
  const [selectedImage, setSelectedImage] = useState<string>(original.path);
  const { setCallback: setImageChooserCb } = useImageChooser();

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
      <input type="hidden" value={selectedImage} name="poster" />
    </div>
  );
};

const EditableText = ({ text }: { text: string }) => {
  const [value, setValue] = useState(text);

  const className =
    "border border-gray-300 p-2 cursor-text inline-block w-[400px] ml-2";

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={className}
      autoFocus
    />
  );
};

export default EditEvents;
