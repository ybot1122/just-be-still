"use client";

import {
  ParagraphWidget,
  WidgetModifiers,
  WidgetType,
} from "@/content/content";
import React, { FC, ChangeEvent, useState, useId, useCallback } from "react";
import WidgetDeleted from "./WidgetDeleted";
import EditableLabel from "./EditableLabel";
import FieldError from "./FieldError";
import BasicButton from "./BasicButton";
import {
  BoldIcon,
  CenterAlign,
  LeftAlign,
  RightAlign,
} from "../toolbarIcons/Icons";

interface PageParagraphEditable {
  widget: ParagraphWidget;
  placeholder?: string;
  isAccent?: boolean;
}

const PageParagraphEditable: FC<PageParagraphEditable> = ({
  widget,
  placeholder,
  isAccent = false,
}) => {
  const id = useId();
  const [isRemoved, setIsRemoved] = useState(false);
  const [value, setValue] = useState(widget.content);
  const [modifiers, setModifiers] = useState<Record<WidgetModifiers, boolean>>({
    [WidgetModifiers.FontBold]: widget.modifiers.includes(
      WidgetModifiers.FontBold,
    ),
    [WidgetModifiers.TextCenter]: widget.modifiers.includes(
      WidgetModifiers.TextCenter,
    ),
    [WidgetModifiers.TextLeft]: widget.modifiers.includes(
      WidgetModifiers.TextLeft,
    ),
    [WidgetModifiers.TextRight]: widget.modifiers.includes(
      WidgetModifiers.TextRight,
    ),
  });
  const pClass = isAccent ? "pageParagraphAccent" : "pageParagraph";
  const pName = `${isAccent ? "Accent " : ""} Paragraph`;
  const nodeType = isAccent ? WidgetType.AccentParagraph : WidgetType.Paragraph;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const toggleModifier = useCallback(
    (modifier: WidgetModifiers) => {
      setModifiers((prev) => ({
        ...prev,
        [modifier]: !prev[modifier],
      }));
    },
    [setModifiers],
  );

  const chooseAlignment = useCallback(
    (
      modifier:
        | WidgetModifiers.TextCenter
        | WidgetModifiers.TextLeft
        | WidgetModifiers.TextRight,
    ) => {
      setModifiers((prev) => ({
        ...prev,
        [WidgetModifiers.TextCenter]: modifier === WidgetModifiers.TextCenter,
        [WidgetModifiers.TextLeft]: modifier === WidgetModifiers.TextLeft,
        [WidgetModifiers.TextRight]: modifier === WidgetModifiers.TextRight,
      }));
    },
    [setModifiers],
  );

  if (isRemoved) {
    return (
      <WidgetDeleted widgetName={pName} undoCb={() => setIsRemoved(false)} />
    );
  }

  const error_id = `${nodeType}$${id}$error`;
  const error_dom = document.getElementById(error_id);

  if (error_dom) {
    if (!value?.trim()) {
      error_dom.classList.remove("hidden");
    } else {
      error_dom.classList.add("hidden");
    }
  }

  const activeModifiers = Object.keys(modifiers)
    .filter((key) => modifiers[key as WidgetModifiers])
    .join(" ");

  return (
    <div className="flex flex-col items-left mt-4 border-4 border-black p-5">
      <EditableLabel
        htmlFor={id}
        name={pName}
        removeCb={() => setIsRemoved(true)}
      >
        <div className="flex gap-2">
          <BasicButton
            onClick={() => toggleModifier(WidgetModifiers.FontBold)}
            className={
              modifiers[WidgetModifiers.FontBold] ? "bg-forest text-white" : ""
            }
          >
            <BoldIcon />
          </BasicButton>
          <BasicButton
            onClick={() => chooseAlignment(WidgetModifiers.TextLeft)}
            className={
              modifiers[WidgetModifiers.TextLeft] ? "bg-forest text-white" : ""
            }
          >
            <LeftAlign />
          </BasicButton>
          <BasicButton
            onClick={() => chooseAlignment(WidgetModifiers.TextCenter)}
            className={
              modifiers[WidgetModifiers.TextCenter]
                ? "bg-forest text-white"
                : ""
            }
          >
            <CenterAlign />
          </BasicButton>
          {
            <BasicButton
              onClick={() => chooseAlignment(WidgetModifiers.TextRight)}
              className={
                modifiers[WidgetModifiers.TextRight]
                  ? "bg-forest text-white"
                  : ""
              }
            >
              <RightAlign />
            </BasicButton>
          }
        </div>
      </EditableLabel>
      <textarea
        id={id}
        name={`${nodeType}$${id}`}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
        className={`${pClass} ${activeModifiers} py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full h-[300px]`}
      />
      <input
        type="hidden"
        name={`${nodeType}-modifiers$${id}`}
        value={activeModifiers}
      />
      <FieldError id={error_id} message="This field cannot be empty." />
    </div>
  );
};

export default PageParagraphEditable;
