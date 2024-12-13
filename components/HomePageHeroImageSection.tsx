"use client";

import Image, { StaticImageData } from "next/image";
import React, { useCallback, useEffect, useRef } from "react";
import down_icon from "@/public/down-arrow.png";
import ScrollDownButton from "./ScrollDownButton";

export default function HomePageHeroImageSection({
  children,
  src,
  alt,
  onInView,
}: {
  children: React.ReactNode;
  src: StaticImageData;
  alt: string;
  onInView: () => void;
}) {
  const elementRef = useRef(null);

  const handleIntersection = useCallback((inView: boolean) => {
    if (inView) {
      onInView();
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          handleIntersection(entry.isIntersecting);
        });
      },
      {
        threshold: 1.0,
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [handleIntersection]);

  return (
    <section
      className="section tall:snap-start tall:snap-always"
      ref={elementRef}
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
