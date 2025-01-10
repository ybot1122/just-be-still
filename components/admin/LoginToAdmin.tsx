"use client";

import { useCallback, useRef, useState } from "react";
import PageParagraph from "../PageParagraph";
import BasicButton from "./BasicButton";
import auth from "@/server_actions/auth";
import { useRouter } from "next/navigation";
export default function LoginToAdmin({}: {}) {
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "error" | "loading">("idle");
  const onLogin = useCallback(() => {
    const input = passwordRef?.current?.value;

    if (!input) {
      setStatus("error");
    } else {
      setStatus("loading");
      auth(input).then((result) => {
        if (result) {
          router.push("/admin/dashboard");
        } else {
          setStatus("error");
        }
      });
    }
  }, [setStatus, router]);

  return (
    <PageParagraph as="div">
      <form action={onLogin}>
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            className="p-2 border border-forestDark"
            ref={passwordRef}
          />
        </div>
        <div className="mt-5">
          {status === "loading" ? (
            <span>loading...</span>
          ) : (
            <BasicButton onClick={onLogin}>Login to Admin</BasicButton>
          )}{" "}
          {status === "error" && (
            <p className="text-errorText text-sm">Error Logging In</p>
          )}
        </div>
      </form>
    </PageParagraph>
  );
}
