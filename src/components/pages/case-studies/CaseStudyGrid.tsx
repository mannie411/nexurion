import { Pagination, ResourceCard } from "@/components/shared/blocks";

export default function CaseStudyGrid() {
  return (
    <section className="relative w-full">
      <div
        className="container content-stretch flex flex-col items-center  
      relative w-full "
        data-name="Grid"
      >
        <div
          className="content-stretch grid grid-cols-1 md:grid-cols-3 gap-[24px] 
        items-center relative shrink-0 w-full"
        >
          <ResourceCard
            link={{
              title: "View full case study",
              path: "/case-studies/case-1",
            }}
            type={"default"}
            label="case study"
            title={"Securing Trading Infrastructure for a Power Utility"}
            id={undefined}
          />

          <ResourceCard
            link={{
              title: "View full case study",
              path: "/case-studies/case-1",
            }}
            type={"default"}
            label="scenario study"
            title="How We'd Transform: Multi-Country Commodity Trading Integration"
            id={undefined}
          />
          <ResourceCard
            link={{
              title: "View full case study",
              path: "/case-studies/case-1",
            }}
            type={"default"}
            label="scenario study"
            title="How We'd Transform: Crude Oil Trading Operations Modernization"
            id={undefined}
          />

          <ResourceCard
            link={{
              title: "View full case study",
              path: "/case-studies/case-1",
            }}
            type={"default"}
            label="case study"
            title="End-to-End Digital Transformation for a Commodity Trading House"
            id={undefined}
          />
          <ResourceCard
            link={{
              title: "View full case study",
              path: "/case-studies/case-1",
            }}
            type={"default"}
            label="scenario study"
            title="How We'd Transform: Power Trading Cybersecurity Overhaul"
            id={undefined}
          />
          <ResourceCard
            link={{
              title: "View full case study",
              path: "/case-studies/case-1",
            }}
            type={"default"}
            label="case study"
            title="The State of Digital Transformation in African Commodity Trading"
            id={undefined}
          />
        </div>
        <Pagination count={5} total={50} />
      </div>
    </section>
  );
}
