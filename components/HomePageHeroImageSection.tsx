"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect } from "react";
import down_icon from "@/public/down-arrow.png";
import ScrollDownButton from "./ScrollDownButton";
import { useObserveRef } from "./useActiveScreen";

export default function HomePageHeroImageSection({
  children,
  src,
  alt,
  addObserver,
  index,
}: {
  children: React.ReactNode;
  src: StaticImageData;
  alt: string;
  addObserver: (element: Element) => void;
  index: number;
}) {
  const elementRef = useObserveRef({ addObserver });

  return (
    <section
      className="section tall:snap-start tall:snap-always"
      ref={elementRef}
      data-index={index}
    >
      <div className="relative w-full tall:h-[100vh] items-center justify-between text-sm">
        <div className="flex justify-center items-center w-full h-full before:absolute before:block before:w-full before:h-full before:z-10 before:bg-recipeHeroScrim">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            objectFit="cover"
            placeholder="blur"
          />
          {children}
          <div className="absolute bottom-0 mb-5 animate-bounce z-10">
            <ScrollDownButton>
              <Image
                src={down_icon}
                alt="Scroll Down"
                sizes="100vw"
                width={50}
                height={50}
              />
            </ScrollDownButton>
          </div>
        </div>
      </div>
    </section>
  );
}
