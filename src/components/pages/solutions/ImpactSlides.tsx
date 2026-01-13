import { useRef } from "react";
import svgPaths from "../../../assets/svg-paths";

function ArrowIcon({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[42px]">
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

function TestimonyCard() {
  return (
    <div className="px-[12px]">
      {" "}
      {/* Add padding for spacing between slides */}
      <div
        className="bg-[rgba(33,50,42,0.6)] content-stretch flex flex-col h-[413px] items-center justify-center overflow-clip pb-[58px] pt-[64px] px-[32px] relative rounded-[8px] w-full"
        data-name="Testimony card"
      >
        <div className="content-stretch flex flex-col gap-[52px] items-center relative shrink-0 w-full">
          <p className="font-neue-montreal leading-[26px] min-w-full not-italic relative shrink-0 text-[16px] text-center text-white w-[min-content]">{`"Nexurion didn't just implement a system – they transformed how we operate. Their team's deep understanding of both global ETRM platforms and our local market challenges made all the difference. We've eliminated manual errors and finally have real-time control over our trading book."`}</p>
          <div className="content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0">
            <div className="content-stretch flex flex-col font-neue-montreal gap-[6px] items-center justify-center leading-[normal] not-italic relative shrink-0 text-center">
              <p className="relative shrink-0 text-[18px]  text-white">
                Chike Okonkwo
              </p>
              <p className="relative shrink-0 text-[#eac486] text-[13px] w-[206px]">
                Chief Operating Officer, Ascendant Energy Trading
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSectionSection() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      className="bg-[#031c0f] overflow-hidden relative shrink-0 w-full"
      data-name="Testimonies"
    >
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[120px] py-[90px]">
        {/* Title */}
        <div className="flex flex-col items-center mb-[60px]">
          <div
            className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-center"
            data-name="Title"
          >
            <div className="content-stretch flex flex-col font-neue-montreal gap-[8px] items-start not-italic relative shrink-0 text-center">
              <p className="leading-[normal] min-w-full relative shrink-0 text-[#d19f43] text-[13px] tracking-[2.6px] uppercase w-full">
                Hear from our partners
              </p>
              <div className="leading-[1.2] relative shrink-0 text-[32px] md:text-[48px] text-black w-full md:w-[728px] text-center">
                <p className="leading-[normal] mb-0 text-white">{`They Chose Partnership. `}</p>
                <p className="leading-[normal]">
                  <span className="text-white">{`Here's What`}</span>{" "}
                  <span className="font-test-tiempos-fine not-italic text-[#fabd4b]">
                    Followed
                  </span>
                  <span className="text-[#fabd4b]">.</span>
                </p>
              </div>
            </div>
            <p className="font-neue-montreal leading-[24px] relative shrink-0 text-[16px] text-white w-full md:w-[550px]">{`Don't just take our word for it. Here's what executives at leading energy and commodity companies say about working with Nexurion.`}</p>
          </div>
        </div>

        {/* Carousel */}
        <div className="mb-[60px]">
          <Slider ref={sliderRef} {...settings}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <TestimonyCard key={i} />
            ))}
          </Slider>
        </div>

        {/* Custom Arrows */}
        <div className="flex justify-center gap-[20px]">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer bg-transparent border-none p-0"
            aria-label="Previous slide"
          >
            <ArrowIcon color="#D5D5D5" />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="cursor-pointer hover:opacity-80 transition-opacity bg-transparent border-none p-0 rotate-180"
            aria-label="Next slide"
          >
            <ArrowIcon color="#D19F43" />
          </button>
        </div>
      </div>
    </div>
  );
}
