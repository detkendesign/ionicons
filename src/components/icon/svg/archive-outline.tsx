import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ArchiveOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
  ({ width, size, height, ...props }, ref) => {
    return (
      <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        width={width ?? size}
        height={height ?? size}
        ref={ref}
        {...props}
      >
        <path
          d="M80 152v256a40.12 40.12 0 0040 40h272a40.12 40.12 0 0040-40V152"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M320 304l-64 64-64-64M256 345.89V224"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <rect
          height="80"
          width="416"
          fill="none"
          rx="28"
          ry="28"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="48"
          y="64"
        />
      </svg>
    );
  },
);

ArchiveOutline.displayName = "ArchiveOutline";
