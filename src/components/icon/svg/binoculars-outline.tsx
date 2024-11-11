import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const BinocularsOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
  ({ width, size, height, ...props }, ref) => {
    return (
      <svg
        fill="none"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        width={width ?? size}
        height={height ?? size}
        ref={ref}
        {...props}
      >
        <circle
          cx="392"
          cy="344"
          r="88"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <circle
          cx="120"
          cy="344"
          r="88"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M208 344V128c0-26.5-16-48-44-48-35 0-46.5 21.5-57 48 0 0-48.5 127.833-71 189.5M208 184s16.5-8 48-8 48 8 48 8M208 272s16.5-8 48-8 48 8 48 8M304 344V128c0-26.5 16-48 44-48 35 0 46.5 21.5 57 48 0 0 48.5 127.833 71 189.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

BinocularsOutline.displayName = "BinocularsOutline";
