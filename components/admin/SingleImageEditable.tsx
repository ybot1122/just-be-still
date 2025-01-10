import { ImageWidget, WidgetType } from "@/content/content";
import { useImageChooser } from "@/context/ImageChooserContext";
import { useId, useState } from "react";
import BasicButton from "./BasicButton";
import EditableLabel from "./EditableLabel";
import WidgetDeleted from "./WidgetDeleted";
import SingleImage from "../SingleImage";

export default function SingleImageEditable({
  original,
}: {
  original: ImageWidget;
}) {
  const id = useId();
  const [selectedImage, setSelectedImage] = useState<string>(original.src);
  const [isRemoved, setIsRemoved] = useState(false);
  const { setCallback: setImageChooserCb } = useImageChooser();

  if (isRemoved) {
    return (
      <WidgetDeleted
        widgetName="Single Image"
        undoCb={() => setIsRemoved(false)}
      />
    );
  }

  return (
    <div className="flex flex-col items-left mt-4 border-4 border-black p-5">
      <EditableLabel
        htmlFor={id}
        name={"Single Image"}
        removeCb={() => setIsRemoved(true)}
      />
      <SingleImage src={selectedImage} alt={"Selected"} />
      <div className="mt-2">
        <div>Description:</div>
        <input
          type="text"
          className="mt-2 p-2 border rounded w-1/2"
          placeholder="Enter image description"
          name={`${WidgetType.Image}-alt$${id}`}
        />
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
      <input
        type="hidden"
        value={selectedImage}
        name={`${WidgetType.Image}$${id}`}
      />
    </div>
  );
}
