import { Image } from "@/components/shared/blocks";

function Label() {
  return (
    <div
      className="bg-[rgba(209,159,67,0.2)] content-stretch flex items-center 
      justify-center px-[16px] py-[6px] relative shrink-0 w-fit"
      data-name="Label"
    >
      <p
        className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal 
      leading-[normal] relative shrink-0 text-[#1b1b1b] text-[9px]  tracking-[2.16px] uppercase"
      >
        case study
      </p>
    </div>
  );
}

function Button() {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative 
      shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
      data-name="Button"
    >
      <p className="font-neue-montreal leading-[normal] not-italic relative shrink-0 text-[#d19f43] text-[16px] ">
        View full case study
      </p>
      <div className="h-0 relative shrink-0 w-[21px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 21 1"
          >
            <line
              id="Line 1"
              stroke="var(--stroke-0, #D19F43)"
              strokeLinecap="round"
              x1="0.5"
              x2="20.5"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[20px] grow h-full
       items-start justify-center  relative shrink-0"
      data-name="Content"
    >
      <Label />
      <p
        className="font-neue-montreal leading-[normal] w-full 
      not-italic relative shrink-0 text-[#074a28] text-[33px]"
      >
        Creating a Single Source of Truth for a Leading Gas Trader
      </p>
      <p
        className="font-neue-montreal leading-[26px] w-full not-italic 
      relative shrink-0 text-[#444] text-[18px]"
      >
        A prominent Nigerian gas trading company was drowning in data chaos.
        Their trading operations spanned 12 different spreadsheets and legacy
        systems. Daily position reporting—something that should take
        minutes—consumed 48 hours of manual reconciliation.
      </p>
      <Button />
    </div>
  );
}

export default function FeaturedCaseStudy() {
  return (
    <section className="relative w-full">
      <div
        className="container content-stretch flex flex-col-reverse md:flex-row
         gap-[64px] items-center relative shrink-0 w-full pb-[24px]"
        data-name="Row"
      >
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <Content />
        </div>
        <div
          className="h-[300px] md:h-[424px] relative shrink-0 w-full md:w-[636px]"
          data-name="Image"
        >
          <Image />
        </div>
      </div>
    </section>
  );
}
