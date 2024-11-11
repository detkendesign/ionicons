import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const CashOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          height="256"
          width="448"
          fill="none"
          rx="16"
          ry="16"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          transform="rotate(180 256 208)"
          x="32"
          y="80"
        />
        <path
          d="M64 384h384M96 432h320"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M480 160a80 80 0 01-80-80M32 160a80 80 0 0080-80M480 256a80 80 0 00-80 80M32 256a80 80 0 0180 80"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <circle
          cx="256"
          cy="208"
          fill="none"
          r="80"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

CashOutline.displayName = "CashOutline";
