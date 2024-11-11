import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const SubwayOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          height="352"
          width="288"
          fill="none"
          rx="48"
          ry="48"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
          x="112"
          y="32"
        />
        <rect
          height="96"
          width="288"
          fill="none"
          rx="32"
          ry="32"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="112"
          y="128"
        />
        <path
          d="M208 80h96"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M144 464h224M336 432l48 48M176 432l-48 48"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <circle
          cx="176"
          cy="320"
          fill="none"
          r="16"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <circle
          cx="336"
          cy="320"
          fill="none"
          r="16"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

SubwayOutline.displayName = "SubwayOutline";
