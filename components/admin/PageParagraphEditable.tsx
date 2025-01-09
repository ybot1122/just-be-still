"use client";

import { WidgetType } from "@/content/content";
import React, { FC, ChangeEvent, useState, useId } from "react";
import BasicButton from "./BasicButton";
import TrashIcon from "../TrashIcon";
import WidgetDeleted from "./WidgetDeleted";
import EditableLabel from "./EditableLabel";

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
  const nodeType = isAccent ? WidgetType.AccentParagraph : WidgetType.Paragraph;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  if (isRemoved) {
    return (
      <WidgetDeleted widgetName={pName} undoCb={() => setIsRemoved(false)} />
    );
  }

  return (
    <div className="flex flex-col items-left mt-4 border-4 border-black p-5">
      <EditableLabel
        htmlFor={id}
        name={pName}
        removeCb={() => setIsRemoved(true)}
      />
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
