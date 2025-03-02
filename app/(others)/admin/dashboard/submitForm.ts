import {
  WidgetType,
  Page,
  Widget,
  CarouselWidget,
  WidgetModifiers,
} from "@/content/content";
import { updatePageContent } from "@/server_actions/updatePageContent";

export const submitForm = async (
  e: FormData,
  pageId: string,
  onSubmit: () => void,
  errors: string[],
  setErrors: (errors: string[]) => void,
) => {
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

    const modifiersVal =
      e.get(`${field[0]}-modifiers$${field[1]}`)?.toString() || "";
    const modifiers = modifiersVal.split(" ") as WidgetModifiers[];

    if (field[0] === WidgetType.Paragraph) {
      content.push({
        id: field[1],
        widget: {
          type: WidgetType.Paragraph,
          content: val,
          modifiers,
          uuid: crypto.randomUUID(),
        },
      });
    } else if (field[0] === WidgetType.AccentParagraph) {
      content.push({
        id: field[1],
        widget: {
          type: WidgetType.AccentParagraph,
          content: val,
          modifiers,
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
            e.get(`${WidgetType.Image}-alt$${field[1]}`)?.toString().trim() ||
            "",
          modifiers,
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
          modifiers,
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
};
