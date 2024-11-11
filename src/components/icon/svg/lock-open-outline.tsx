import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const LockOpenOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M336 112a80 80 0 00-160 0v96"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <rect
          height="272"
          width="320"
          fill="none"
          rx="48"
          ry="48"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="96"
          y="208"
        />
      </svg>
    );
  },
);

LockOpenOutline.displayName = "LockOpenOutline";
