"use server";

import { getRepositoryContent } from "@ybot1122/toby-ui/Sdk/GitHub/getRepositoryContent";
import { putRepositoryContent } from "@ybot1122/toby-ui/Sdk/GitHub/putRepositoryContent";

export async function updatePageContent(
  pageId: string,
  newContent: string,
): Promise<boolean> {
  const token = process.env.GITHUB_PAT;

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

    console.log(data);

    const sha = data.sha;

    if (!sha) {
      throw new Error("Tried to update a file that does not exist");
    }

    console.log(sha);

    const response = await putRepositoryContent({
      token,
      owner,
      repo,
      path,
      commitMessage,
      content,
      sha,
    });

    console.log(response);
    return true;
  } catch (error) {
    throw error;
  }
}
