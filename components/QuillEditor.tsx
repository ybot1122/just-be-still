"use client";

import React, {
  useRef,
  useEffect,
  MutableRefObject,
  ReactElement,
} from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { IDom, stringify } from "html-parse-string";
import { ToolbarConfig, ToolbarProps } from "quill/modules/toolbar";

interface QuillEditorProps {
  initialVal?: IDom[];
  placeholder?: string;
  inputName: string;
  onChange?: (quill: Quill) => void;
  height?: string;
  SubmitButton?: (quill: MutableRefObject<Quill | undefined>) => ReactElement;
}

const QuillEditor: React.FC<QuillEditorProps> = ({
  height = "200px",
  initialVal,
  inputName,
  placeholder,
  onChange,
  SubmitButton,
}) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const quillRef = useRef<Quill>(undefined);

  const toolbarOptions: ToolbarConfig = [];
  const formattingOptions = [];

  formattingOptions.push("bold");
  formattingOptions.push("italic");
  formattingOptions.push("underline");
  toolbarOptions.push(formattingOptions);
  toolbarOptions.push(["link"]);

  toolbarOptions.push([{ size: ["small", "normal", "large", "huge"] }]);
  toolbarOptions.push([
    { align: "left" },
    { align: "center" },
    { align: "right" },
    { align: "" },
  ]);
  toolbarOptions.push([{ list: "ordered" }, { list: "bullet" }]);

  const quill_options: Record<string, unknown> = {
    theme: "snow",
    modules: {
      toolbar: toolbarOptions,
    },
  };

  if (placeholder) {
    quill_options["placeholder"] = placeholder;
  }

  // KNOWN BUG: if onChange prop changes, Qulll callback will not be updated.
  useEffect(() => {
    if (editorRef.current) {
      if (!quillRef.current) {
        if (initialVal) {
          editorRef.current!.innerHTML = stringify(initialVal);
        }
        quillRef.current = new Quill(editorRef.current, quill_options);
      }
      quillRef.current.on("text-change", (delta, oldDelta, source) => {
        onChange?.(quillRef.current!);
      });
    }
  }, []);

  return (
    <div className="">
      <div ref={editorRef} style={{ height }}></div>
      {SubmitButton && SubmitButton(quillRef)}
    </div>
  );
};

export default QuillEditor;
