import { Widget, WidgetType } from "@/content/content";
import BasicButton from "./BasicButton";

export default function WidgetAdder({
  addWidget,
}: {
  addWidget: (widget: Widget) => void;
}) {
  return (
    <div className="flex gap-2 mt-5 justify-center">
      <select
        id="new-widget-chooser"
        className="border border-gray-300 p-2 cursor-pointer"
        defaultValue={WidgetType.Paragraph}
      >
        <option value={WidgetType.Paragraph}>Paragraph</option>
        <option value={WidgetType.AccentParagraph}>Accent Paragraph</option>
        <option value={WidgetType.Carousel}>Image Carousel</option>
        <option value={WidgetType.Image}>Single Image</option>
      </select>
      <BasicButton
        onClick={() => {
          const selectElement = document.getElementById(
            "new-widget-chooser",
          ) as HTMLSelectElement;
          const selectedOption = selectElement.value;

          switch (selectedOption) {
            case WidgetType.Paragraph:
              addWidget({
                type: WidgetType.Paragraph,
                content: "Hi I'm a new paragraph!",
                uuid: crypto.randomUUID(),
                modifiers: [],
              });
              break;
            case WidgetType.AccentParagraph:
              addWidget({
                type: WidgetType.AccentParagraph,
                content: "Hi I'm a new paragraph!",
                uuid: crypto.randomUUID(),
                modifiers: [],
              });
              break;
            case WidgetType.Carousel:
              addWidget({
                type: WidgetType.Carousel,
                content: [],
                uuid: crypto.randomUUID(),
                modifiers: [],
              });
              break;
            case WidgetType.Image:
              addWidget({
                type: WidgetType.Image,
                src: "",
                alt: "Placeholder",
                uuid: crypto.randomUUID(),
                modifiers: [],
              });
              break;
          }
        }}
      >
        Add Selected Widget
      </BasicButton>
    </div>
  );
}
