import { imgOverlay, imgPlaceholder } from "@/assets/images";
import { cn } from "@/components/ui/utils";
import type { PropsWithChildren } from "react";

interface HeroHeaderProps extends PropsWithChildren {
  title?: string;
  subtitle?: string;
  bgImage?: string;
  bgVideo?: string;
  variant?: "full" | "half";
}

export default function HeaderHero({
  children,
  title,
  subtitle,
  bgImage,
  bgVideo,
  variant,
}: HeroHeaderProps) {
  return (
    <div className="relative w-full -mt-[104px] overflow-clip" data-name="Hero">
      <div
        aria-hidden="true"
        data-name="Hero Background"
        className={cn(
          "absolute inset-0 pointer-events-none h-screen w-full z-0 overflow-clip",
          variant === "full" ? "h-screen" : " h-[300px] md:h-[400px]"
        )}
      >
        {bgVideo && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="max-w-full object-cover size-full "
          >
            <source src={bgVideo} type="video/webm" />
            <source src={bgVideo} type="video/mp4 " />
            Your browser does not support the video tag.
          </video>
        )}

        {!bgVideo && (
          <img
            alt="hero background"
            className="max-w-full object-cover object-center size-full "
            src={bgImage ?? imgPlaceholder}
          />
        )}
        <div
          className="absolute inset-0 opacity-80 size-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0) 28.56%, rgb(0, 0, 0) 123.92%), linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%)",
          }}
        />
      </div>
      <div
        className={cn(
          "relative z-10 overflow-clip",
          variant === "full" ? "h-screen" : " h-[300px] md:h-[400px]"
        )}
        data-name="Hero Content"
      >
        <div
          className="absolute inset-0 size-full"
          style={{
            backgroundImage: `url(${imgOverlay})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />

        {children && children}
        {!children && (
          <div className="relative container flex flex-col justify-end size-full h-full">
            <div
              className="relative size-full content-stretch flex flex-col gap-[10px] 
                md:gap-[20px] items-start justify-end py-[20px] md:py-[80px]"
            >
              {subtitle && (
                <p className="text-[#D19F43] uppercase">{subtitle}</p>
              )}
              <p
                className="font-neue-montreal leading-[normal] not-italic relative 
                 text-[32px] md:text-[58px]  text-white md:max-w-[720px]"
              >
                {title ?? "Page Title"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
