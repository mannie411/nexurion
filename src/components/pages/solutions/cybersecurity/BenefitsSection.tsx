import svgPaths from "@/assets/svg-paths";
import { imgPlaceholder } from "@/assets/images";

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
          className="h-[320px] md:h-[492px] relative shrink-0 w-full md:w-[569px]"
          data-name="Image"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
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
                <Item text="Security designed specifically for trading operations. Protection embedded at every layer—network, application, data, and access control." />
                <Item text="Real-time monitoring with intrusion detection and prevention. Security operations that catch and block attacks automatically." />
                <Item text="Encryption for data at rest and in transit. Access controls that meet regulatory standards and protect competitive intelligence." />
                <Item text="Complete audit trails capturing every system action. Automated compliance reporting that transforms weeks of work into minutes." />
                <Item text="Regular security assessments and penetration testing. Patch management ensuring critical updates deploy within 48 hours." />
                <Item text="Documented playbooks for security events. Tested procedures ensuring your team knows exactly what to do when threats emerge." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
