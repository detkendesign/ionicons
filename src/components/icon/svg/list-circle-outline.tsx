import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ListCircleOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M224 184h128M224 256h128M224 327h128"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M448 258c0-106-86-192-192-192S64 152 64 258s86 192 192 192 192-86 192-192z"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <circle
          cx="168"
          cy="184"
          fill="none"
          r="8"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <circle
          cx="168"
          cy="257"
          fill="none"
          r="8"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <circle
          cx="168"
          cy="328"
          fill="none"
          r="8"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

ListCircleOutline.displayName = "ListCircleOutline";
