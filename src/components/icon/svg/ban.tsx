import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const Ban = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <circle
          cx="256"
          cy="256"
          fill="none"
          r="200"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="48"
        />
        <path
          d="M114.58 114.58l282.84 282.84"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="48"
        />
      </svg>
    );
  },
);

Ban.displayName = "Ban";
