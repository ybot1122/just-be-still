"use server";

import { CLOUDINARY_CLOUD_NAME } from "@/constants/cloudinary";

type CloudinaryResource = {
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
  const CLOUDINARY_KEY = process.env.CLOUDINARY_KEY;
  const CLOUDINARY_SECRET = process.env.CLOUDINARY_SECRET;
  const URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/resources/image`;

  const result: CloudinaryResource[] = [];

  try {
    const response = await fetch(URL, {
      headers: {
        Authorization: `Basic ${btoa(CLOUDINARY_KEY + ":" + CLOUDINARY_SECRET)}`,
      },
    });
    const data = await response.json();

    for (let i = 0; i < data.resources.length; i++) {
      const resource = data.resources[i];
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
