import BasicButton from "@/components/admin/BasicButton";
import CarouselEditable from "@/components/admin/CarouselEditable";
import PageParagraphEditable from "@/components/admin/PageParagraphEditable";
import WidgetAdder from "@/components/admin/WidgetAdder";
import { ImageWidget, WidgetType, Page, Widget } from "@/content/content";
import { useImageChooser } from "@/context/ImageChooserContext";
import React, { useCallback, useState } from "react";

const EditEvents = ({ events }: { events: Page }) => {
  const [newWidgets, setNewWidgets] = useState<Widget[]>([]);
  const submitForm = useCallback(async (e: FormData) => {
    for (const key of e.keys()) {
      const value = e.get(key);
      console.log(key, value);
    }

    const data: Page = {
      content: [],
    };

    try {
      // TODO : update "test" to the correct page ID
      /*
      const update = await updatePageContent("test", JSON.stringify(data));

      if (update) {
        // TODO: add toast notifications
        alert("Page updated successfully");
      } else {
        alert("An error occurred while updating the page");
      }
        */
      alert("submitted. the actual api call is stubbed out.");
    } catch (error) {
      alert((error as Error).message);
    }
  }, []);

  return (
    <form action={submitForm} className="text-left">
      {[...events.content, ...newWidgets].map((c) => {
        if (c.type === WidgetType.Paragraph) {
          return <PageParagraphEditable value={c.content} key={c.uuid} />;
        }

        if (c.type === WidgetType.AccentParagraph) {
          return (
            <PageParagraphEditable value={c.content} key={c.uuid} isAccent />
          );
        }

        if (c.type === WidgetType.Carousel) {
          return <CarouselEditable key={c.uuid} content={c.content} />;
        }

        return null;
      })}
      <WidgetAdder addWidget={(w) => setNewWidgets((prev) => [...prev, w])} />
      <div className="flex justify-center mt-10">
        <BasicButton type="submit">
          <div className="py-2">Update Page</div>
        </BasicButton>
      </div>
    </form>
  );
};

const ImageUploader = ({ original }: { original: ImageWidget }) => {
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
