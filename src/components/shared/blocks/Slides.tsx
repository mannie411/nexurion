import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui";
import { OutlinedButton } from "./Button";
import {
  imgCaseSlide1,
  imgCaseSlide2,
  imgCaseSlide3,
  imgCaseSlide4,
  imgPlaceholder,
} from "@/assets/images";
import svgPaths from "@/assets/svg-paths";
import type { Testimonial } from "@/types";

type Case = {
  title: string;
  content: string;
  slug: string;
  image?: string;
  tag: string;
};

const cases: Case[] = [
  {
    content: `A prominent Nigerian gas trading company was 
    struggling with data fragmentation across 12 different
    spreadsheets and legacy systems. Daily position reporting took 48 hours, and `,
    slug: "case-1",
    image: imgCaseSlide1,
    tag: "case study",
    title: "Creating a Single Source of Truth for a Leading Gas Trader",
  },
  {
    content: `A prominent Nigerian gas trading company was struggling with
    data fragmentation across 12 different spreadsheets and legacy
    systems. Daily position reporting took 48 hours, and`,
    slug: "case-2",
    image: imgCaseSlide2,
    tag: "Scenario study",
    title: "How We'd Transform: Multi-Country Commodity Trading Integration",
  },
  {
    content: `A prominent Nigerian gas trading company was struggling with
    data fragmentation across 12 different spreadsheets and legacy
    systems. Daily position reporting took 48 hours, and`,
    slug: "case-3",
    image: imgCaseSlide3,
    tag: "Scenario study",
    title: "How We'd Transform: Multi-Country Commodity Trading Integration",
  },
  {
    content: `A prominent Nigerian gas trading company was struggling with
    data fragmentation across 12 different spreadsheets and legacy
    systemscase-4. Daily position reporting took 48 hours, and`,
    slug: "case-4",
    image: imgCaseSlide4,
    tag: "Case study",
    title: "Securing Trading Infrastructure for a Power Utility",
  },
];

const testimonials: Testimonial[] = [
  {
    content:
      "Nexurion didn't just implement a system – they transformed how we operate. Their team's deep understanding of both global ETRM platforms and our local market challenges made all the difference. We've eliminated manual errors and finally have real-time control over our trading book.",
    name: "Chike Okonkwo",
    role: "Chief Operating Officer, Ascendant Energy Trading",
  },

  {
    content:
      "Security was our biggest blind spot. We knew we were vulnerable, but we didn't know how to fix it without slowing down our traders. Nexurion built a fortress around our operations that's invisible to our users but impenetrable to threats.",
    name: "Chike Okonkwo",
    role: "Chief Operating Officer, Ascendant Energy Trading",
  },

  {
    content:
      "The integration project was seamless. We connected five different legacy systems into one coherent platform. The data visibility we have now is a game changer for our strategic decision making.",
    name: "Chike Okonkwo",
    role: "Chief Operating Officer, Ascendant Energy Trading",
  },
];

function ArrowIcon({
  color,
  rotate = false,
}: {
  color: string;
  rotate?: boolean;
}) {
  return (
    <div
      className={`relative shrink-0 size-[42px] ${rotate ? "rotate-180" : ""}`}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 42 42"
      >
        <g id="Group 200">
          <circle cx="21" cy="21" id="Ellipse 4" r="20.5" stroke={color} />
          <g id="Arrow - Right">
            <path
              d="M14 21.2214H27"
              id="Stroke 1"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.3"
            />
            <path
              d={svgPaths.p1eb4b000}
              id="Stroke 3"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.3"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TestimonyCardWithProps({ content, name, role }: Testimonial) {
  return (
    <div
      className="bg-[rgba(33,50,42,0.6)] content-stretch flex flex-col h-[413px] items-center justify-center overflow-clip pb-[58px] pt-[64px] px-[32px] relative rounded-[8px] shrink-0 w-[398px] mx-4"
      data-name="Testimony card"
    >
      <div className="content-stretch flex flex-col gap-[52px] items-center relative shrink-0 w-full">
        <p className="font-neue-montreal leading-[26px] min-w-full not-italic relative shrink-0 text-[16px] text-center text-white w-[min-content]">
          "{content}"
        </p>
        <div className="content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0">
          <div className="content-stretch flex flex-col font-neue-montreal gap-[6px] items-center justify-center leading-[normal] not-italic relative shrink-0 text-center">
            <p className="relative shrink-0 text-[18px]  text-white">{name}</p>
            <p className="relative shrink-0 text-[#eac486] text-[13px] w-[206px]">
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialSlidesSection() {
  return (
    <div
      className="bg-[#031c0f] py-[90px] overflow-hidden relative shrink-0 w-full"
      data-name="Testimonies"
    >
      <div className="content-stretch flex flex-col items-center w-full">
        {/* Title */}
        <div
          className="container content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-center mb-[64px]"
          data-name="Title"
        >
          <div className="content-stretch flex flex-col font-neue-montreal gap-[8px] items-start relative shrink-0">
            <p className="leading-[normal] min-w-full relative shrink-0 text-[#d19f43] text-[13px] tracking-[2.6px] uppercase w-full text-center">
              Hear from our partners
            </p>
            <div className="leading-[0] relative shrink-0 text-[32px] md:text-[48px] text-black w-full md:w-[728px] text-center">
              <p className="leading-[1.2] mb-0 text-white inline">{`They Chose Partnership. `}</p>
              <p className="leading-[1.2] inline">
                <span className="text-white">{`Here's What`}</span>{" "}
                <span className="font-test-tiempos-fine not-italic text-[#fabd4b]">
                  Followed
                </span>
                <span className="text-[#fabd4b]">.</span>
              </p>
            </div>
          </div>
          <p className="font-neue-montreal leading-[24px] relative shrink-0 text-[16px] text-white w-full md:w-[550px] text-center">{`Don't just take our word for it. Here's what executives at leading energy and commodity companies say about working with Nexurion.`}</p>
        </div>

        {/* Cards */}
        <div className="flex overflow-x-auto w-full px-[20px] md:px-[120px] no-scrollbar pb-8 justify-center">
          {testimonials.map(({ content, name, role }, idx) => (
            <TestimonyCardWithProps
              key={`item-${idx}`}
              content={content}
              name={name}
              role={role}
            />
          ))}
        </div>

        {/* Slider Triggers */}
        <div
          className="absolute content-stretch flex gap-[20px] items-center bottom-[50px] left-1/2 -translate-x-1/2"
          data-name="Slide triggers"
        >
          <div className="opacity-60 cursor-pointer">
            <ArrowIcon color="#D5D5D5" rotate={true} />
          </div>
          <div className="cursor-pointer">
            <ArrowIcon color="#D19F43" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <section className="relative bg-[#031C0F] ">
      <div
        className="py-[90px] overflow-clip relative shrink-0 w-full"
        data-name="Testimonies"
      >
        <div className="flex flex-col gap-[64px] items-center">
          <div
            className="container content-stretch flex flex-col gap-[24px] items-center 
            not-italic relative shrink-0 text-center"
            data-name="Title"
          >
            <div
              className="content-stretch flex flex-col font-neue-montreal gap-[8px] 
            items-start relative shrink-0"
            >
              <p
                className="leading-[normal] min-w-full relative shrink-0 text-[#d19f43] 
              text-[13px] tracking-[2.6px] uppercase w-[min-content]"
              >
                Hear from our partners
              </p>
              <div
                className="leading-[0] relative shrink-0 text-[32px] md:text-[48px] 
              text-black w-full md:w-[728px]"
              >
                <p className="leading-[normal] mb-0 text-white text-[48px]">
                  They Chose Partnership.
                  <br />
                  <span className="text-white">{`Here's What`}</span>{" "}
                  <span className="font-test-tiempos-fine italic text-[#fabd4b]">
                    Followed
                  </span>
                  <span className="text-[#fabd4b]">.</span>
                </p>
              </div>
            </div>
            <p
              className="font-neue-montreal leading-[24px] relative shrink-0 text-[16px] 
            text-white w-full md:w-[550px]"
            >
              Don't just take our word for it. Here's what executives at leading
              energy and commodity companies say about working with Nexurion.
            </p>
          </div>

          <Carousel setApi={setApi} className="w-full">
            <CarouselContent className="gap-[24px]">
              <CarouselItem className="basis-[10%] md:basis-[20%] pointer-events-none" />
              {testimonials.map(({ content, name, role }, idx) => (
                <CarouselItem
                  key={idx}
                  className="basis-[85%] md:basis-[400px]"
                >
                  <TestimonyCardWithProps
                    content={content}
                    name={name}
                    role={role}
                  />
                </CarouselItem>
              ))}
              <CarouselItem className="basis-[10%] md:basis-[20%] pointer-events-none" />
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              {/* Navigation Arrows */}
              <div
                className=" cursor-pointer hover:opacity-70 transition-opacity"
                onClick={() => api?.scrollPrev()}
              >
                <ArrowIcon color="#5E5E5E" />
              </div>
              <div
                className="  z-10 cursor-pointer hover:opacity-70 transition-opacity"
                onClick={() => api?.scrollNext()}
              >
                <ArrowIcon color="#D19F43" rotate={true} />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ content, image, slug, title, tag }: Case) {
  return (
    <div
      className="content-stretch flex flex-col h-auto md:h-[556px] items-start justify-center relative shrink-0 w-full"
      data-name="Cards"
    >
      <div
        className="basis-0 grow min-h-[400px] md: overflow-clip relative shrink-0 w-full"
        data-name="Image"
      >
        <div
          className="absolute h-full md:h-[673px] left-0 top-0 md:top-[-24.06px] w-full"
          data-name="portrait-engineers-work-hours-job-site 1"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={image ?? imgPlaceholder}
          />
        </div>
        {/* Floating card */}
        <div
          className="relative md:absolute bg-white content-stretch flex flex-col h-auto md:h-[443px] 
          items-start justify-center overflow-clip p-[32px] md:p-[64px] right-0 md:right-[80px] top-0 
          md:top-[calc(50%-0.5px)] md:translate-y-[-50%] w-full md:w-auto m-4 md:m-0 rounded-lg 
          md:rounded-none shadow-lg md:shadow-none"
          data-name="Container"
        >
          <div className="content-stretch flex items-center relative shrink-0">
            <div
              className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full md:w-[525px]"
              data-name="Content"
            >
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <div
                    className="bg-[rgba(209,159,67,0.2)] content-stretch flex items-center 
                    justify-center px-[16px] py-[6px] relative shrink-0"
                    data-name="Label"
                  >
                    <p
                      className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal 
                    leading-[normal] not-italic relative shrink-0 text-[#2b2b2b] text-[9px]
                    tracking-[2.16px] uppercase"
                    >
                      {tag}
                    </p>
                  </div>
                  <p
                    className="font-neue-montreal leading-[normal] min-w-full not-italic r
                  elative shrink-0 text-[#074a28] text-[24px] md:text-[40px] w-[min-content]"
                  >
                    {title}
                  </p>
                </div>
                <p
                  className="font-neue-montreal leading-[26px] not-italic relative shrink-0 
                text-[#444] text-[16px] w-full"
                >
                  {content}
                </p>
              </div>
              <Link
                to={`/case-studies/${slug}`}
                className="content-stretch flex gap-[6px] items-center relative shrink-0 
                cursor-pointer hover:opacity-70 transition-opacity"
                data-name="Button"
              >
                <p
                  className="font-neue-montreal leading-[normal] not-italic relative shrink-0 
                text-[#d19f43] text-[16px] "
                >
                  View full case study
                </p>
                <div className="h-0 relative shrink-0 w-[21px]">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 21 1"
                    >
                      <line
                        id="Line 1"
                        stroke="var(--stroke-0, #D19F43)"
                        strokeLinecap="round"
                        x1="0.5"
                        x2="20.5"
                        y1="0.5"
                        y2="0.5"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CaseStudySlidesSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    // Set total count of slides
    setCount(api.scrollSnapList().length);
    // Set initial active slide
    setCurrent(api.selectedScrollSnap());

    // Listen for slide changes
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Calculate the width of the progress bar based on total cases
  const progressWidth = count > 0 ? (1 / count) * 100 : 0;
  // Calculate the horizontal offset (left position)
  const progressLeft = count > 0 ? (current / count) * 100 : 0;

  return (
    <section className="relative">
      <div
        className="relative bg-white py-[90px] overflow-clip shrink-0 w-full max-w-[1440px] mx-auto"
        data-name="Case Studies"
      >
        <div className="flex flex-col gap-[24px] items-center w-full px-[20px] md:px-[120px]">
          <div
            className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0"
            data-name="Title"
          >
            <div
              className="content-stretch flex flex-col font-neue-montreal gap-[8px] 
      items-start not-italic relative shrink-0 text-center"
            >
              <p
                className="leading-[normal] min-w-full relative shrink-0 text-[#d19f43] 
        text-[13px] tracking-[2.6px] uppercase w-[min-content]"
              >
                Our impact
              </p>
              <p className="leading-[normal] relative shrink-0 text-[#2b2b2b] text-[32px] md:text-[48px] w-full md:w-[515px]">
                <span>{`Transforming Africa's Energy`}</span>
                <span className="font-['Neue_Montreal:Bold',sans-serif] not-italic">
                  {" "}
                </span>
                <span className="font-test-tiempos-fine not-italic text-[#0c6639]">
                  Operations
                </span>
              </p>
            </div>
          </div>
          <div className="w-full relative h-auto">
            {/* Carousel */}
            <Carousel
              setApi={setApi}
              opts={{ loop: true }}
              plugins={[Autoplay({ delay: 6000 })]}
              className="relative w-full"
            >
              <div className="w-[calc(100%-50px)] md:w-[calc(100%-100px)] mx-auto">
                <CarouselContent>
                  {cases.map((item, idx) => (
                    <CarouselItem key={`item-${idx}`}>
                      <CaseStudyCard {...item} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* Navigation Arrows */}
                <div
                  className="absolute left-0 top-[50%] -translate-y-1/2 z-10 cursor-pointer hover:opacity-70 transition-opacity"
                  onClick={() => api?.scrollPrev()}
                >
                  <ArrowIcon color="#5E5E5E" />
                </div>
                <div
                  className="absolute right-0 top-[50%] -translate-y-1/2 z-10 cursor-pointer hover:opacity-70 transition-opacity"
                  onClick={() => api?.scrollNext()}
                >
                  <ArrowIcon color="#1C3F3A" rotate={true} />
                </div>
              </div>
            </Carousel>

            {/* Dynamic Progress Bar */}
            <div className="relative mx-auto w-[calc(100%-50px)] md:w-[calc(100%-100px)] h-[2px] bg-[rgba(94,94,94,0.15)] mt-12 overflow-hidden">
              <div
                className="absolute bg-[#0c6639] h-full transition-all duration-500 ease-in-out"
                style={{
                  width: `${progressWidth}%`,
                  left: `${progressLeft}%`,
                }}
              />
            </div>
          </div>

          <OutlinedButton
            label="view all case studies"
            bgColor="#074a28"
            textColor="#074a28"
          />
        </div>
      </div>
    </section>
  );
}
