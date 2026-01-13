function Frame() {
  return (
    <div className="content-stretch flex flex-col font-neue-montreal gap-[8px] items-center not-italic relative shrink-0 text-center">
      <p className="leading-[normal] min-w-full relative shrink-0 text-[#d19f43] text-[13px] tracking-[2.6px] uppercase w-[min-content]">
        industry news & expert insights
      </p>
      <div className="flex justify-center w-full">
        <p className="capitalize leading-[1.2] relative shrink-0 text-[32px] md:text-[56px] text-black w-full text-center">
          <span>{`Insights to Guide Your `}</span>
          <span className="text-[#0c6639]">Transformation</span>
        </p>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[1440px] px-[20px] md:px-[120px] pt-[90px] mx-auto"
      data-name="Title"
    >
      <div className="content-stretch flex items-end justify-between w-full max-w-[1200px] mx-auto">
        <div
          className="content-stretch flex flex-col items-start relative shrink-0 w-full"
          data-name="Title"
        >
          <Frame />
        </div>
      </div>
    </div>
  );
}
