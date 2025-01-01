"use server";

import { CLOUDINARY_CLOUD_NAME } from "@/constants/cloudinary";
import path from "path";

const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

export async function uploadImageToCloudinary(
  input: FormData,
): Promise<string> {
  const CLOUDINARY_KEY = process.env.CLOUDINARY_KEY;
  const CLOUDINARY_SECRET = process.env.CLOUDINARY_SECRET;

  if (!CLOUDINARY_KEY || !CLOUDINARY_SECRET) {
    throw new Error("Cloudinary credentials not set");
  }

  const imageFile = input.get("file");

  if (!(imageFile instanceof File)) {
    throw new Error("Invalid file");
  }

  const public_id = spinalCase(path.parse(imageFile.name).name);

  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("public_id", public_id);
  formData.append("folder", "just-be-still-design");
  formData.append("api_key", CLOUDINARY_KEY);

  const response = await fetch(CLOUDINARY_URL, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Failed to upload image: ${response.statusText}`);
  }

  const result = await response.json();
  return result.secure_url;
}

function spinalCase(name: string): string {
  return name
    .split(/\s+|_+/) // Split by spaces or underscores
    .join("-") // Join with hyphens
    .toLowerCase(); // Convert to lowercase
}
