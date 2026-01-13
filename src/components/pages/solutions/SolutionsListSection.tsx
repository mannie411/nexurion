import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import svgPaths from "@/assets/svg-paths";
import { imgPlaceholder } from "@/assets/images";

function Tick() {
  return (
    <div className="relative  size-[24px]" data-name="tick-01">
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

function FeatureItem({ text }: { text: string }) {
  return (
    <div
      className="content-stretch flex gap-[6px] items-center relative  w-full"
      data-name="Item"
    >
      <Tick />
      <p className="font-neue-montreal leading-[1.5] not-italic relative  text-[#444] text-[16px] text-wrap md:">
        {text}
      </p>
    </div>
  );
}

function Button({ path = "", text = "" }) {
  return (
    <Link
      to={path}
      className="bg-[#0c6639] content-stretch flex items-center justify-center px-[24px]
           py-[16px] relative  cursor-pointer hover:bg-[#084a29] transition-colors"
      data-name="Button"
    >
      <p
        className="font-neue-montreal leading-[normal] not-italic relative  
            text-[13px] text-center  text-white tracking-[0.6px] uppercase"
      >
        <span>{`learn more `}</span>
        <span>{`about `}</span>
        {text}
      </p>
    </Link>
  );
}

function SolutionRow({
  image,
  title,
  description,
  features,
  ctaButton,
  imageOnRight = false,
}: {
  image: string;
  title: string;
  description: ReactNode;
  features: string[];
  ctaButton: ReactNode;
  imageOnRight?: boolean;
}) {
  return (
    <div
      className={`content-stretch flex flex-col ${imageOnRight ? "md:flex-row" : "md:flex-row-reverse"} gap-[40px] md:gap-[64px] items-center relative  w-full`}
      data-name="Row"
    >
      <div
        className="basis-0 content-stretch flex flex-col gap-[32px] grow h-full items-start justify-center  relative  w-full"
        data-name="Content"
      >
        <div className="content-stretch flex flex-col gap-[20px] items-start relative  w-full">
          <p className="font-neue-montreal leading-[1.5] not-italic relative  text-[#074a28] text-[24px] ">
            {title}
          </p>
          <div className="font-neue-montreal leading-[1.5] min-w-full not-italic relative  text-[#444] text-[16px] w-[min-content]">
            {description}
          </div>
          <div
            className="content-stretch flex flex-col gap-[16px] items-start relative  w-full"
            data-name="What you gain"
          >
            <p className="font-neue-montreal leading-[26px] not-italic relative  text-[#074a28] text-[20px] w-full">
              What You Gain:
            </p>
            <div
              className="content-stretch flex flex-col gap-[8px] items-start relative  w-full"
              data-name="Items"
            >
              {features.map((feature, i) => (
                <FeatureItem key={i} text={feature} />
              ))}
            </div>
          </div>
        </div>

        {ctaButton}
      </div>
      <div
        className="h-[300px] md:h-[590px] relative  w-full md:w-[569px]"
        data-name="Image"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full rounded-md"
          src={image}
        />
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-center not-italic relative  text-center"
      data-name="Title"
    >
      <div className="content-stretch flex flex-col font-neue-montreal gap-[8px] items-start relative ">
        <p className="leading-[normal] min-w-full relative  text-[#d19f43] text-[13px] tracking-[2.6px] uppercase w-full text-center">
          Our solutions Precision-engineered for you
        </p>
        <p className="leading-[1.2] relative  text-[32px] md:text-[48px] text-black w-full md:w-[728px] text-center">
          <span>{`We Provide the Integrated Systems Your `}</span>
          <span className="text-[#0c6639]">{`Operations `}</span>
          <span className="font-test-tiempos-fine not-italic text-[#0c6639]">
            Demand
          </span>
        </p>
      </div>
      <p className="font-neue-montreal leading-[1.5] relative  text-[#444] text-[16px] w-full md:w-[550px]">
        We move beyond standalone fixes to deliver a cohesive technology
        ecosystem that unifies your trading, risk, and operations.
      </p>
    </div>
  );
}

export default function SolutionsListSection() {
  return (
    <section className="relative w-full bg-[#fefbf6]">
      <div
        className="container content-stretch flex flex-col items-center overflow-clip 
       py-[45px] md:py-[90px] relative  w-full "
        data-name="Services"
      >
        <div
          className="content-stretch flex flex-col gap-[72px] items-center relative  w-full"
          data-name="Container"
        >
          <Title2 />

          <SolutionRow
            image={imgPlaceholder}
            title="ETRM & CTRM Implementation"
            description={
              <>
                <p className="mb-0">
                  Stop juggling spreadsheets and reconcile trades in a single,
                  intelligent platform. We deliver complete trade lifecycle
                  management from deal capture to settlement
                </p>
                <p>in one integrated system.</p>
                <p className="mt-4 font-neue-montreal leading-[1.5] min-w-full not-italic relative  text-[#444] text-[18px] w-[min-content]">
                  As certified partners with ION and OpenLink, we tailor global
                  platforms to meet African market requirements.
                </p>
              </>
            }
            features={[
              "Real-time visibility across all trades and positions",
              "Automated workflows that eliminate manual errors",
              "Unified data for instant reporting and analysis",
              "Complete audit trails for full compliance confidence",
            ]}
            ctaButton={
              <Button
                path="/solutions/etrm-ctrm"
                text="  ETRM Implementation"
              />
            }
            imageOnRight={false}
          />

          <SolutionRow
            image={imgPlaceholder}
            title="Cybersecurity & Infrastructure Protection"
            description={
              <>
                <p className="mb-0">
                  Trading operations are prime targets for cyberattacks. We
                  embed security into your infrastructure from day one—closing
                  vulnerabilities before they can be exploited.
                </p>
                <p className="mt-4 font-neue-montreal leading-[1.5] min-w-full not-italic relative  text-[#444] text-[16px] w-[min-content]">
                  Transform your trading infrastructure from a liability into a
                  fortified asset.
                </p>
              </>
            }
            features={[
              "Comprehensive security architecture for trading operations",
              "24/7 threat monitoring and rapid incident response",
              "Data encryption and access controls that meet global standards",
              "Regular security assessments and proactive vulnerability management",
            ]}
            ctaButton={
              <Button path={"/solutions/cyber-security"} text="cybersecurity" />
            }
            imageOnRight={true}
          />

          <SolutionRow
            image={imgPlaceholder}
            title="IT Project Delivery & Digital Transformation"
            description={
              <>
                <p className="mb-0">
                  Bridge the gap between vision and execution. We translate
                  business needs into technical reality, delivering integrated
                  solutions that work from day one.
                </p>
                <p className="mt-4 font-neue-montreal leading-[1.5] min-w-full not-italic relative  text-[#444] text-[16px] w-[min-content]">
                  We deliver finished projects—on time, on budget, with
                  measurable results.
                </p>
              </>
            }
            features={[
              "End-to-end project management from planning to launch",
              "Seamless integration across trading, finance and operations",
              "Change management that prepares your team for new technology",
              "Best-in-class solutions without vendor lock-in",
            ]}
            ctaButton={
              <Button path={"/solutions/it"} text="it transformation" />
            }
            imageOnRight={false}
          />
        </div>
      </div>
    </section>
  );
}
