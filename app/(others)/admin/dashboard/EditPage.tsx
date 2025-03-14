import BasicButton from "@/components/admin/BasicButton";
import CarouselEditable from "@/components/admin/CarouselEditable";
import SingleImageEditable from "@/components/admin/SingleImageEditable";
import PageParagraphEditable from "@/components/admin/PageParagraphEditable";
import WidgetAdder from "@/components/admin/WidgetAdder";
import { WidgetType, Page, Widget } from "@/content/content";
import React, { useState } from "react";
import { Submit } from "./Submit";
import { submitForm } from "./submitForm";

const EditPage = ({
  pageId,
  pageData,
  onSubmit,
}: {
  pageId: string;
  pageData: Page;
  onSubmit: () => void;
}) => {
  const [newWidgets, setNewWidgets] = useState<Widget[]>([...pageData.content]);
  const [errors, setErrors] = useState<string[]>([]);

  const moveWidget = (index: number, direction: "up" | "down") => {
    setNewWidgets((prev) => {
      const newWidgets = [...prev];
      const [removed] = newWidgets.splice(index, 1);
      newWidgets.splice(direction === "up" ? index - 1 : index + 1, 0, removed);
      return newWidgets;
    });
  };
  return (
    <form
      action={(e) => submitForm(e, pageId, onSubmit, errors, setErrors)}
      className="text-left"
    >
      {newWidgets.map((c, i) => {
        return (
          <div key={c.uuid} className="widget-container">
            {c.type === WidgetType.Paragraph && (
              <PageParagraphEditable widget={c} />
            )}
            {c.type === WidgetType.AccentParagraph && (
              <PageParagraphEditable widget={c} isAccent />
            )}
            {c.type === WidgetType.Carousel && (
              <CarouselEditable carousel={c} />
            )}
            {c.type === WidgetType.Image && (
              <SingleImageEditable original={c} />
            )}
            <div className="mt-5">
              <button
                type="button"
                onClick={() => moveWidget(i, "up")}
                disabled={i === 0}
                className="px-2 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
              >
                Move Up
              </button>
              <button
                type="button"
                onClick={() => moveWidget(i, "down")}
                disabled={i === [...pageData.content, ...newWidgets].length - 1}
                className="px-2 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300 ml-2"
              >
                Move Down
              </button>
            </div>
          </div>
        );

        return null;
      })}
      <WidgetAdder addWidget={(w) => setNewWidgets((prev) => [...prev, w])} />
      <div className="flex flex-col items-center justify-center mt-10">
        <Submit />
        {errors.length > 0 && (
          <div className="text-red-500">
            You have some errors. Please check above.
          </div>
        )}
      </div>
    </form>
  );
};

export default EditPage;
