import React, { ReactElement } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "routers";

function ReactRouterProvider(): ReactElement {
  return <RouterProvider router={router} />;
}

export default ReactRouterProvider;
