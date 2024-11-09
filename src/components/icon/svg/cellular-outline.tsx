import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const CellularOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          width="64"
          fill="none"
          rx="8"
          ry="8"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="416"
          y="96"
        />
        <rect
          height="240"
          width="64"
          fill="none"
          rx="8"
          ry="8"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="288"
          y="176"
        />
        <rect
          height="176"
          width="64"
          fill="none"
          rx="8"
          ry="8"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="160"
          y="240"
        />
        <rect
          height="112"
          width="64"
          fill="none"
          rx="8"
          ry="8"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="32"
          y="304"
        />
      </svg>
    );
  },
);

CellularOutline.displayName = "CellularOutline";
