"use client";

import Carousel from "../Carousel";
import { CarouselWidget, ImageWidget, WidgetType } from "@/content/content";
import { useCallback, useId, useState } from "react";
import CarouselImage from "../CarouselImage";
import BasicButton from "./BasicButton";
import { useImageChooser } from "@/context/ImageChooserContext";
import TrashIcon from "../TrashIcon";
import WidgetDeleted from "./WidgetDeleted";
import EditableLabel from "./EditableLabel";

export default function CarouselEditable({
  content: contentProp,
}: {
  content: CarouselWidget["content"];
}) {
  const id = useId();
  const [isRemoved, setIsRemoved] = useState(false);
  const [content, setContent] = useState(contentProp);
  const { setCallback: setImageChooserCb } = useImageChooser();

  const addImage = useCallback(
    () => (p?: string) => {
      if (p) {
        const image: ImageWidget = {
          type: WidgetType.Image,
          src: p,
          alt: "",
          modifiers: [],
          uuid: Date.now() + id,
        };
        content.push(image);
        setContent(content);
      }
      setImageChooserCb(() => null);
    },
    [setImageChooserCb, id, content, setContent],
  );

  const removeImage = useCallback(
    (uuid: string) => {
      const next = content.filter((c) => c.uuid !== uuid);
      setContent(next);
    },
    [content, setContent],
  );

  if (isRemoved) {
    return (
      <WidgetDeleted
        widgetName="Image Carousel"
        undoCb={() => setIsRemoved(false)}
      />
    );
  }

  return (
    <div className="flex flex-col items-left mt-4 border-4 border-black p-5">
      <EditableLabel
        htmlFor={id}
        name={"Image Carousel"}
        removeCb={() => setIsRemoved(true)}
      />
      <Carousel>
        {content.map((c) => (
          <CarouselImage src={c.src} alt={c.alt} key={c.uuid} />
        ))}
      </Carousel>
      <div className="flex mt-10">
        {content.map((c) => (
          <div className="flex flex-col items-center" key={c.uuid}>
            <div className="relative h-[100px] overflow-hidden px-5 my-2">
              <img
                src={c.src}
                alt={c.alt}
                className="object-cover object-left-top h-full w-full"
              />
              <input
                type="hidden"
                value={c.src}
                name={`${WidgetType.Carousel}$${id}$${c.uuid}`}
              />
            </div>
            <BasicButton onClick={() => removeImage(c.uuid)}>
              <TrashIcon width={24} height={24} className="my-1" />
            </BasicButton>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <BasicButton onClick={() => setImageChooserCb(addImage)}>
          Add Image
        </BasicButton>
      </div>
    </div>
  );
}
