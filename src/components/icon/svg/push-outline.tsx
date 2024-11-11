import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PushOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M336 336h40a40 40 0 0040-40V88a40 40 0 00-40-40H136a40 40 0 00-40 40v208a40 40 0 0040 40h40"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M176 240l80-80 80 80M256 464V176"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

PushOutline.displayName = "PushOutline";
