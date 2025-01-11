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
    <div className="p-5 text-center">
      <h1 className="text-green-500 font-bold">Changes Submitted</h1>
      <p>
        Your changes have been successfully submitted and are currently being
        deployed.
      </p>
      <p>This usually takes about 30-60 seconds.</p>
      <p className="mb-10">You can close this screen if you want.</p>
      <VercelDeploymentEvents id={data.deployments[0].uid} />
    </div>
  );
};

export default ChangesSubmitted;
