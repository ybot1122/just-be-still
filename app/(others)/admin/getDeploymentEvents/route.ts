import checkAuth from "@/server_actions/checkAuth";

export async function GET(request: Request) {
  const isAuthed = await checkAuth();

  if (!isAuthed) {
    return new Response("Unauthorized", { status: 401 });
  }

  const r = await getDeploymentEvents({
    id: "dpl_B1XKXq2AYm1mLm3JqYuqycNquAnk",
    limit: 10,
    token: process.env.VERCEL_AT || "",
    follow: true,
  });

  return new Response(r.body, { status: 200 });
}

const VERCEL_API_URL = "https://api.vercel.com/v3/deployments";

export async function getDeploymentEvents({
  id,
  token,
  follow: followProp = false,
  limit = -1,
}: {
  id: string;
  token: string;
  follow?: boolean;
  limit?: number;
}): Promise<Response> {
  const follow = followProp ? "&follow=1" : "";
  const response = await fetch(
    `${VERCEL_API_URL}/${id}/events?limit=${limit}${follow}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  return response;
}
