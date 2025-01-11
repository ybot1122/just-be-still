import { listDeployments } from "@ybot1122/toby-ui/Sdk/Vercel/listDeployments";
import React, { Suspense } from "react";
import VercelDeploymentEvents from "./VercelDeploymentEvents";

const ChangesSubmitted: React.FC = async () => {
  const data = await listDeployments({
    app: "just-be-still",
    since: 100,
    limit: 10,
    token: process.env.VERCEL_AT || "",
  });

  return (
    <div>
      <h1>Changes Submitted</h1>
      <p>Your changes have been successfully submitted.</p>
      <VercelDeploymentEvents />
    </div>
  );
};

export default ChangesSubmitted;
