"use client";

import PageParagraph from "@/components/PageParagraph";
import { Carousel as TobyUiCarousel } from "@ybot1122/toby-ui/Carousel";
import Carousel from "./Carousel";
import { CarouselNode, NodeType } from "@/content/content";
import { useState } from "react";
import CarouselImage from "./CarouselImage";

export default function CarouselEditable({
  content: contentProp,
}: {
  content: CarouselNode["content"];
}) {
  const [content, setContent] = useState(contentProp);

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
    </div>
  );
}
