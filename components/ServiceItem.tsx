"use client";

import { useState } from "react";

export default function ServiceItem({
  q,
  children,
  isLast = false,
}: {
  q: string;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const content = isOpen ? children : null;

  return (
    <div
      className={` flex py-10 border-t border-borderGray text-left w-full flex-wrap ${isLast ? "border-b" : ""}`}
    >
      <button
        className={`font-bold text-forest block text-blue text-xl md:text-2xl cursor w-1/2 text-left ${isOpen ? "mb-10" : ""} grow`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {q}
      </button>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? "mb-10" : ""} ml-5 relative`}
        aria-hidden="true"
      >
        <rect
          className="right-[20px] absolute inline-block w-[20px] h-[2px] bg-forest"
          aria-hidden="true"
        ></rect>
        <rect
          className={`right-[20px] inline-block w-[20px] h-[2px] bg-forest absolute ${isOpen ? "animate-closePlus" : "rotate-90 animate-openPlus"}`}
          aria-hidden="true"
        ></rect>
      </button>

      {content}
    </div>
  );
}
