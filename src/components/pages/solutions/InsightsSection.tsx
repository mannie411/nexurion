import { imgPlaceholder } from "@/assets/images";
import svgPaths from "@/assets/svg-paths";

function DownloadIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="download-06">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="download-06">
          <path
            d={svgPaths.p15728480}
            id="Vector"
            stroke="var(--stroke-0, #0C6639)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.125"
          />
          <path
            d="M9 2.25V11.25"
            id="Vector_2"
            stroke="var(--stroke-0, #0C6639)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.125"
          />
          <path
            d={svgPaths.p2c114700}
            id="Vector_3"
            stroke="var(--stroke-0, #0C6639)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.125"
          />
        </g>
      </svg>
    </div>
  );
}

function ResourceCard({
  image,
  googleImage,
  label,
  title,
}: {
  image: string;
  googleImage: string;
  label: string;
  title: string;
}) {
  return (
    <div
      className="basis-0 content-stretch flex flex-col grow h-full items-start  relative shrink-0 w-full md:w-1/3"
      data-name="Resources Card"
    >
      <div
        className="h-[270px] overflow-hidden relative shrink-0 w-full bg-gray-100"
        data-name="Image"
      >
        {/* Background base image */}
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full opacity-50"
          src={image}
        />
        {/* Overlay Google Image - approximating the complex positioning from Figma */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <img
            alt=""
            className="w-[120%] max-w-none object-cover"
            src={googleImage}
          />
        </div>
      </div>
      <div
        className="content-stretch flex flex-col items-start justify-end overflow-clip pb-0 pt-[24px] px-0 relative shrink-0 w-full"
        data-name="Content"
      >
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <div
            className="bg-[rgba(94,94,94,0.2)] content-stretch flex h-[4px] items-center relative shrink-0 w-full"
            data-name="Label"
          >
            <div className="bg-[#0c6639] h-full shrink-0 w-[40px]" />{" "}
            {/* Static progress bar for visual */}
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div
              className="bg-[rgba(209,159,67,0.2)] content-stretch flex items-center justify-center px-[16px] py-[6px] relative shrink-0"
              data-name="Label"
            >
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1b1b1b] text-[9px]  tracking-[1.08px] uppercase">
                {label}
              </p>
            </div>
            <p className="font-neue-montreal leading-[normal] w-full not-italic relative shrink-0 text-[#1b1b1b] text-[24px]">
              {title}
            </p>
          </div>
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
            data-name="Button"
          >
            <div
              className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
              data-name="Button"
            >
              <p className="font-neue-montreal leading-[normal] not-italic relative shrink-0 text-[#0c6639] text-[14px]  tracking-[1.96px] uppercase">
                Download
              </p>
              <DownloadIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InsightsSection() {
  return (
    <div
      className="bg-white content-stretch flex flex-col items-center overflow-clip px-[20px] md:px-[120px] py-[60px] md:py-[90px] relative shrink-0 w-full max-w-[1440px] mx-auto"
      data-name="Services"
    >
      <div
        className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-full"
        data-name="Container"
      >
        <div
          className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-center"
          data-name="Title"
        >
          <div className="content-stretch flex flex-col font-neue-montreal gap-[8px] items-start not-italic relative shrink-0 text-center">
            <p className="leading-[normal] min-w-full relative shrink-0 text-[#d19f43] text-[13px] tracking-[2.6px] uppercase w-full">
              strategic insights
            </p>
            <p className="leading-[1.2] relative shrink-0 text-[32px] md:text-[48px] text-black w-full md:w-[515px]">
              <span>{`Insights That Move Your Business `}</span>
              <span className="font-test-tiempos-fine not-italic text-[#0c6639]">
                Forward
              </span>
            </p>
          </div>
        </div>

        <div
          className="content-stretch flex flex-col md:flex-row gap-[24px] items-start relative shrink-0 w-full"
          data-name="Cards"
        >
          <ResourceCard
            image={imgPlaceholder}
            googleImage={imgPlaceholder}
            label="Implementation Guide"
            title="The ETRM Evaluation Framework"
          />
          <ResourceCard
            image={imgPlaceholder}
            googleImage={imgPlaceholder}
            label="Implementation Guide"
            title="Knowledge Transfer Playbook"
          />
          <ResourceCard
            image={imgPlaceholder}
            googleImage={imgPlaceholder}
            label="Industry Insights"
            title="African Energy Markets Regulatory Update 2025"
          />
        </div>

        <div
          className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0 w-[210px] cursor-pointer group"
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
  );
}
