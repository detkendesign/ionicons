import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const StopOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          width="320"
          fill="none"
          rx="24"
          ry="24"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="96"
          y="96"
        />
      </svg>
    );
  },
);

StopOutline.displayName = "StopOutline";
