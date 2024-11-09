import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const BandageOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <rect
          height="176.25"
          width="560.87"
          fill="none"
          rx="88.12"
          ry="88.12"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          transform="rotate(-45 256 256.002)"
          x="-24.43"
          y="167.88"
        />
        <rect
          height="196"
          width="176"
          fill="none"
          rx="32"
          ry="32"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          transform="rotate(45 257.409 254.582)"
          x="169.41"
          y="156.59"
        />
        <circle cx="256" cy="208" r="16" />
        <circle cx="304" cy="256" r="16" />
        <circle cx="208" cy="256" r="16" />
        <circle cx="256" cy="304" r="16" />
      </svg>
    );
  },
);

BandageOutline.displayName = "BandageOutline";
