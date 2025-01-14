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
import FieldError from "./FieldError";

export default function CarouselEditable({
  carousel,
}: {
  carousel: CarouselWidget;
}) {
  const id = useId();
  const [isRemoved, setIsRemoved] = useState(false);
  const [content, setContent] = useState(carousel.content);
  const { setCallback: setImageChooserCb } = useImageChooser();

  const addImage = useCallback(
    () => (p?: string) => {
      if (p) {
        const image: ImageWidget = {
          type: WidgetType.Image,
          src: p,
          alt: "",
          modifiers: [],
          uuid: crypto.randomUUID(),
        };
        content.push(image);
        setContent(content);
      }
      setImageChooserCb(() => null);
    },
    [setImageChooserCb, content, setContent],
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
      <div className="mt-5 flex flex-col justify-center items-center">
        <div>Describe this Carousel: </div>
        <input
          type="text"
          className="mx-2 p-2 border rounded w-1/2"
          placeholder="Description"
          name={`${WidgetType.Carousel}-alt$${id}`}
          defaultValue={carousel.content.length ? carousel.content[0].alt : ""}
        />
        <FieldError
          id={`${WidgetType.Carousel}-alt$${id}$error`}
          message="This field cannot be empty."
        />
      </div>
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
            </div>
            <BasicButton onClick={() => removeImage(c.uuid)}>
              <TrashIcon width={24} height={24} className="my-1" />
            </BasicButton>
          </div>
        ))}
      </div>
      <input
        type="hidden"
        value={content.map((c) => c.src).join(",")}
        name={`${WidgetType.Carousel}$${id}`}
      />
      <div className="mt-5 flex-col flex justify-center items-center">
        <BasicButton onClick={() => setImageChooserCb(addImage)}>
          <div className="py-2">Add Image</div>
        </BasicButton>
        <FieldError
          id={`${WidgetType.Carousel}$${id}$error`}
          message="You must have at least one image.."
        />
      </div>
    </div>
  );
}
