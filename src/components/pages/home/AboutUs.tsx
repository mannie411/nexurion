import { imgHomeBg1, imgHomeBg2 } from "@/assets/images";
import { Image, OutlinedButton } from "@/components/shared/blocks";

function Heading() {
  return (
    <div
      className="content-stretch flex flex-col items-center w-full relative "
      data-name="Heading"
    >
      <div
        className="content-stretch flex flex-col font-neue-montreal gap-[8px] 
      items-start not-italic relative  text-center"
      >
        <p
          className="leading-[normal] min-w-full relative  text-[#d19f43] 
        text-[13px] tracking-[2.6px] uppercase w-[min-content]"
        >
          From chaos to clarity
        </p>
        <p className="leading-[normal] font-medium relative  text-[#2b2b2b] text-[48px] md:w-[728px] w-full">
          <span>{`We Deliver the Intelligent Systems that create `}</span>
          <span className="font-neue-montreal not-italic text-[#0c6639]">
            Confident
          </span>
          <span className="font-test-tiempos-fine italic text-[#0c6639]">{` Clarity`}</span>
        </p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div
      className="relative  w-full content-stretch flex flex-col md:flex-row  
      items-center justify-between gap-[24px] md:gap-[48px] "
      data-name="Row"
    >
      <div
        className="content-stretch flex flex-col gap-[16px] h-full items-start 
        not-italic  relative w-full"
        data-name="Content"
      >
        <p className="font-neue-montreal leading-[normal] relative  text-[#074a28]  text-[32px] w-full">
          <span>The </span>
          <span className="font-test-tiempos-fine font-medium italic text-[#0c6639]">
            Chaos{" "}
          </span>
          <span> You Face</span>
        </p>
        <p className="font-neue-montreal leading-[26px] relative  text-[#444] text-[18px] max-w-[525px]">
          Manual reconciliations that take days instead of minutes. Data
          scattered across spreadsheets and emails. Constant anxiety about
          cybersecurity threats. Trading decisions made with outdated
          information. The frustration of knowing there's a better way, but not
          having the right partner to help you get there.
        </p>
      </div>
      <div className="relative min-h-[500px] w-full" data-name="Content Image">
        <Image className="h-[500px]" imgSrc={imgHomeBg1} />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div
      className="relative content-stretch w-full flex flex-col-reverse md:flex-row
        items-center justify-between gap-[24px] md:gap-[48px] "
      data-name="Row"
    >
      <div className="relative min-h-[500px] w-full" data-name="Content Image">
        <Image className="h-[500px]" imgSrc={imgHomeBg2} />
      </div>
      <div
        className="content-stretch flex flex-col gap-[48px] h-full 
        items-start justify-between px-0 relative  w-full"
        data-name="Content"
      >
        <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative  w-full">
          <p
            className="font-neue-montreal font-medium leading-[normal] relative  
            text-[#2f6a62] text-[32px] w-full"
          >
            <span>{`The `}</span>
            <span className="font-test-tiempos-fine italic text-[#0c6639]">
              Order
            </span>
            <span>{` We Deliver`}</span>
          </p>
          <p className="font-neue-montreal leading-[26px] relative  text-[#444] text-[18px] max-w-[525px]">
            A single, reliable source of truth across all trading operations.
            Automated workflows that eliminate human error. Real-time visibility
            into your positions and exposure. Robust security that protects your
            most critical assets. The confidence that comes from having a true
            technology partner who understands both global standards and your
            local context.
          </p>
        </div>
        <OutlinedButton
          label="explore our solutions"
          bgColor="#0c6639"
          textColor="#0c6639"
        />
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <section className="bg-white py-[45px] md:py-[90px]">
      <div className="container">
        <div
          className="content-stretch flex flex-col items-center overflow-clip
        relative  w-full "
          data-name="About Us"
        >
          <div
            className="content-stretch flex flex-col gap-[90px] items-center relative  w-full"
            data-name="Container"
          >
            <Heading />
            <div className="content-stretch flex flex-col gap-[90px] items-start relative  w-full">
              <Row />
              <Row2 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
