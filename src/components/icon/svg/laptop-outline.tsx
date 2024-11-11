import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const LaptopOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          height="304"
          width="416"
          fill="none"
          rx="32.14"
          ry="32.14"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="48"
          y="96"
        />
        <path
          d="M16 416h480"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

LaptopOutline.displayName = "LaptopOutline";
