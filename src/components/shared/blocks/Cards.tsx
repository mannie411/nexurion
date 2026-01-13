import type { LinkProps } from "@/types";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "./Icons";
import { DownloadButton } from "./Button";
import { Image } from "./Image";

export interface ResourceCardProps {
  id: string | number | undefined;
  description?: string;
  image?: string;
  link: LinkProps;
  label?: string;
  type: "default" | "download";
  title: string;
}

export function ResourceCard({
  description,
  image,
  type,
  label,
  title,
  link,
}: ResourceCardProps) {
  return (
    <div
      className="relative  w-full content-stretch flex flex-col group"
      data-name="Resources Card"
    >
      {/* Image Component */}
      <div
        className="h-[270px] overflow-clip relative shrink-0 w-full"
        data-name="Image"
      >
        <Image
          imgSrc={image}
          className="object-contain transition-transform 
            duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Component */}
      <div
        className="content-stretch flex flex-col items-start justify-end 
        overflow-clip pb-0 pt-[24px] px-0 relative shrink-0 w-full"
        data-name="Content"
      >
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          {/* Label - Green Bar */}
          <div
            className="bg-[rgba(94,94,94,0.2)] content-stretch flex h-[4px] items-center relative shrink-0 w-full"
            data-name="Label"
          >
            <div className="bg-[#0c6639] h-full shrink-0 w-0 group-hover:w-full transition-all duration-500" />
          </div>

          {/* Frame - Title Group */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full min-h-[140px]">
            {label && (
              <div
                className="bg-[rgba(209,159,67,0.2)] content-stretch flex 
                items-center justify-center px-[16px] py-[6px] relative shrink-0"
                data-name="Label"
              >
                <p
                  className="font-neue-montreal font-normal leading-[normal] 
                 text-[#1b1b1b] text-[9px]  tracking-[1.08px] uppercase"
                >
                  {label}
                </p>
              </div>
            )}
            <p
              className="font-neue-montreal leading-[normal]  not-italic 
              relative  text-[#1b1b1b] text-[24px] "
            >
              {title}
            </p>

            {description && <p>{description}</p>}

            {/* Button */}
            {type === "download" && <DownloadButton className="items-start" />}
            {type === "default" && (
              <Link
                to={link.path}
                className="content-stretch flex gap-[6px] items-start relative w-full"
                data-name="Resource link"
              >
                <p className="font-neue-montreal leading-[normal] not-italic relative shrink-0 text-[#d19f43] text-[16px] ">
                  {link.title}
                </p>

                <div className="h-0 relative shrink-0 w-[21px]">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <ArrowRight />
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
