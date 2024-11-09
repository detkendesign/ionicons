import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ArrowUpLeftBoxOutline = forwardRef<
  SVGSVGElement,
  DefaultIconProps
>(({ width, size, height, ...props }, ref) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? size}
      height={height ?? size}
      ref={ref}
      {...props}
    >
      <path
        d="M242.764 123.636h178.691A42.547 42.547 0 01464 166.182v255.273A42.546 42.546 0 01421.455 464H166.182a42.542 42.542 0 01-42.546-42.545V242.764M180.364 48H48v132.364M296 296L48 48"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
});

ArrowUpLeftBoxOutline.displayName = "ArrowUpLeftBoxOutline";
