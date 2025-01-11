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
      {selectedImage ? (
        <SingleImage src={selectedImage} alt={"Selected"} />
      ) : null}
      {selectedImage ? (
        <div className="flex items-center justify-center flex-col mt-2">
          <div>Describe this image:</div>
          <input
            type="text"
            className="mt-2 p-2 border rounded w-1/2"
            placeholder="Enter image description"
            name={`${WidgetType.Image}-alt$${id}`}
          />
          <p
            id={`${WidgetType.Image}-alt$${id}$error`}
            className="text-red-500 mt-2 hidden"
          >
            This field cannot be empty.
          </p>
        </div>
      ) : null}
      <div className="flex flex-col items-center justify-center mt-5">
        <BasicButton
          onClick={() =>
            setImageChooserCb(() => (p?: string) => {
              if (p) setSelectedImage(p);
              setImageChooserCb(() => null);
            })
          }
        >
          {selectedImage ? "Change Image" : "Choose Image"}
        </BasicButton>
        <p
          id={`${WidgetType.Image}$${id}$error`}
          className="text-red-500 mt-2 hidden"
        >
          You must select an image.
        </p>
      </div>
      <input
        type="hidden"
        value={selectedImage}
        name={`${WidgetType.Image}$${id}`}
      />
    </div>
  );
}
