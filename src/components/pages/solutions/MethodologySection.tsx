import { Image } from "@/components/shared/blocks";

function Heading() {
  return (
    <div
      className="content-stretch flex flex-col gap-[48px] h-auto items-start 
      justify-end pointer-events-auto"
      data-name="Title"
    >
      <div className="content-stretch flex flex-col font-neue-montreal gap-[8px] items-start not-italic relative w-full">
        <p
          className="leading-[normal] text-center relative  text-[#d19f43] text-[13px] tracking-[2.6px] 
      uppercase w-full"
        >
          What guides every decision
        </p>
        <p
          className="capitalize leading-[1.29] relative  text-[32px] md:text-[48px]
         text-black w-full"
        >
          <span>{`We solve complex problems with a `}</span>
          <span className="text-[#0c6639]">{`connected `}</span>
          <span className="font-test-tiempos-fine not-italic text-[#0c6639]">
            methodology
          </span>
        </p>
      </div>
      <div className="h-[358px] relative  w-full" data-name="Image">
        <Image />
      </div>
    </div>
  );
}

function PhaseCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="bg-[#f8fcfa] relative rounded-[4px]  w-full"
      data-name="Content"
    >
      <div className="size-full">
        <div
          className="content-stretch flex flex-col gap-[24px] items-start not-italic
         p-[32px] relative w-full"
        >
          <div
            className="content-stretch flex flex-col font-neue-montreal
           gap-[10px] items-start leading-[normal] relative  text-[#074a28] w-full"
          >
            <p className="relative  text-[32px] w-full">{number}</p>
            <p className="relative  text-[24px] w-full">{title}</p>
          </div>
          <p className="font-neue-montreal leading-[1.5] relative  text-[#444] text-[14px] w-full">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function Phases() {
  return (
    <div
      className=" content-stretch flex flex-col gap-[48px] items-start justify-center"
      data-name="Phases"
    >
      <PhaseCard
        number="01"
        title="Discovery & Assessment"
        description="We map your current workflows, identify bottlenecks, and understand your specific challenges. No generic solutions—every engagement starts with deep listening."
      />
      <PhaseCard
        number="02"
        title="Architecture & Design"
        description="We design systems that fit your operations, not the other way around. From platform selection to integration planning, we ensure your technology foundation is built to last."
      />
      <PhaseCard
        number="03"
        title="Implementation & Integration"
        description="We configure, customize, and integrate in focused sprints. Your team is involved at every step, learning the systems as they're built."
      />
      <PhaseCard
        number="04"
        title="Testing & Validation"
        description="Rigorous testing ensures everything works before go-live. We validate data accuracy, workflow logic, and system performance under real conditions."
      />
      <PhaseCard
        number="05"
        title="Launch & Support"
        description="We don't disappear after launch. Comprehensive training, documentation, and ongoing support ensure your team operates independently with confidence."
      />
    </div>
  );
}

export default function MethodologySection() {
  return (
    <section className="relative bg-white ">
      <div
        className="container content-stretch flex flex-col gap-[45px] py-[45px] md:py-[px] "
        data-name="Mission and Values"
      >
        {/* Background Factory Image - Positioned absolutely as per design, but responsive */}
        <div className="h-[358px]" data-name="Image">
          <Image />
        </div>

        {/* Main Grid Wrapper */}
        <div className="flex flex-col md:flex-row items-start gap-[40px] md:gap-[100px]">
          {/* Left Column: Heading (Sticky) */}
          <div className="w-full md:w-[55%] md:sticky md:top-[120px]">
            <Heading />
          </div>

          {/* Right Column: Phases (Scrolling) */}
          <div className="w-full md:w-[45%]">
            <Phases />
          </div>
        </div>
      </div>
    </section>
  );
}
