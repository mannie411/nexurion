function ApproachCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="basis-0 bg-[#0e2419] grow h-full min-h-[250px] relative rounded-[12px] shrink-0 w-full md:w-1/2"
      data-name="Phase"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[32px] py-[48px] relative size-full">
          <div
            className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center w-full"
            data-name="Content"
          >
            <p className="font-neue-montreal leading-[normal] relative shrink-0 text-[#eac486] text-[24px] w-full">
              {title}
            </p>
            <p className="font-neue-montreal leading-[1.5] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] w-full">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title3() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="Title"
    >
      <div className="content-stretch flex flex-col font-neue-montreal gap-[8px] items-start not-italic relative shrink-0 text-center">
        <p className="leading-[normal] min-w-full relative shrink-0 text-[#fabd4b] text-[13px] tracking-[3.12px] uppercase w-full text-center">{` proven approach built for your reality`}</p>
        <p className="leading-[1.2] relative shrink-0 text-[32px] md:text-[52px] text-white w-full md:w-[847px] text-center">
          <span>{`What Makes Our Approach `}</span>
          <span className="font-test-tiempos-fine not-italic text-[#fabd4b]">
            Different
          </span>
        </p>
      </div>
    </div>
  );
}

export default function ApproachSection() {
  return (
    <section className="relative bg-[#031c0f]">
      <div
        className=" content-stretch flex flex-col items-center px-[20px] md:px-[120px] py-[60px] md:py-[90px] relative shrink-0 w-full max-w-[1440px] mx-auto"
        data-name="Values"
      >
        <div
          className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-full"
          data-name="Container"
        >
          <div
            aria-hidden="true"
            className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none"
          />
          <Title3 />
          <div
            className="relative rounded-[8px] shrink-0 w-full"
            data-name="Cards"
          >
            <div className="size-full flex flex-col gap-[40px] px-0 md:px-[60px]">
              <div className="content-stretch flex flex-col md:flex-row gap-[41px] items-stretch relative shrink-0 w-full">
                <ApproachCard
                  title="We Empower Your Team"
                  description="Every implementation includes comprehensive training and documentation. Our success is measured by how well your team runs systems without us."
                />
                <ApproachCard
                  title="African Roots, Global standards"
                  description="We bring world-class implementation expertise with deep understanding of African regulatory environments, market dynamics, and operational realities."
                />
              </div>
              <div className="content-stretch flex flex-col md:flex-row gap-[40px] items-stretch relative shrink-0 w-full">
                <ApproachCard
                  title="We Offer Clear & Fair Terms"
                  description="No hidden fees. No inflated estimates. You get honest assessments of what's required, what it costs, and how long it takes."
                />
                <ApproachCard
                  title="We Adapt to Your Reality"
                  description="Need help with just one system? Start there. Ready for complete transformation? We handle that too. Our phased approach adapts to your budget, timeline, and readiness."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
