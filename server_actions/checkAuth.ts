"use server";

import { COOKIES_ADMIN_TOKEN } from "@/constants/cookies";
import { cookies } from "next/headers";

// TODO: https://medium.com/@tony.infisical/guide-to-nodes-crypto-module-for-encryption-decryption-65c077176980

export default async function checkAuth() {
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  if (!ADMIN_PASSWORD) {
    throw new Error("incorrect setup");
  }

  try {
    const auth = await cookies().get(COOKIES_ADMIN_TOKEN);

    if (!auth || !auth.value) {
      return false;
    }

    return auth.value === ADMIN_PASSWORD;
  } catch (e) {
    console.error("checkAuth method failing");
  }
  return false;
}
