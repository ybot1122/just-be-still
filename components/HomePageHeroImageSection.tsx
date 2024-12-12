import Image, { StaticImageData } from "next/image";
import React, { useCallback } from "react";
import down_icon from "@/public/down-arrow.png";

export default function HomePageHeroImageSection({
  children,
  src,
  alt,
}: {
  children: React.ReactNode;
  src: StaticImageData;
  alt: string;
}) {
  return (
    <section className="section">
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
            <button>
              <Image
                src={down_icon}
                alt="Scroll Down"
                sizes="100vw"
                width={50}
                height={50}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
