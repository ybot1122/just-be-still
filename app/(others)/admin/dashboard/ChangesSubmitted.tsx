"use client";

import React from "react";
import VercelDeploymentEvents from "./VercelDeploymentEvents";
import { Loader } from "@/components/Loader";

const ChangesSubmitted: React.FC = () => {
  const [deploymentId, setDeploymentId] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/admin/listDeployments");
      const result = await response.json();
      setDeploymentId(result.deployments[0].uid);
    };

    fetchData();
  }, []);

  if (!deploymentId) {
    return <Loader color="#000" width={50} />;
  }

  return (
    <div className="p-5 text-center">
      <h1 className="text-green-500 font-bold">Changes Submitted</h1>
      <p>
        Your changes have been successfully submitted and are currently being
        deployed.
      </p>
      <p>This usually takes about 30-60 seconds.</p>
      <p className="mb-10">You can close this screen if you want.</p>
      <VercelDeploymentEvents id={deploymentId} />
    </div>
  );
};

export default ChangesSubmitted;
