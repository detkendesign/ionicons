import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const TodayOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          height="384"
          width="416"
          fill="none"
          rx="48"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="48"
          y="80"
        />
        <rect
          height="96"
          width="96"
          fill="none"
          rx="13"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="112"
          y="224"
        />
        <path
          d="M128 48v32M384 48v32"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M464 160H48"
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

TodayOutline.displayName = "TodayOutline";
