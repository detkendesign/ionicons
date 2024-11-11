import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const LocateOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M256 96V56M256 456v-40"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
        />
        <path
          d="M256 112a144 144 0 10144 144 144 144 0 00-144-144z"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <path
          d="M416 256h40M56 256h40"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
        />
      </svg>
    );
  },
);

LocateOutline.displayName = "LocateOutline";
