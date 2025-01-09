import { NodeType } from "@/content/content";
import BasicButton from "./BasicButton";

export default function WidgetDeleted({
  widgetName,
  undoCb,
}: {
  widgetName: string;
  undoCb: () => void;
}) {
  return (
    <div className="flex flex-col items-center mt-4 border-4 border-red-500 p-5">
      <p className="text-red-500 mb-4">This {widgetName} has been deleted.</p>
      <BasicButton onClick={undoCb}>Undo</BasicButton>
    </div>
  );
}
