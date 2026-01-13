interface FeatureItemProps {
  title: string;
  description: string;
}

function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative rounded-[4px]  w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start relative  w-full">
        <p
          className="font-neue-montreal leading-[normal] not-italic relative 
         text-[#0c6639] text-[20px] md:text-[24px]"
        >
          {title}
        </p>
      </div>
      <p
        className="font-neue-montreal leading-[1.5] not-italic relative  
      text-[#444] text-[14px] md:text-[16px] w-full"
      >
        {description}
      </p>
    </div>
  );
}

interface WhyChooseNexurionSectionProps {
  imageSrc: string;
}

export default function WhyChooseNexurionSection({
  imageSrc,
}: WhyChooseNexurionSectionProps) {
  return (
    <section className="relative container">
      <div
        className="bg-white content-stretch flex flex-col gap-[60px] md:gap-[72px] 
    items-center pb-[80px] md:pb-[120px] pt-[60px] md:pt-[90px]
    relative  w-full"
      >
        {/* Image */}
        <div className="h-[250px] md:h-[358px] relative  w-full">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src={imageSrc}
          />
        </div>

        {/* Content */}
        <div className="content-stretch flex flex-col lg:flex-row gap-[40px] md:gap-[64px] items-start md:items-center relative  w-full">
          {/* Left: Heading */}
          <div className="flex-1 flex flex-row items-center self-stretch w-full lg:w-auto">
            <div className="content-stretch flex flex-col gap-[20px] h-full items-start relative  w-full lg:w-[490px]">
              <div className="content-stretch flex flex-col items-start relative  w-full">
                <div className="content-stretch flex flex-col font-neue-montreal gap-[8px] items-start not-italic relative ">
                  <p className="leading-[normal] min-w-full relative  text-[#d19f43] text-[13px] tracking-[2.6px] uppercase w-[min-content]">
                    the nexurion difference
                  </p>
                  <p className="capitalize leading-[normal] relative  text-[#2b2b2b] text-[32px] md:text-[48px] w-full">
                    <span>{`Why Choose `}</span>
                    <span className="text-[#0c6639]">Nexurion?</span>
                  </p>
                </div>
              </div>
              <p className="font-neue-montreal leading-[1.5] min-w-full not-italic relative  text-[#444] text-[14px] md:text-[16px] w-[min-content]">
                {`The difference is simple: we're invested in making your team self-sufficient. Our success is measured by how confidently you operate without us, not by how often you call us back.`}
              </p>
            </div>
          </div>

          {/* Right: Features */}
          <div className="flex-1 flex flex-row grow items-center self-stretch ">
            <div
              className="content-stretch flex grow h-full items-start justify-between
           relative flex-col gap-8"
            >
              <div className="content-stretch flex flex-col md:flex-row gap-[40px] md:gap-[61px] items-start">
                <FeatureItem
                  title="Global Standards"
                  description="No more choosing between international expertise and local understanding. We deliver both."
                />
                <FeatureItem
                  title="True Partnership"
                  description="We build long-term relationships where we become a trusted advisor—not just a vendor you call when something breaks."
                />
              </div>
              <div className="content-stretch flex flex-col md:flex-row  gap-[40px] md:gap-[50px] items-start">
                <FeatureItem
                  title="Build Lasting Independence"
                  description="We equip your team to succeed independently. Our goal is to make ourselves less necessary over time, not more."
                />
                <FeatureItem
                  title="Clear & Fair Terms"
                  description="Honest assessments, clear pricing, and realistic timelines. No hidden fees. No consulting tricks."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
