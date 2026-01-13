import { imgCTA } from "@/assets/images";
import { motion } from "motion/react";

interface CTASectionProps {
  backgroundImage?: string;
}

export default function CTA({ backgroundImage }: CTASectionProps) {
  return (
    <section className="relative">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        src={backgroundImage ?? imgCTA}
      />
      <div
        className="content-stretch flex flex-col h-[600px] md:h-[746px] items-center justify-center overflow-clip px-[20px] md:px-[150px] py-[60px] md:py-[90px] relative shrink-0 w-full max-w-[1440px] mx-auto"
        data-name="Services"
      >
        <motion.div
          className="backdrop-blur-sm backdrop-filter bg-[rgba(13,13,13,0.75)] content-stretch flex flex-col gap-[48px] items-center p-[40px] md:p-[64px] relative rounded-[10px] shrink-0 z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            aria-hidden="true"
            className="absolute border border-[rgba(255,255,255,0.49)] border-solid inset-0 pointer-events-none rounded-[10px]"
          />

          {/* Title */}
          <div
            className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 max-w-full"
            data-name="Title"
          >
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
              <p className="font-neue-montreal leading-[normal] not-italic relative shrink-0 text-[36px] md:text-[48px] text-center text-white w-full max-w-[561px]">
                <span>{`Your Transformation Starts With a `}</span>
                <span
                  className="bg-clip-text bg-gradient-to-r font-test-tiempos-fine from-[#d58e0b] from-[8.173%] to-[#ffd380] to-[74.519%]"
                  style={{ WebkitTextFillColor: "transparent" }}
                >
                  Conversation
                </span>
              </p>
            </div>
            <p className="font-neue-montreal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white w-full max-w-[565px]">
              {`Whether you're exploring ETRM solutions or facing an urgent challenge, we're here to help. Schedule 30 minutes to discuss what's possible.`}
            </p>
          </div>

          {/* Button */}
          <motion.button
            className="backdrop-blur-[4.692px] backdrop-filter bg-[#fabd4b] content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0 w-full max-w-[350px] cursor-pointer hover:bg-[#e6a63d] transition-colors"
            data-name="Button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="font-neue-montreal leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[12px] text-center  tracking-[0.6px] uppercase">
              schedule consultation
            </p>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
