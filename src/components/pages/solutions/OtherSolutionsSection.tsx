import {
  ResourceCard,
  type ResourceCardProps,
} from "@/components/shared/blocks";

function Title() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-center"
      data-name="Title"
    >
      <div className="content-stretch flex flex-col font-neue-montreal gap-[8px] items-start relative shrink-0">
        <p className="leading-[normal] min-w-full relative shrink-0 text-[#d19f43] text-[13px] tracking-[2.6px] uppercase w-full text-center">
          Our other solutions Precision-engineered for you
        </p>
        <p className="leading-[normal] relative shrink-0 text-[32px] md:text-[48px] text-black w-full md:w-[728px] text-center">
          <span>{`We Provide the Integrated Systems Your `}</span>
          <span className="text-[#0c6639]">{`Operations `}</span>
          <span className="font-test-tiempos-fine not-italic text-[#0c6639]">
            Demand
          </span>
        </p>
      </div>
      <p className="font-neue-montreal leading-[24px] relative shrink-0 text-[#444] text-[16px] w-full md:w-[550px] text-center">
        We move beyond standalone fixes to deliver a cohesive technology
        ecosystem that unifies your trading, risk, and operations.
      </p>
    </div>
  );
}

export default function OtherSolutionsSection({
  solutions,
}: {
  solutions: ResourceCardProps[];
}) {
  return (
    <div
      className="content-stretch flex flex-col items-center overflow-clip px-[20px] md:px-[120px] py-[60px] relative shrink-0 w-full max-w-[1440px] mx-auto"
      data-name="Services"
    >
      <div
        className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-full"
        data-name="Container"
      >
        <Title />
        <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
          <div
            className="content-stretch flex flex-col md:flex-row gap-[24px] items-start relative shrink-0 w-full"
            data-name="Cards"
          >
            {solutions.map(({ image, title, description }, idx) => (
              <ResourceCard
                key={`item-${idx}`}
                image={image}
                title={title}
                description={description}
                link={{
                  title: "Learn more",
                  path: "",
                }}
                type={"default"}
              />
            ))}
          </div>
          <div
            className="content-stretch flex flex-col md:flex-row gap-[16px] items-center relative shrink-0"
            data-name="Buttons"
          >
            <div
              className="bg-[#0c6639] content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0 cursor-pointer hover:bg-[#084a29] transition-colors"
              data-name="Button"
            >
              <p className="font-neue-montreal leading-[normal] not-italic relative shrink-0 text-[12px] text-center  text-white tracking-[0.6px] uppercase">
                schedule your consultation
              </p>
            </div>
            <div
              className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0 cursor-pointer group"
              data-name="Button"
            >
              <div
                aria-hidden="true"
                className="absolute border border-[#074a28] border-solid inset-0 pointer-events-none group-hover:bg-[#074a28]/10 transition-colors"
              />
              <p className="font-neue-montreal leading-[normal] not-italic relative shrink-0 text-[#074a28] text-[12px] text-center  tracking-[0.6px] uppercase">
                explore our solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
