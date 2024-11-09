import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PhoneLandscapeOutline = forwardRef<
  SVGSVGElement,
  DefaultIconProps
>(({ width, size, height, ...props }, ref) => {
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
        height="480"
        width="256"
        fill="none"
        rx="48"
        ry="48"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        transform="rotate(-90 256 256)"
        x="128"
        y="16"
      />
      <path
        d="M16 336v-24a8 8 0 018-8h0a16 16 0 0016-16v-64a16 16 0 00-16-16h0a8 8 0 01-8-8v-24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
});

PhoneLandscapeOutline.displayName = "PhoneLandscapeOutline";
