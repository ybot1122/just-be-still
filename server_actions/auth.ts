"use server";

import { COOKIES_ADMIN_TOKEN, COOKIES_AGE_2_HOURS } from "@/constants/cookies";
import { cookies } from "next/headers";

// TODO: https://medium.com/@tony.infisical/guide-to-nodes-crypto-module-for-encryption-decryption-65c077176980

export default async function auth(pass: string) {
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  if (!ADMIN_PASSWORD) {
    throw new Error("incorrect setup");
  }

  try {
    if (pass === ADMIN_PASSWORD) {
      await cookies().set(COOKIES_ADMIN_TOKEN, pass, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: COOKIES_AGE_2_HOURS,
        path: "/",
      });

      return true;
    }

    return false;
  } catch (e) {
    console.error("auth method failing");
  }
  return false;
}
