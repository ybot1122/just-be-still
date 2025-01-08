import BasicButton from "@/components/admin/BasicButton";
import { Content_Event } from "@/content/events";
import { useImageChooser } from "@/context/ImageChooserContext";
import { updatePageContent } from "@/server_actions/updatePageContent";
import React, { useCallback, useState } from "react";

const EditEvents = ({ events }: { events: Content_Event }) => {
  const submitForm = useCallback(async (e: FormData) => {
    const posterPath = e.get("poster");
    const posterAlt = e.get("poster-alt");

    if (!posterPath || !posterAlt) {
      alert("Please fill out all fields");
      return;
    }

    const data: Content_Event = {
      poster: {
        path: posterPath as string,
        alt: posterAlt as string,
      },
      extras: [
        {
          path: "/events/images/pumpkin1.jpg",
          alt: "Fall 2024 Extra 1",
        },
        {
          path: "/events/images/pumpkin2.jpg",
          alt: "Fall 2024 Extra 2",
        },
        {
          path: "/events/images/pumpkin3.jpg",
          alt: "Fall 2024 Extra 3",
        },
      ],
      banner: ["TBD"],
    };

    try {
      // TODO : update "test" to the correct page ID
      const update = await updatePageContent("test", JSON.stringify(data));

      if (update) {
        // TODO: add toast notifications
        alert("Page updated successfully");
      } else {
        alert("An error occurred while updating the page");
      }
    } catch (error) {
      alert((error as Error).message);
    }
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
          Description: <EditableText text={original.alt} name="poster-alt" />
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

const EditableText = ({ text, name }: { text: string; name: string }) => {
  const [value, setValue] = useState(text);

  const className =
    "border border-gray-300 p-2 cursor-text inline-block w-[400px] ml-2";

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={className}
      name={name}
      autoFocus
    />
  );
};

export default EditEvents;
