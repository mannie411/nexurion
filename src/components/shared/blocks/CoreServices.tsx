import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { useTransform, motion, useScroll, MotionValue } from "motion/react";
import { cn } from "@/components/ui/utils";
import type { LinkProps } from "@/types";
import { FilledButton, OutlinedButton } from "./Button";
import {
  imgOverlay1,
  imgSolution1,
  imgSolution2,
  imgSolution3,
} from "@/assets/images";

interface ServiceCardProps {
  bgImg: string;
  title: string;
  content: string;
  link: string;
}

function Title() {
  return (
    <div className="content-stretch flex flex-col font-neue-montreal gap-[8px] items-start relative shrink-0">
      <p className="leading-[normal] min-w-full relative shrink-0 text-[#d19f43] text-[13px] tracking-[2.6px] uppercase w-[min-content]">
        Our solutions Precision-engineered for you
      </p>
      <p className="leading-[normal] relative shrink-0 text-[#2b2b2b] text-[48px] w-full md:w-[728px]">
        <span>{`We Provide the Integrated Systems Your `}</span>
        <span className="text-[#0c6639]">{`Operations `}</span>
        <span className="font-test-tiempos-fine not-italic text-[#0c6639]">
          Demand
        </span>
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-center text-center px-4 md:px-0 pt-[90px] pb-[40px]"
      data-name="Title"
    >
      <Title />
      <p className="font-neue-montreal leading-[24px] relative shrink-0 text-[#444] text-[16px] w-full md:w-[550px]">
        We move beyond standalone fixes to deliver a cohesive technology
        ecosystem that unifies your trading, risk, and operations.
      </p>
    </div>
  );
}

function Button({ path }: LinkProps) {
  return (
    <Link
      to={`/our-solutions/${path}`}
      className="backdrop-blur-[4.692px] backdrop-filter content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0 z-10 cursor-pointer hover:bg-white/10 transition-colors"
      data-name="Button"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#fabd4b] border-[0.938px] border-solid inset-0 pointer-events-none"
      />
      <p className="font-neue-montreal leading-[normal] not-italic relative shrink-0 text-[#fabd4b] text-[12px] text-center  tracking-[2.88px] uppercase">
        LEARN MORE
      </p>
    </Link>
  );
}

function ServiceCard({ bgImg, title, content, link }: ServiceCardProps) {
  return (
    <div
      className="basis-0 bg-[#4c5752] grow  relative shrink-0 
      w-full rounded-[16px] overflow-hidden h-[600px] md:h-[653px] origin-top"
      data-name="Service"
    >
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div
          className="content-stretch flex flex-col items-start justify-end px-[30px] 
        md:px-[64px] py-[40px] md:py-[72px] relative size-full"
        >
          <div
            className="absolute h-full left-0 top-0 w-full opacity-80"
            data-name="background image"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-full object-top object-cover pointer-events-none size-full"
              src={bgImg}
            />
          </div>
          <div
            className="absolute h-full left-0 top-0 w-full opacity-80"
            data-name="background image"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-full object-top object-cover pointer-events-none size-full"
              src={imgOverlay1}
            />
          </div>
          <div
            className="absolute h-[248px] left-0 bottom-0  w-full"
            style={{
              backgroundImage:
                "linear-gradient(0.302043deg, rgb(0, 0, 0) 2.2507%, rgba(0, 0, 0, 0) 104.41%)",
            }}
          />
          <div
            className="content-stretch flex flex-col md:flex-row items-center md:items-end justify-end
          md:justify-between gap-8 relative w-full h-full pb-0 md:pb-[20px]"
          >
            <div
              className="content-stretch flex flex-col gap-[12px] items-start 
            leading-[normal] not-italic relative  text-white w-full  z-10"
            >
              <p className="font-neue-montreal relative  text-[24px] w-full">
                {title}
              </p>
              <p className="font-neue-montreal relative text-[18px] w-full">
                {content}
              </p>
            </div>
            <Button path={link} title="" />
          </div>
        </div>
      </div>
    </div>
  );
}

const Wrapper = ({
  index,
  item,
  progress,
  range,
  targetScale,
}: {
  index: number;
  item: ServiceCardProps;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}) => {
  const containerRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ['start end', 'start start']
  // })

  // const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.div
      ref={containerRef}
      className={cn(`sticky `, `top-[var(--sticky-top)] z-[var(--sticky-z)]`)}
      style={{
        "--sticky-top": `${100 + 40 * index}px`,
        "--sticky-z": `${10 + 10 * index}`,
        scale,
      }}
    >
      <ServiceCard {...item} />
    </motion.div>
  );
};

export default function CoreServiceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const services: ServiceCardProps[] = [
    {
      bgImg: imgSolution1,
      content: `Replace fragmented systems with unified trading platforms. Get
                complete visibility across your entire trade lifecycle—from deal
                capture to settlement.`,
      link: "/",
      title: "ETRM/CTRM Implementation",
    },
    {
      bgImg: imgSolution2,
      content: `Protect your trading operations from sophisticated threats. We embed
        security throughout your stack from the ground up.`,
      link: "/",
      title: "Cybersecurity & Infrastructure Protection",
    },
    {
      bgImg: imgSolution3,
      content: `Manage complex integrations, bridge business and technical teams, and
        deliver projects that finish on time.`,
      link: "/",
      title: "IT Project Delivery & Digital Transformation",
    },
  ];
  return (
    <section className="relative bg-[#fefbf6]">
      <div
        className="container relative shrink-0 flex flex-col items-center"
        data-name="Services"
      >
        <Heading />

        {/* Sticky Cards Section */}
        <div
          ref={containerRef}
          className="w-full flex flex-col gap-[32px]  pb-[90px]"
        >
          {services.map((props, idx) => {
            const targetScale = 1 - (services.length - idx) * 0.05;
            // <motion.div
            //   key={`item-${idx}`}
            //   className={cn(
            //     "sticky top-[100px] z-10",
            //     `top-[var(--sticky-top)] z-[var(--sticky-z)]`
            //   )}
            //   style={{
            //     "--sticky-top": `${100 + 40 * idx}px`,
            //     "--sticky-z": `${10 + 10 * idx}px`,
            //   }}
            // >

            //   <ServiceCard {...props} />
            // </motion.div>
            return (
              <Wrapper
                key={`item-${idx}`}
                index={idx}
                item={props}
                progress={scrollYProgress}
                range={[idx * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>

        <div
          className="content-stretch flex gap-4 pb-[90px]"
          data-name="Buttons"
        >
          <FilledButton label="schedule your consultation" />
          <OutlinedButton
            label="explore our solutions"
            textColor="#074A28"
            bgColor="#074A28"
          />
        </div>
      </div>
    </section>
  );
}
