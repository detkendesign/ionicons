import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PlaySkipBackOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M400 111v290c0 17.44-17 28.52-31 20.16L121.09 272.79c-12.12-7.25-12.12-26.33 0-33.58L369 90.84c14-8.36 31 2.72 31 20.16z"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <path
          d="M112 80v352"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

PlaySkipBackOutline.displayName = "PlaySkipBackOutline";
