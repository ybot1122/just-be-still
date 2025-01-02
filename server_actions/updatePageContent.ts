"use server";

import { getRepositoryContent } from "@ybot1122/toby-ui/Sdk/GitHub/getRepositoryContent";
import { putRepositoryContent } from "@ybot1122/toby-ui/Sdk/GitHub/putRepositoryContent";
import checkAuth from "./checkAuth";

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
  const content = btoa(newContent);

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

    return true;
  } catch (error) {
    throw new Error("An error occurred while updating the page");
  }
}
