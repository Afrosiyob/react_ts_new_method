import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Navigate to={"product"} />,
      },
      {
        path: "product",
        element: <div> product </div>,
      },
    ],
  },
]);
