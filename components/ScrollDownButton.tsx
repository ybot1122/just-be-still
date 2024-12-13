"use client";

import { useCallback } from "react";

export default function ({ children }: { children: React.ReactNode }) {
  const onClick = useCallback(() => {
    window.scrollBy({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  return (
    <button onClick={onClick} className="underline cursor-pointer">
      {children}
    </button>
  );
}
