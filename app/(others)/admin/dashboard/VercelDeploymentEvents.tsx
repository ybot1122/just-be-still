"use client";
import React, { useState, useEffect } from "react";

export default function VercelDeploymentEvents() {
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchStream = async () => {
      const response = await fetch("/admin/getDeploymentEvents");
      const reader = response.body?.getReader();

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          setText((prev) => prev + new TextDecoder().decode(value));
        }
      }
    };

    fetchStream();
  }, []);

  return <div style={{ whiteSpace: "pre-wrap" }}>{text}</div>;
}
