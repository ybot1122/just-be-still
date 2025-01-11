"use server";

import { COOKIES_ADMIN_TOKEN } from "@/constants/cookies";
import { decryptSymmetric } from "@/lib/decryptSymmetric";
import { cookies } from "next/headers";

export default async function checkAuth() {
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
  if (!ADMIN_PASSWORD || !ENCRYPTION_KEY) {
    throw new Error("incorrect setup");
  }

  try {
    const auth = await (await cookies()).get(COOKIES_ADMIN_TOKEN);

    if (!auth || !auth.value) {
      return false;
    }

    const parts = auth.value.split(".");
    if (parts.length !== 3) {
      return false;
    }

    const at = decryptSymmetric(ENCRYPTION_KEY, parts[0], parts[1], parts[2]);
    return at === ADMIN_PASSWORD;
  } catch (e) {
    console.error("checkAuth method failing");
  }
  return false;
}
