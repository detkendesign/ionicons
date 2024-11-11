import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const DiscOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          r="208"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <circle
          cx="256"
          cy="256"
          fill="none"
          r="96"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <circle cx="256" cy="256" r="32" />
      </svg>
    );
  },
);

DiscOutline.displayName = "DiscOutline";
