import checkAuth from "@/server_actions/checkAuth";
import { getDeployment } from "@ybot1122/toby-ui/Sdk/Vercel/getDeployment";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const params = url.searchParams;
  const id = params.get("id");
  const VERCEL_AT = process.env.VERCEL_AT;

  if (!id || !VERCEL_AT) {
    return new Response("Bad Request", { status: 400 });
  }

  const isAuthed = await checkAuth();

  if (!isAuthed) {
    return new Response("Unauthorized", { status: 401 });
  }

  const data = await getDeployment({
    id,
    token: VERCEL_AT,
  });

  return new Response(JSON.stringify(data), { status: 200 });
}
