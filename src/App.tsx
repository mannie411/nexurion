import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({
  routeTree,
  scrollToTopSelectors: ["#scroll-to-top"],
  scrollRestoration: true,
});

export default function App() {
  return <RouterProvider router={router} />;
}
