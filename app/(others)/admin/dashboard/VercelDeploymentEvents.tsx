"use client";
import React, { useState, useEffect } from "react";

const regex = /"(text)":"((\\"|[^"])*)"/i;

export default function VercelDeploymentEvents({ id }: { id: string }) {
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchStream = async () => {
      const response = await fetch(`/admin/getDeploymentEvents?id=${id}`);
      const reader = response.body?.getReader();

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const next = new TextDecoder().decode(value);
          setText((prev) => prev + next);
        }
      }
    };

    const matchRegex = () => {
      const matches = text.match(regex);
      if (matches) {
        console.log("Matched values:", matches);
      }
    };

    matchRegex();

    fetchStream();
  }, []);

  return (
    <div className="overflow-y-scroll h-[300px] whitespace-pre-wrap break-all">
      {text}
    </div>
  );
}
