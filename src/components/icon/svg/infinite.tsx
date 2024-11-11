import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const Infinite = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c30 0 56.45-13.18 78-32M256 256s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-29.37 0-56.66 13.75-78 32"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="48"
        />
      </svg>
    );
  },
);

Infinite.displayName = "Infinite";
