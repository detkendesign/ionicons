import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const JournalOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          width="320"
          fill="none"
          rx="48"
          ry="48"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="96"
          y="48"
        />
        <path
          d="M320 48v416"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="60"
        />
      </svg>
    );
  },
);

JournalOutline.displayName = "JournalOutline";
