import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const CalculatorOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          width="288"
          fill="none"
          rx="32"
          ry="32"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="112"
          y="48"
        />
        <rect height="128" width="48" rx="24" ry="24" x="320" y="304" />
        <path
          d="M160.01 112H352v64H160.01z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <circle cx="168" cy="248" r="24" />
        <circle cx="256" cy="248" r="24" />
        <circle cx="344" cy="248" r="24" />
        <circle cx="168" cy="328" r="24" />
        <circle cx="256" cy="328" r="24" />
        <circle cx="168" cy="408" r="24" />
        <circle cx="256" cy="408" r="24" />
      </svg>
    );
  },
);

CalculatorOutline.displayName = "CalculatorOutline";
