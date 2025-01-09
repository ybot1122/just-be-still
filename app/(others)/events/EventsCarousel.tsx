"use client";

import PageSection from "@/components/PageSection";
import { Carousel } from "@ybot1122/toby-ui/Carousel";
import Image from "next/image";
import dec1 from "@/public/events/dec2024/dec-1.jpg";
import dec2 from "@/public/events/dec2024/dec-2.jpg";
import dec3 from "@/public/events/dec2024/dec-3.jpg";
import dec4 from "@/public/events/dec2024/dec-4.jpg";
import dec5 from "@/public/events/dec2024/dec-5.jpg";
import dec6 from "@/public/events/dec2024/dec-6.jpg";

export default function EventsCarousel() {
  return (
    <PageSection className="mt-10 md:mt-20">
      <Carousel
        slidesToShow={1}
        prevButton={(onClick) => (
          <ArrowButton onClick={onClick} direction="prev" />
        )}
        nextButton={(onClick) => (
          <ArrowButton onClick={onClick} direction="next" />
        )}
      >
        <div className="relative">
          <Image src={dec1} alt="Dec 1" className="object-contain object-top" />
        </div>
        <div className="relative h-[300px] md:h-[400px]">
          <Image src={dec2} alt="Dec 2" />
        </div>
        <div className="relative h-[300px] md:h-[400px]">
          <Image src={dec3} alt="Dec 3" />
        </div>
        <div className="relative h-[300px] md:h-[400px]">
          <Image src={dec4} alt="Dec 4" />
        </div>
        <div className="relative h-[300px] md:h-[400px]">
          <Image src={dec5} alt="Dec 5" />
        </div>
        <div className="relative h-[300px] md:h-[400px]">
          <Image src={dec6} alt="Dec 6" />
        </div>
      </Carousel>
    </PageSection>
  );
}

const ArrowButton = ({
  onClick,
  direction,
}: {
  onClick: () => void;
  direction: "next" | "prev";
}) => {
  const d =
    direction === "next"
      ? "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
      : "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z";

  return (
    <button onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`fill-green h-[24px] w-[24px]`}
      >
        <path fillRule="evenodd" d={d} clipRule="evenodd" />
      </svg>
    </button>
  );
};
