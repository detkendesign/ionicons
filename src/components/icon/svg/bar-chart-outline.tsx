import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const BarChartOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M32 32v432a16 16 0 0016 16h432"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <rect
          height="192"
          width="80"
          fill="none"
          rx="20"
          ry="20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="96"
          y="224"
        />
        <rect
          height="240"
          width="80"
          fill="none"
          rx="20"
          ry="20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="240"
          y="176"
        />
        <rect
          height="304"
          width="80"
          fill="none"
          rx="20"
          ry="20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="383.64"
          y="112"
        />
      </svg>
    );
  },
);

BarChartOutline.displayName = "BarChartOutline";
