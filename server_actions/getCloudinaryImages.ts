"use server";

import { CLOUDINARY_CLOUD_NAME } from "@/constants/cloudinary";

export async function getCloudinaryImages(folder: string): Promise<any[]> {
  const CLOUDINARY_KEY = process.env.CLOUDINARY_KEY;
  const CLOUDINARY_SECRET = process.env.CLOUDINARY_SECRET;
  const URL = `https://${CLOUDINARY_KEY}:${CLOUDINARY_SECRET}@api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/resources`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    throw error;
  }
}
