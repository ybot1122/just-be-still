import { listDeployments } from "@ybot1122/toby-ui/Sdk/Vercel/listDeployments";
import React from "react";
import VercelDeploymentEvents from "./VercelDeploymentEvents";

const ChangesSubmitted: React.FC = async () => {
  const data = await listDeployments({
    app: "just-be-still",
    since: 100,
    limit: 1,
    token: process.env.VERCEL_AT || "",
  });

  return (
    <div>
      <h1>Changes Submitted</h1>
      <p>Your changes have been successfully submitted.</p>
      <VercelDeploymentEvents id={data.deployments[0].uid} />
    </div>
  );
};

export default ChangesSubmitted;