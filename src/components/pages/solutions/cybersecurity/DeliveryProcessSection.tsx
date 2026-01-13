import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { imgPlaceholder } from "@/assets/images";

function ChevronDown({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`relative shrink-0 size-[24px] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
      data-name="Chevron down"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Chevron down">
          <path
            d="M6 9L12 15L18 9"
            id="Icon"
            stroke="var(--stroke-0, #042A17)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.4"
          />
        </g>
      </svg>
    </div>
  );
}

function AccordionItem({
  number,
  title,
  content,
  isFirst,
}: {
  number: string;
  title: string;
  content: string;
  isFirst: boolean;
}) {
  const [isOpen, setIsOpen] = useState(isFirst);

  return (
    <div
      className={`relative shrink-0 w-full ${isOpen ? "bg-[#f4fbf7]" : "bg-transparent"}`}
      data-name="Accordion"
    >
      {!isFirst && (
        <div
          aria-hidden="true"
          className="absolute border-[1px_0px_0px] border-[rgba(7,74,40,0.2)] border-solid inset-0 pointer-events-none"
        />
      )}
      <div className="size-full">
        <div
          className="content-stretch flex gap-[20px] md:gap-[52px] items-start p-[20px] md:p-[32px] relative w-full cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-center  relative shrink-0"
            data-name="Question+answer"
          >
            <div className="content-stretch flex font-neue-montreal gap-[12px] items-start not-italic relative shrink-0  w-full">
              <p className="leading-[normal] relative shrink-0 text-[#444] text-[24px]">
                {number}
              </p>
              <p className="leading-[28px] relative shrink-0 text-[#0c6639] text-[18px] md:text-[20px] text-wrap">
                {title}
              </p>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden w-full"
                >
                  <p className="font-neue-montreal leading-[24px] not-italic relative shrink-0 text-[#444] text-[16px] w-full pt-2">
                    {content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <ChevronDown isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center"
      data-name="Title"
    >
      <p className="font-neue-montreal leading-[normal] min-w-full relative shrink-0 text-[#d19f43] text-[13px] tracking-[2.6px] uppercase w-[min-content]">
        Our Approach to Delivery
      </p>
      <p className="capitalize font-neue-montreal leading-[1.29] relative shrink-0 text-[32px] md:text-[48px] text-black w-full md:w-[806px]">
        <span>{`Delivery Engineered for `}</span>
        <span className="text-[#0c6639]">Your</span>{" "}
        <span className="font-test-tiempos-fine not-italic text-[#0c6639]">
          Success
        </span>
      </p>
      <p className="font-neue-montreal leading-[1.5] relative shrink-0 text-[#444] text-[18px] w-full md:w-[872px] text-center">
        We secure your operations swiftly, resolving critical vulnerabilities in
        60-90 days and establishing a comprehensive, resilient security
        architecture within 4-6 months.
      </p>
    </div>
  );
}

export default function DeliveryProcessSection() {
  return (
    <div
      className="content-stretch flex flex-col gap-[72px] items-center overflow-clip px-[20px] md:px-[120px] py-[60px] relative shrink-0 w-full max-w-[1440px] mx-auto"
      data-name="About Us"
    >
      <div
        className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full"
        data-name="Container"
      >
        <Title />
        <div
          className="content-stretch flex flex-col md:flex-row gap-[64px] items-start relative shrink-0 w-full"
          data-name="Approach"
        >
          <div className="basis-0 content-stretch flex flex-col grow items-start  relative shrink-0 w-full">
            <AccordionItem
              number="01."
              title="Security Assessment (1-2 weeks)"
              content="We assess your current security posture, identify vulnerabilities, and prioritize risks based on exploitability and business impact."
              isFirst={true}
            />
            <AccordionItem
              number="02."
              title="Critical Protections (3-4 weeks)"
              content="We implement immediate safeguards to close the most dangerous gaps and protect your most critical assets."
              isFirst={false}
            />
            <AccordionItem
              number="03."
              title="Architecture Redesign (6-8 weeks)"
              content="We re-architect your infrastructure to be secure by design, implementing segmentation, zero-trust principles, and robust monitoring."
              isFirst={false}
            />
            <AccordionItem
              number="04."
              title="Comprehensive Controls (4-6 weeks)"
              content="We deploy the full suite of security controls, including advanced threat protection, DLP, and automated compliance monitoring."
              isFirst={false}
            />
            <AccordionItem
              number="05."
              title="Capability Transfer (Ongoing)"
              content="We train your team to operate the security infrastructure and establish continuous improvement processes."
              isFirst={false}
            />
          </div>
          <div className="relative self-stretch shrink-0 w-full md:w-[549px] hidden md:block">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rounded-md"
              src={imgPlaceholder}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
