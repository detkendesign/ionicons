import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const MaleFemaleOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          cx="216"
          cy="200"
          fill="none"
          r="136"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M216 352v128M272 416H160M432 112V32h-80M335.28 128.72L432 32"
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

MaleFemaleOutline.displayName = "MaleFemaleOutline";
