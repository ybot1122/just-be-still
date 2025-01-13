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

  useEffect(() => {
    const check = async () => {
      const cd = await fetch(`/admin/getDeployment?id=${id}`);
      const d = await cd.json();

      const l = await fetch(`/admin/getDeployment?id=${id}`);
      const logs = await l.json();

      console.log(logs);
      console.log(d.readyState, d.readySubstate);

      if (d.readyState === "READY" && d.readySubstate === "PROMOTED") {
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
