import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const BusOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          height="192"
          width="352"
          fill="none"
          rx="32"
          ry="32"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="80"
          y="112"
        />
        <rect
          height="128"
          width="352"
          fill="none"
          rx="32"
          ry="32"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="80"
          y="304"
        />
        <path
          d="M400 112H112a32.09 32.09 0 01-32-32h0a32.09 32.09 0 0132-32h288a32.09 32.09 0 0132 32h0a32.09 32.09 0 01-32 32zM144 432v22a10 10 0 01-10 10h-28a10 10 0 01-10-10v-22zM416 432v22a10 10 0 01-10 10h-28a10 10 0 01-10-10v-22z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M256 112v192M80 80v288M432 80v288"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <circle
          cx="368"
          cy="368"
          fill="none"
          r="16"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <circle
          cx="144"
          cy="368"
          fill="none"
          r="16"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

BusOutline.displayName = "BusOutline";
