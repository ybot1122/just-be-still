"use client";

import PageParagraph from "../PageParagraph";
import BasicButton from "./BasicButton";

export default function LoginToAdmin({}: {}) {
  return (
    <PageParagraph as="div">
      <div>
        <input
          type="password"
          placeholder="Enter Password"
          className="p-2 border border-forestDark"
        />
      </div>
      <div className="mt-5">
        <BasicButton onClick={() => {}}>Login to Admin</BasicButton>{" "}
      </div>
    </PageParagraph>
  );
}
