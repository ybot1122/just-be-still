import checkAuth from "@/server_actions/checkAuth";
import { listDeployments } from "@ybot1122/toby-ui/Sdk/Vercel/listDeployments";

export async function GET() {
  const VERCEL_AT = process.env.VERCEL_AT;

  if (!VERCEL_AT) {
    return new Response("Bad Request", { status: 400 });
  }

  const isAuthed = await checkAuth();

  if (!isAuthed) {
    return new Response("Unauthorized", { status: 401 });
  }

  const data = await listDeployments({
    app: "just-be-still",
    limit: 1,
    token: process.env.VERCEL_AT || "",
  });

  if (!data || !data.deployments || !data.deployments.length) {
    return new Response("Failed", { status: 404 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}
