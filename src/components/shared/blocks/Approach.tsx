interface PhaseCardProps {
  number: string;
  title: string;
  description: string;
}

function Phase({ step, content }: { step: string; content: string }) {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full md:w-[291px]"
      data-name="Phase"
    >
      <div
        className="bg-[#15291f] relative rounded-[6px] shrink-0 size-[54px]"
        data-name="image 48"
      >
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]"
        />
        <p className="absolute font-neue-montreal leading-[normal] left-[calc(50%-9.67px)] not-italic text-[#eac486] text-[20px]  top-[calc(50%-12px)]">
          {step}
        </p>
      </div>
      <div
        className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center w-full"
        data-name="Content"
      >
        <p className="font-neue-montreal leading-[normal] relative shrink-0 text-[#eac486] text-[18px] w-full">{`We Assess & Align`}</p>
        <p className="font-neue-montreal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] w-full text-center">
          {content}
        </p>
      </div>
    </div>
  );
}

function Phases() {
  const phase = [
    {
      step: "01",
      content: `We start by listening. Through deep discovery, we map your workflows,
        identify root causes, and co-create a clear roadmap.`,
    },
    {
      step: "02",
      content: `Your vision becomes reality. We configure, integrate, and train in
        focused sprints—empowering your team at every phase.`,
    },
    {
      step: "03",
      content: `Our partnership continues after go-live. We provide support, security
        updates, and strategic guidance to help you adapt and grow.`,
    },
  ];

  return (
    <div
      className="bg-[rgba(21,41,31,0.2)] relative rounded-[10px] shrink-0 w-full"
      data-name="Phases"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]"
      />
      <div className="size-full">
        <div className="content-start flex flex-col md:flex-row flex-wrap gap-[47px] items-start p-[32px] relative w-full justify-between">
          {/* Divider Line - hard to position absolutely in responsive. Hiding or replacing. */}
          <div className="hidden md:block absolute h-0 left-[32px] top-[60px] w-[calc(100%-64px)] opacity-20 border-t border-white" />

          {phase.map(({ step, content }, idx) => (
            <Phase key={`item-${idx}`} step={step} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PhaseCard({ number, title, description }: PhaseCardProps) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-auto md:h-[194px] items-center relative shrink-0 w-full md:w-[291px]">
      <div className="bg-[#15291f] relative rounded-[6px] shrink-0 size-[54px]">
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]"
        />
        <p className="absolute font-neue-montreal leading-[normal] left-1/2 -translate-x-1/2 not-italic text-[#eac486] text-[20px]  top-1/2 -translate-y-1/2">
          {number}
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center w-full">
        <p className="font-neue-montreal leading-[normal] relative shrink-0 text-[#eac486] text-[18px] w-full">
          {title}
        </p>
        <p className="font-neue-montreal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] w-full">
          {description}
        </p>
      </div>
    </div>
  );
}

export function OurApproachSection() {
  return (
    <div className="bg-[#042a17] content-stretch flex flex-col gap-[60px] md:gap-[72px] items-center overflow-clip p-[20px] md:p-[120px] relative shrink-0 w-full max-w-[1440px] mx-auto">
      {/* Title */}
      <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-center w-full max-w-[600px]">
        <div className="content-stretch flex flex-col font-neue-montreal gap-[8px] items-start leading-[normal] relative shrink-0 w-full">
          <p className="min-w-full relative shrink-0 text-[#fabd4b] text-[13px] tracking-[3.12px] uppercase w-[min-content]">
            our approach
          </p>
          <p className="relative shrink-0 text-[32px] md:text-[48px] text-white w-full">
            We Build in Phases, Partner for Life
          </p>
        </div>
        <p className="font-neue-montreal leading-[24px] min-w-full relative shrink-0 text-[14px] md:text-[16px] text-white w-[min-content]">
          We deliver value at every step. Our agile, phased approach builds
          solutions tailored to your unique challenges.
        </p>
      </div>

      {/* Phase Cards */}
      <div className="content-stretch flex flex-wrap md:flex-nowrap gap-[32px] md:gap-[20px] items-start justify-center relative shrink-0 w-full">
        <PhaseCard
          number="01"
          title="We Assess & Align"
          description="We start by listening. Through deep discovery, we map your workflows, identify root causes, and co-create a clear roadmap."
        />
        <PhaseCard
          number="02"
          title="We Build With You"
          description="No black boxes. We implement in transparent, collaborative phases, with you in the driver's seat throughout."
        />
        <PhaseCard
          number="03"
          title="We Empower & Enable"
          description="We ensure your team doesn't just use the system—they own it. Through training and documentation, we transfer full capability."
        />
        <PhaseCard
          number="04"
          title="We Evolve Together"
          description="As your business grows, we're here. Not to create dependency, but to support sustainable, long-term success."
        />
      </div>
    </div>
  );
}

export function ApproachSection() {
  return (
    <section className="relative bg-[#031c0f]">
      <div
        className=" content-stretch flex flex-col items-center pb-0 pt-[90px] px-[20px] md:px-[120px] relative shrink-0 w-full max-w-[1440px] mx-auto"
        data-name="Values"
      >
        <div
          className="content-stretch flex flex-col gap-[48px] items-center pb-[90px] pt-0 px-0 relative shrink-0 w-full"
          data-name="Container"
        >
          <div
            aria-hidden="true"
            className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none"
          />
          <div
            className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-center w-full"
            data-name="Title"
          >
            <div
              className="content-stretch flex flex-col font-neue-montreal gap-[8px] items-center leading-[normal] relative shrink-0"
              data-name="Heading"
            >
              <p className="min-w-full relative shrink-0 text-[#fabd4b] text-[13px] tracking-[3.12px] uppercase w-[min-content] text-center">
                our approach
              </p>
              <p className="relative shrink-0 text-[48px] text-white md:w-[470px] w-full text-center">
                We Build in Phases, Partner for Life
              </p>
            </div>
            <p className="font-neue-montreal leading-[24px] min-w-full relative shrink-0 text-[16px] text-white w-[min-content] text-center">
              We deliver value at every step. Our agile, phased approach builds
              solutions tailored to your unique challenges.
            </p>
          </div>
          <Phases />
        </div>
      </div>
    </section>
  );
}
