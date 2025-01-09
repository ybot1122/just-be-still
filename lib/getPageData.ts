import { Page } from "@/content/content";
import fs from "fs";
import path from "path";

async function getPageData(): Promise<Page> {
  const filePath = path.join(process.cwd(), "content/events.json");
  const jsonData = await fs.promises.readFile(filePath, "utf-8");
  return JSON.parse(jsonData);
}

export default getPageData;
