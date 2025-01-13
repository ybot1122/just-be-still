"use client";

import { useCallback, useRef, useState } from "react";
import PageParagraph from "../PageParagraph";
import BasicButton from "./BasicButton";
import auth from "@/server_actions/auth";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import { Loader } from "../Loader";
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
        <Submit error={status === "error"} />
      </form>
    </PageParagraph>
  );
}

const Submit = ({ error }: { error: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <div className="mt-5">
      {pending ? (
        <Loader color="#000" width={25} />
      ) : (
        <BasicButton type="submit">Login to Admin</BasicButton>
      )}{" "}
      {error ? (
        <p className="text-errorText text-sm">Error Logging In</p>
      ) : null}
    </div>
  );
};
