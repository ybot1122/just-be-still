"use server";

import { CLOUDINARY_CLOUD_NAME } from "@/constants/cloudinary";
import checkAuth from "./checkAuth";
import { getCloudinaryImages as get } from "@ybot1122/toby-ui/Sdk/Cloudinary/getCloudinaryImages";

export type CloudinaryResource = {
  asset_id: string;
  public_id: string;
  resource_type: string;
  format: string;
  folder: string;
  url: string;
  secure_url: string;
};

export async function getCloudinaryImages(
  folder: string,
): Promise<CloudinaryResource[]> {
  if (!(await checkAuth())) {
    throw new Error("Not authorized");
  }

  const CLOUDINARY_KEY = process.env.CLOUDINARY_KEY;
  const CLOUDINARY_SECRET = process.env.CLOUDINARY_SECRET;

  if (!CLOUDINARY_KEY || !CLOUDINARY_SECRET) {
    throw new Error("Cloudinary credentials not set");
  }

  const result: CloudinaryResource[] = [];

  try {
    const data = await get(
      CLOUDINARY_CLOUD_NAME,
      CLOUDINARY_KEY,
      CLOUDINARY_SECRET,
    );
    for (let i = 0; i < data.length; i++) {
      const resource = data[i];
      if (resource.folder.includes(folder)) {
        result.push(resource);
      }
    }
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    throw error;
  }
  return result;
}
