import BasicButton from "@/components/admin/BasicButton";
import CarouselEditable from "@/components/admin/CarouselEditable";
import SingleImageEditable from "@/components/admin/SingleImageEditable";
import PageParagraphEditable from "@/components/admin/PageParagraphEditable";
import WidgetAdder from "@/components/admin/WidgetAdder";
import { WidgetType, Page, Widget, CarouselWidget } from "@/content/content";
import React, { useCallback, useState } from "react";
import { updatePageContent } from "@/server_actions/updatePageContent";
import { useFormStatus } from "react-dom";

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

  const submitForm = useCallback(
    async (e: FormData) => {
      errors.map((n) => {
        const dom = document.getElementById(n);

        if (dom) {
          dom.classList.add("hidden");
        }
      });

      setErrors([]);
      const content: { id: string; widget: Widget }[] = [];
      const newErrors: string[] = [];

      // Get Data
      for (const key of e.keys()) {
        const value = e.get(key);
        const field = key.split("$");

        const val = value?.toString().trim() || "";

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
        } else if (field[0] === WidgetType.Image) {
          content.push({
            id: field[1],
            widget: {
              type: WidgetType.Image,
              src: val,
              alt:
                e
                  .get(`${WidgetType.Image}-alt$${field[1]}`)
                  ?.toString()
                  .trim() || "",
              modifiers: [],
              uuid: crypto.randomUUID(),
            },
          });
        } else if (field[0] === WidgetType.Carousel) {
          const images = val.split(",");

          if (!images[0]) {
            images.splice(0, 1);
          }

          const w: CarouselWidget = {
            type: WidgetType.Carousel,
            modifiers: [],
            uuid: crypto.randomUUID(),
            content: images.map((src) => ({
              type: WidgetType.Image,
              src: src,
              alt:
                e
                  .get(`${WidgetType.Carousel}-alt$${field[1]}`)
                  ?.toString()
                  .trim() || "",
              modifiers: [],
              uuid: crypto.randomUUID(),
            })),
          };

          const c = {
            id: field[1],
            widget: w,
          };
          content.push(c);
        }
      }

      // Validate
      for (const c in content) {
        const w = content[c].widget;
        if (
          w.type === WidgetType.AccentParagraph ||
          w.type === WidgetType.Paragraph
        ) {
          if (!w.content) {
            newErrors.push(`${w.type}$${content[c].id}$error`);
          }
        } else if (w.type === WidgetType.Image) {
          if (!w.src) {
            newErrors.push(`${w.type}$${content[c].id}$error`);
          }
          if (!w.alt) {
            newErrors.push(`${w.type}-alt$${content[c].id}$error`);
          }
        } else if (w.type === WidgetType.Carousel) {
          if (!w.content.length) {
            newErrors.push(`${w.type}$${content[c].id}$error`);
          }

          if (w.content.length && !w.content[0].alt) {
            newErrors.push(`${w.type}-alt$${content[c].id}$error`);
          }
        }
      }

      if (newErrors.length) {
        setErrors(newErrors);
        newErrors.map((n) => {
          const dom = document.getElementById(n);

          if (dom) {
            dom.classList.remove("hidden");
          }
        });
        return;
      }

      const data: Page = {
        content: content.map((c) => c.widget),
      };

      try {
        const update = await updatePageContent(pageId, JSON.stringify(data));

        if (update) {
          onSubmit();
        }
      } catch (error) {
        alert((error as Error).message);
      }
    },
    [errors, setErrors],
  );

  return (
    <form action={submitForm} className="text-left">
      {[...pageData.content, ...newWidgets].map((c) => {
        if (c.type === WidgetType.Paragraph) {
          return <PageParagraphEditable value={c.content} key={c.uuid} />;
        }

        if (c.type === WidgetType.AccentParagraph) {
          return (
            <PageParagraphEditable value={c.content} key={c.uuid} isAccent />
          );
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

const Submit = () => {
  const { pending } = useFormStatus();
  return pending ? (
    <div className="py-2">Updating...</div>
  ) : (
    <BasicButton type="submit">
      <div className="py-2">Update Page</div>
    </BasicButton>
  );
};

export default EditPage;
