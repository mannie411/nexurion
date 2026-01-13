import { Fragment } from "react";
import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";
import { NotFoundSection } from "@/components/shared/blocks";
import { DefaultLayout } from "@/components/shared/layouts";

export const Route = createRootRoute({
  component: () => (
    <Fragment>
      <HeadContent />
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    </Fragment>
  ),
  notFoundComponent: NotFoundSection,
});
