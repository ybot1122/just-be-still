"use server";

import { getRepositoryContent } from "@ybot1122/toby-ui/Sdk/GitHub/getRepositoryContent";
import { putRepositoryContent } from "@ybot1122/toby-ui/Sdk/GitHub/putRepositoryContent";
import checkAuth from "./checkAuth";
import fs from "node:fs";

export async function updatePageContent(
  pageId: string,
  newContent: string,
): Promise<boolean> {
  const token = process.env.GITHUB_PAT;
  const isAuthed = await checkAuth();

  if (!isAuthed) {
    throw new Error("Not authenticated");
  }

  if (!token) {
    throw new Error("GitHub credentials are not set");
  }

  const owner = "ybot1122";
  const repo = "just-be-still";
  const path = `content/${pageId}.json`;
  const commitMessage = `Update ${pageId} content`;
  const content = bytesToBase64(new TextEncoder().encode(newContent));

  try {
    const data = await getRepositoryContent({
      token,
      owner,
      repo,
      path,
    });

    const sha = data.sha;

    if (!sha) {
      throw new Error("Tried to update a file that does not exist");
    }

    const response = await putRepositoryContent({
      token,
      owner,
      repo,
      path,
      commitMessage,
      content,
      sha,
    });

    if (process.env.NODE_ENV === "development") {
      // in development mode, save changes to filesystem locally
      try {
        await new Promise<void>((resolve) =>
          setTimeout(async () => {
            await fs.writeFileSync(
              `./content/test.json`,
              new TextDecoder().decode(base64ToBytes(content)),
            );
            resolve();
          }, 2000),
        );
      } catch (err) {
        throw new Error("An error occurred while updating the page locally");
      }
    } else {
      const response = await putRepositoryContent({
        token,
        owner,
        repo,
        path,
        commitMessage,
        content,
        sha,
      });
      if (response.commit) {
        return true;
      }
    }

    throw new Error("?");
  } catch (error) {
    throw new Error("An error occurred while updating the page");
  }
}

function base64ToBytes(base64: string) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0) ?? 0);
}

function bytesToBase64(bytes: Uint8Array): string {
  const binString = Array.from(bytes, (byte) =>
    String.fromCodePoint(byte),
  ).join("");
  return btoa(binString);
}
