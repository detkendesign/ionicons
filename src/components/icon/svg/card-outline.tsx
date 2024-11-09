import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const CardOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          width="416"
          fill="none"
          rx="56"
          ry="56"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="48"
          y="96"
        />
        <path
          d="M48 192h416M128 300h48v20h-48z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="60"
        />
      </svg>
    );
  },
);

CardOutline.displayName = "CardOutline";
