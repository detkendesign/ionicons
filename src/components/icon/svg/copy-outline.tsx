import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const CopyOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <rect
          height="336"
          width="336"
          fill="none"
          rx="57"
          ry="57"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="128"
          y="128"
        />
        <path
          d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24"
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

CopyOutline.displayName = "CopyOutline";
