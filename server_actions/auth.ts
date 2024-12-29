"use server";

export default function auth(pass: string) {
  return pass === process.env.ADMIN_PASSWORD;
}
