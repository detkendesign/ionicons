import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const BarbellOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M48 256h416"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <rect
          height="256"
          width="32"
          fill="none"
          rx="16"
          ry="16"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="384"
          y="128"
        />
        <rect
          height="256"
          width="32"
          fill="none"
          rx="16"
          ry="16"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="96"
          y="128"
        />
        <rect
          height="128"
          width="16"
          fill="none"
          rx="8"
          ry="8"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="32"
          y="192"
        />
        <rect
          height="128"
          width="16"
          fill="none"
          rx="8"
          ry="8"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="464"
          y="192"
        />
      </svg>
    );
  },
);

BarbellOutline.displayName = "BarbellOutline";
