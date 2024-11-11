import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PlanetOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M413.48 284.46c58.87 47.24 91.61 89 80.31 108.55-17.85 30.85-138.78-5.48-270.1-81.15S.37 149.84 18.21 119c11.16-19.28 62.58-12.32 131.64 14.09"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <circle
          cx="256"
          cy="256"
          fill="none"
          r="160"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

PlanetOutline.displayName = "PlanetOutline";
