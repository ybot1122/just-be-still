"use server";

import { CLOUDINARY_CLOUD_NAME } from "@/constants/cloudinary";
import path from "path";
import crypto from "crypto";

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
  const timestamp = Date.now().toString();
  const upload_preset = "u4kwvaih";
  const folder = "just-be-still-design";
  formData.append("file", imageFile);
  formData.append("public_id", public_id);
  formData.append("folder", folder);
  formData.append("upload_preset", "u4kwvaih");
  formData.append("timestamp", timestamp);
  formData.append(
    "signature",
    generateSignature(
      folder,
      public_id,
      timestamp,
      upload_preset,
      CLOUDINARY_SECRET,
    ),
  );
  formData.append("api_key", CLOUDINARY_KEY);

  const response = await fetch(CLOUDINARY_URL, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Failed to upload image: ${response.statusText}`);
  }

  const result = await response.json();

  if (result.existing) {
    throw new Error("Image with that name already exists");
  }

  return result.secure_url;
}

function spinalCase(name: string): string {
  return name
    .split(/\s+|_+/) // Split by spaces or underscores
    .join("-") // Join with hyphens
    .toLowerCase(); // Convert to lowercase
}

function generateSignature(
  folder: string,
  public_id: string,
  timestamp: string,
  upload_preset: string,
  CLOUDINARY_SECRET: string,
): string {
  const string = `folder=${folder}&public_id=${public_id}&timestamp=${timestamp}&upload_preset=${upload_preset}${CLOUDINARY_SECRET}`;

  return crypto.createHash("sha1").update(string).digest("hex");
}
