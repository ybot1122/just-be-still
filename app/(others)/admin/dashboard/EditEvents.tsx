import BasicButton from "@/components/admin/BasicButton";
import PageParagraphEditable from "@/components/PageParagraphEditable";
import { ImageNode, NodeType, Page } from "@/content/content";
import { useImageChooser } from "@/context/ImageChooserContext";
import { updatePageContent } from "@/server_actions/updatePageContent";
import React, { useCallback, useState } from "react";

const EditEvents = ({ events }: { events: Page }) => {
  const submitForm = useCallback(async (e: FormData) => {
    const posterPath = e.get("poster");
    const posterAlt = e.get("poster-alt");

    if (!posterPath || !posterAlt) {
      alert("Please fill out all fields");
      return;
    }

    const data: Page = {
      content: [],
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
        {events.content.map((c) => {
          if (c.type === NodeType.Paragraph) {
            return <PageParagraphEditable value={c.content} id={c.uuid} />;
          }

          if (c.type === NodeType.AccentParagraph) {
            return (
              <PageParagraphEditable value={c.content} id={c.uuid} isAccent />
            );
          }

          if (c.type === NodeType.Carousel) {
            return <div key={c.uuid}>A Carousel</div>;
          }
        })}
        <div className="mt-5">
          <BasicButton type="submit">Update Page</BasicButton>
        </div>
      </form>
    </div>
  );
};

const ImageUploader = ({ original }: { original: ImageNode }) => {
  const [selectedImage, setSelectedImage] = useState<string>(original.src);
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
