"use client";
import React, { useState, useEffect } from "react";

export default function VercelDeploymentEvents({
  id,
  setDeploymentDone,
  setError,
}: {
  id: string;
  setDeploymentDone: () => void;
  setError: () => void;
}) {
  const [text, setText] = useState<
    { created: number; id: string; text: string }[]
  >([]);

  useEffect(() => {
    const check = async () => {
      const cd = await fetch(`/admin/getDeployment?id=${id}`);
      const d = await cd.json();

      const l = await fetch(`/admin/getDeploymentEvents?id=${id}`);
      const logs = await l.json();

      setText(logs.reverse());

      if (d.readyState === "READY" && d.readySubstate === "PROMOTED") {
        setDeploymentDone();
      } else if (d.readyState === "ERROR") {
        setError();
      } else {
        setTimeout(check, 5000);
      }
    };
    setTimeout(check, 1000);
  }, [id, setDeploymentDone]);

  return (
    <div className="overflow-y-scroll h-[300px] whitespace-pre-wrap break-all text-left text-sm flex flex-col-reverse border-2 border-dashed border-fores p-5">
      {text.map((m) => (
        <div key={m.id} className="flex flex-row my-2">
          <p className="mr-5">{new Date(m.created).toLocaleTimeString()}</p>
          <p>{m.text}</p>
        </div>
      ))}
    </div>
  );
}
