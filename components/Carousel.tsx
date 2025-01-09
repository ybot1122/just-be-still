"use client";

import PageParagraph from "@/components/PageParagraph";
import { Carousel as TobyUiCarousel } from "@ybot1122/toby-ui/Carousel";

export default function Carousel({
  children,
}: {
  children: React.ReactNode[];
}) {
  return (
    <PageParagraph as="div">
      <TobyUiCarousel
        slidesToShow={1}
        prevButton={(onClick) => (
          <ArrowButton onClick={onClick} direction="prev" />
        )}
        nextButton={(onClick) => (
          <ArrowButton onClick={onClick} direction="next" />
        )}
      >
        {children}
      </TobyUiCarousel>
    </PageParagraph>
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
    <button onClick={onClick} type="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`fill-green h-[24px] w-[24px] md:h-[48px] md:w-[48px]`}
      >
        <path fillRule="evenodd" d={d} clipRule="evenodd" />
      </svg>
    </button>
  );
};
