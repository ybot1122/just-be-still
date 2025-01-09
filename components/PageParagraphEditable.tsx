"use client";

import { NodeType } from "@/content/content";
import React, { FC, ChangeEvent, useState, useId } from "react";

interface PageParagraphEditable {
  value: string;
  placeholder?: string;
  isAccent?: boolean;
}

const PageParagraphEditable: FC<PageParagraphEditable> = ({
  value: valueProp,
  placeholder,
  isAccent = false,
}) => {
  const id = useId();
  const [value, setValue] = useState(valueProp);
  const pClass = isAccent ? "pageParagraphAccent" : "pageParagraph";
  const nodeType = isAccent ? NodeType.AccentParagraph : NodeType.Paragraph;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex flex-col items-left mt-4 border-4 border-black p-5">
      <label
        htmlFor={id}
        className="block text-lg font-medium text-gray-700 mb-2"
      >
        {isAccent ? "Accent " : ""} Paragraph
      </label>
      <textarea
        id={id}
        name={`${nodeType}$${id}`}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={`${pClass} py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full h-[300px]`}
      />
    </div>
  );
};

export default PageParagraphEditable;
