import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ContrastOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path d="M256 464c-114.88 0-208-93.12-208-208S141.12 48 256 48z" />
      </svg>
    );
  },
);

ContrastOutline.displayName = "ContrastOutline";
