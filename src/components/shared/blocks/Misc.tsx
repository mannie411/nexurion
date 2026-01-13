import { imgCollab } from "@/assets/images";
import { IonGroup, Openlink } from "./Icons";
import svgPaths, {
  imgGroup,
  imgGroup1,
  imgGroup2,
  imgGroup3,
} from "@/assets/svg-paths";
import { Image } from "./Image";
import type { Testimonial } from "@/types";
import { FilledButton } from "./Button";

interface StatItemProps {
  value: string;
  label: string;
}

function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="content-stretch flex flex-col font-neue-montreal gap-[8px] items-start leading-[normal] not-italic relative  ">
      <p className="relative  text-[#444] text-[48px] md:text-[64px]">
        {value}
      </p>
      <p className="relative  text-[#4c5752] text-[14px] md:text-[16px]">
        {label}
      </p>
    </div>
  );
}

function QuoteMark() {
  return (
    <div
      className="absolute h-[116px] left-[calc(50%+0.5px)] overflow-clip top-[-17px] translate-x-[-50%] w-[135px]"
      data-name="Quote mark 1"
    >
      <div
        className="absolute contents inset-[0_0.86%_1.04%_0.11%]"
        data-name="Clip path group"
      >
        <div
          className="absolute contents inset-[0_0.3%_0.87%_0]"
          data-name="Group"
        >
          <div
            className="absolute contents inset-[0_0.3%_0.87%_0]"
            data-name="Group"
          >
            <div
              className="absolute contents inset-[0_0.3%_0.87%_0]"
              data-name="Clip path group"
            >
              <div
                className="absolute contents inset-[0.25%_0.86%_1.04%_0.19%]"
                data-name="Group"
              >
                <div
                  className="absolute contents inset-[0.25%_0.86%_1.04%_52.25%]"
                  data-name="Clip path group"
                >
                  <div
                    className="[mask-clip:no-clip,_no-clip,_no-clip] [mask-composite:intersect,_intersect,_intersect] [mask-mode:alpha,_alpha,_alpha] [mask-repeat:no-repeat,_no-repeat,_no-repeat] absolute inset-[0.69%_0.79%_0.8%_52.34%] mask-role-[-70.506px,_-70.655px,_-0.114px_-0.804px,_-0.804px,_-0.51px] mask-size-[133.692px_114.792px,_134.595px_114.988px,_63.3px_114.498px]"
                    data-name="Group"
                    style={{
                      maskImage: `url('${imgGroup}'), url('${imgGroup1}'), url('${imgGroup2}')`,
                    }}
                  >
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 63.2845 114.265"
                    >
                      <g id="Group">
                        <path
                          d={svgPaths.p2c26a900}
                          fill="var(--fill-0, #E1F4E9)"
                          fillOpacity="0.6"
                          id="Vector"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div
                  className="absolute contents inset-[0.25%_52.55%_1.04%_0.19%]"
                  data-name="Clip path group"
                >
                  <div
                    className="[mask-clip:no-clip,_no-clip,_no-clip] [mask-composite:intersect,_intersect,_intersect] [mask-mode:alpha,_alpha,_alpha] [mask-repeat:no-repeat,_no-repeat,_no-repeat] absolute inset-[0.69%_52.92%_0.8%_0.21%] mask-role-[-0.13px,_-0.279px,_-0.016px_-0.804px,_-0.804px,_-0.51px] mask-size-[133.692px_114.792px,_134.595px_114.988px,_63.791px_114.498px]"
                    data-name="Group"
                    style={{
                      maskImage: `url('${imgGroup}'), url('${imgGroup1}'), url('${imgGroup3}')`,
                    }}
                  >
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 63.2844 114.265"
                    >
                      <g id="Group">
                        <path
                          d={svgPaths.pb808500}
                          fill="var(--fill-0, #E1F4E9)"
                          fillOpacity="0.6"
                          id="Vector"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialSection({ name, content, role }: Testimonial) {
  return (
    <div
      className="content-stretch flex flex-col items-start relative  w-full"
      data-name="Client Testimony"
    >
      <div
        className="bg-[#f4fbf7] content-stretch flex flex-col items-start px-[20px] md:px-[120px] py-[60px] relative  w-full"
        data-name="Container"
      >
        <div
          className="content-stretch flex flex-col items-center relative  w-full max-w-[1440px] mx-auto"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col gap-[32px] items-center relative  w-full">
            <p className="font-neue-montreal leading-[1.5] not-italic relative  text-[#0c6639] text-[32px] md:text-[48px] text-center w-full">
              Client Testimony
            </p>
            <div className="content-stretch flex flex-col gap-[48px] items-center relative  w-full">
              <QuoteMark />
              <p className="font-neue-montreal leading-[1.5] not-italic relative  text-[#042a17] text-[20px] md:text-[24px] text-center w-full md:w-[792px]">
                "{content}"
              </p>
              <div className="content-stretch flex flex-col gap-[14px] items-center justify-center relative  w-full md:w-[316px]">
                <div className="content-stretch flex flex-col font-neue-montreal gap-[6px] items-center justify-center leading-[normal] not-italic relative  text-center ">
                  <p className="relative  text-[#074a28] text-[18px]">{name}</p>
                  <p className="relative  text-[#042a17] text-[13px]">{role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="relative bg-[#f4fbf7]">
      <div
        className="relative container content-stretch flex flex-col items-center j
      ustify-center  py-[60px] "
        data-name="Numbers"
      >
        <div
          className="content-stretch flex flex-col md:flex-row gap-[64px] items-center 
        justify-between relative  w-full max-w-[1200px]"
        >
          <div
            className="content-stretch flex flex-wrap gap-[40px] md:gap-[64px] items-center 
          justify-center relative "
          >
            <StatItem value="67%" label="Faster reconciliation" />
            <StatItem value="$2M+" label="Client savings annually" />
            <StatItem value="24/7" label="Security monitoring" />
          </div>

          <div
            className="content-stretch flex flex-col font-neue-montreal gap-[8px] items-start
           leading-[normal] not-italic relative "
          >
            <p
              className="min-w-full relative  text-[#0c6639] text-[13px] tracking-[2.6px] 
            uppercase w-[min-content]"
            >
              our impact By the numbers
            </p>
            <p className="relative  text-[#444] text-[32px] md:text-[48px] w-full md:w-[460px]">
              We Measure Success by Your Growth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col font-neue-montreal gap-[8px] items-start">
      <p
        className="leading-[normal]  relative text-[#d19f43] 
      text-[13px] tracking-[2.6px] uppercase w-full"
      >
        Our Partnerships
      </p>
      <p
        className="capitalize leading-[normal] relative text-[#2b2b2b] 
      text-[32px] md:text-[48px] w-full"
      >
        <span>{`Technology you trust, implemented by `}</span>
        <span className="font-test-tiempos-fine italic text-[#0c6639]">
          experts
        </span>
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] 
      items-start not-italic relative  w-full"
      data-name="Title"
    >
      <Title />
      <p
        className="font-neue-montreal md:h-[16px] leading-[normal] 
      relative  text-[#444] text-[13px] w-full md:w-[482px]"
      >
        We move beyond standalone fixes to deliver a cohesive technology
        ecosystem that unifies your trading, risk, and operations.
      </p>
    </div>
  );
}

function PartnerLogos() {
  return (
    <div
      className="content-stretch flex gap-[38px] items-center relative "
      data-name="Partner Logos"
    >
      <div
        className="h-[48px] overflow-clip relative  w-[81.6px]"
        data-name="ION_Group 1"
      >
        <IonGroup />
      </div>
      <div
        className="content-stretch flex gap-[8px] items-start relative "
        data-name="Openlink logo"
      >
        <div className="relative  size-[48px]" data-name="openlink 1">
          <Openlink />
        </div>
        <p
          className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] 
        not-italic relative  text-[#1b1b1b] text-[32px] "
        >
          OpenLink
        </p>
      </div>
    </div>
  );
}

export function PartnerSection() {
  return (
    <section className="relative bg-white">
      <div className="container py-[80px] md:py-[120px] ">
        <div
          className=" content-stretch flex flex-col items-center w-full "
          data-name="Partners"
        >
          <div
            className="content-stretch flex flex-col md:flex-row items-center md:items-start 
          justify-between relative gap-[24px] md:gap-[48px]"
            data-name="Container"
          >
            <div className="content-stretch flex flex-col h-full relative  w-full md:W-[50%]">
              <Image imgSrc={imgCollab} className="h-full grow" />
              {/* <div className="relative content-stretch inset-0 overflow-hidden pointer-events-none w-full">
            </div> */}
            </div>
            <div className="flex-1 content-stretch flex flex-col gap-[32px] items-start relative w-full md:w-[50%]">
              <Heading />
              <div className="content-stretch flex flex-col gap-[32px] items-start relative ">
                <PartnerLogos />
                <FilledButton
                  textColor="#FFFFFF"
                  label=" become a partner"
                  classNames=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pagination({ count, total }: { count: number; total: number }) {
  return (
    <div
      className="content-stretch flex h-[40px] items-center justify-between w-full"
      data-name="Pagination"
    >
      <p
        className="font-['Neue_Montreal:Regular',sans-serif] leading-[normal] not-italic 
      relative text-[#444] text-[16px] text-nowrap"
      >
        1-{count}/{total > 37 ? total : 37}
      </p>
      <div
        className="content-stretch flex gap-[8px] items-center relative shrink-0"
        data-name="Page no"
      >
        <div
          className="bg-[#074a28] overflow-clip relative size-[40px] cursor-pointer"
          data-name="p-num"
        >
          <p className="absolute font-['Neue_Montreal:Regular',sans-serif] leading-[normal] left-[calc(50%-3px)] not-italic text-[16px] text-nowrap text-white top-[calc(50%-9px)]">
            1
          </p>
        </div>
        <div
          className="bg-[#f3f7f4] overflow-clip relative size-[40px] cursor-pointer hover:bg-[#e1f4e9] transition-colors"
          data-name="p-num"
        >
          <p className="absolute font-['Neue_Montreal:Regular',sans-serif] leading-[normal] left-[calc(50%-4px)] not-italic text-[#074a28] text-[16px] text-nowrap top-[calc(50%-9px)]">
            2
          </p>
        </div>
        <div
          className="bg-[#f3f7f4] overflow-clip relative size-[40px] cursor-pointer hover:bg-[#e1f4e9] transition-colors"
          data-name="p-num"
        >
          <p className="absolute font-['Neue_Montreal:Regular',sans-serif] leading-[normal] left-[calc(50%-5px)] not-italic text-[#074a28] text-[16px] text-nowrap top-[calc(50%-9px)]">
            3
          </p>
        </div>
        <div
          className="bg-[#f3f7f4] overflow-clip relative size-[40px] cursor-pointer hover:bg-[#e1f4e9] transition-colors"
          data-name="p-num"
        >
          <p className="absolute font-['Neue_Montreal:Regular',sans-serif] leading-[normal] left-[calc(50%-5px)] not-italic text-[#074a28] text-[16px] text-nowrap top-[calc(50%-9px)]">
            4
          </p>
        </div>
        <div
          className="bg-[#f3f7f4] flex items-center justify-center 
          relative size-[40px] rounded cursor-pointer hover:bg-[#e1f4e9] transition-colors"
          data-name="p-num"
        >
          <div className="size-[24px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
            >
              <path
                d={svgPaths.p92beb00}
                stroke="#074A28"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
