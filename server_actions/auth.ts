"use server";

import { COOKIES_ADMIN_TOKEN, COOKIES_AGE_2_HOURS } from "@/constants/cookies";
import { encryptSymmetric } from "@/lib/encryptSymmetric";
import { cookies } from "next/headers";

export default async function auth(pass: string) {
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
  if (!ADMIN_PASSWORD || !ENCRYPTION_KEY) {
    throw new Error("incorrect setup");
  }

  try {
    if (pass === ADMIN_PASSWORD) {
      const at = encryptSymmetric(ENCRYPTION_KEY, pass);
      const val = `${at.ciphertext}.${at.tag}.${at.iv}`;

      await (
        await cookies()
      ).set(COOKIES_ADMIN_TOKEN, val, {
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
