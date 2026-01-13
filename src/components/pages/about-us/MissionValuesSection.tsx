import {
  CollaborationIcon,
  IntegrityIcon,
  PurposeIcon,
  StewardshipIcon,
} from "@/components/shared/blocks";
import React from "react";

interface MissionImageProps {
  imageSrc: string;
}

function MissionContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-full items-start not-italic pb-0 pt-[40px] md:pt-[90px] px-0 relative  w-full lg:w-[514px]">
      <p className="font-neue-montreal leading-[normal] relative  text-[#074a28] text-[32px] md:text-[40px] w-full">
        Our Mission
      </p>
      <p className="font-neue-montreal leading-[1.5] relative  text-[#444] text-[16px] md:text-[18px] w-full">
        Transform mission-critical trading workflows through digitization,
        automation, and protection—so you can trade with confidence, clarity,
        and control.
      </p>
    </div>
  );
}

function MissionImage({ imageSrc }: MissionImageProps) {
  return (
    <div className="basis-0 grow h-[250px] md:h-[358px]  relative ">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        src={imageSrc}
      />
    </div>
  );
}

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div
      className="bg-[#f8fcfa] content-stretch flex flex-col gap-[16px] 
    items-start p-[24px] relative rounded-[4px]  w-full"
    >
      <div className="content-stretch flex flex-col gap-[10px] items-start">
        {icon}
        <p
          className="font-neue-montreal leading-[normal]  not-italic 
        relative  text-[#074a28] text-[20px] "
        >
          {title}
        </p>
      </div>
      <p
        className="font-neue-montreal leading-[1.5] not-italic relative  
      text-[#444] text-[14px]"
      >
        {description}
      </p>
    </div>
  );
}

interface MissionValuesSectionProps {
  missionImage: string;
  valuesImage: string;
}

export default function MissionValuesSection({
  missionImage,
  valuesImage,
}: MissionValuesSectionProps) {
  return (
    <section className="relative container">
      <div className="bg-white content-stretch flex flex-col gap-[80px] md:gap-[120px] items-center overflow-clip   relative  py-[80px md:py-[120px] ">
        {/* Mission Section */}
        <div className="content-stretch flex flex-col gap-[60px] md:gap-[90px] items-center relative  w-full">
          {/* Title */}
          <div className="content-stretch flex flex-col items-start relative  text-center">
            <div
              className="content-stretch flex flex-col font-neue-montreal gap-[8px] 
          items-start not-italic relative "
            >
              <p
                className="leading-[normal] min-w-full relative  text-[#d19f43] text-[13px] 
            tracking-[2.6px] uppercase "
              >
                What guides every decision
              </p>
              <p
                className="leading-[normal] relative  text-[#2b2b2b] text-[32px] 
            md:text-[48px] w-full "
              >
                We Exist to Simplify Complexity and Build
                <span className="font-test-tiempos-fine not-italic text-[#0c6639]">{` Legacies`}</span>
              </p>
            </div>
          </div>

          {/* Mission Content */}
          <div
            className="content-stretch flex flex-col md:flex-row gap-[40px] 
          md:gap-[64px] items-center relative  w-full"
          >
            <div className="flex flex-row items-center self-stretch w-full md:w-auto">
              <MissionContent />
            </div>
            <MissionImage imageSrc={missionImage} />
          </div>
        </div>

        {/* Values Section */}
        <div
          className="content-stretch flex flex-col lg:flex-row gap-[60px]
         md:gap-[90px] items-start justify-center relative  w-full"
        >
          {/* Left Content */}
          <div className="content-stretch flex flex-col gap-[48px] grow h-full relative ">
            <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative  w-full">
              <p
                className="font-neue-montreal leading-[normal] min-w-full relative  
              text-[#074a28] text-[32px] md:text-[40px] "
              >
                Our Values
              </p>
              <p
                className="font-neue-montreal leading-[1.5] relative  text-[#444] text-[16px]
               md:text-[18px] w-full "
              >
                The principles that shape how we work, who we partner with, and
                how we measure true success
              </p>
            </div>
            <div className="basis-0 relative min-h-full  w-full">
              <img
                alt=""
                className="absolute inset-0 max-w-full object-center object-cover pointer-events-none size-full"
                src={valuesImage}
              />
            </div>
          </div>

          {/* Value Cards */}
          <div className="content-start flex flex-wrap gap-[20px] items-start relative self-stretch  w-full">
            <div
              className="content-stretch flex flex-col md:flex-row items-start 
            justify-between gap-[20px] relative  w-full"
            >
              <ValueCard
                icon={<CollaborationIcon />}
                title="Collaboration over competition"
                description="We don't hoard knowledge. We share it. We build with you, not just for you."
              />
              <ValueCard
                icon={<PurposeIcon />}
                title="Purpose over profit"
                description="Your transformation is how we measure success. We're here to serve, not just to sell."
              />
            </div>
            <div className="content-stretch flex flex-col md:flex-row items-start justify-between gap-[20px] relative  w-full">
              <ValueCard
                icon={<StewardshipIcon />}
                title="Stewardship and service"
                description={`We protect your success as if it were our own. 
                  When you trust us with your trading operations, we treat that responsibility seriously.`}
              />
              <ValueCard
                icon={<IntegrityIcon />}
                title="Integrity and efficiency"
                description="We deliver what we promise, when we promise it. No inflated timelines. No surprise fees. No excuses."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
