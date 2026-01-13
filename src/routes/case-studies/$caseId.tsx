import { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { imgPlaceholder } from "@/assets/images";
import { ResourceCard, TestimonialSection } from "@/components/shared/blocks";
import type { Testimonial } from "@/types";

export const Route = createFileRoute("/case-studies/$caseId")({
  component: RouteComponent,
});

export function RouteComponent() {
  const testimonial: Testimonial = {
    name: " Dr. Ifeanyi Okorie",
    content: `"The transformation wasn't just about technology. Nexurion built
      our internal capability. Our team now owns this system
      completely. That was always the goal, and they delivered."`,
    role: " Head of Operations, Nigerian Gas Trading Company",
  };
  return (
    <Fragment>
      <HeroSection />
      <section className="relative w-full">
        <div className="container">
          <SituationSection />
          <ApproachSection />
          <ResultsSection />
        </div>
      </section>
      <BeforeAfterSection />
      <TestimonialSection {...testimonial} />
      <ExploreCaseStudiesSection />
    </Fragment>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="container">
        <div
          className="flex flex-col gap-[24px] md:gap-[32px] items-center
      pt-[60px] md:pt-[90px] pb-[40px] md:pb-[64px]"
        >
          {/* Title */}
          <div className="flex flex-col gap-[8px] items-center text-center w-full">
            <p className="font-neue-montreal leading-[normal] text-[#d19f43] text-[11px] md:text-[13px] tracking-[2.2px] md:tracking-[2.6px] uppercase">
              case study
            </p>
            <h1 className="font-neue-montreal leading-[1.2] text-[#074a28] text-[28px] md:text-[42px] lg:text-[56px] w-full max-w-[815px]">
              Creating a Single Source of Truth for a Leading Gas Trader
            </h1>
          </div>
        </div>

        {/* Hero Image */}
        <div className="h-[250px] md:h-[400px] lg:h-[546px] relative w-full overflow-hidden">
          <img
            alt="Gas trading facility"
            className="absolute inset-0 w-full h-full object-cover"
            src={imgPlaceholder}
          />
        </div>
      </div>
    </section>
  );
}

// The Situation Section
function SituationSection() {
  return (
    <div className="w-full px-[20px] md:px-[60px] lg:px-[120px] py-[40px] md:py-[64px]">
      <div className="flex flex-col lg:flex-row gap-[32px] md:gap-[64px] lg:gap-[90px] items-start">
        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-[10px]">
          <h2 className="font-neue-montreal leading-[1.2] text-[#074a28] text-[28px] md:text-[40px]">
            The Situation
          </h2>
          <div className="font-neue-montreal leading-[1.5] text-[#444] text-[14px] md:text-[16px] space-y-4">
            <p>
              A prominent Nigerian gas trading company was drowning in data
              chaos. Their trading operations spanned 12 different spreadsheets
              and legacy systems. Daily position reporting—something that should
              take minutes—consumed 48 hours of manual reconciliation.
            </p>
            <p>
              The operations team spent more time hunting for data than
              analyzing it. Finance, Risk, and Trading each worked from
              different numbers. Reconciliation conflicts happened daily.
              Monthly close took two weeks instead of two days.
            </p>
            <p>
              Senior management couldn't get real-time visibility into positions
              or exposure. Every decision was based on yesterday's data—or last
              week's.
            </p>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="w-full lg:w-[382px] bg-[#f4fbf7] p-[24px] md:p-[32px] rounded-[8px]">
          <div className="font-neue-montreal leading-[1.6] text-[#444] text-[14px] md:text-[18px] space-y-2">
            <p>
              <span className="font-neue-montreal text-[#0c6639]">
                Industry:
              </span>{" "}
              Natural Gas Trading
            </p>
            <p>
              <span className="font-neue-montreal text-[#0c6639]">
                Location:
              </span>{" "}
              Lagos, Nigeria
            </p>
            <p>
              <span className="font-neue-montreal text-[#0c6639]">
                Challenge:
              </span>{" "}
              Data fragmentation across 12 systems
            </p>
            <p>
              <span className="font-neue-montreal text-[#0c6639]">Status:</span>{" "}
              Completed Implementation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Our Approach Section
function ApproachSection() {
  return (
    <div className="w-full px-[20px] md:px-[60px] lg:px-[120px] pb-[40px] md:pb-[64px]">
      <div className="flex flex-col gap-[10px]">
        <h2 className="font-neue-montreal leading-[1.2] text-[#074a28] text-[28px] md:text-[40px]">
          Our Approach
        </h2>
        <div className="font-neue-montreal leading-[1.5] text-[#444] text-[14px] md:text-[16px] space-y-4">
          <p>
            We started with a three-week discovery phase, mapping every data
            source, workflow, and pain point. Rather than forcing a "big bang"
            implementation that would disrupt operations, we designed a phased
            rollout.
          </p>
          <p>
            <span className="font-neue-montreal text-[#074a28]">Phase One</span>
            unified front-office trading data—the highest-impact area. We built
            integrations connecting their existing systems to a central ETRM
            platform, creating a single source of truth for trade capture and
            position management.
          </p>
          <p>
            <span className="font-neue-montreal text-[#074a28]">Phase Two</span>
            connected middle and back-office functions—risk, logistics, and
            settlement. We automated workflows that previously required manual
            intervention.
          </p>
          <p>
            Throughout implementation, we worked directly with their team. Every
            configuration decision included their traders, risk managers, and
            operations staff. They learned the system as we built it.
          </p>
        </div>
      </div>
    </div>
  );
}

// The Results Section
function ResultsSection() {
  return (
    <div className="w-full px-[20px] md:px-[60px] lg:px-[120px] pb-[40px] md:pb-[64px]">
      <div className="flex flex-col gap-[10px]">
        <h2 className="font-neue-montreal leading-[1.2] text-[#074a28] text-[28px] md:text-[40px]">
          The Results
        </h2>
        <div className="font-neue-montreal leading-[1.5] text-[#444] text-[14px] md:text-[16px] space-y-4">
          <p>
            Daily position reporting dropped from 48 hours to 8 minutes. The
            operations team generates comprehensive reports with a single click.
            Manual reconciliation between Trading and Finance disappeared
            completely. Both departments now work from identical real-time data.
            Monthly close time reduced by 60%—from two weeks to less than four
            days.
          </p>
          <p>
            Real-time P&L visibility enabled faster trading decisions.
            Management sees exposure across all positions instantly. Six months
            after go-live, the client's team operates the platform
            independently. They make configuration changes, generate custom
            reports, and train new staff—all without calling us.
          </p>
        </div>
      </div>
    </div>
  );
}

// Before/After Images Section
function BeforeAfterSection() {
  return (
    <div className="w-full px-[20px] md:px-[60px] lg:px-[120px] pb-[40px] md:pb-[90px]">
      <div className="flex flex-col md:flex-row gap-[24px] md:gap-[32px] h-auto md:h-[500px] lg:h-[661px]">
        {/* Before Image */}
        <div className="flex-1 h-[300px] md:h-full relative overflow-hidden rounded-[8px]">
          <img
            alt="Before implementation"
            className="absolute inset-0 w-full h-full object-cover"
            src={imgPlaceholder}
          />
          <div className="absolute bg-[#fabd4b] px-[16px] py-[6px] left-[20px] md:left-[32px] top-[20px] md:top-[32px]">
            <p className="font-neue-montreal text-[#042a17] text-[12px] md:text-[14px] tracking-[1.4px] md:tracking-[1.68px] uppercase">
              before
            </p>
          </div>
        </div>

        {/* After Image */}
        <div className="flex-1 h-[300px] md:h-full relative overflow-hidden rounded-[8px]">
          <img
            alt="After implementation"
            className="absolute inset-0 w-full h-full object-cover"
            src={imgPlaceholder}
          />
          <div className="absolute bg-[#fabd4b] px-[16px] py-[6px] left-[20px] md:left-[32px] top-[20px] md:top-[32px]">
            <p className="font-neue-montreal text-[#042a17] text-[12px] md:text-[14px] tracking-[1.4px] md:tracking-[1.68px] uppercase">
              after
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Explore More Case Studies Section
function ExploreCaseStudiesSection() {
  return (
    <div className="bg-white w-full">
      <div className="px-[20px] md:px-[60px] lg:px-[120px] py-[60px] md:py-[90px]">
        <div className="flex flex-col gap-[32px] md:gap-[64px] items-center">
          {/* Title */}
          <div className="flex flex-col gap-[8px] items-center text-center">
            <p className="font-neue-montreal text-[#d19f43] text-[11px] md:text-[13px] tracking-[2.2px] md:tracking-[2.6px] uppercase">
              See How Transformation Unfolds
            </p>
            <h2 className="font-neue-montreal text-[32px] md:text-[48px] leading-[1.2]">
              <span className="text-black">Explore More Case </span>
              <span className="text-[#0c6639]">Studies</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-col md:flex-row gap-[48px] md:gap-[32px] w-full">
            <ResourceCard
              image={imgPlaceholder}
              label="case study"
              title="Securing Trading Infrastructure for a Power Utility"
              link={{
                title: "",
                path: "/case-studies/securing-trading-infrastructure",
              }}
              type={"download"}
              id={undefined}
            />
            <ResourceCard
              image={imgPlaceholder}
              label="scenario study"
              title="How We'd Transform: Multi-Country Commodity Trading Integration"
              link={{
                title: "",
                path: "/case-studies/multi-country-integration",
              }}
              type={"download"}
              id={undefined}
            />
            <ResourceCard
              image={imgPlaceholder}
              label="case study"
              title="Real-Time Reporting for West African Energy Trader"
              link={{
                title: "",
                path: "/case-studies/real-time-reporting",
              }}
              type={"download"}
              id={undefined}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
