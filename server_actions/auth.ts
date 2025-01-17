"use server";

import { COOKIES_ADMIN_TOKEN, COOKIES_AGE_2_HOURS } from "@/constants/cookies";
import { encryptSymmetric } from "@ybot1122/toby-ui/Lib/encryptSymmetric";
import { cookies } from "next/headers";

export default async function auth(pass: string) {
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
  if (!ADMIN_PASSWORD || !ENCRYPTION_KEY) {
    throw new Error("incorrect setup");
  }

  try {
    if (pass === ADMIN_PASSWORD) {
      const val = encryptSymmetric({ key: ENCRYPTION_KEY, plaintext: pass });

      await (
        await cookies()
      ).set(COOKIES_ADMIN_TOKEN, val, {
        httpOnly: true,
        secure: true,
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
