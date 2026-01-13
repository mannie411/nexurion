import React, { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { FilterSection, ResourcesGrid } from "@/components/pages/insights";

export const Route = createFileRoute("/insights/")({
  component: RouteComponent,
});

export function RouteComponent() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedType, setSelectedType] = React.useState("All Types");
  const [selectedCategory, setSelectedCategory] =
    React.useState("All Categories");

  return (
    <Fragment>
      <FilterSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ResourcesGrid
        searchQuery={searchQuery}
        selectedType={selectedType}
        selectedCategory={selectedCategory}
      />
    </Fragment>
  );
}
