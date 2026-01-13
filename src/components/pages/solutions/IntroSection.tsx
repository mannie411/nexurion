export default function IntroSection() {
  return (
    <section className="relative bg-white">
      <div
        className="container content-stretch flex flex-col items-center overflow-clip 
        pb-[80px] md:pb-[120px] pt-[60px] md:pt-[90px] relative  w-full "
        data-name="Solution Intro"
      >
        <div
          className="content-stretch flex flex-col md:flex-row gap-[40px] md:gap-[90px] 
      items-start justify-center relative  w-full"
          data-name="Container"
        >
          <div
            className="content-stretch flex flex-col items-start relative "
            data-name="Title"
          >
            <div className="content-stretch flex flex-col font-neue-montreal gap-[8px] items-start not-italic relative ">
              <p className="leading-[normal] min-w-full relative  text-[#d19f43] text-[13px] tracking-[2.6px] uppercase w-[min-content]">
                Precision-engineered for African energy markets
              </p>
              <p className="leading-[1.2] relative  text-[32px] md:text-[48px] text-black w-full md:w-[542px]">
                <span>{`We Don’t Just Implement Systems, We Solve Your `}</span>
                <span className="text-[#0c6639]">{`Operational `}</span>
                <span className="font-test-tiempos-fine not-italic text-[#0c6639]">
                  Chaos
                </span>
              </p>
            </div>
          </div>
          <div className="basis-0 font-neue-montreal grow leading-[1.5]  not-italic relative  text-[#444] text-[16px]">
            <p className="mb-0">
              <span>{`Every day, you're managing trades across scattered Excel files and disconnected systems. You're compiling reports manually that should be instant. You're worrying about exposure you can't see and compliance gaps you can't track. `}</span>
              <span className="font-neue-montreal not-italic">{`It doesn't have to be this way.`}</span>
            </p>
            <p className="mb-0">&nbsp;</p>
            <p>
              We help energy and commodity trading firms replace fragmented
              operations with intelligent, integrated systems—giving you
              complete visibility, operational control, and the confidence to
              scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
