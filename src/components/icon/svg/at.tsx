import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const At = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M320 254.27c-4.5 51-40.12 80-80.55 80s-67.34-35.82-63.45-80 37.12-80 77.55-80 70.33 36 66.45 80z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M319.77 415.77c-28.56 12-47.28 14.5-79.28 14.5-97.2 0-169-78.8-160.49-176s94.31-176 191.51-176C381 78.27 441.19 150 432.73 246c-6.31 71.67-52.11 92.32-76.09 88.07-22.56-4-41.18-24.42-37.74-63.5l8.48-96.25"
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

At.displayName = "At";
