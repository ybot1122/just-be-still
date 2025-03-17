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
import QuillEditor from "../QuillEditor";
import Quill from "quill";

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
  const pName = `${isAccent ? "Accent " : ""} Paragraph`;
  const nodeType = isAccent ? WidgetType.AccentParagraph : WidgetType.Paragraph;

  const onChange = useCallback((quill: Quill) => {
    const html = (quill.getSemanticHTML() || "")
      .trim()
      .replace(/&nbsp;/gi, " ");

    setValue(html);
  }, []);

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

  return (
    <div className="flex flex-col items-left mt-4 border-4 border-black p-5">
      <EditableLabel
        htmlFor={id}
        name={pName}
        removeCb={() => setIsRemoved(true)}
      />
      <input
        type="hidden"
        name={`${nodeType}$${id}`}
        className="text-right"
        value={value}
      />
      <QuillEditor onChange={onChange} initialVal={widget.content} />
      <FieldError id={error_id} message="This field cannot be empty." />
    </div>
  );
};

export default PageParagraphEditable;
