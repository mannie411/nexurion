import { logoLight } from "@/assets/images";
import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

function Logo() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative  w-full md:w-[309px]">
      <Link to="/" className="block">
        <div
          className="h-[32px] relative  w-[236.169px]"
          data-name="Nexurion logo 3 1"
        >
          <img
            alt="Nexurion"
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src={logoLight}
          />
        </div>
      </Link>
      <p
        className="font-neue-montreal leading-[22.522px] min-w-full not-italic opacity-90 
      relative  text-[13px] text-white w-[min-content]"
      >
        Transforming operational chaos into streamlined efficiency for Africa's
        most ambitious energy and commodity trading firms.
      </p>
    </div>
  );
}

function MenuItem({ items, paths }: { items: string[]; paths: string[] }) {
  return (
    <div
      className="content-stretch flex flex-col font-neue-montreal gap-[20px] items-start 
      leading-[normal] not-italic relative  text-[14px]  text-white"
      data-name="Menu Item"
    >
      {items.map((item, index) => (
        <Link
          resetScroll={true}
          key={index}
          to={paths[index]}
          className="relative  cursor-pointer hover:text-[#fabd4b] transition-colors
           no-underline text-white"
        >
          <p>{item}</p>
        </Link>
      ))}
    </div>
  );
}

function MenuList({
  title,
  items,
  paths,
}: {
  title: string;
  items: string[];
  paths: string[];
}) {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-start relative "
      data-name="Menu list"
    >
      <div className="flex flex-col font-neue-montreal justify-center leading-[0] not-italic relative  text-[#fabd4b] text-[18px] ">
        <p className="leading-[normal]">{title}</p>
      </div>
      <MenuItem items={items} paths={paths} />
    </div>
  );
}

function LinkGrid() {
  return (
    <div
      className="content-stretch flex flex-wrap md:flex-nowrap gap-[40px] 
    md:gap-[55px] items-start relative  w-full md:w-auto"
    >
      <MenuList
        title="Company"
        items={["Our Story", "Our Team", "Our Methodology", "Contact"]}
        paths={[
          "/about-us",
          "/about-us#team",
          "/about-us#methods",
          "/contact-us",
        ]}
      />
      <MenuList
        title="Solutions"
        items={[
          "ETRM/CTRM Implementation",
          "Cybersecurity & Protection",
          "IT Project Delivery",
        ]}
        paths={[
          "/solutions/etrm-ctrm",
          "/solutions/cyber-security",
          "/solutions/it",
        ]}
      />
      <MenuList
        title="Impact"
        items={["Case Studies", "Client TestimonialsSection"]}
        paths={["/case-studies", "/case-studies#testimonial"]}
      />
      <MenuList
        title="Resources"
        items={["Whitepapers", "Frameworks", "Insights"]}
        paths={["/insights", "/insights", "/insights"]}
      />
    </div>
  );
}

function FooterUi() {
  return (
    <div
      className="content-stretch flex flex-col md:flex-row gap-[60px] md:gap-0 items-start justify-between relative  w-full"
      data-name="Footer UI"
    >
      <Logo />
      <LinkGrid />
    </div>
  );
}

function Socials() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[20px] md:gap-0 items-center justify-between relative  w-full">
      <p className="font-neue-montreal leading-[normal] not-italic relative  text-[#e5e7eb] text-[16px] ">{`© 2025 Nexurion Limited. All rights reserved. `}</p>

      <div
        className="content-stretch flex gap-[15px] items-start relative "
        data-name="Socials"
      >
        <div className="p-2 border border-white/10 rounded-full hover:bg-white/10 cursor-pointer transition-colors">
          <Linkedin className="text-white size-[18px]" />
        </div>
        <div className="p-2 border border-white/10 rounded-full hover:bg-white/10 cursor-pointer transition-colors">
          <Facebook className="text-white size-[18px]" />
        </div>
        <div className="p-2 border border-white/10 rounded-full hover:bg-white/10 cursor-pointer transition-colors">
          <Twitter className="text-white size-[18px]" />
        </div>
        <div className="p-2 border border-white/10 rounded-full hover:bg-white/10 cursor-pointer transition-colors">
          <Instagram className="text-white size-[18px]" />
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#042a17] relative">
      <div className="container py-[45px] md:py-[90px]" data-name="Footer">
        <div
          className="content-stretch flex flex-col gap-[60px] md:gap-[93px] items-start 
        overflow-clip"
        >
          <FooterUi />
          <div
            className="bg-[#e5e7eb] h-px opacity-[0.15] relative  w-full"
            data-name="Divider"
          >
            <div
              aria-hidden="true"
              className="absolute border border-[#e5e7eb] border-solid inset-[-0.5px] pointer-events-none"
            />
          </div>
          <Socials />
        </div>
        <div
          aria-hidden="true"
          className="absolute border-[#fabd4b] border-[2px_0px_0px] border-solid inset-0 pointer-events-none"
        />
      </div>
    </footer>
  );
}
