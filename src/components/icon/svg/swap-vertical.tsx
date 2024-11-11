import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const SwapVertical = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M464 208L352 96 240 208M352 113.13V416M48 304l112 112 112-112M160 398V96"
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

SwapVertical.displayName = "SwapVertical";
