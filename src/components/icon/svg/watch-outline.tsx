import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const WatchOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          width="288"
          fill="none"
          rx="64"
          ry="64"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="112"
          y="112"
        />
        <path
          d="M176 112V40a8 8 0 018-8h144a8 8 0 018 8v72M336 400v72a8 8 0 01-8 8H184a8 8 0 01-8-8v-72"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

WatchOutline.displayName = "WatchOutline";
