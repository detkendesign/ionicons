import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PrintOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <rect
          height="208"
          width="256"
          fill="none"
          rx="24.32"
          ry="24.32"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="128"
          y="240"
        />
        <circle cx="392" cy="184" r="24" />
      </svg>
    );
  },
);

PrintOutline.displayName = "PrintOutline";
