import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ColorWandOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          height="378.2"
          width="63.03"
          fill="none"
          rx="31.52"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
          transform="rotate(-45 312.002 311.994)"
          x="280.48"
          y="122.9"
        />
        <path d="M178.38 178.38a31.64 31.64 0 000 44.75L223.25 268 268 223.25l-44.87-44.87a31.64 31.64 0 00-44.75 0z" />
        <path
          d="M48 192h48M90.18 90.18l33.94 33.94M192 48v48M293.82 90.18l-33.94 33.94M124.12 259.88l-33.94 33.94"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

ColorWandOutline.displayName = "ColorWandOutline";
