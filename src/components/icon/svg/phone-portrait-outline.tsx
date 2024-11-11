import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PhonePortraitOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          height="480"
          width="256"
          fill="none"
          rx="48"
          ry="48"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="128"
          y="16"
        />
        <path
          d="M176 16h24a8 8 0 018 8h0a16 16 0 0016 16h64a16 16 0 0016-16h0a8 8 0 018-8h24"
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

PhonePortraitOutline.displayName = "PhonePortraitOutline";
