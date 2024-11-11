import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const BriefcaseOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          height="320"
          width="448"
          fill="none"
          rx="48"
          ry="48"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="32"
          y="128"
        />
        <path
          d="M144 128V96a32 32 0 0132-32h160a32 32 0 0132 32v32M480 240H32M320 240v24a8 8 0 01-8 8H200a8 8 0 01-8-8v-24"
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

BriefcaseOutline.displayName = "BriefcaseOutline";
