import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const EaselOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          height="272"
          width="416"
          fill="none"
          rx="32"
          ry="32"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="48"
          y="80"
        />
        <path
          d="M256 416v-64M256 80V48M400 464l-32-112M112 464l32-112"
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

EaselOutline.displayName = "EaselOutline";
