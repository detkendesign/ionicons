import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const TrendingUpSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M352 144h112v112"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <path
          d="M48 368l144-144 96 96 160-160"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

TrendingUpSharp.displayName = "TrendingUpSharp";
