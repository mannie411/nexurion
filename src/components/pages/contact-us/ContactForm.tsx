import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import svgPaths from "@/assets/svg-paths";
import { imgPlaceholder } from "@/assets/images";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  company: string;
  message: string;
}

function InputField({
  label,
  value,
  onChange,
  placeholder = "",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start  relative shrink-0"
      data-name="Input Field"
    >
      <label className="capitalize font-neue-montreal leading-[normal] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] w-full">
        {label}
      </label>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <div
          className="relative rounded-[4px] shrink-0 w-full"
          data-name="Field"
        >
          <div
            aria-hidden="true"
            className="absolute border border-[rgba(68,68,68,0.6)] border-solid inset-0 pointer-events-none rounded-[4px]"
          />
          <div className="flex flex-row items-center size-full">
            <input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              className="content-stretch flex items-center px-[24px] py-[16px] w-full bg-transparent outline-none font-neue-montreal text-[16px] text-[#2b2b2b]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  placeholder = "",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] h-[281px] items-start relative shrink-0 w-full"
      data-name="Input Field"
    >
      <label className="capitalize font-neue-montreal leading-[normal] not-italic relative shrink-0 text-[#2b2b2b] text-[16px] w-full">
        {label}
      </label>
      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start  relative shrink-0 w-full">
        <div
          className="basis-0 grow  relative rounded-[4px] shrink-0 w-full"
          data-name="Field"
        >
          <div
            aria-hidden="true"
            className="absolute border border-[rgba(68,68,68,0.6)] border-solid inset-0 pointer-events-none rounded-[4px]"
          />
          <div className="size-full">
            <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              className="content-stretch flex items-start px-[24px] py-[16px] size-full bg-transparent outline-none resize-none font-neue-montreal text-[16px] text-[#2b2b2b]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="mail-01">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="mail-01">
          <path
            d={svgPaths.p3ae5cc00}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinejoin="round"
            strokeWidth="1.125"
          />
          <path
            d={svgPaths.p3e25a540}
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinejoin="round"
            strokeWidth="1.125"
          />
        </g>
      </svg>
    </div>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          role: "",
          company: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section className="relative bg-white">
      <div
        className="content-stretch flex flex-col items-center overflow-clip pb-[80px] 
        md:pb-[120px] pt-[60px] md:pt-[90px] px-[20px] md:px-[120px] 
        relative shrink-0 w-full max-w-[1440px] mx-auto"
        data-name="Contact Section"
      >
        <div
          className="content-stretch flex flex-col gap-[72px] items-center justify-center relative shrink-0 w-full"
          data-name="Container"
        >
          {/* Title */}
          <motion.div
            className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 max-w-full"
            data-name="Title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
              <p
                className="capitalize font-neue-montreal font-medium leading-[normal] 
              not-italic relative shrink-0 text-[48px] md:text-[64px] text-black text-center w-full"
              >
                <span>{`Get in `}</span>
                <span className="font-test-tiempos-fine italic text-[#0c6639]">
                  Touch
                </span>
              </p>
            </div>
            <p className="font-neue-montreal leading-[1.5] not-italic relative shrink-0 text-[#444] text-[16px] text-center max-w-[665px] px-4">
              <span>{`For enquiries or `}</span>to become a partner
              <span>{`, fill out the form or send us a message at `}</span>
              <span className="font-neue-montreal text-[#0c6639]">
                enquires@nexurionlimited.com
              </span>
              <span>{` and our team will respond to you promptly.`}</span>
            </p>
          </motion.div>

          {/* Image + Form */}
          <div
            className="content-stretch flex flex-col lg:flex-row gap-[40px] md:gap-[64px] items-start relative shrink-0 w-full"
            data-name="Image + Form"
          >
            {/* Image */}
            <motion.div
              className="relative self-stretch shrink-0 w-full lg:w-[495px] min-h-[300px] md:min-h-[400px]"
              data-name="Image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                src={imgPlaceholder}
              />
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full lg:w-[641px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
                data-name="Form"
              >
                {/* Row 1: First Name + Last Name */}
                <div
                  className="content-stretch flex flex-col md:flex-row gap-[16px] md:gap-[24px] items-center relative shrink-0 w-full"
                  data-name="Row"
                >
                  <InputField
                    label="First name"
                    value={formData.firstName}
                    onChange={(value) =>
                      setFormData({ ...formData, firstName: value })
                    }
                  />
                  <InputField
                    label="Last name"
                    value={formData.lastName}
                    onChange={(value) =>
                      setFormData({ ...formData, lastName: value })
                    }
                  />
                </div>

                {/* Row 2: Email + Phone */}
                <div
                  className="content-stretch flex flex-col md:flex-row gap-[16px] md:gap-[24px] items-center relative shrink-0 w-full"
                  data-name="Row"
                >
                  <InputField
                    label="Email Address"
                    value={formData.email}
                    onChange={(value) =>
                      setFormData({ ...formData, email: value })
                    }
                  />
                  <InputField
                    label="Phone number"
                    value={formData.phone}
                    onChange={(value) =>
                      setFormData({ ...formData, phone: value })
                    }
                  />
                </div>

                {/* Row 3: Role + Company */}
                <div
                  className="content-stretch flex flex-col md:flex-row gap-[16px] md:gap-[24px] items-center relative shrink-0 w-full"
                  data-name="Row"
                >
                  <InputField
                    label="Role/Position"
                    value={formData.role}
                    onChange={(value) =>
                      setFormData({ ...formData, role: value })
                    }
                  />
                  <InputField
                    label="Company/Organization"
                    value={formData.company}
                    onChange={(value) =>
                      setFormData({ ...formData, company: value })
                    }
                  />
                </div>

                {/* Message */}
                <TextAreaField
                  label="Message"
                  value={formData.message}
                  onChange={(value) =>
                    setFormData({ ...formData, message: value })
                  }
                />
              </div>

              <motion.div
                className="w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className={`${submitted ? "bg-[#0c6639]" : "bg-[#0c6639] hover:bg-[#084a29]"} relative shrink-0 w-full transition-colors cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed`}
                  data-name="Button"
                >
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative w-full">
                      <div
                        className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
                        data-name="Button"
                      >
                        {isSubmitting ? (
                          <p className="font-neue-montreal leading-[normal] not-italic relative shrink-0 text-[14px]  text-white tracking-[1.96px] uppercase">
                            sending...
                          </p>
                        ) : submitted ? (
                          <p className="font-neue-montreal leading-[normal] not-italic relative shrink-0 text-[14px]  text-white tracking-[1.96px] uppercase">
                            message sent!
                          </p>
                        ) : (
                          <>
                            <p className="font-neue-montreal leading-[normal] not-italic relative shrink-0 text-[14px]  text-white tracking-[1.96px] uppercase">
                              send a message
                            </p>
                            <Mail />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
