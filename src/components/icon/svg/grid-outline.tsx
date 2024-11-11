import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const GridOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          height="176"
          width="176"
          fill="none"
          rx="20"
          ry="20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="48"
          y="48"
        />
        <rect
          height="176"
          width="176"
          fill="none"
          rx="20"
          ry="20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="288"
          y="48"
        />
        <rect
          height="176"
          width="176"
          fill="none"
          rx="20"
          ry="20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="48"
          y="288"
        />
        <rect
          height="176"
          width="176"
          fill="none"
          rx="20"
          ry="20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="288"
          y="288"
        />
      </svg>
    );
  },
);

GridOutline.displayName = "GridOutline";
