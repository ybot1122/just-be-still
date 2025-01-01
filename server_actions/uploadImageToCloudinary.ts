"use server";

import { CLOUDINARY_CLOUD_NAME } from "@/constants/cloudinary";
import path from "path";
import checkAuth from "./checkAuth";
import { uploadImage } from "@ybot1122/toby-ui/Sdk/Cloudinary/uploadImage";
import { CloudinaryResource } from "./getCloudinaryImages";

export async function uploadImageToCloudinary(
  input: FormData,
): Promise<CloudinaryResource> {
  if (!(await checkAuth())) {
    throw new Error("Not authorized");
  }

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

  const result = await uploadImage({
    cloudinary_key: CLOUDINARY_KEY,
    cloudinary_secret: CLOUDINARY_SECRET,
    cloudinary_cloud_name: CLOUDINARY_CLOUD_NAME,
    public_id,
    imageFile,
    upload_preset: "u4kwvaih",
    folder: "just-be-still-design",
  });

  return result;
}

function spinalCase(name: string): string {
  return name
    .split(/\s+|_+/) // Split by spaces or underscores
    .join("-") // Join with hyphens
    .toLowerCase(); // Convert to lowercase
}
