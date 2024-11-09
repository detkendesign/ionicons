import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const StatsChartOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          height="160"
          width="48"
          fill="none"
          rx="8"
          ry="8"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="64"
          y="320"
        />
        <rect
          height="256"
          width="48"
          fill="none"
          rx="8"
          ry="8"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="288"
          y="224"
        />
        <rect
          height="368"
          width="48"
          fill="none"
          rx="8"
          ry="8"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="400"
          y="112"
        />
        <rect
          height="448"
          width="48"
          fill="none"
          rx="8"
          ry="8"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="176"
          y="32"
        />
      </svg>
    );
  },
);

StatsChartOutline.displayName = "StatsChartOutline";
