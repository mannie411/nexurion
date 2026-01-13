import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link as RouterLink } from "@tanstack/react-router";
import {
  logoDark,
  imgIndustry,
  imgIndustry1,
  imgIndustry2,
  imgIndustry3,
  imgIndustry4,
  imgIndustry5,
} from "@/assets/images";
import { Close } from "../blocks";

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function CloseMenu({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 w-full"
      data-name="Close Menu"
    >
      <button
        onClick={onClose}
        className="relative shrink-0 size-[42px] cursor-pointer hover:opacity-70 transition-opacity"
        data-name="cancel-01"
        aria-label="Close menu"
      >
        <Close />
      </button>
      <div
        className="h-[32px] relative shrink-0 w-[236.169px]"
        data-name="Nexurion logoDark 3 1"
      >
        <img
          alt="Nexurion"
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={logoDark}
        />
      </div>
    </div>
  );
}

function PageLink({ text }: { text: string }) {
  return (
    <div
      className="content-stretch flex items-center justify-start relative shrink-0 text-[20px]"
      data-name="Page Link"
    >
      <p className="capitalize font-['Plus_Jakarta_Sans',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2b2b2b] text-[18px]  tracking-[0.9px] hover:text-[#074a28] transition-colors cursor-pointer">
        {text}
      </p>
    </div>
  );
}

function MenuLinkWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="content-stretch flex items-center px-0 py-[12px] relative shrink-0 w-full"
      data-name="Link"
    >
      {children}
    </div>
  );
}

function Button() {
  return (
    <button
      className="content-stretch flex items-center justify-center px-[24px] py-[16px] 
      relative shrink-0 group cursor-pointer"
      data-name="Button"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#074a28] border-solid inset-0 
        pointer-events-none group-hover:bg-[#074a28]/10 transition-colors"
      />
      <p
        className="font-neue-montreal font-medium leading-[normal] 
      not-italic relative shrink-0 text-[#074a28] text-[12px]
      text-center  tracking-[0.6px] uppercase"
      >
        schedule consultation
      </p>
    </button>
  );
}

export default function Drawer({ isOpen, onClose }: SidebarMenuProps) {
  const links = [
    { text: "Home", path: "/" },
    { text: "Our Story", path: "/about-us" },
    { text: "Our Solutions", path: "/solutions" },
    { text: "Case Studies", path: "/case-studies" },
    { text: "Insights", path: "/insights" },
    { text: "Contact Us", path: "/contact-us" },
  ];
  const navImgs: string[] = [
    imgIndustry,
    imgIndustry1,
    imgIndustry2,
    imgIndustry3,
    imgIndustry4,
    imgIndustry5,
  ];

  // eslint-disable-next-line react-hooks/purity
  const selectedImg = navImgs[Math.floor(Math.random() * navImgs.length)];
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#fefaf4] content-stretch flex items-start size-full overflow-hidden"
          data-name="Navbar"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "tween", duration: 0.7, ease: "easeInOut" }}
        >
          <div
            className="basis-0 grow h-full  relative shrink-0 bg-[#fefaf4]"
            data-name="Container"
          >
            <div className="size-full">
              <div className="content-stretch flex flex-col items-start justify-start gap-[60px] px-[20px] md:px-[120px] py-[40px] md:py-[90px] relative size-full">
                <CloseMenu onClose={onClose} />
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                  data-name="Menu"
                >
                  <div
                    className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
                    data-name="Menu Links"
                  >
                    {links.map((link) => (
                      <MenuLinkWrapper key={link.text}>
                        <RouterLink
                          to={link.path}
                          onClick={onClose}
                          className="block w-full no-underline"
                          resetScroll={true}
                        >
                          <PageLink text={link.text} />
                        </RouterLink>
                      </MenuLinkWrapper>
                    ))}
                  </div>
                </div>
                <Button />
              </div>
            </div>
          </div>
          <div
            className="basis-0 grow h-full  relative shrink-0 hidden md:block"
            data-name="Container"
          >
            <div className="relative inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="max-w-full top-0 w-full object-cover"
                src={selectedImg}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
