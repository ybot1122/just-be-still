"use client";

import React from "react";
import VercelDeploymentEvents from "./VercelDeploymentEvents";
import { Loader } from "@/components/Loader";
import BasicButton from "@/components/admin/BasicButton";
import FieldError from "@/components/admin/FieldError";

const ChangesSubmitted: React.FC = () => {
  const [deploymentId, setDeploymentId] = React.useState(null);
  const [deploymentDone, setDeploymentDone] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/admin/listDeployments");
      const result = await response.json();

      // @todo NOTE we are not checking this deployment was triggered
      // specifically by this publish. That should be implemented.

      setDeploymentId(result.deployments[0].uid);
    };

    setTimeout(fetchData, 5000);
  }, []);

  const color = deploymentDone ? "text-green-500" : "";

  return (
    <div className="p-5 text-center">
      <h1 className={`${color} font-bold`}>
        Changes {deploymentDone ? "Deployed" : "Deploying..."}
      </h1>
      <p>Your changes are currently being deployed.</p>
      <p>This usually takes about 30-60 seconds.</p>
      <p className="my-10">You can close this screen if you want.</p>

      <div className="mb-10">
        {deploymentDone ? (
          <>
            <p className="text-green-500 font-bold">Done!</p>
            <p>
              <BasicButton onClick={() => window.location.reload()}>
                Return to Dashboard
              </BasicButton>
            </p>
          </>
        ) : error ? (
          <div className="text-red-500 font-bold">
            The deployment failed. Please contact web admin.
          </div>
        ) : (
          <Loader color="#000" width={50} />
        )}
      </div>

      {deploymentId ? (
        <VercelDeploymentEvents
          id={deploymentId}
          setDeploymentDone={() => setDeploymentDone(true)}
          setError={() => setError(true)}
        />
      ) : null}
    </div>
  );
};

export default ChangesSubmitted;
