import { listDeployments } from "@ybot1122/toby-ui/Sdk/Vercel/listDeployments";
import React from "react";

const ChangesSubmitted: React.FC = async () => {
  const data = await listDeployments({
    app: "just-be-still",
    since: Date.now(),
    limit: 10,
    token: process.env.VERCEL_AT || "",
  });

  console.log(data);

  return (
    <div>
      <h1>Changes Submitted</h1>
      <p>Your changes have been successfully submitted.</p>
    </div>
  );
};

export default ChangesSubmitted;
