import checkAuth from "@/server_actions/checkAuth";

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

  const r = await fetch(`https://api.vercel.com/v13/deployments/${id}`, {
    headers: {
      Authorization: `Bearer ${VERCEL_AT}`,
    },
    method: "get",
  });

  const data = await r.json();

  return new Response(JSON.stringify(data), { status: 200 });
}
