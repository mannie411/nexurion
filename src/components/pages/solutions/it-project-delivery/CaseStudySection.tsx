import { imgPlaceholder } from "@/assets/images";
import svgPaths from "@/assets/svg-paths";

function ArrowIcon({
  color,
  rotate = false,
}: {
  color: string;
  rotate?: boolean;
}) {
  return (
    <div
      className={`relative shrink-0 size-[42px] ${rotate ? "rotate-180" : ""}`}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 42 42"
      >
        <g id="Group 200">
          <circle cx="21" cy="21" id="Ellipse 4" r="20.5" stroke={color} />
          <g id="Arrow - Right">
            <path
              d="M14 21.2214H27"
              id="Stroke 1"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.3"
            />
            <path
              d={svgPaths.p1eb4b000}
              id="Stroke 3"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.3"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Title() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0"
      data-name="Title"
    >
      <div className="content-stretch flex flex-col font-neue-montreal gap-[8px] items-start not-italic relative shrink-0 text-center">
        <p className="leading-[normal] min-w-full relative shrink-0 text-[#d19f43] text-[13px] tracking-[2.6px] uppercase w-[min-content]">
          Our impact
        </p>
        <p className="leading-[normal] relative shrink-0 text-[#2b2b2b] text-[32px] md:text-[48px] w-full md:w-[515px]">
          <span>{`Transforming Africa's Energy`}</span>
          <span className="font-['Neue_Montreal:Bold',sans-serif] not-italic">
            {" "}
          </span>
          <span className="font-test-tiempos-fine not-italic text-[#0c6639]">
            Operations
          </span>
        </p>
      </div>
    </div>
  );
}

function CaseStudyCard() {
  return (
    <div
      className="content-stretch flex flex-col h-auto md:h-[556px] items-start justify-center relative shrink-0 w-full"
      data-name="Cards"
    >
      <div
        className="basis-0 grow min-h-[400px] md: overflow-clip relative shrink-0 w-full"
        data-name="Image"
      >
        <div
          className="absolute h-full md:h-[673px] left-0 top-0 md:top-[-24.06px] w-full"
          data-name="portrait-engineers-work-hours-job-site 1"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgPlaceholder}
          />
        </div>
        {/* Floating card */}
        <div
          className="relative md:absolute bg-white content-stretch flex flex-col h-auto md:h-[443px] items-start justify-center overflow-clip p-[32px] md:p-[64px] right-0 md:right-[80px] top-0 md:top-[calc(50%-0.5px)] md:translate-y-[-50%] w-full md:w-auto m-4 md:m-0 rounded-lg md:rounded-none shadow-lg md:shadow-none"
          data-name="Container"
        >
          <div className="content-stretch flex items-center relative shrink-0">
            <div
              className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full md:w-[525px]"
              data-name="Content"
            >
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <div
                    className="bg-[rgba(209,159,67,0.2)] content-stretch flex items-center justify-center px-[16px] py-[6px] relative shrink-0"
                    data-name="Label"
                  >
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2b2b2b] text-[9px]  tracking-[2.16px] uppercase">
                      scenario study
                    </p>
                  </div>
                  <p className="font-neue-montreal leading-[normal] min-w-full not-italic relative shrink-0 text-[#074a28] text-[24px] md:text-[40px] w-[min-content]">{`How We'd Transform: Crude Oil Trading Operations Modernization`}</p>
                </div>
                <p className="font-neue-montreal leading-[26px] not-italic relative shrink-0 text-[#444] text-[16px] w-full">
                  A prominent Nigerian gas trading company was struggling with
                  data fragmentation across 12 different spreadsheets and legacy
                  systems. Daily position reporting took 48 hours, and
                  ............
                </p>
              </div>
              <div
                className="content-stretch flex gap-[6px] items-center relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudySection() {
  return (
    <div
      className="bg-white overflow-hidden relative shrink-0 w-full"
      data-name="Case Studies"
    >
      <div className="w-full max-w-[1440px] mx-auto relative h-auto md:h-[1070px] pb-[60px]">
        <div className="relative h-full flex flex-col justify-center">
          <div
            className="absolute content-stretch flex flex-col gap-[64px] items-center left-0 top-[90px] w-full px-[20px] md:px-[120px]"
            data-name="Container"
          >
            <Title />
            <CaseStudyCard />
          </div>

          {/* Progress bar visual */}
          <div
            className="absolute bg-[rgba(94,94,94,0.15)] content-stretch h-[4px] items-center left-[20px] md:left-[120px] bottom-[100px] md:top-[793px] w-[calc(100%-40px)] md:w-[1200px]"
            data-name="Label"
          >
            <div
              className="bg-[#0c6639] h-full shrink-0 w-[25%]"
              style={{ left: "300px", width: "300px", position: "absolute" }}
            />
          </div>

          <div
            className="absolute content-stretch flex items-center justify-center left-[calc(50%+1px)] px-[24px] py-[16px] bottom-[20px] md:top-[935px] translate-x-[-50%] w-[275px] cursor-pointer hover:bg-[#074a28]/10 transition-colors"
            data-name="Button"
          >
            <div
              aria-hidden="true"
              className="absolute border border-[#074a28] border-solid inset-0 pointer-events-none"
            />
            <p className="font-neue-montreal leading-[normal] not-italic relative shrink-0 text-[#074a28] text-[12px] text-center  tracking-[0.6px] uppercase">
              view all case studies
            </p>
          </div>

          {/* Navigation Arrows */}
          <div
            className="absolute content-stretch flex items-start left-[20px] md:left-[60px] top-[50%] md:top-[552px] cursor-pointer hover:opacity-70 transition-opacity"
            data-name="Slider trigger"
          >
            <ArrowIcon color="#5E5E5E" />
          </div>
          <div className="absolute flex items-center justify-center right-[20px] md:left-[1338px] top-[50%] md:top-[552px] cursor-pointer hover:opacity-70 transition-opacity">
            <div className="flex-none">
              <ArrowIcon color="#1C3F3A" rotate={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
