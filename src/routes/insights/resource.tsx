import React, { useState, Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { imgSolution1 } from "@/assets/images";
import { DownloadIcon, InsightsSection } from "@/components/shared/blocks";

export const Route = createFileRoute("/insights/resource")({
  component: RouteComponent,
});

export function RouteComponent() {
  return (
    <Fragment>
      <section className="relative w-full">
        <div className="container py-[45px]">
          {/* Header Section */}
          <div
            className="flex flex-col gap-[32px] md:gap-[64px] pt-[60px] md:pt-[90px]
          "
          >
            <Title />
            <HeroImage />
          </div>

          {/* Content Section */}
          <div className="border-t border-[rgba(7,74,40,0.4)] mt-[32px] md:mt-[64px] pt-12">
            <div className="flex flex-col lg:flex-row gap-[40px] md:gap-[64px] items-start">
              <WhatYouLearn />
              <ResourceForm />
            </div>
          </div>
        </div>
      </section>
      <InsightsSection />
    </Fragment>
  );
}

function Label() {
  return (
    <div
      className="bg-[rgba(209,159,67,0.2)] inline-flex items-center justify-center px-[16px] py-[6px]"
      data-name="Label"
    >
      <p
        className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal 
      leading-[normal] text-[#1b1b1b] text-[9px] tracking-[1.08px] uppercase"
      >
        Implementation Guide
      </p>
    </div>
  );
}

function Title() {
  return (
    <div
      className="flex flex-col gap-[8px] items-center w-full px-4 md:px-0"
      data-name="Title"
    >
      <Label />
      <h1
        className="capitalize font-neue-montreal leading-[1.2] 
      not-italic text-[#074a28] text-[32px] md:text-[48px] lg:text-[56px] text-center w-full max-w-[866px]"
      >
        <span className="text-[#1b1b1b]">{`Download `}</span>
        <span className="text-[#0c6639]">The ETRM Evaluation Framework</span>
        <span className="text-[#1b1b1b]">{` Implementation Guide`}</span>
      </h1>
      <p className="font-neue-montreal leading-[1.5] not-italic text-[#444] text-[14px] md:text-[16px] text-center w-full max-w-[1012px]">
        Complete the brief form to download this essential guide. It provides a
        proven, step-by-step methodology to evaluate, select, and plan the
        implementation of an ETRM/CTRM system, specifically tailored for the
        African energy and commodity trading landscape.
      </p>
    </div>
  );
}

function HeroImage() {
  return (
    <div
      className="h-[200px] md:h-[300px] lg:h-[363px] relative w-full overflow-hidden rounded-[8px] md:rounded-none"
      data-name="Image"
    >
      <img
        alt="Professional in trading office"
        className="absolute h-full w-full object-cover object-center"
        src={imgSolution1}
      />
    </div>
  );
}

function WhatYouLearn() {
  return (
    <div
      className="bg-[#f4fbf7] w-full lg:flex-1 rounded-[8px] p-[20px] md:p-[24px]"
      data-name="Content"
    >
      <div className="flex flex-col gap-[16px]">
        <h2
          className="font-neue-montreal leading-[1.2]
         text-[#074a28] text-[24px] md:text-[32px]"
        >
          What You'll Learn
        </h2>
        <div className="font-neue-montreal text-[#444] text-[14px] md:text-[16px] leading-[1.5]">
          <ul className="list-disc ms-[24px] space-y-4">
            <li>
              <span>
                Define Clear Business Requirements: A structured process to
                translate operational pain points into specific technical and
                functional criteria for your new platform.
              </span>
            </li>
            <li>
              <span>
                Conduct a Vendor & Platform Evaluation: A weighted scoring
                framework to objectively compare leading solutions (including
                ION, OpenLink, and others) against your unique needs.
              </span>
            </li>
            <li>
              <span>
                Build a Phased Implementation Roadmap: Learn how to structure a
                low-risk rollout with clear milestones, from data migration and
                configuration to user training and go-live.
              </span>
            </li>
            <li>
              <span>
                Calculate Total Cost of Ownership (TCO): A model to project not
                just software costs, but expenses for implementation,
                integration, support, and internal resource allocation.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ResourceForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    company: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // In a real app, this would trigger a download or API call
  };

  return (
    <div className="w-full lg:flex-1">
      <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
        {/* First and Last Name Row */}
        <div className="flex flex-col md:flex-row gap-[16px] md:gap-[24px]">
          <div className="flex-1 flex flex-col gap-[12px]">
            <label className="capitalize font-neue-montreal leading-[normal] not-italic text-[#2b2b2b] text-[16px]">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border border-[rgba(68,68,68,0.6)] rounded-[4px] px-[24px] 
              py-[16px] w-full font-neue-montreal text-[16px] focus:outline-none 
              focus:border-[#0c6639] transition-colors"
            />
          </div>
          <div className="flex-1 flex flex-col gap-[12px]">
            <label className="capitalize font-neue-montreal leading-[normal] not-italic text-[#2b2b2b] text-[16px]">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border border-[rgba(68,68,68,0.6)] rounded-[4px] 
              px-[24px] py-[16px] w-full font-neue-montreal text-[16px] focus:outline-none 
              focus:border-[#0c6639] transition-colors"
            />
          </div>
        </div>

        {/* Role/Position and Company Row */}
        <div className="flex flex-col md:flex-row gap-[16px] md:gap-[24px]">
          <div className="flex-1 flex flex-col gap-[12px]">
            <label className="capitalize font-neue-montreal leading-[normal] not-italic text-[#2b2b2b] text-[16px]">
              Role/Position
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="border border-[rgba(68,68,68,0.6)] rounded-[4px] 
              px-[24px] py-[16px] w-full font-neue-montreal text-[16px] focus:outline-none
               focus:border-[#0c6639] transition-colors"
            />
          </div>
          <div className="flex-1 flex flex-col gap-[12px]">
            <label className="capitalize font-neue-montreal leading-[normal] not-italic text-[#2b2b2b] text-[16px]">
              Company/Organization
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="border border-[rgba(68,68,68,0.6)] rounded-[4px] px-[24px] 
              py-[16px] w-full font-neue-montreal text-[16px] focus:outline-none 
              focus:border-[#0c6639] transition-colors"
            />
          </div>
        </div>

        {/* Work Email */}
        <div className="flex flex-col gap-[12px]">
          <label className="capitalize font-neue-montreal leading-[normal] not-italic text-[#2b2b2b] text-[16px]">
            Work email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-[rgba(68,68,68,0.6)] rounded-[4px] px-[24px] 
            py-[16px] w-full font-neue-montreal text-[16px] focus:outline-none 
            focus:border-[#0c6639] transition-colors"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-[12px]">
          <label className="capitalize font-neue-montreal leading-[normal] not-italic text-[#2b2b2b] text-[16px]">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border border-[rgba(68,68,68,0.6)] rounded-[4px] px-[24px] py-[16px] 
            w-full font-neue-montreal text-[16px] 
            focus:outline-none focus:border-[#0c6639] transition-colors"
          />
        </div>

        {/* Submit Button and Privacy Notice */}
        <div className="flex flex-col gap-[12px]">
          <button
            type="submit"
            className="bg-[#0c6639] hover:bg-[#0c6639]/90 transition-colors w-full px-[24px] 
            py-[16px] flex items-center justify-center gap-[8px]"
          >
            <span className="font-neue-montreal leading-[normal] not-italic text-[14px] text-white tracking-[1.96px] uppercase">
              Download
            </span>
            <span className="size-[18px]">
              <DownloadIcon />
            </span>
          </button>
          <p className="font-neue-montreal leading-[1.5] not-italic text-[#444] text-[12px]">
            Your information is confidential and secure. By downloading, you
            agree to receive relevant insights from Nexurion. You can
            unsubscribe at any time.
          </p>
        </div>
      </form>
    </div>
  );
}
