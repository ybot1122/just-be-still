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
  const [newWidgets, setNewWidgets] = useState<Widget[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  return (
    <form
      action={(e) => submitForm(e, pageId, onSubmit, errors, setErrors)}
      className="text-left"
    >
      {[...pageData.content, ...newWidgets].map((c) => {
        if (c.type === WidgetType.Paragraph) {
          return <PageParagraphEditable widget={c} key={c.uuid} />;
        }

        if (c.type === WidgetType.AccentParagraph) {
          return <PageParagraphEditable widget={c} key={c.uuid} isAccent />;
        }

        if (c.type === WidgetType.Carousel) {
          return <CarouselEditable key={c.uuid} carousel={c} />;
        }

        if (c.type === WidgetType.Image) {
          return <SingleImageEditable original={c} key={c.uuid} />;
        }

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
