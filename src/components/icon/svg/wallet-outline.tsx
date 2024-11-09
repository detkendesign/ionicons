import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const WalletOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          height="288"
          width="416"
          fill="none"
          rx="48"
          ry="48"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="48"
          y="144"
        />
        <path
          d="M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z" />
      </svg>
    );
  },
);

WalletOutline.displayName = "WalletOutline";
