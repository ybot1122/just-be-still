"use client";

import React from "react";
import VercelDeploymentEvents from "./VercelDeploymentEvents";
import { Loader } from "@/components/Loader";
import BasicButton from "@/components/admin/BasicButton";

const ChangesSubmitted: React.FC = () => {
  const [deploymentId, setDeploymentId] = React.useState(null);
  const [deploymentDone, setDeploymentDone] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/admin/listDeployments");
      const result = await response.json();

      const status = result.deployments[0].readyState;

      if (status === "READY") {
        setTimeout(fetchData, 5000);
      } else {
        setDeploymentId(result.deployments[0].uid);
      }
    };

    fetchData();
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
        ) : (
          <Loader color="#000" width={50} />
        )}
      </div>

      {deploymentId && !deploymentDone ? (
        <VercelDeploymentEvents
          id={deploymentId}
          setDeploymentDone={() => setDeploymentDone(true)}
        />
      ) : null}
    </div>
  );
};

export default ChangesSubmitted;
