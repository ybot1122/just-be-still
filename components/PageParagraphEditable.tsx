"use client";

import { NodeType } from "@/content/content";
import React, { FC, ChangeEvent, useState, useId } from "react";
import BasicButton from "./admin/BasicButton";
import TrashIcon from "./TrashIcon";

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
  const [isRemoved, setIsRemoved] = useState(false);
  const [value, setValue] = useState(valueProp);
  const pClass = isAccent ? "pageParagraphAccent" : "pageParagraph";
  const pName = `${isAccent ? "Accent " : ""} Paragraph`;
  const nodeType = isAccent ? NodeType.AccentParagraph : NodeType.Paragraph;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  if (isRemoved) {
    return (
      <div className="flex flex-col items-center mt-4 border-4 border-red-500 p-5">
        <p className="text-red-500 mb-4">This {pName} has been deleted.</p>
        <BasicButton onClick={() => setIsRemoved(false)}>Undo</BasicButton>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-left mt-4 border-4 border-black p-5">
      <div className="flex justify-between items-top w-full mb-5">
        <label
          htmlFor={id}
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          {pName}
        </label>
        <BasicButton onClick={() => setIsRemoved(true)}>
          <TrashIcon width={24} height={24} />
        </BasicButton>
      </div>
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
