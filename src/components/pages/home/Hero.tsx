import { vidHomeHero } from "@/assets/images";
import {
  FilledButton,
  OutlinedButton,
  HeroSection,
} from "@/components/shared/blocks";

export default function Hero() {
  return (
    <HeroSection bgVideo={vidHomeHero} variant="full">
      <div className="relative container h-full">
        <div
          className="flex flex-col h-screen items-center justify-end pb-[60px] md:pb-[120px] w-full"
          data-name="Hero"
        >
          <div
            className="flex-1 relative flex flex-col md:flex-row gap-[40px] md:gap-[80px] 
            justify-end md:items-end md:justify-center w-full"
            data-name="Content + Buttons"
          >
            <div
              className="flex flex-col gap-[7.507px] items-start not-italic relative w-full md:w-[50%]"
              data-name="Heading"
            >
              <p
                className="leading-[normal] relative text-[#fabd4b] 
              text-[13.138px] tracking-[2.6276px] uppercase"
              >
                Defining the Standard
              </p>
              <p
                className="font-medium relative 
             text-[40px] md:text-[58px] text-white leading-tight"
              >
                <span>Intelligent Systems for</span>
                <br aria-hidden="true" />
                <span>{`African `}</span>
                <span
                  className="bg-clip-text font-test-tiempos-fine  inline-block italic font-medium
                  bg-gradient-to-r  from-[#d58e0b] from-[45.192%]  to-[#ffd380] to-[74.519%] 
                  w-[200px]"
                  style={{ WebkitTextFillColor: "transparent" }}
                >
                  Energy
                </span>
              </p>
            </div>
            <div className="flex flex-col w-full md:w-[50%] gap-8">
              <p className="leading-[22.522px] text-[18px] text-white">
                We transform operational chaos into streamlined efficiency for
                Africa's most ambitious energy and commodity trading firms. Move
                from manual reconciliation to automated precision.
              </p>
              <div className="relative flex gap-4 " data-name="Buttons">
                {/* Buttons */}
                <FilledButton label="schedule your consultation" />
                <OutlinedButton label="explore our solutions" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroSection>
  );
}
