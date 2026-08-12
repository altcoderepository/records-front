import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Container } from "./layouts";
import { About, Admin, Home } from "@pages";

const rootRoute = createRootRoute({
  component: () => (
    <Container>
      <Outlet />
      <TanStackRouterDevtools />
    </Container>
  ),
});

export const routes = [
  {
    path: "/",
    label: "Home",
    component: Home,
  },
  {
    path: "/about",
    label: "About",
    component: About,
  },
  {
    path: "/admin",
    label: "Admin",
    component: Admin,
  },
];

const routeTree = rootRoute.addChildren(
  routes.map(({ path, component }) =>
    createRoute({
      getParentRoute: () => rootRoute,
      path,
      component,
    }),
  ),
);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
