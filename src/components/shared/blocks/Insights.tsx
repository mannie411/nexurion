import { imgPlaceholder } from "@/assets/images";
import { ResourceCard } from "./Cards";

export default function InsightsSection() {
  return (
    <section className="relative w-full bg-white ">
      <div
        className="container content-stretch flex flex-col gap-[48px] items-center overflow-clip 
      py-[45px] md:py-[90px] relative"
        data-name="Services"
      >
        <div
          className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-full"
          data-name="Container"
        >
          <div
            className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0"
            data-name="Title"
          >
            <div className="content-stretch flex flex-col font-neue-montreal gap-[8px] items-center not-italic relative shrink-0 text-center">
              <p className="leading-[normal] min-w-full relative shrink-0 text-[#d19f43] text-[13px] tracking-[2.6px] uppercase w-[min-content]">
                strategic insights
              </p>
              <p className="leading-[normal] relative shrink-0 text-[32px] md:text-[48px] text-black w-full md:w-[515px] text-center">
                <span>Insights That Move Your Business</span>
                <span className="font-test-tiempos-fine not-italic text-[#0c6639]">
                  Forward
                </span>
              </p>
            </div>
          </div>
          <div
            className="relative w-full content-stretch flex flex-col md:flex-row gap-[24px]"
            data-name="Cards"
          >
            <ResourceCard
              image={imgPlaceholder}
              label="Implementation Guide"
              title="The ETRM Evaluation Framework"
              link={{
                title: "",
                path: "",
              }}
              type="download"
            />
            <ResourceCard
              image={imgPlaceholder}
              label="Implementation Guide"
              title="Knowledge Transfer Playbook"
              link={{
                title: "",
                path: "",
              }}
              type="download"
            />
            <ResourceCard
              image={imgPlaceholder}
              label="Industry Insights"
              title="African Energy Markets Regulatory Update 2025"
              link={{
                title: "View full case study",
                path: "",
              }}
              type="default"
            />
          </div>
        </div>
        <div
          className="content-stretch flex gap-[15.953px] items-center relative shrink-0"
          data-name="Buttons"
        >
          <div
            className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0 w-[275px] cursor-pointer group"
            data-name="Button"
          >
            <div
              aria-hidden="true"
              className="absolute border border-[#074a28] border-solid inset-0 pointer-events-none group-hover:bg-[#074a28]/10 transition-colors"
            />
            <p className="font-neue-montreal leading-[normal] not-italic relative shrink-0 text-[#074a28] text-[12px] text-center  tracking-[0.6px] uppercase">
              view all resources
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
