"use client";
import { Loader } from "@/components/Loader";
import React, { useState, useEffect } from "react";

const regex = /"(text)":"((\\"|[^"])*)"/g;

export default function VercelDeploymentEvents({ id }: { id: string }) {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const fetchStream = async () => {
      const response = await fetch(`/admin/getDeploymentEvents?id=${id}`);
      const reader = response.body?.getReader();

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            console.log(done);
            // TODO: done never seems to be true?
            setDone(true);
            break;
          }
          const next = new TextDecoder().decode(value);
          setText((prev) => prev + next);
        }
      }
    };

    fetchStream();
  }, [setDone]);

  const matches = Array.from(text.matchAll(regex))
    .map((match) => match[2])
    .reverse();

  return (
    <>
      <div className="mb-10">
        {done ? "Done" : <Loader color="#000" width={50} />}
      </div>
      <div className="overflow-y-scroll h-[300px] whitespace-pre-wrap break-all text-left text-sm flex flex-col-reverse">
        {matches.map((m, ind) => (
          <p className="my-2" key={ind}>
            {m}
          </p>
        ))}
      </div>
    </>
  );
}
