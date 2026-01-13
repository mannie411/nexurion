import React from "react";
import { motion } from "motion/react";

function OfficeCard({
  title,
  address,
  phone,
  email,
  index,
}: {
  title: string;
  address: string[];
  phone: string;
  email: string;
  index: number;
}) {
  return (
    <motion.div
      className="content-stretch flex flex-col gap-[8px] items-start relative rounded-[4px] shrink-0 w-full md:w-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
        <p className="font-neue-montreal leading-[1.2] not-italic relative shrink-0 text-[#0c6639] text-[24px] ">
          {title}
        </p>
      </div>
      <div className="font-neue-montreal leading-[0] not-italic relative shrink-0 text-[#444] text-[16px]">
        <p className="leading-[normal] mb-0">
          {address.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < address.length - 1 && <br aria-hidden="true" />}
            </React.Fragment>
          ))}
        </p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal]">
          <span className="font-neue-montreal not-italic text-[#0c6639]">
            Phone:{" "}
          </span>
          <span>
            {phone}
            <br aria-hidden="true" />
          </span>
          <span className="font-neue-montreal not-italic text-[#0c6639]">
            Email:{" "}
          </span>
          <span>{email}</span>
        </p>
      </div>
    </motion.div>
  );
}

export default function GlobalContactDetails() {
  return (
    <section className="relative bg-[#fefaf4]  w-full">
      <div
        className="content-stretch flex flex-col items-center overflow-clip px-[20px] md:px-[120px] py-[60px] md:py-[90px] relative shrink-0 w-full max-w-[1440px] mx-auto"
        data-name="About Us"
      >
        <div
          className="content-stretch flex flex-col lg:flex-row gap-[60px] md:gap-[90px] items-start justify-center relative shrink-0 w-full"
          data-name="Container"
        >
          {/* Title */}
          <motion.div
            className="content-stretch flex flex-col items-start relative shrink-0 w-full lg:w-auto"
            data-name="Title"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="content-stretch flex flex-col gap-[8px] items-start not-italic px-0 py-px relative shrink-0 max-w-[535px]">
              <p className="font-neue-montreal leading-[normal] relative shrink-0 text-[36px] md:text-[48px] w-full">
                <span className="text-[#2b2b2b]">Global Contact</span>{" "}
                <span className="text-[#0c6639]">Details</span>
              </p>
              <p className="font-neue-montreal leading-[26px] relative shrink-0 text-[#444] text-[16px] w-full">
                Want to reach out to us physically? Colleagues in our global
                offices are available to attend to you. Alternatively, please
                get in touch via the contact form.
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <div
            className="basis-0 content-stretch flex grow items-start justify-between  relative self-stretch shrink-0 w-full"
            data-name="Content"
          >
            <div className="content-stretch flex flex-col lg:flex-row gap-[48px] items-start justify-between w-full">
              {/* Column 1: Lagos + US */}
              <div
                className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full lg:w-auto"
                data-name="Column"
              >
                <OfficeCard
                  title="Lagos Office"
                  address={[
                    "Plot 1234, Adeola Odeku Street",
                    "Victoria Island, Lagos 106104",
                    "Nigeria",
                  ]}
                  phone="+234 1 234 5678"
                  email="lagos@nexurion.com"
                  index={0}
                />
                <OfficeCard
                  title="US Team"
                  address={[
                    "5847 San Felipe Street, Suite 2700",
                    "Houston, TX 77057",
                    "United States",
                  ]}
                  phone="+1 (713) 123-4567"
                  email="us@nexurion.com"
                  index={1}
                />
              </div>

              {/* Column 2: Dubai */}
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-full lg:w-auto"
                data-name="Column"
              >
                <OfficeCard
                  title="Dubai Office"
                  address={[
                    "Office 2304, HDS Tower",
                    "Cluster F, Jumeirah Lakes Towers",
                    "Dubai, United Arab Emirates",
                  ]}
                  phone="+971 4 123 4567"
                  email="dubai@nexurion.com"
                  index={2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
