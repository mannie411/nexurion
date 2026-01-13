import {
  imgIndustry,
  imgIndustry1,
  imgIndustry2,
  imgIndustry3,
  imgIndustry4,
} from "@/assets/images";

function IndustryCard({
  image,
  title,
  subtitle,
  widthClass,
}: {
  image: string;
  title: string;
  subtitle: string;
  widthClass?: string;
}) {
  return (
    <div
      className={`basis-0 grow h-full min-h-[300px] md: relative rounded-[8px] shrink-0 w-full ${widthClass || ""}`}
      data-name="Industry"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none rounded-[8px]"
      >
        <img
          alt=""
          className="absolute max-w-none object-cover rounded-[8px] size-full"
          src={image}
        />
        <div className="absolute bg-gradient-to-b from-[32.525%] from-[rgba(0,0,0,0)] inset-0 rounded-[8px] to-[100.2%] to-[rgba(0,0,0,0.8)]" />
      </div>
      <div className="flex flex-col justify-end size-full absolute inset-0">
        <div className="content-stretch flex flex-col items-start justify-end p-[32px] relative size-full">
          <div
            className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-white w-full"
            data-name="Content"
          >
            <p className="font-neue-montreal leading-[normal] relative shrink-0 text-[24px] md:text-[32px] w-full">
              {title}
            </p>
            <p className="font-neue-montreal leading-[26px] relative shrink-0 text-[16px] md:text-[18px] w-full">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="Title"
    >
      <div
        className="content-stretch flex flex-col font-neue-montreal gap-[8px] items-start not-italic relative shrink-0 text-center"
        data-name="Heading"
      >
        <p className="leading-[normal] min-w-full relative shrink-0 text-[#d19f43] text-[13px] tracking-[3.12px] uppercase w-full text-center">
          industries we serve
        </p>
        <p className="leading-[normal] relative shrink-0 text-[#1b1b1b] text-[32px] md:text-[52px] w-full text-center">
          Where We Drive
          <span className="font-neue-montreal not-italic text-[#0c6639]">{` Intelligent`}</span>
          <span className="font-['Neue_Montreal:Bold',sans-serif] not-italic text-[#0c6639]">
            {" "}
          </span>
          <span className="font-test-tiempos-fine not-italic text-[#0c6639]">
            Order
          </span>
        </p>
      </div>
    </div>
  );
}

export default function IndustriesSection() {
  return (
    <div
      className="content-stretch flex flex-col items-center pb-[90px] pt-[60px] px-[20px] md:px-[120px] relative shrink-0 w-full max-w-[1440px] mx-auto"
      data-name="Values"
    >
      <div
        className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full"
        data-name="Container"
      >
        <Title />
        <div
          className="content-stretch flex flex-col gap-[24px] items-start relative rounded-[8px] shrink-0 w-full"
          data-name="Industries"
        >
          <div
            className="content-stretch flex flex-col md:flex-row gap-[24px] h-auto md:h-[376px] items-start relative shrink-0 w-full"
            data-name="Row"
          >
            <IndustryCard
              image={imgIndustry}
              title="Natural Gas & LNG"
              subtitle="Pipeline gas, LNG cargoes, storage, transportation"
              widthClass="md:w-[60%]"
            />
            <IndustryCard
              image={imgIndustry1}
              title="Oil & Gas"
              subtitle="Crude, refined products, NGLs, physical and financial trading"
              widthClass="md:w-[40%]"
            />
          </div>
          <div
            className="content-stretch flex flex-col md:flex-row gap-[24px] h-auto md:h-[376px] items-start relative shrink-0 w-full"
            data-name="Row"
          >
            <IndustryCard
              image={imgIndustry2}
              title="Power & Utilities"
              subtitle="Generation, transmission, capacity markets, renewables"
              widthClass="md:w-[40%]"
            />
            <IndustryCard
              image={imgIndustry3}
              title="Commodity Trading"
              subtitle="Agricultural products, metals, multi-location inventory"
              widthClass="md:w-[60%]"
            />
          </div>
          <div
            className="content-stretch flex h-[300px] md:h-[376px] items-start relative shrink-0 w-full"
            data-name="Row"
          >
            <IndustryCard
              image={imgIndustry4}
              title="Renewables"
              subtitle="Solar, wind, PPAs, renewable energy certificates"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
