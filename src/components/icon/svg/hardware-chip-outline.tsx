import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const HardwareChipOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          height="352"
          width="352"
          fill="none"
          rx="48"
          ry="48"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="80"
          y="80"
        />
        <rect
          height="224"
          width="224"
          fill="none"
          rx="16"
          ry="16"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="144"
          y="144"
        />
        <path
          d="M256 80V48M336 80V48M176 80V48M256 464v-32M336 464v-32M176 464v-32M432 256h32M432 336h32M432 176h32M48 256h32M48 336h32M48 176h32"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

HardwareChipOutline.displayName = "HardwareChipOutline";
