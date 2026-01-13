import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

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
  question,
  answer,
  isFirst,
}: {
  question: string;
  answer: string;
  isFirst: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative shrink-0 w-full" data-name="Accordion">
      {/* Top Border for items except first one (or handled via logic) */}
      {!isFirst && (
        <div
          aria-hidden="true"
          className="absolute border-[1px_0px_0px] border-[rgba(94,94,94,0.2)] border-solid inset-0 pointer-events-none"
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
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
              <p className="font-neue-montreal leading-[28px] not-italic relative shrink-0 text-[#042a17] text-[18px] md:text-[20px]">
                {question}
              </p>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="font-neue-montreal leading-[1.5] text-[#444] text-[16px] pt-2">
                    {answer}
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

function TabMenu() {
  const [activeTab, setActiveTab] = useState("Getting Started");
  const tabs = ["Getting Started", "Partnerships", "Support"];

  return (
    <div
      className="content-stretch flex items-start justify-center overflow-clip relative rounded-tl-[6.937px] rounded-tr-[6.937px] shrink-0 w-full border-b border-[rgba(94,94,94,0.2)]"
      data-name="Tab menu"
    >
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`relative shrink-0 cursor-pointer ${activeTab === tab ? "" : "hover:bg-gray-50"}`}
          onClick={() => setActiveTab(tab)}
        >
          <div className="content-stretch flex gap-[6.937px] items-center justify-center overflow-clip px-[27.747px] py-[13.874px] relative rounded-[inherit]">
            <div
              className={`flex flex-col font-neue-montreal justify-center leading-[0] not-italic relative shrink-0 ${activeTab === tab ? "text-[#0c6639]" : "text-[#444]"} text-[16px] text-center `}
            >
              <p className="leading-[normal]">{tab}</p>
            </div>
            {activeTab === tab && (
              <div className="absolute bg-[#0c6639] bottom-0 h-[2px] w-full left-0" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FAQSection() {
  return (
    <div
      className="content-stretch flex flex-col items-center pb-[120px] pt-[30px] px-[20px] md:px-[120px] relative shrink-0 w-full max-w-[1440px] mx-auto"
      data-name="frequently asked questions"
    >
      <div
        className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full md:w-[1015px]"
        data-name="Container"
      >
        <div
          className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-center"
          data-name="Title"
        >
          <div className="content-stretch flex flex-col font-neue-montreal gap-[8px] items-center not-italic relative shrink-0 text-center">
            <p className="leading-[normal] min-w-full relative shrink-0 text-[#d19f43] text-[13px] tracking-[2.6px] uppercase w-full">
              frequently asked questions
            </p>
            <p className="leading-[1.2] relative shrink-0 text-[32px] md:text-[48px] text-black text-center">
              Your questions,
              <span className="text-[#0c6639]">{` answered!`}</span>
            </p>
          </div>
        </div>

        <div
          className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full"
          data-name="FAQ"
        >
          <TabMenu />
          <div
            className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full border border-[rgba(94,94,94,0.2)]"
            data-name="FAQs"
          >
            <AccordionItem
              isFirst={true}
              question="What is your typical first step with a new client?"
              answer="We typically begin with a Discovery & Assessment phase to understand your current workflows, identify bottlenecks, and define your specific requirements before proposing a tailored solution."
            />
            <AccordionItem
              isFirst={false}
              question="How do you structure your engagements?"
              answer="Our engagements are structured in phases: Discovery, Design, Implementation, Testing, and Launch. We work in sprints to ensure continuous value delivery and alignment with your goals."
            />
            <AccordionItem
              isFirst={false}
              question="Do you offer pilot projects or proof-of-concepts?"
              answer="Yes, we often start with a Proof of Concept (PoC) to demonstrate the value of our solution and ensure it meets your specific technical and operational needs before full-scale implementation."
            />
            <AccordionItem
              isFirst={false}
              question="What information do you need from us to begin?"
              answer="To get started, we need an overview of your current trading volumes, existing systems landscape, key pain points, and your strategic objectives for the transformation."
            />
            <AccordionItem
              isFirst={false}
              question="What is your average project timeline?"
              answer="Project timelines vary based on scope, but a typical ETRM implementation can take anywhere from 3 to 9 months, depending on complexity and integration requirements."
            />
            <AccordionItem
              isFirst={false}
              question="How is Nexurion different from global consulting firms?"
              answer="We combine global expertise with deep local knowledge of African energy markets. We don't just advise; we implement and deliver tangible technology solutions that work in your specific context."
            />
          </div>
        </div>

        <div
          className="content-stretch flex flex-col md:flex-row gap-[40px] md:gap-[62px] items-center relative shrink-0"
          data-name="CTA"
        >
          <p className="font-neue-montreal leading-[normal] not-italic relative shrink-0 text-[#042a17] text-[16px] w-full md:w-[439px] text-center md:text-left">
            <span className="font-neue-montreal text-[#0c6639]">
              Still have questions?
            </span>{" "}
            <span className="text-[#444]">
              We’re here to provide clarity. If your specific question wasn’t
              answered here, please send us a detailed inquiry.
            </span>
          </p>
          <div
            className="bg-[#0c6639] content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0 cursor-pointer hover:bg-[#084a29] transition-colors"
            data-name="Button"
          >
            <p className="font-neue-montreal leading-[normal] not-italic relative shrink-0 text-[13px] text-center  text-white tracking-[0.65px] uppercase">
              send us a detailed enquiry
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
