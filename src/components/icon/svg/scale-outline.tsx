import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ScaleOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          height="416"
          width="416"
          fill="none"
          rx="96"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="48"
          y="48"
        />
        <path
          d="M388.94 151.56c-24.46-22.28-68.72-51.4-132.94-51.4s-108.48 29.12-132.94 51.4a34.66 34.66 0 00-3.06 48.08l33.32 39.21a26.07 26.07 0 0033.6 5.21c15.92-9.83 40.91-21.64 69.1-21.64s53.18 11.81 69.1 21.64a26.07 26.07 0 0033.6-5.21L392 199.64a34.66 34.66 0 00-3.06-48.08z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

ScaleOutline.displayName = "ScaleOutline";
