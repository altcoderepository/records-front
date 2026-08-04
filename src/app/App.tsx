import { RouterProvider } from "@tanstack/react-router";

import { router } from "./routing";

export const App = () => {
  return <RouterProvider router={router} />;
};
