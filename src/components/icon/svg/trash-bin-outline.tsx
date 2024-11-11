import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const TrashBinOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M432 144l-28.67 275.74A32 32 0 01371.55 448H140.46a32 32 0 01-31.78-28.26L80 144"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M312 240L200 352M312 352L200 240"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <rect
          height="80"
          width="448"
          fill="none"
          rx="16"
          ry="16"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="32"
          y="64"
        />
      </svg>
    );
  },
);

TrashBinOutline.displayName = "TrashBinOutline";
