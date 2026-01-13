import { imgPlaceholder } from "@/assets/images";
import svgPaths from "@/assets/svg-paths";

function Tick() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tick-01">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="tick-01">
          <path
            d={svgPaths.p1151e740}
            id="Vector"
            stroke="var(--stroke-0, #074A28)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Item({ text }: { text: string }) {
  return (
    <div
      className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full"
      data-name="Item"
    >
      <Tick />
      <p className="basis-0 font-neue-montreal grow leading-[1.5]  not-italic relative shrink-0 text-[#444] text-[16px]">
        {text}
      </p>
    </div>
  );
}

export default function BenefitsSection() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[1440px] mx-auto px-[20px] md:px-[120px] py-[60px]"
      data-name="Container"
    >
      <div
        className="content-stretch flex flex-col md:flex-row gap-[64px] items-center relative shrink-0 w-full"
        data-name="Row"
      >
        <div
          className="h-[320px] md:h-[426px] relative shrink-0 w-full md:w-[569px]"
          data-name="Image"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rounded-md"
            src={imgPlaceholder}
          />
        </div>
        <div
          className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center  relative shrink-0"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <p className="font-neue-montreal leading-[1.5] not-italic relative shrink-0 text-[#074a28] text-[40px] ">
              What You Will Get
            </p>
            <div
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
              data-name="What you gain"
            >
              <div
                className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                data-name="Items"
              >
                <Item text="Connect trading, finance, logistics, risk, and compliance systems. We make disparate platforms work together seamlessly." />
                <Item text="Bring teams along, not just technology. We manage organizational change ensuring adoption, not resistance." />
                <Item text="Best-of-breed solutions without vendor lock-in. We work with leading platforms while maintaining your independence and flexibility." />
                <Item text="Honest timelines and transparent budgets. We deliver what we promise without inflated estimates or surprise costs." />
                <Item text="Your team learns as we build. By project completion, you operate and evolve systems independently." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
