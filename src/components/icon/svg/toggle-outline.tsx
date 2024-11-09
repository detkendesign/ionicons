import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ToggleOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <circle
          cx="368"
          cy="256"
          fill="none"
          r="128"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <rect
          height="256"
          width="480"
          fill="none"
          rx="128"
          ry="128"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="16"
          y="128"
        />
      </svg>
    );
  },
);

ToggleOutline.displayName = "ToggleOutline";
