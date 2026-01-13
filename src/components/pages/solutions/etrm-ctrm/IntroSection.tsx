function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-neue-montreal leading-[normal] not-italic relative shrink-0 text-[32px] md:text-[48px] text-black text-center w-full md:w-[728px]">
        <span>{`Stop Managing Trades. Start Managing `}</span>
        <span className="text-[#0c6639]">{`Your `}</span>
        <span className="font-test-tiempos-fine text-[#0c6639]">Business.</span>
      </p>
    </div>
  );
}

function Title() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0"
      data-name="Title"
    >
      <Frame />
      <p className="font-neue-montreal leading-[1.5] not-italic relative shrink-0 text-[#444] text-[16px] text-center w-full md:w-[728px]">
        You entered energy and commodity trading for strategic decisions, not to
        babysit spreadsheets and reconcile data. We implement intelligent
        platforms that turn operational chaos into competitive advantage.
      </p>
    </div>
  );
}

export default function IntroSection() {
  return (
    <div
      className="bg-[#fefbf6] content-stretch flex flex-col items-center overflow-clip px-[20px] md:px-[120px] py-[64px] relative shrink-0 w-full max-w-[1440px] mx-auto"
      data-name="Container"
    >
      <Title />
    </div>
  );
}
