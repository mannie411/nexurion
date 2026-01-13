import { Fragment } from "react";
import { Link, useRouter, useLinkProps } from "@tanstack/react-router";

import { cn } from "@/components/ui/utils";
import { DownloadIcon } from "./Icons";

interface ButtonProps {
  bgColor?: string;
  classNames?: string;
  label: string;
  textColor?: string;
  variant?: "default" | "link";
  path?: string;
  type?: "button" | "submit";
}

const Button = () => {
  return <div>Button</div>;
};

const Label = ({ text }: { text: string }) => (
  <p
    className={cn(
      `font-medium leading-[normal] not-italic relative  text-[12px] text-center
     text-[var(--text-color)] tracking-[0.6px] uppercase`
    )}
  >
    {text}
  </p>
);

export function FilledButton({
  label,
  textColor = "#FFFFFF",
  bgColor = "#0c6639",
  path,
  variant = "default",
  type = "button",
}: ButtonProps) {
  const router = useRouter();
  const classNames = cn(
    `relative inline-block flex items-center justify-center px-[24px] 
    py-[16px] cursor-pointer  transition-colors`,
    `bg-[var(--bg-color)] hover:bg-[var(--bg-color)]/80 text-base`
  );
  return (
    <Fragment>
      {variant === "default" && (
        <button
          className={classNames}
          data-name="Button"
          style={{
            "--text-color": textColor,
            "--bg-color": bgColor,
          }}
          type={type}
          onClick={() => {
            if (type === "button") {
              router.push(path);
            }
          }}
        >
          <Label text={label} />
        </button>
      )}
      {variant === "link" && (
        <Link
          to={path}
          className={classNames}
          style={{
            "--text-color": textColor,
            "--bg-color": bgColor,
          }}
        >
          <Label text={label} />
        </Link>
      )}
    </Fragment>
  );
}

export function OutlinedButton({
  label,
  bgColor = "#FFFFFF",
  path,
  textColor = "#FFFFFF",
  variant = "default",
  type = "button",
}: ButtonProps) {
  const router = useRouter();
  const classNames = cn(
    `relative inline-block cursor-pointer border border-solid inset-0 
    cursor-pointer  transition-colors px-[24px] py-[16px]`,
    `border-[var(--bg-color)] hover:bg-[var(--bg-color)]/10`
  );
  return (
    <Fragment>
      {variant === "default" && (
        <button
          className={classNames}
          data-name="Button"
          aria-hidden="true"
          type={type}
          style={{
            "--bg-color": bgColor,
            "--text-color": textColor,
          }}
          onClick={() => {
            if (type === "button") {
              router.push(path);
            }
          }}
        >
          <Label text={label} />
        </button>
      )}

      {variant === "link" && (
        <Link
          to={path}
          className={classNames}
          style={{
            "--bg-color": bgColor,
            "--text-color": textColor,
          }}
        >
          <Label text={label} />
        </Link>
      )}
    </Fragment>
  );
}

// Assuming you have a route defined for the resource, e.g., '/resources/$resourceId'
export function DownloadButton({
  className = "items-center justify-center",
  fileName = "Download",
  link = "",
}: {
  className?: string;
  link?: string;
  fileName?: string;
}) {
  const { href } = useLinkProps({
    to: "/resources/$resourceId",
    params: { link },
  });

  return (
    // Pass the generated href to a standard <a> tag
    <a
      href={href}
      download={fileName}
      className={cn(
        "content-stretch flex gap-[8px]  relative w-full",
        className
      )}
      data-name="Button-Content"
    >
      <p className="font-neue-montreal leading-[normal] not-italic relative shrink-0 text-[#0c6639] text-[14px]  tracking-[1.96px] uppercase">
        Download
      </p>
      <div className="relative shrink-0 size-[18px]" data-name="download-06">
        <DownloadIcon />
      </div>
    </a>
  );
}

export default Button;
