import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ChevronExpand = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M136 208l120-104 120 104M136 304l120 104 120-104"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
        />
      </svg>
    );
  },
);

ChevronExpand.displayName = "ChevronExpand";
