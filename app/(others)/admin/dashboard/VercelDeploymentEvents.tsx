"use client";
import React, { useState, useEffect } from "react";
const regex = /"(text)":"((\\"|[^"])*)"/g;

export default function VercelDeploymentEvents({
  id,
  setDeploymentDone,
}: {
  id: string;
  setDeploymentDone: () => void;
}) {
  const [text, setText] = useState("");
  const [stop, setStop] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchStream = async () => {
      const response = await fetch(`/admin/getDeploymentEvents?id=${id}`, {
        signal,
      });
      const reader = response.body?.getReader();

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();

          if (done) {
            setStop(true);
            setDeploymentDone();
            break;
          }
          const next = new TextDecoder().decode(value);
          setText((prev) => prev + next);
        }
      }
    };

    if (!stop) {
      fetchStream();
    }

    () => controller.abort();
  }, [setDeploymentDone, stop]);

  useEffect(() => {
    const check = async () => {
      const cd = await fetch(`/admin/getDeployment?id=${id}`);
      const d = await cd.json();
      console.log(d.readyState, d.readySubstate);

      if (d.readyState === "READY" && d.readySubstate === "PROMOTED") {
        setStop(true);
        setDeploymentDone();
      } else {
        setTimeout(check, 5000);
      }
    };
    setTimeout(check, 5000);
  }, [id, setDeploymentDone]);

  const matches = Array.from(text.matchAll(regex))
    .map((match) => match[2])
    .reverse();

  return (
    <div className="overflow-y-scroll h-[300px] whitespace-pre-wrap break-all text-left text-sm flex flex-col-reverse border-2 border-dashed border-fores p-5">
      {matches.map((m, ind) => (
        <p className="my-2" key={ind}>
          {m}
        </p>
      ))}
    </div>
  );
}
