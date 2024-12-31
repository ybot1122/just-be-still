"use server";

import { CLOUDINARY_CLOUD_NAME } from "@/constants/cloudinary";

export async function getCloudinaryImages(folder: string): Promise<any[]> {
  const CLOUDINARY_KEY = process.env.CLOUDINARY_KEY;
  const CLOUDINARY_SECRET = process.env.CLOUDINARY_SECRET;
  const URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/resources`;

  try {
    const response = await fetch(URL, {
      headers: {
        Authorization: `Basic ${btoa(CLOUDINARY_KEY + ":" + CLOUDINARY_SECRET)}`,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    throw error;
  }
}
