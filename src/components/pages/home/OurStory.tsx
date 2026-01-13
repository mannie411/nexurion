function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start px-0 py-px relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#d19f43] text-[13px] tracking-[2.6px] uppercase w-[min-content]">
        our story
      </p>
      <p className="font-neue-montreal leading-[normal] not-italic relative shrink-0 text-[#2b2b2b] text-[32px] md:text-[48px] w-full md:w-[508px]">
        <span>{`We Understand Your Operational Reality Because `}</span>
        <span className="text-[#0c6639]">{`We've Lived It`}</span>
      </p>
    </div>
  );
}

function Title() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full md:w-auto"
      data-name="Title"
    >
      <Frame />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="content-stretch flex flex-col md:flex-row gap-[40px] md:gap-[90px] items-start justify-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Title />
      <div className="basis-0 font-neue-montreal grow leading-[1.5]  not-italic relative shrink-0 text-[#444] text-[16px]">
        <p className="mb-0">
          Nexurion was born from a memory many African professionals share:
          knowing exactly what needs to be done, but lacking the opportunity to
          execute it. We watched international consultants fly in, deliver
          solutions, and fly out—leaving behind systems no one could maintain.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`We knew there was a better way—a path to intelligent order—but the right partner didn't exist.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">So we became that partner.</p>
        <p>{`We bridge global technology standards and African market dynamics. We don't just implement systems—we restore clarity, empower teams, and deliver lasting capability.`}</p>
      </div>
    </div>
  );
}

export default function OurStory() {
  return (
    <div
      className="bg-[#fefaf4] content-stretch flex flex-col items-center overflow-clip px-[20px] md:px-[120px] py-[60px] md:py-[90px] relative shrink-0 w-full max-w-[1440px] mx-auto"
      data-name="About Us"
    >
      <Container1 />
    </div>
  );
}
