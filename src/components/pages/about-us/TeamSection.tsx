interface TeamMemberProps {
  name: string;
  role: string;
  location: string;
  imageSrc: string;
}

function TeamMemberCard({ name, role, location, imageSrc }: TeamMemberProps) {
  return (
    <div className="relative shrink-0 w-full h-[420px]">
      <img
        alt={name}
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        src={imageSrc}
      />
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end pb-[52px] pt-[32px] px-[32px] relative size-full">
          <div
            className="absolute bottom-[-30px] h-[272px] left-1/2 -translate-x-1/2 w-[394px]"
            style={{
              backgroundImage:
                "linear-gradient(-0.131507deg, rgb(0, 0, 0) 2.7651%, rgba(0, 0, 0, 0) 99.835%)",
            }}
          />
          <div className="content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic relative shrink-0 w-full z-10">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-white w-full">
              <p className="font-neue-montreal relative shrink-0 text-[24px] w-full">
                {name}
              </p>
              <p className="font-neue-montreal relative shrink-0 text-[20px] w-full">
                {role}
              </p>
            </div>
            <p className="font-neue-montreal relative shrink-0 text-[#fabd4b] text-[13px] tracking-[3.12px] uppercase">
              {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TeamSectionProps {
  teamMembers: Array<{
    name: string;
    role: string;
    location: string;
    imageSrc: string;
  }>;
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  return (
    <div className="bg-[#031c0f] relative shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[60px] md:gap-[95px] items-center pb-[80px] md:pb-[120px] pt-[60px] md:pt-[90px] px-[20px] md:px-[120px] relative w-full max-w-[1440px] mx-auto">
          {/* Title */}
          <div className="content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[90px] items-start justify-center not-italic relative shrink-0 w-full">
            <div className="content-stretch flex flex-col font-neue-montreal gap-[8px] items-start relative shrink-0 w-full lg:w-auto">
              <p className="leading-[normal] min-w-full relative shrink-0 text-[#d19f43] text-[13px] tracking-[2.6px] uppercase w-[min-content]">
                OUR TEAM
              </p>
              <p className="leading-[normal] relative shrink-0 text-[32px] md:text-[48px] text-white w-full lg:w-[586px]">
                <span>{`The People Behind Your `}</span>
                <span className="font-test-tiempos-fine not-italic text-[#fabd4b]">
                  Transformation
                </span>
              </p>
            </div>
            <div className="basis-0 font-neue-montreal grow leading-[1.5]  relative shrink-0 text-[14px] md:text-[16px] text-[rgba(255,255,255,0.8)]">
              <p className="mb-0">
                We bring decades of combined experience across energy trading,
                ETRM/CTRM systems, cybersecurity, and enterprise technology.
              </p>
              <p className="mb-0">&nbsp;</p>
              <p>
                With teams in Lagos, Dubai, and the United States, we combine
                deep regional insight with world-class technical expertise. You
                get international standards at African-friendly pricing,
                delivered by people who understand both global best practices
                and local market realities.
              </p>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="content-stretch flex flex-col md:flex-row gap-[18px] items-start relative shrink-0">
            <button className="bg-[#fabd4b] content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0 w-full md:w-[232px] hover:bg-[#e0a936] transition-colors">
              <p className="font-neue-montreal leading-[normal] not-italic relative shrink-0 text-[12px] text-center  text-[#1b1b1b] tracking-[0.6px] uppercase">
                Meet the full team
              </p>
            </button>
            <button className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0 w-full md:w-auto border border-white hover:bg-white/10 transition-colors">
              <div
                aria-hidden="true"
                className="absolute border border-solid border-white inset-0 pointer-events-none"
              />
              <p className="font-neue-montreal leading-[normal] not-italic relative shrink-0 text-[12px] text-center  text-white tracking-[0.6px] uppercase">
                Join our team
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
