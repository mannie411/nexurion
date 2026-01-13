function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center ">
      <p className="font-neue-montreal leading-[1.2] relative shrink-0 text-[#ccebdb] text-[24px] md:text-[32px]">
        {value}
      </p>
      <p className="font-neue-montreal leading-[normal] relative shrink-0 text-[#f0f9f5] text-[14px] md:text-[16px]">
        {label}
      </p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col font-neue-montreal gap-[8px] items-center not-italic relative shrink-0 text-center w-full">
      <p className="leading-[normal] min-w-full relative shrink-0 text-[#fabd4b] text-[13px] tracking-[2.6px] uppercase w-[min-content]">
        our impact By the numbers
      </p>
      <p className="leading-[normal] relative shrink-0 text-[32px] md:text-[48px] text-white w-full md:w-[808px]">
        <span>{`We Measure Success by `}</span>
        <span className="font-neue-montreal not-italic text-[#fabd4b]">{`Your `}</span>
        <span className="font-test-tiempos-fine not-italic text-[#fabd4b]">
          Growth
        </span>
      </p>
    </div>
  );
}

export default function ImpactSection() {
  return (
    <div className="bg-[#031c0f] relative shrink-0 w-full" data-name="Numbers">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] md:px-[120px] py-[90px] relative w-full max-w-[1440px] mx-auto">
          <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            data-name="Container"
          >
            <div
              className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full"
              data-name="Content"
            >
              <Title />
              <div className="bg-[rgba(21,41,31,0.6)] relative rounded-[10px] shrink-0 w-full">
                <div
                  aria-hidden="true"
                  className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]"
                />
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex flex-wrap gap-[40px] md:gap-[64px] items-center justify-center px-[20px] md:px-[48px] py-[64px] relative w-full">
                    <Stat
                      value="Zero high-risk findings"
                      label="Post-implementation security audit"
                    />
                    <Stat
                      value="47 attacks blocked"
                      label="In first 3 months of monitoring"
                    />
                    <Stat
                      value="Days → Minutes"
                      label="Compliance reporting time reduction"
                    />
                    <Stat value="100% uptime" label="Secure Transformation" />
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
