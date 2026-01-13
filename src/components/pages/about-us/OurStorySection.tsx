export default function OurStorySection() {
  return (
    <section className="relative bg-[#fefaf4] mb-[24px]">
      <div
        className="container content-stretch flex flex-col items-center overflow-clip 
       py-[60px] md:py-[90px] relative  w-full"
      >
        <div
          className="content-stretch flex flex-col lg:flex-row gap-[40px] 
        lg:gap-[90px] items-start justify-center relative  w-full"
        >
          {/* Title */}
          <div className="content-stretch flex flex-col items-start relative  w-full lg:w-auto">
            <div className="content-stretch flex flex-col gap-[8px] items-start px-0 py-px relative ">
              <p
                className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium 
              leading-[normal] min-w-full relative  text-[#d19f43] text-[13px]
              tracking-[2.6px] uppercase w-[min-content]"
              >
                our story
              </p>
              <p className="font-neue-montreal leading-[normal] not-italic relative  text-[#2b2b2b] text-[32px] md:text-[48px] w-full lg:w-[508px]">
                <span>{`We Understand Your Operational Reality Because `}</span>
                <span className="text-[#0c6639]">{`We've Lived It`}</span>
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="basis-0 font-neue-montreal grow leading-[1.5]  not-italic relative  text-[#444] text-[16px]">
            <p className="mb-0">
              Nexurion was born from a memory many African professionals share:
              knowing exactly what needs to be done, but lacking the opportunity
              to execute it. We watched international consultants fly in,
              deliver solutions, and fly out—leaving behind systems no one could
              maintain.
            </p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">{`We knew there was a better way—a path to intelligent order—but the right partner didn't exist.`}</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">So we became that partner.</p>
            <p>{`We bridge global technology standards and African market dynamics. We don't just implement systems—we restore clarity, empower teams, and deliver lasting capability.`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
