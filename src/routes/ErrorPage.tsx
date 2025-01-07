import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log("Error Objects: ", error);

  const isInvlidRoute = isRouteErrorResponse(error);
  return (
    <div>
      <h1>Oops.....</h1>
      <p>{isInvlidRoute ? "Invalid Route" : "An error occurred"}</p>
    </div>
  );
}

export default ErrorPage;
