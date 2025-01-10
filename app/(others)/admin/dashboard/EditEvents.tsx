import BasicButton from "@/components/admin/BasicButton";
import CarouselEditable from "@/components/admin/CarouselEditable";
import SingleImageEditable from "@/components/admin/SingleImageEditable";
import PageParagraphEditable from "@/components/admin/PageParagraphEditable";
import WidgetAdder from "@/components/admin/WidgetAdder";
import { ImageWidget, WidgetType, Page, Widget } from "@/content/content";
import { useImageChooser } from "@/context/ImageChooserContext";
import React, { useCallback, useState } from "react";
import { updatePageContent } from "@/server_actions/updatePageContent";

const EditEvents = ({ events }: { events: Page }) => {
  const [newWidgets, setNewWidgets] = useState<Widget[]>([]);
  const submitForm = useCallback(async (e: FormData) => {
    const content: { id: string; widget: Widget }[] = [];

    for (const key of e.keys()) {
      const value = e.get(key);
      const field = key.split("$");
      console.log(field, value);

      const val = value?.toString().trim();

      if (!val) {
        console.error(key, " empty");
        continue;
      }

      if (field[0] === WidgetType.Paragraph) {
        content.push({
          id: field[1],
          widget: {
            type: WidgetType.Paragraph,
            content: val,
            modifiers: [],
            uuid: crypto.randomUUID(),
          },
        });
      } else if (field[0] === WidgetType.AccentParagraph) {
        content.push({
          id: field[1],
          widget: {
            type: WidgetType.AccentParagraph,
            content: val,
            modifiers: [],
            uuid: crypto.randomUUID(),
          },
        });
      }
    }

    const data: Page = {
      content: content.map((c) => c.widget),
    };

    console.log(data);

    try {
      const update = await updatePageContent("events", JSON.stringify(data));

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

        if (c.type === WidgetType.Image) {
          return <SingleImageEditable original={c} key={c.uuid} />;
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

export default EditEvents;
