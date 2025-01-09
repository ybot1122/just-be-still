"use client";

import Carousel from "./Carousel";
import { CarouselNode, ImageNode, NodeType } from "@/content/content";
import { useCallback, useId, useState } from "react";
import CarouselImage from "./CarouselImage";
import BasicButton from "./admin/BasicButton";
import { useImageChooser } from "@/context/ImageChooserContext";

export default function CarouselEditable({
  content: contentProp,
}: {
  content: CarouselNode["content"];
}) {
  const id = useId();
  const [content, setContent] = useState(contentProp);
  const { setCallback: setImageChooserCb } = useImageChooser();

  const addImage = useCallback(
    () => (p?: string) => {
      if (p) {
        const image: ImageNode = {
          type: NodeType.Image,
          src: p,
          alt: "",
          modifiers: [],
          uuid: Date.now() + id,
        };
        const next = [...content, image];
        setContent(next);
      }
      setImageChooserCb(() => null);
    },
    [setImageChooserCb, id, content, setContent],
  );

  return (
    <div className="flex flex-col items-left mt-4 border-4 border-black p-5">
      <label className="block text-lg font-medium text-gray-700 mb-2">
        Image Carousel
      </label>
      <Carousel>
        {content.map((c) => (
          <CarouselImage src={c.src} alt={c.alt} key={c.uuid} />
        ))}
      </Carousel>
      <div className="flex mt-20">
        {content.map((c) => (
          <div
            className="relative h-[100px] overflow-hidden px-5 mt-5"
            key={c.uuid}
          >
            <img
              src={c.src}
              alt={c.alt}
              className="object-cover object-left-top h-full w-full"
            />
            <input
              type="hidden"
              value={c.src}
              name={`Carousel-${id}-${c.uuid}`}
            />
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
